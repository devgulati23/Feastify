import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { dishName } = await req.json();
    
    if (!dishName) {
      return new Response(
        JSON.stringify({ error: 'Dish name is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log(`Generating recipe for: ${dishName}`);

    // Use Lovable AI to generate recipe data with structured output
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are a culinary expert who provides detailed, authentic recipes with accurate cooking times and nutritional information."
          },
          {
            role: "user",
            content: `Create a detailed recipe for: ${dishName}`
          }
        ],
        tools: [
          {
            type: "function",
            function: {
              name: "create_recipe",
              description: "Generate a complete recipe with all details",
              parameters: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  summary: { type: "string", description: "A 2-3 sentence description of the dish" },
                  cuisines: { 
                    type: "array", 
                    items: { type: "string" },
                    description: "Array of cuisine types (e.g., ['Italian'], ['Thai'], ['Mexican'])"
                  },
                  vegetarian: { type: "boolean" },
                  readyInMinutes: { type: "number" },
                  servings: { type: "number" },
                  ingredients: {
                    type: "array",
                    items: { type: "string" },
                    description: "List of ingredient names only"
                  },
                  extendedIngredients: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        amount: { type: "number" },
                        unit: { type: "string" },
                        original: { type: "string" }
                      }
                    }
                  },
                  instructions: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        number: { type: "number" },
                        step: { type: "string" }
                      }
                    }
                  },
                  nutrition: {
                    type: "object",
                    properties: {
                      calories: { type: "string" },
                      protein: { type: "string" },
                      fat: { type: "string" },
                      carbohydrates: { type: "string" }
                    }
                  }
                },
                required: ["title", "summary", "cuisines", "vegetarian", "readyInMinutes", "servings", "ingredients", "extendedIngredients", "instructions", "nutrition"],
                additionalProperties: false
              }
            }
          }
        ],
        tool_choice: { type: "function", function: { name: "create_recipe" } }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to generate recipe" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiData = await response.json();
    console.log("AI response received");

    const toolCall = aiData.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error("No recipe data generated");
    }

    const recipeData = JSON.parse(toolCall.function.arguments);

    // Search for a real image using web search
    let imageUrl = `https://source.unsplash.com/800x600/?${encodeURIComponent(dishName)},food`;
    
    try {
      const searchResponse = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(dishName + ' food')}&per_page=1&client_id=your_access_key`, {
        method: 'GET'
      });
      
      if (searchResponse.ok) {
        const searchData = await searchResponse.json();
        if (searchData.results?.[0]?.urls?.regular) {
          imageUrl = searchData.results[0].urls.regular;
        }
      }
    } catch (e) {
      console.log("Using fallback image source");
    }

    // Format the recipe to match the existing structure
    const recipe = {
      id: Math.floor(Math.random() * 1000000),
      title: recipeData.title,
      image: imageUrl,
      vegetarian: recipeData.vegetarian,
      readyInMinutes: recipeData.readyInMinutes,
      servings: recipeData.servings,
      cuisines: recipeData.cuisines,
      nutrition: {
        nutrients: [
          { name: "Calories", amount: recipeData.nutrition.calories, unit: "kcal" },
          { name: "Protein", amount: recipeData.nutrition.protein, unit: "g" },
          { name: "Fat", amount: recipeData.nutrition.fat, unit: "g" },
          { name: "Carbohydrates", amount: recipeData.nutrition.carbohydrates, unit: "g" }
        ]
      },
      ingredients: recipeData.ingredients,
      extendedIngredients: recipeData.extendedIngredients.map((ing: any) => ({
        name: ing.name,
        amount: ing.amount,
        unit: ing.unit,
        original: ing.original
      })),
      analyzedInstructions: [
        {
          steps: recipeData.instructions.map((inst: any) => ({
            number: inst.number,
            step: inst.step
          }))
        }
      ],
      summary: recipeData.summary
    };

    console.log(`Recipe generated successfully for: ${dishName}`);

    return new Response(
      JSON.stringify({ recipe }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Error in generate-recipe function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
