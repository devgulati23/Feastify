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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "./ThemeToggle";
import { LogOut, MessageSquare, Palette } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
}

export const SettingsDialog = ({ isOpen, onClose, onSignOut }: SettingsDialogProps) => {
  const [suggestion, setSuggestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmitSuggestion = async () => {
    if (!suggestion.trim()) {
      toast({
        title: "Error",
        description: "Please enter a suggestion",
        variant: "destructive",
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
      });
      setSuggestion("");
    } catch (error) {
      console.error("Error submitting suggestion:", error);
      toast({
        title: "Error",
        description: "Failed to submit suggestion. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Settings</DialogTitle>
          <DialogDescription>
            Manage your preferences and account settings
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="appearance" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="appearance">
              <Palette className="mr-2 h-4 w-4" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="feedback">
              <MessageSquare className="mr-2 h-4 w-4" />
              Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="appearance" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span className="text-sm text-muted-foreground">
                  Switch between light and dark mode
                </span>
                <ThemeToggle />
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button
                variant="destructive"
                className="w-full"
                onClick={onSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="suggestion">Share Your Suggestion</Label>
              <Textarea
                id="suggestion"
                placeholder="Tell us what you think or suggest new features..."
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="min-h-[120px]"
                disabled={isSubmitting}
              />
            </div>

            <Button
              onClick={handleSubmitSuggestion}
              disabled={isSubmitting || !suggestion.trim()}
              className="w-full"
            >
              {isSubmitting ? "Submitting..." : "Submit Suggestion"}
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
