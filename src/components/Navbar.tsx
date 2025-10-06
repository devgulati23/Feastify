import { BookOpen, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  bookmarkedCount: number;
  onViewBookmarks: () => void;
  user?: any;
  onSignIn: () => void;
  onOpenSettings: () => void;
}

export const Navbar = ({ bookmarkedCount, onViewBookmarks, user, onSignIn, onOpenSettings }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-primary">Feastify</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={onViewBookmarks}
              className="flex items-center gap-2 glass-light"
            >
              <BookOpen className="w-4 h-4" />
              Bookmarks ({bookmarkedCount})
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="glass-light">
                    <User className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={onOpenSettings}>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onSignIn} variant="ghost" className="glass-light">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
            
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};