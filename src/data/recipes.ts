export const hardcodedRecipes = [
  // Indian Cuisine
  {
    id: 1,
    title: "Butter Chicken",
    image: "/src/assets/butter-chicken.jpg",
    vegetarian: false,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["indian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 420, unit: "kcal" },
        { name: "Protein", amount: 25, unit: "g" }
      ]
    },
    ingredients: ["chicken", "tomato", "cream", "onion", "garlic", "ginger", "spices"],
    extendedIngredients: [
      { id: 1, original: "500g chicken breast, cubed" },
      { id: 2, original: "2 large tomatoes, chopped" },
      { id: 3, original: "200ml heavy cream" },
      { id: 4, original: "1 large onion, diced" },
      { id: 5, original: "3 cloves garlic, minced" },
      { id: 6, original: "1 inch ginger, grated" },
      { id: 7, original: "2 tsp garam masala" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Heat oil in a pan and cook chicken until golden brown." },
        { number: 2, step: "Add onions, garlic, and ginger. Cook until fragrant." },
        { number: 3, step: "Add tomatoes and spices. Cook until sauce thickens." },
        { number: 4, step: "Stir in cream and simmer for 5 minutes. Serve hot." }
      ]
    }],
    summary: "A creamy and flavorful Indian curry with tender chicken in a rich tomato-based sauce."
  },
  {
    id: 2,
    title: "Vegetable Biryani",
    image: "/src/assets/vegetable-biryani.jpg",
    vegetarian: true,
    readyInMinutes: 60,
    servings: 6,
    cuisines: ["indian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 350, unit: "kcal" },
        { name: "Protein", amount: 12, unit: "g" }
      ]
    },
    ingredients: ["rice", "vegetables", "onion", "spices", "yogurt", "saffron"],
    extendedIngredients: [
      { id: 1, original: "2 cups basmati rice" },
      { id: 2, original: "Mixed vegetables (carrots, peas, beans)" },
      { id: 3, original: "2 large onions, sliced" },
      { id: 4, original: "Biryani spices" },
      { id: 5, original: "1 cup yogurt" },
      { id: 6, original: "Pinch of saffron" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Soak rice for 30 minutes, then boil until 70% cooked." },
        { number: 2, step: "Sauté vegetables with spices until tender." },
        { number: 3, step: "Layer rice and vegetables alternately." },
        { number: 4, step: "Cover and cook on low heat for 45 minutes." }
      ]
    }],
    summary: "A fragrant Indian rice dish layered with spiced vegetables and aromatic basmati rice."
  },
  {
    id: 3,
    title: "Paneer Tikka Masala",
    image: "/src/assets/paneer-tikka-masala.jpg",
    vegetarian: true,
    readyInMinutes: 40,
    servings: 4,
    cuisines: ["indian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 380, unit: "kcal" },
        { name: "Protein", amount: 18, unit: "g" }
      ]
    },
    ingredients: ["paneer", "tomato", "cream", "onion", "spices", "bell pepper"],
    extendedIngredients: [
      { id: 1, original: "400g paneer, cubed" },
      { id: 2, original: "3 large tomatoes" },
      { id: 3, original: "150ml heavy cream" },
      { id: 4, original: "2 onions, diced" },
      { id: 5, original: "Indian spices" },
      { id: 6, original: "1 bell pepper, cubed" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Marinate paneer cubes in yogurt and spices for 30 minutes." },
        { number: 2, step: "Grill paneer until charred on all sides." },
        { number: 3, step: "Prepare masala sauce with tomatoes, onions, and spices." },
        { number: 4, step: "Add grilled paneer to sauce and simmer with cream." }
      ]
    }],
    summary: "Grilled paneer cubes in a rich, creamy tomato-based curry sauce."
  },

  // Italian Cuisine
  {
    id: 4,
    title: "Spaghetti Carbonara",
    image: "/src/assets/pasta-carbonara.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 520, unit: "kcal" },
        { name: "Protein", amount: 22, unit: "g" }
      ]
    },
    ingredients: ["spaghetti", "bacon", "eggs", "cheese", "garlic", "black pepper"],
    extendedIngredients: [
      { id: 1, original: "400g spaghetti pasta" },
      { id: 2, original: "200g bacon, diced" },
      { id: 3, original: "4 large eggs" },
      { id: 4, original: "100g Parmesan cheese, grated" },
      { id: 5, original: "3 cloves garlic, minced" },
      { id: 6, original: "Fresh black pepper to taste" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Cook spaghetti in salted boiling water until al dente." },
        { number: 2, step: "Fry bacon until crispy, add garlic for last minute." },
        { number: 3, step: "Whisk eggs with cheese and black pepper." },
        { number: 4, step: "Toss hot pasta with bacon, then quickly mix in egg mixture off heat." }
      ]
    }],
    summary: "Classic Italian pasta dish with a creamy egg and cheese sauce, crispy bacon, and black pepper."
  },
  {
    id: 5,
    title: "Margherita Pizza",
    image: "/src/assets/margherita-pizza.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 320, unit: "kcal" },
        { name: "Protein", amount: 14, unit: "g" }
      ]
    },
    ingredients: ["flour", "tomato", "mozzarella", "basil", "olive oil"],
    extendedIngredients: [
      { id: 1, original: "300g pizza flour" },
      { id: 2, original: "200g crushed tomatoes" },
      { id: 3, original: "250g fresh mozzarella" },
      { id: 4, original: "Fresh basil leaves" },
      { id: 5, original: "Extra virgin olive oil" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Make pizza dough and let it rise for 1 hour." },
        { number: 2, step: "Roll out dough and spread tomato sauce." },
        { number: 3, step: "Add mozzarella and fresh basil leaves." },
        { number: 4, step: "Bake at 250°C for 10-12 minutes until golden." }
      ]
    }],
    summary: "Classic Italian pizza with tomato sauce, fresh mozzarella, and basil."
  },
  {
    id: 6,
    title: "Chicken Parmigiana",
    image: "/src/assets/chicken-parmigiana.jpg",
    vegetarian: false,
    readyInMinutes: 50,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { calories: 580, protein: "35g" },
    ingredients: ["chicken", "tomato sauce", "mozzarella", "parmesan", "breadcrumbs"]
  },

  // Chinese Cuisine
  {
    id: 7,
    title: "Chicken Fried Rice",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["chinese"],
    nutrition: { calories: 380, protein: "20g" },
    ingredients: ["rice", "chicken", "eggs", "vegetables", "soy sauce", "garlic"]
  },
  {
    id: 8,
    title: "Vegetable Spring Rolls",
    image: "/src/assets/spring-rolls.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 6,
    cuisines: ["chinese"],
    nutrition: { calories: 150, protein: "5g" },
    ingredients: ["cabbage", "carrots", "spring roll wrapper", "soy sauce", "ginger"]
  },
  {
    id: 9,
    title: "Sweet and Sour Pork",
    image: "/src/assets/sweet-sour-pork.jpg",
    vegetarian: false,
    readyInMinutes: 35,
    servings: 4,
    cuisines: ["chinese"],
    nutrition: { calories: 450, protein: "28g" },
    ingredients: ["pork", "pineapple", "bell pepper", "onion", "vinegar", "sugar"]
  },

  // Mexican Cuisine
  {
    id: 10,
    title: "Chicken Tacos",
    image: "/src/assets/chicken-tacos.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["mexican"],
    nutrition: { calories: 320, protein: "25g" },
    ingredients: ["chicken", "tortilla", "tomato", "onion", "lettuce", "cheese", "lime"]
  },
  {
    id: 11,
    title: "Vegetarian Quesadilla",
    image: "/src/assets/quesadilla.jpg",
    vegetarian: true,
    readyInMinutes: 15,
    servings: 2,
    cuisines: ["mexican"],
    nutrition: { calories: 380, protein: "18g" },
    ingredients: ["tortilla", "cheese", "bell pepper", "onion", "beans"]
  },
  {
    id: 12,
    title: "Beef Enchiladas",
    image: "/src/assets/beef-enchiladas.jpg",
    vegetarian: false,
    readyInMinutes: 45,
    servings: 6,
    cuisines: ["mexican"],
    nutrition: { calories: 520, protein: "30g" },
    ingredients: ["beef", "tortilla", "cheese", "onion", "tomato sauce", "spices"]
  },

  // American Cuisine
  {
    id: 13,
    title: "Classic Burger",
    image: "/src/assets/classic-burger.jpg",
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["american"],
    nutrition: { calories: 580, protein: "35g" },
    ingredients: ["beef", "bun", "lettuce", "tomato", "onion", "cheese", "pickle"]
  },
  {
    id: 14,
    title: "BBQ Ribs",
    image: "/src/assets/bbq-ribs.jpg",
    vegetarian: false,
    readyInMinutes: 180,
    servings: 4,
    cuisines: ["american"],
    nutrition: { calories: 720, protein: "45g" },
    ingredients: ["pork ribs", "bbq sauce", "onion", "garlic", "spices"]
  },
  {
    id: 15,
    title: "Caesar Salad",
    image: "/src/assets/caesar-salad.jpg",
    vegetarian: true,
    readyInMinutes: 15,
    servings: 4,
    cuisines: ["american"],
    nutrition: { calories: 250, protein: "8g" },
    ingredients: ["lettuce", "parmesan", "croutons", "caesar dressing", "lemon"]
  },

  // Thai Cuisine
  {
    id: 16,
    title: "Pad Thai",
    image: "/src/assets/pad-thai.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { calories: 420, protein: "22g" },
    ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "lime", "peanuts"]
  },
  {
    id: 17,
    title: "Green Curry",
    image: "/src/assets/green-curry.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { calories: 380, protein: "15g" },
    ingredients: ["coconut milk", "green curry paste", "vegetables", "basil", "lime"]
  },
  {
    id: 18,
    title: "Tom Yum Soup",
    image: "/src/assets/tom-yum-soup.jpg",
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { calories: 180, protein: "18g" },
    ingredients: ["shrimp", "lemongrass", "lime leaves", "chili", "mushrooms"]
  },

  // French Cuisine
  {
    id: 19,
    title: "Coq au Vin",
    image: "/src/assets/coq-au-vin.jpg",
    vegetarian: false,
    readyInMinutes: 90,
    servings: 4,
    cuisines: ["french"],
    nutrition: { calories: 520, protein: "38g" },
    ingredients: ["chicken", "wine", "onion", "mushrooms", "bacon", "herbs"]
  },
  {
    id: 20,
    title: "Ratatouille",
    image: "/src/assets/ratatouille.jpg",
    vegetarian: true,
    readyInMinutes: 45,
    servings: 6,
    cuisines: ["french"],
    nutrition: { calories: 180, protein: "6g" },
    ingredients: ["eggplant", "zucchini", "tomato", "bell pepper", "onion", "herbs"]
  },

  // Japanese Cuisine
  {
    id: 21,
    title: "Chicken Teriyaki",
    image: "/src/assets/chicken-teriyaki.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["japanese"],
    nutrition: { calories: 420, protein: "32g" },
    ingredients: ["chicken", "soy sauce", "mirin", "sugar", "garlic", "ginger"]
  },
  {
    id: 22,
    title: "Vegetable Sushi",
    image: "/src/assets/vegetable-sushi.jpg",
    vegetarian: true,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["japanese"],
    nutrition: { calories: 280, protein: "8g" },
    ingredients: ["rice", "nori", "cucumber", "avocado", "carrot", "wasabi"]
  },

  // Korean Cuisine
  {
    id: 23,
    title: "Bibimbap",
    image: "/src/assets/bibimbap.jpg",
    vegetarian: true,
    readyInMinutes: 40,
    servings: 4,
    cuisines: ["korean"],
    nutrition: { calories: 450, protein: "16g" },
    ingredients: ["rice", "vegetables", "egg", "gochujang", "sesame oil"]
  },
  {
    id: 24,
    title: "Korean BBQ Beef",
    image: "/src/assets/korean-bbq-beef.jpg",
    vegetarian: false,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["korean"],
    nutrition: { calories: 520, protein: "35g" },
    ingredients: ["beef", "soy sauce", "garlic", "pear", "sesame oil", "ginger"]
  },

  // Mediterranean Cuisine
  {
    id: 25,
    title: "Greek Salad",
    image: "/src/assets/greek-salad.jpg",
    vegetarian: true,
    readyInMinutes: 15,
    servings: 4,
    cuisines: ["mediterranean", "greek"],
    nutrition: { calories: 220, protein: "8g" },
    ingredients: ["tomato", "cucumber", "feta", "olives", "onion", "olive oil"]
  },
  {
    id: 26,
    title: "Hummus with Pita",
    image: "/src/assets/hummus-pita.jpg",
    vegetarian: true,
    readyInMinutes: 10,
    servings: 6,
    cuisines: ["mediterranean", "middle eastern"],
    nutrition: { calories: 180, protein: "8g" },
    ingredients: ["chickpeas", "tahini", "lemon", "garlic", "olive oil", "pita"]
  },

  // Spanish Cuisine
  {
    id: 27,
    title: "Paella",
    image: "/src/assets/paella.jpg",
    vegetarian: false,
    readyInMinutes: 60,
    servings: 6,
    cuisines: ["spanish"],
    nutrition: { calories: 480, protein: "28g" },
    ingredients: ["rice", "seafood", "chicken", "saffron", "tomato", "bell pepper"]
  },
  {
    id: 28,
    title: "Patatas Bravas",
    image: "/src/assets/patatas-bravas.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["spanish"],
    nutrition: { calories: 320, protein: "6g" },
    ingredients: ["potatoes", "tomato sauce", "garlic", "paprika", "olive oil"]
  },

  // Brazilian Cuisine
  {
    id: 29,
    title: "Feijoada",
    image: "/src/assets/feijoada.jpg",
    vegetarian: false,
    readyInMinutes: 120,
    servings: 6,
    cuisines: ["brazilian"],
    nutrition: { calories: 580, protein: "32g" },
    ingredients: ["black beans", "pork", "beef", "sausage", "onion", "garlic"]
  },
  {
    id: 30,
    title: "Acai Bowl",
    image: "/src/assets/acai-bowl.jpg",
    vegetarian: true,
    readyInMinutes: 10,
    servings: 2,
    cuisines: ["brazilian"],
    nutrition: { calories: 280, protein: "8g" },
    ingredients: ["acai", "banana", "granola", "berries", "honey"],
    extendedIngredients: [
      { id: 1, original: "100g frozen acai" },
      { id: 2, original: "1 banana, sliced" },
      { id: 3, original: "50g granola" },
      { id: 4, original: "Mixed berries" },
      { id: 5, original: "2 tbsp honey" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Blend frozen acai with a little water until smooth." },
        { number: 2, step: "Pour into a bowl and top with banana slices." },
        { number: 3, step: "Add granola, berries, and drizzle with honey." },
        { number: 4, step: "Serve immediately while cold." }
      ]
    }],
    summary: "A healthy Brazilian superfood bowl with acai, fruits, and granola."
  }
].map(recipe => ({
  ...recipe,
  // Ensure all recipes have required properties
  extendedIngredients: recipe.extendedIngredients || recipe.ingredients?.map((ing, index) => ({
    id: index + 1,
    original: ing
  })) || [],
  analyzedInstructions: recipe.analyzedInstructions || [{
    steps: [{ number: 1, step: "Recipe instructions not available." }]
  }],
  summary: recipe.summary || "No description available.",
  nutrition: recipe.nutrition || { nutrients: [] }
}));