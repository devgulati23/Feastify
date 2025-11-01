import { hardcodedRecipes } from "@/data/recipes";

// API keys removed for security - using hardcoded recipes only

export const searchRecipes = async (query: string) => {
  // Using hardcoded recipes for security - search by name or ingredients
  const searchTerms = query.toLowerCase().split(' ');
  return hardcodedRecipes.filter(recipe => {
    const titleMatch = searchTerms.some(term => 
      recipe.title.toLowerCase().includes(term)
    );
    const ingredientMatch = searchTerms.some(term =>
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(term)
      )
    );
    const cuisineMatch = searchTerms.some(term =>
      recipe.cuisines.some(cuisine => 
        cuisine.toLowerCase().includes(term)
      )
    );
    return titleMatch || ingredientMatch || cuisineMatch;
  });
};

export const searchRecipesByIngredients = async (ingredients: string) => {
  return searchRecipes(ingredients);
};

export const searchRecipesByName = async (dishName: string) => {
  return searchRecipes(dishName);
};

export const getRandomRecipes = async (number: number = 12) => {
  // Return hardcoded recipes since API is hitting limits
  return hardcodedRecipes;
};

export const getRecipeInformation = async (id: number) => {
  // Using hardcoded recipes - find by ID
  const recipe = hardcodedRecipes.find(r => r.id === id);
  if (!recipe) {
    throw new Error('Recipe not found');
  }
  return recipe;
};