const SPOONACULAR_API_KEY = "YOUR_KEY_HERE";
const EDAMAM_APP_ID = "YOUR_APP_ID";
const EDAMAM_API_KEY = "YOUR_KEY_HERE";
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