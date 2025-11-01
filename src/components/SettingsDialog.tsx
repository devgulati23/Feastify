import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "./ThemeToggle";
import { LogOut, Palette, MessageSquare, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Separator } from "@/components/ui/separator";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
  onViewProfile: () => void;
}

export const SettingsDialog = ({ isOpen, onClose, onSignOut, onViewProfile }: SettingsDialogProps) => {
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmitSuggestion = async () => {
    if (!suggestion.trim()) {
      toast({
        title: "Error",
        description: "Please enter a suggestion",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      const { error } = await supabase.from("suggestions").insert({
        user_id: user?.id || null,
        user_email: user?.email || null,
        suggestion: suggestion.trim(),
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Thank you for your suggestion!",
        duration: 3000,
      });
      setSuggestion("");
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      toast({
        title: "Error",
        description: "Failed to submit suggestion. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <User className="h-6 w-6" />
            Settings
          </DialogTitle>
          <DialogDescription>
            Manage your preferences and account settings
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Appearance Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Appearance</h3>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
              <div className="space-y-0.5">
                <Label className="text-base">Theme</Label>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred color scheme
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>

          <Separator />

          {/* Feedback Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">Send Feedback</h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="suggestion">Your Suggestion</Label>
                <Textarea
                  id="suggestion"
                  placeholder="Share your ideas, report issues, or suggest new features..."
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  className="min-h-[120px] resize-none"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                onClick={handleSubmitSuggestion}
                disabled={isSubmitting || !suggestion.trim()}
                className="w-full"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </div>
          </div>

          <Separator />

          {/* Account Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Account</h3>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                onViewProfile();
                onClose();
              }}
            >
              <User className="mr-2 h-4 w-4" />
              View Profile
            </Button>
            <Button
              variant="destructive"
              className="w-full"
              onClick={onSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
