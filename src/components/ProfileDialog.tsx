import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import chefAvatar from "@/assets/avatars/chef-avatar.png";
import pizzaAvatar from "@/assets/avatars/pizza-avatar.png";
import sushiAvatar from "@/assets/avatars/sushi-avatar.png";
import cupcakeAvatar from "@/assets/avatars/cupcake-avatar.png";
import tacoAvatar from "@/assets/avatars/taco-avatar.png";
import burgerAvatar from "@/assets/avatars/burger-avatar.png";

const AVATAR_OPTIONS = [
  chefAvatar,
  pizzaAvatar,
  sushiAvatar,
  cupcakeAvatar,
  tacoAvatar,
  burgerAvatar,
];

const profileSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(30, { message: "Username must be less than 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),
  email: z.string().email(),
  avatar_url: z.string(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface ProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export const ProfileDialog = ({ isOpen, onClose, userId }: ProfileDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(AVATAR_OPTIONS[0]);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      avatar_url: AVATAR_OPTIONS[0],
    },
  });

  useEffect(() => {
    if (isOpen && userId) {
      loadProfile();
    }
  }, [isOpen, userId]);

  const loadProfile = async () => {
    setIsFetching(true);
    try {
      // Get user email from auth
      const { data: { user } } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from("profiles")
        .select("username, email, avatar_url")
        .eq("user_id", userId)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setValue("username", data.username);
        setValue("email", data.email || user?.email || "");
        const avatarUrl = data.avatar_url || AVATAR_OPTIONS[0];
        setValue("avatar_url", avatarUrl);
        setSelectedAvatar(avatarUrl);
      } else {
        // Profile doesn't exist, create it
        const defaultAvatar = AVATAR_OPTIONS[Math.floor(Math.random() * AVATAR_OPTIONS.length)];
        const { error: insertError } = await supabase
          .from("profiles")
          .insert({
            user_id: userId,
            username: user?.email?.split('@')[0] || 'user',
            email: user?.email || '',
            avatar_url: defaultAvatar,
          });

        if (insertError) throw insertError;

        setValue("username", user?.email?.split('@')[0] || 'user');
        setValue("email", user?.email || "");
        setValue("avatar_url", defaultAvatar);
        setSelectedAvatar(defaultAvatar);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to load profile data.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsFetching(false);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({ 
          username: data.username,
          avatar_url: selectedAvatar,
        })
        .eq("user_id", userId);

      if (error) {
        if (error.message?.includes("duplicate key")) {
          throw new Error("This username is already taken. Please choose another.");
        }
        throw error;
      }

      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully!",
        duration: 3000,
      });
      onClose();
    } catch (error: any) {
      toast({
        title: "Update Error",
        description: error.message || "Failed to update profile. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <User className="h-6 w-6" />
            Edit Profile
          </DialogTitle>
          <DialogDescription>
            Update your profile information
          </DialogDescription>
        </DialogHeader>

        {isFetching ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
            <div className="space-y-3">
              <Label>Profile Avatar</Label>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={selectedAvatar} alt="Profile avatar" />
                  <AvatarFallback>
                    <User className="h-10 w-10" />
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm text-muted-foreground">
                  Select an avatar below
                </div>
              </div>
              <RadioGroup
                value={selectedAvatar}
                onValueChange={setSelectedAvatar}
                className="grid grid-cols-6 gap-3"
              >
                {AVATAR_OPTIONS.map((avatar, index) => (
                  <Label
                    key={index}
                    htmlFor={`avatar-${index}`}
                    className="cursor-pointer"
                  >
                    <RadioGroupItem
                      value={avatar}
                      id={`avatar-${index}`}
                      className="sr-only"
                    />
                    <Avatar
                      className={`h-12 w-12 border-2 transition-all ${
                        selectedAvatar === avatar
                          ? "border-primary ring-2 ring-primary ring-offset-2"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <AvatarImage src={avatar} alt={`Avatar ${index + 1}`} />
                      <AvatarFallback>A{index + 1}</AvatarFallback>
                    </Avatar>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="johndoe"
                {...register("username")}
                disabled={isLoading}
              />
              {errors.username && (
                <p className="text-sm text-destructive">{errors.username.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                disabled={true}
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Email cannot be changed
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
