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
  // Get ALL available recipes from different cuisines
  const cuisines = ['indian', 'italian', 'chinese', 'mexican', 'american', 'thai', 'french', 'japanese'];
  const maxRecipesPerCuisine = 100; // Maximum allowed by Spoonacular API
  
  const allRecipes = [];
  
  for (const cuisine of cuisines) {
    try {
      const response = await fetch(
        `${BASE_URL}/complexSearch?cuisine=${cuisine}&number=${maxRecipesPerCuisine}&apiKey=${SPOONACULAR_API_KEY}&addRecipeInformation=true&fillIngredients=true&addRecipeNutrition=true`
      );
      
      if (response.ok) {
        const data = await response.json();
        console.log(`Fetched ${data.results.length} ${cuisine} recipes`);
        // Add cuisine info to each recipe if not present
        const recipesWithCuisine = data.results.map(recipe => ({
          ...recipe,
          cuisines: recipe.cuisines || [cuisine]
        }));
        allRecipes.push(...recipesWithCuisine);
      } else {
        console.error(`Failed to fetch ${cuisine} recipes:`, response.status, response.statusText);
      }
    } catch (error) {
      console.error(`Error fetching ${cuisine} recipes:`, error);
    }
  }
  
  console.log(`Total recipes fetched: ${allRecipes.length}`);
  return allRecipes; // Return ALL fetched recipes
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