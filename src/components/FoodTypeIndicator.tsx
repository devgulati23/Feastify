import { cn } from "@/lib/utils";

interface FoodTypeIndicatorProps {
  isVeg: boolean;
  className?: string;
}

export const FoodTypeIndicator = ({ isVeg, className }: FoodTypeIndicatorProps) => {
  if (isVeg) {
    return (
      <div className={cn("inline-flex items-center justify-center w-4 h-4 rounded-full border-2 border-veg", className)}>
        <div className="w-2 h-2 rounded-full bg-veg" />
      </div>
    );
  }

  return (
    <div className={cn("inline-flex items-center justify-center w-4 h-4", className)}>
      <div 
        className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-nonveg"
        style={{
          borderLeftWidth: '6px',
          borderRightWidth: '6px',
          borderBottomWidth: '8px'
        }}
      />
    </div>
  );
};