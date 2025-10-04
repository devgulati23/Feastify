import { hardcodedRecipes } from "@/data/recipes";

const SPOONACULAR_API_KEY = "1837ae4d0d5c47dd8a92f66c69ebefee";
const EDAMAM_APP_ID = "7849275a";
const EDAMAM_API_KEY = "43c9b259e181fe6f1d005dbdfdc684be";
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query: string) => {
  // First try API, fallback to hardcoded data if API fails
  try {
    // Try searching by ingredients first
    const ingredientResponse = await fetch(
      `${BASE_URL}/findByIngredients?ingredients=${encodeURIComponent(query)}&number=12&apiKey=${SPOONACULAR_API_KEY}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true`
    );
    
    if (ingredientResponse.ok) {
      const data = await ingredientResponse.json();
      if (data.length > 0) return data;
    }

    // Try searching by recipe name
    const nameResponse = await fetch(
      `${BASE_URL}/complexSearch?query=${encodeURIComponent(query)}&number=12&apiKey=${SPOONACULAR_API_KEY}&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true`
    );
    
    if (nameResponse.ok) {
      const data = await nameResponse.json();
      if (data.results && data.results.length > 0) return data.results;
    }
  } catch (error) {
    console.warn('API search failed, using local data:', error);
  }

  // Fallback to hardcoded recipes - search by name or ingredients
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
  const response = await fetch(
    `${BASE_URL}/${id}/information?apiKey=${SPOONACULAR_API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }
  
  return response.json();
};