import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FoodTypeIndicator } from "./FoodTypeIndicator";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCuisineFilter: (cuisine: string) => void;
  onDietFilter: (diet: string) => void;
  selectedCuisine: string;
  selectedDiet: string;
}

const cuisines = [
  'All', 'Indian', 'Italian', 'Chinese', 'Mexican', 'American', 'Thai', 'French', 'Japanese',
  'Korean', 'Mediterranean', 'Middle Eastern', 'Spanish', 'Greek', 'Vietnamese',
  'British', 'German', 'Turkish', 'Lebanese', 'Moroccan', 'Brazilian'
];

export const SearchFilters = ({ 
  onSearch, 
  onCuisineFilter, 
  onDietFilter, 
  selectedCuisine, 
  selectedDiet 
}: SearchFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="glass border-b border-border p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Single Search Bar */}
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search recipes by name or ingredients (e.g., pasta, chicken, biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-20 py-3 text-base rounded-lg border-2 focus:border-primary glass-light"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Button 
              type="submit" 
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 text-sm"
            >
              Search
            </Button>
          </div>
        </form>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          {/* Cuisine Filter */}
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground mr-2">Cuisine:</span>
            {cuisines.map((cuisine) => (
              <Button
                key={cuisine}
                variant={selectedCuisine === cuisine ? "default" : "filter"}
                size="sm"
                onClick={() => onCuisineFilter(cuisine)}
                className="text-xs"
              >
                {cuisine}
              </Button>
            ))}
          </div>

          {/* Diet Filter */}
          <div className="flex gap-2 items-center">
            <span className="text-sm font-medium text-foreground mr-2">Diet:</span>
            <Button
              variant={selectedDiet === "all" ? "default" : "filter"}
              size="sm"
              onClick={() => onDietFilter("all")}
              className="text-xs"
            >
              All
            </Button>
            <Button
              variant={selectedDiet === "vegetarian" ? "default" : "filter"}
              size="sm"
              onClick={() => onDietFilter("vegetarian")}
              className="text-xs flex items-center gap-2"
            >
              <FoodTypeIndicator isVeg={true} className="w-3 h-3" />
              Veg
            </Button>
            <Button
              variant={selectedDiet === "non-vegetarian" ? "default" : "filter"}
              size="sm"
              onClick={() => onDietFilter("non-vegetarian")}
              className="text-xs flex items-center gap-2"
            >
              <FoodTypeIndicator isVeg={false} className="w-3 h-3" />
              Non-Veg
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};