import { useState, useEffect } from "react";
import { ChefHat, Loader2 } from "lucide-react";
import { Navbar } from "./Navbar";
import { SearchFilters } from "./SearchFilters";
import { RecipeCard } from "./RecipeCard";
import { RecipeModal } from "./RecipeModal";
import { AuthDialog } from "./AuthDialog";
import { SettingsDialog } from "./SettingsDialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { searchRecipes, getRandomRecipes, getRecipeInformation } from "@/lib/spoonacular";
import heroImage from "@/assets/hero-food.jpg";
import feastifyLogo from "@/assets/feastify-logo.jpeg";

export const Feastify = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<number[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedDiet, setSelectedDiet] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [isBookmarksView, setIsBookmarksView] = useState(false);
  const { toast } = useToast();

  // Load auth state, bookmarks, and initial recipes
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        loadBookmarks();
      } else {
        setBookmarkedRecipes([]);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadBookmarks();
      }
    });

    loadInitialRecipes();
    checkUrlForRecipe();

    return () => subscription.unsubscribe();
  }, []);

  const loadBookmarks = async () => {
    try {
      const { data, error } = await supabase
        .from("bookmarks")
        .select("recipe_id");

      if (error) throw error;

      setBookmarkedRecipes(data?.map((b) => b.recipe_id) || []);
    } catch (error) {
      console.error("Failed to load bookmarks:", error);
    }
  };

  const loadInitialRecipes = async () => {
    setIsLoading(true);
    try {
      const initialRecipes = await getRandomRecipes();
      setRecipes(initialRecipes);
    } catch (error) {
      console.error("Failed to load initial recipes:", error);
      toast({
        title: "Loading Error",
        description: "Failed to load initial recipes. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const checkUrlForRecipe = async () => {
    const params = new URLSearchParams(window.location.search);
    const recipeId = params.get('recipe');
    
    if (recipeId) {
      try {
        const recipeDetails = await getRecipeInformation(parseInt(recipeId));
        setSelectedRecipe(recipeDetails);
        setIsModalOpen(true);
        // Clean URL without reloading
        window.history.replaceState({}, '', window.location.pathname);
      } catch (error) {
        console.error("Failed to load shared recipe:", error);
        toast({
          title: "Error",
          description: "Failed to load the shared recipe.",
          variant: "destructive",
        });
      }
    }
  };

  // Apply filters
  useEffect(() => {
    // Don't apply filters when in bookmarks view
    if (isBookmarksView) {
      return;
    }

    let filtered = recipes;

    // Cuisine filter
    if (selectedCuisine !== "All") {
      filtered = filtered.filter(recipe => 
        recipe.cuisines && recipe.cuisines.some(cuisine => 
          cuisine.toLowerCase().includes(selectedCuisine.toLowerCase())
        )
      );
    }

    // Diet filter
    if (selectedDiet === "vegetarian") {
      filtered = filtered.filter(recipe => recipe.vegetarian);
    } else if (selectedDiet === "non-vegetarian") {
      filtered = filtered.filter(recipe => !recipe.vegetarian);
    }

    setFilteredRecipes(filtered);
  }, [recipes, selectedCuisine, selectedDiet, isBookmarksView]);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    
    try {
      if (query.trim()) {
        const results = await searchRecipes(query);
        setRecipes(results);
        toast({
          title: "Search Complete",
          description: `Found ${results.length} recipes for "${query}".`,
        });
      }
    } catch (error) {
      toast({
        title: "Search Error",
        description: "Failed to search recipes. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
  };

  const handleToggleBookmark = async (recipeId: number) => {
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to bookmark recipes.",
        variant: "destructive",
      });
      setIsAuthDialogOpen(true);
      return;
    }

    try {
      const isBookmarked = bookmarkedRecipes.includes(recipeId);

      if (isBookmarked) {
        const { error } = await supabase
          .from("bookmarks")
          .delete()
          .eq("recipe_id", recipeId)
          .eq("user_id", user.id);

        if (error) throw error;

        setBookmarkedRecipes((prev) => prev.filter((id) => id !== recipeId));
        toast({
          title: "Removed from bookmarks",
          description: "Recipe removed from your bookmarks.",
        });
      } else {
        const { error } = await supabase
          .from("bookmarks")
          .insert({ recipe_id: recipeId, user_id: user.id });

        if (error) throw error;

        setBookmarkedRecipes((prev) => [...prev, recipeId]);
        toast({
          title: "Added to bookmarks",
          description: "Recipe added to your bookmarks.",
        });
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
      toast({
        title: "Error",
        description: "Failed to update bookmark. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleViewMore = (recipe: any) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleSignIn = () => {
    setIsAuthDialogOpen(true);
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      setBookmarkedRecipes([]);
      toast({
        title: "Signed Out",
        description: "Successfully signed out.",
      });
      setIsSettingsOpen(false);
    } catch (error) {
      toast({
        title: "Sign Out Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleViewBookmarks = () => {
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to view bookmarks.",
        variant: "destructive",
      });
      setIsAuthDialogOpen(true);
      return;
    }

    const bookmarked = recipes.filter((recipe) =>
      bookmarkedRecipes.includes(recipe.id)
    );
    setFilteredRecipes(bookmarked);
    setSearchQuery("Bookmarked Recipes");
    setIsBookmarksView(true);
    
    // Scroll to results section
    setTimeout(() => {
      const resultsSection = document.querySelector('.results-section');
      resultsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleBackFromBookmarks = async () => {
    setIsBookmarksView(false);
    setSearchQuery("");
    setSelectedCuisine("All");
    setSelectedDiet("all");
    await loadInitialRecipes();
  };

  // Escape key listener for bookmarks view
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookmarksView) {
        handleBackFromBookmarks();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isBookmarksView]);

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <Navbar 
        bookmarkedCount={bookmarkedRecipes.length}
        onViewBookmarks={handleViewBookmarks}
        user={user}
        onSignIn={handleSignIn}
        onOpenSettings={handleOpenSettings}
      />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden mt-20">
        <img 
          src={heroImage} 
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            <div className="glass-light rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <img 
                  src={feastifyLogo} 
                  alt="Feastify" 
                  className="h-16 lg:h-20 w-auto object-contain"
                />
              </div>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Discover amazing recipes based on ingredients you have. 
                Your culinary adventure starts here!
              </p>
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
      <div className="max-w-7xl mx-auto px-6 py-12 results-section">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1">
            {isBookmarksView && (
              <button
                onClick={handleBackFromBookmarks}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
                Back to all recipes
              </button>
            )}
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {isBookmarksView ? "Bookmarks" : searchQuery ? `Results for "${searchQuery}"` : "Featured Recipes"}
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

      {/* Auth Dialog */}
      <AuthDialog 
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
      />

      {/* Settings Dialog */}
      <SettingsDialog
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSignOut={handleSignOut}
      />
    </div>
  );
};