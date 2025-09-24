import { useState, useEffect } from "react";
import { ChefHat, BookOpen, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchFilters } from "./SearchFilters";
import { RecipeCard } from "./RecipeCard";
import { RecipeModal } from "./RecipeModal";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-food.jpg";
import butterChicken from "@/assets/butter-chicken.jpg";
import pastaCarbonara from "@/assets/pasta-carbonara.jpg";
import friedRice from "@/assets/fried-rice.jpg";

// Mock data for demo (in real app, this would come from Spoonacular API)
const mockRecipes = [
  {
    id: 1,
    title: "Butter Chicken with Basmati Rice",
    image: butterChicken,
    vegetarian: false,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["Indian"],
    summary: "Creamy and rich butter chicken curry served with aromatic basmati rice.",
    extendedIngredients: [
      { id: 1, original: "1 lb chicken breast, cubed" },
      { id: 2, original: "1 cup heavy cream" },
      { id: 3, original: "2 tbsp butter" },
      { id: 4, original: "1 onion, diced" },
      { id: 5, original: "3 cloves garlic, minced" },
      { id: 6, original: "1 tbsp garam masala" },
      { id: 7, original: "1 can crushed tomatoes" },
      { id: 8, original: "1 cup basmati rice" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Cook basmati rice according to package instructions." },
        { number: 2, step: "Season chicken with salt and pepper, then cook in a pan until golden." },
        { number: 3, step: "Sauté onions and garlic until fragrant." },
        { number: 4, step: "Add garam masala and cook for 1 minute." },
        { number: 5, step: "Add crushed tomatoes and simmer for 10 minutes." },
        { number: 6, step: "Stir in cream and butter, add chicken back to pan." },
        { number: 7, step: "Simmer for 15 minutes until sauce thickens." },
        { number: 8, step: "Serve over rice and garnish with cilantro." }
      ]
    }]
  },
  {
    id: 2,
    title: "Classic Pasta Carbonara",
    image: pastaCarbonara,
    vegetarian: false,
    readyInMinutes: 20,
    servings: 2,
    cuisines: ["Italian"],
    summary: "Traditional Italian pasta dish with eggs, cheese, and crispy bacon.",
    extendedIngredients: [
      { id: 1, original: "200g spaghetti" },
      { id: 2, original: "100g pancetta or bacon" },
      { id: 3, original: "2 large eggs" },
      { id: 4, original: "50g Pecorino Romano cheese" },
      { id: 5, original: "2 cloves garlic" },
      { id: 6, original: "Black pepper to taste" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Cook spaghetti in salted boiling water until al dente." },
        { number: 2, step: "Crisp pancetta in a large pan." },
        { number: 3, step: "Whisk eggs with grated cheese and black pepper." },
        { number: 4, step: "Drain pasta, reserving 1 cup pasta water." },
        { number: 5, step: "Add hot pasta to pancetta pan." },
        { number: 6, step: "Remove from heat and quickly stir in egg mixture." },
        { number: 7, step: "Add pasta water gradually to create creamy sauce." },
        { number: 8, step: "Serve immediately with extra cheese and pepper." }
      ]
    }]
  },
  {
    id: 3,
    title: "Vegetable Fried Rice",
    image: friedRice,
    vegetarian: true,
    readyInMinutes: 25,
    servings: 3,
    cuisines: ["Chinese"],
    summary: "Colorful and flavorful fried rice packed with fresh vegetables.",
    extendedIngredients: [
      { id: 1, original: "2 cups cooked jasmine rice, cooled" },
      { id: 2, original: "2 eggs, beaten" },
      { id: 3, original: "1 cup mixed vegetables (carrots, peas, corn)" },
      { id: 4, original: "3 green onions, sliced" },
      { id: 5, original: "3 tbsp soy sauce" },
      { id: 6, original: "2 tbsp sesame oil" },
      { id: 7, original: "2 cloves garlic, minced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Heat oil in a large wok or skillet over high heat." },
        { number: 2, step: "Scramble eggs and set aside." },
        { number: 3, step: "Stir-fry garlic until fragrant." },
        { number: 4, step: "Add mixed vegetables and cook for 2-3 minutes." },
        { number: 5, step: "Add cold rice, breaking up any clumps." },
        { number: 6, step: "Stir in soy sauce and sesame oil." },
        { number: 7, step: "Add scrambled eggs back to the pan." },
        { number: 8, step: "Garnish with green onions and serve hot." }
      ]
    }]
  }
];

export const Feastify = () => {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState(mockRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<number[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedDiet, setSelectedDiet] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("feastify-bookmarks");
    if (saved) {
      setBookmarkedRecipes(JSON.parse(saved));
    }
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = recipes;

    // Cuisine filter
    if (selectedCuisine !== "All") {
      filtered = filtered.filter(recipe => 
        recipe.cuisines.includes(selectedCuisine)
      );
    }

    // Diet filter
    if (selectedDiet === "vegetarian") {
      filtered = filtered.filter(recipe => recipe.vegetarian);
    } else if (selectedDiet === "non-vegetarian") {
      filtered = filtered.filter(recipe => !recipe.vegetarian);
    }

    setFilteredRecipes(filtered);
  }, [recipes, selectedCuisine, selectedDiet]);

  const handleSearch = async (ingredients: string) => {
    setIsLoading(true);
    setSearchQuery(ingredients);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (ingredients.trim()) {
      // In a real app, this would be an API call to Spoonacular
      toast({
        title: "Search Feature",
        description: "In a real app, this would search recipes by ingredients using the Spoonacular API. For now, showing sample recipes.",
      });
    }
    
    setIsLoading(false);
  };

  const handleToggleBookmark = (recipeId: number) => {
    setBookmarkedRecipes(prev => {
      const newBookmarks = prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId];
      
      localStorage.setItem("feastify-bookmarks", JSON.stringify(newBookmarks));
      
      toast({
        title: prev.includes(recipeId) ? "Removed from bookmarks" : "Added to bookmarks",
        description: "Your recipe bookmarks have been updated.",
      });
      
      return newBookmarks;
    });
  };

  const handleViewMore = (recipe: any) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="w-12 h-12 text-primary" />
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Feastify
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover amazing recipes based on ingredients you have. 
              Your culinary adventure starts here!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8">
                <ChefHat className="mr-2 w-5 h-5" />
                Start Cooking
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <BookOpen className="mr-2 w-5 h-5" />
                View Bookmarks ({bookmarkedRecipes.length})
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <SearchFilters 
        onSearch={handleSearch}
        onCuisineFilter={setSelectedCuisine}
        onDietFilter={setSelectedDiet}
        selectedCuisine={selectedCuisine}
        selectedDiet={selectedDiet}
      />

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {searchQuery ? `Results for "${searchQuery}"` : "Featured Recipes"}
            </h2>
            <p className="text-muted-foreground">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-3 text-lg text-muted-foreground">Searching for recipes...</span>
          </div>
        )}

        {/* Recipes Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onViewMore={handleViewMore}
                isBookmarked={bookmarkedRecipes.includes(recipe.id)}
                onToggleBookmark={handleToggleBookmark}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredRecipes.length === 0 && (
          <div className="text-center py-20">
            <ChefHat className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </div>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isBookmarked={selectedRecipe ? bookmarkedRecipes.includes(selectedRecipe.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
};