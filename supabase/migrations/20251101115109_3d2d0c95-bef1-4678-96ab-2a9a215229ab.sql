-- Update handle_new_user function to use food-themed avatars
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  random_avatar TEXT;
  avatar_options TEXT[] := ARRAY[
    '/src/assets/avatars/chef-avatar.png',
    '/src/assets/avatars/pizza-avatar.png',
    '/src/assets/avatars/sushi-avatar.png',
    '/src/assets/avatars/cupcake-avatar.png',
    '/src/assets/avatars/taco-avatar.png',
    '/src/assets/avatars/burger-avatar.png'
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