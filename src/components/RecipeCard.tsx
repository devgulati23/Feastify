import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FoodTypeIndicator } from "./FoodTypeIndicator";
import { cn } from "@/lib/utils";

interface Recipe {
  id: number;
  title: string;
  image: string;
  vegetarian: boolean;
  readyInMinutes: number;
  servings: number;
  cuisines: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
  onViewMore: (recipe: Recipe) => void;
  isBookmarked: boolean;
  onToggleBookmark: (recipeId: number) => void;
}

export const RecipeCard = ({ recipe, onViewMore, isBookmarked, onToggleBookmark }: RecipeCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-[var(--card-shadow-hover)] cursor-pointer bg-card">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="w-full h-full bg-muted animate-pulse" />
          )}
        </div>
        
        {/* Food type indicator - top left */}
        <div className="absolute top-3 left-3">
          <FoodTypeIndicator isVeg={recipe.vegetarian} />
        </div>
        
        {/* Bookmark button - top right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(recipe.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/95 transition-all duration-200"
        >
          <Heart 
            className={cn(
              "w-4 h-4 transition-colors duration-200",
              isBookmarked ? "fill-primary text-primary" : "text-foreground"
            )}
          />
        </button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-card-foreground mb-2 line-clamp-2 leading-tight">
          {recipe.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <span>{recipe.readyInMinutes} mins</span>
          <span>{recipe.servings} servings</span>
        </div>
        
        {recipe.cuisines.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {recipe.cuisines.slice(0, 2).map((cuisine) => (
              <span 
                key={cuisine}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {cuisine}
              </span>
            ))}
          </div>
        )}
        
        <Button 
          onClick={() => onViewMore(recipe)}
          variant="hero"
          size="sm"
          className="w-full"
        >
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
};