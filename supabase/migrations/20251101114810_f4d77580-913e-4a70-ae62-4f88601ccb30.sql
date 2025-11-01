-- Update handle_new_user function to assign random avatar
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  random_avatar TEXT;
  avatar_options TEXT[] := ARRAY[
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-1',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-2',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-3',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-4',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-5',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=avatar-6'
  ];
BEGIN
  -- Select random avatar from array
  random_avatar := avatar_options[floor(random() * array_length(avatar_options, 1) + 1)];
  
  INSERT INTO public.profiles (user_id, username, email, avatar_url)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    new.email,
    random_avatar
  );
  RETURN new;
END;
$$;