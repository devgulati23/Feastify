import { X, Clock, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FoodTypeIndicator } from "./FoodTypeIndicator";
import { cn } from "@/lib/utils";

interface RecipeDetails {
  id: number;
  title: string;
  image: string;
  vegetarian: boolean;
  readyInMinutes: number;
  servings: number;
  cuisines: string[];
  summary: string;
  extendedIngredients: Array<{
    id: number;
    original: string;
  }>;
  analyzedInstructions: Array<{
    steps: Array<{
      number: number;
      step: string;
    }>;
  }>;
  nutrition?: {
    nutrients: Array<{
      name: string;
      amount: number;
      unit: string;
    }>;
  };
}

interface RecipeModalProps {
  recipe: RecipeDetails | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (recipeId: number) => void;
}

export const RecipeModal = ({ recipe, isOpen, onClose, isBookmarked, onToggleBookmark }: RecipeModalProps) => {
  if (!isOpen || !recipe) return null;

  const instructions = recipe.analyzedInstructions?.[0]?.steps || [];
  const calories = recipe.nutrition?.nutrients?.find(n => n.name === "Calories");
  const protein = recipe.nutrition?.nutrients?.find(n => n.name === "Protein");
  const carbs = recipe.nutrition?.nutrients?.find(n => n.name === "Carbohydrates");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[95vh] glass rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col h-full max-h-[95vh]">
          {/* Header */}
          <div className="relative">
            <div className="aspect-[3/1] overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay with controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => onToggleBookmark(recipe.id)}
                className="p-2 rounded-full glass-light hover:bg-background/95 transition-all duration-200"
              >
                <Heart 
                  className={cn(
                    "w-5 h-5 transition-colors duration-200",
                    isBookmarked ? "fill-primary text-primary" : "text-foreground"
                  )}
                />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full glass-light hover:bg-background/95 transition-all duration-200"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-3 mb-2">
                <FoodTypeIndicator isVeg={recipe.vegetarian} />
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{recipe.readyInMinutes} mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{recipe.servings} servings</span>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {recipe.title}
              </h1>
              {recipe.cuisines && recipe.cuisines.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {recipe.cuisines.map((cuisine) => (
                    <span 
                      key={cuisine}
                      className="px-3 py-1 glass-light text-white text-sm rounded-full"
                    >
                      {cuisine}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-card">
            {/* Recipe Info Bar */}
            <div className="flex items-center justify-between mb-6 p-4 glass-light rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <FoodTypeIndicator isVeg={recipe.vegetarian} />
                  <span className="text-sm font-medium text-secondary-foreground">
                    {recipe.vegetarian ? "VEG" : "NON-VEG"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-secondary-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{recipe.readyInMinutes} mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{recipe.servings} servings</span>
                  </div>
                </div>
              </div>
              {recipe.cuisines && recipe.cuisines.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {recipe.cuisines.map((cuisine) => (
                    <span 
                      key={cuisine}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {cuisine}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ingredients */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-card-foreground">Ingredients</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {recipe.extendedIngredients?.map((ingredient) => (
                      <li key={ingredient.id} className="text-sm text-card-foreground">
                        • {ingredient.original}
                      </li>
                    )) || (
                      <p className="text-sm text-muted-foreground">
                        Ingredients not available for this recipe.
                      </p>
                    )}
                  </ul>
                </CardContent>
              </Card>
              
              {/* Recipe */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-card-foreground">Recipe</h3>
                </CardHeader>
                <CardContent>
                  {instructions.length > 0 ? (
                    <ol className="space-y-4">
                      {instructions.map((step) => (
                        <li key={step.number} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-medium flex items-center justify-center">
                            {step.number}
                          </span>
                          <p className="text-sm text-card-foreground leading-relaxed">
                            {step.step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Recipe not available for this dish.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
            
            {/* Nutrition Info */}
            {(calories || protein || carbs) && (
              <Card className="mt-6">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-card-foreground">Nutrition (per serving)</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {calories && (
                      <div>
                        <p className="text-lg font-semibold text-primary">{Math.round(calories.amount)}</p>
                        <p className="text-xs text-muted-foreground">Calories</p>
                      </div>
                    )}
                    {protein && (
                      <div>
                        <p className="text-lg font-semibold text-primary">{Math.round(protein.amount)}g</p>
                        <p className="text-xs text-muted-foreground">Protein</p>
                      </div>
                    )}
                    {carbs && (
                      <div>
                        <p className="text-lg font-semibold text-primary">{Math.round(carbs.amount)}g</p>
                        <p className="text-xs text-muted-foreground">Carbs</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};