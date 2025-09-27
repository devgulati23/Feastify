const SPOONACULAR_API_KEY = "1837ae4d0d5c47dd8a92f66c69ebefee";
const EDAMAM_APP_ID = "7849275a";
const EDAMAM_API_KEY = "43c9b259e181fe6f1d005dbdfdc684be";
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipesByIngredients = async (ingredients: string) => {
  const response = await fetch(
    `${BASE_URL}/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=12&apiKey=${SPOONACULAR_API_KEY}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  
  return response.json();
};

export const getRandomRecipes = async (number: number = 12) => {
  const response = await fetch(
    `${BASE_URL}/random?number=${number}&apiKey=${SPOONACULAR_API_KEY}&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  
  const data = await response.json();
  return data.recipes;
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