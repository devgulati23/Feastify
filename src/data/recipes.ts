export const hardcodedRecipes = [
  // Indian Cuisine
  {
    id: 1,
    title: "Butter Chicken",
    image: "/src/assets/butter-chicken.jpg",
    vegetarian: false,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["indian"],
    nutrition: { calories: 420, protein: "25g" },
    ingredients: ["chicken", "tomato", "cream", "onion", "garlic", "ginger", "spices"]
  },
  {
    id: 2,
    title: "Vegetable Biryani",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: true,
    readyInMinutes: 60,
    servings: 6,
    cuisines: ["indian"],
    nutrition: { calories: 350, protein: "12g" },
    ingredients: ["rice", "vegetables", "onion", "spices", "yogurt", "saffron"]
  },
  {
    id: 3,
    title: "Paneer Tikka Masala",
    image: "/src/assets/butter-chicken.jpg",
    vegetarian: true,
    readyInMinutes: 40,
    servings: 4,
    cuisines: ["indian"],
    nutrition: { calories: 380, protein: "18g" },
    ingredients: ["paneer", "tomato", "cream", "onion", "spices", "bell pepper"]
  },

  // Italian Cuisine
  {
    id: 4,
    title: "Spaghetti Carbonara",
    image: "/src/assets/pasta-carbonara.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { calories: 520, protein: "22g" },
    ingredients: ["spaghetti", "bacon", "eggs", "cheese", "garlic", "black pepper"]
  },
  {
    id: 5,
    title: "Margherita Pizza",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { calories: 320, protein: "14g" },
    ingredients: ["flour", "tomato", "mozzarella", "basil", "olive oil"]
  },
  {
    id: 6,
    title: "Chicken Parmigiana",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 50,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { calories: 580, protein: "35g" },
    ingredients: ["chicken", "tomato sauce", "mozzarella", "parmesan", "breadcrumbs"]
  },

  // Chinese Cuisine
  {
    id: 7,
    title: "Chicken Fried Rice",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["chinese"],
    nutrition: { calories: 380, protein: "20g" },
    ingredients: ["rice", "chicken", "eggs", "vegetables", "soy sauce", "garlic"]
  },
  {
    id: 8,
    title: "Vegetable Spring Rolls",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 6,
    cuisines: ["chinese"],
    nutrition: { calories: 150, protein: "5g" },
    ingredients: ["cabbage", "carrots", "spring roll wrapper", "soy sauce", "ginger"]
  },
  {
    id: 9,
    title: "Sweet and Sour Pork",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 35,
    servings: 4,
    cuisines: ["chinese"],
    nutrition: { calories: 450, protein: "28g" },
    ingredients: ["pork", "pineapple", "bell pepper", "onion", "vinegar", "sugar"]
  },

  // Mexican Cuisine
  {
    id: 10,
    title: "Chicken Tacos",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["mexican"],
    nutrition: { calories: 320, protein: "25g" },
    ingredients: ["chicken", "tortilla", "tomato", "onion", "lettuce", "cheese", "lime"]
  },
  {
    id: 11,
    title: "Vegetarian Quesadilla",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 15,
    servings: 2,
    cuisines: ["mexican"],
    nutrition: { calories: 380, protein: "18g" },
    ingredients: ["tortilla", "cheese", "bell pepper", "onion", "beans"]
  },
  {
    id: 12,
    title: "Beef Enchiladas",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 45,
    servings: 6,
    cuisines: ["mexican"],
    nutrition: { calories: 520, protein: "30g" },
    ingredients: ["beef", "tortilla", "cheese", "onion", "tomato sauce", "spices"]
  },

  // American Cuisine
  {
    id: 13,
    title: "Classic Burger",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["american"],
    nutrition: { calories: 580, protein: "35g" },
    ingredients: ["beef", "bun", "lettuce", "tomato", "onion", "cheese", "pickle"]
  },
  {
    id: 14,
    title: "BBQ Ribs",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 180,
    servings: 4,
    cuisines: ["american"],
    nutrition: { calories: 720, protein: "45g" },
    ingredients: ["pork ribs", "bbq sauce", "onion", "garlic", "spices"]
  },
  {
    id: 15,
    title: "Caesar Salad",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 15,
    servings: 4,
    cuisines: ["american"],
    nutrition: { calories: 250, protein: "8g" },
    ingredients: ["lettuce", "parmesan", "croutons", "caesar dressing", "lemon"]
  },

  // Thai Cuisine
  {
    id: 16,
    title: "Pad Thai",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { calories: 420, protein: "22g" },
    ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "lime", "peanuts"]
  },
  {
    id: 17,
    title: "Green Curry",
    image: "/src/assets/butter-chicken.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { calories: 380, protein: "15g" },
    ingredients: ["coconut milk", "green curry paste", "vegetables", "basil", "lime"]
  },
  {
    id: 18,
    title: "Tom Yum Soup",
    image: "/src/assets/butter-chicken.jpg",
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { calories: 180, protein: "18g" },
    ingredients: ["shrimp", "lemongrass", "lime leaves", "chili", "mushrooms"]
  },

  // French Cuisine
  {
    id: 19,
    title: "Coq au Vin",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 90,
    servings: 4,
    cuisines: ["french"],
    nutrition: { calories: 520, protein: "38g" },
    ingredients: ["chicken", "wine", "onion", "mushrooms", "bacon", "herbs"]
  },
  {
    id: 20,
    title: "Ratatouille",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 45,
    servings: 6,
    cuisines: ["french"],
    nutrition: { calories: 180, protein: "6g" },
    ingredients: ["eggplant", "zucchini", "tomato", "bell pepper", "onion", "herbs"]
  },

  // Japanese Cuisine
  {
    id: 21,
    title: "Chicken Teriyaki",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["japanese"],
    nutrition: { calories: 420, protein: "32g" },
    ingredients: ["chicken", "soy sauce", "mirin", "sugar", "garlic", "ginger"]
  },
  {
    id: 22,
    title: "Vegetable Sushi",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: true,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["japanese"],
    nutrition: { calories: 280, protein: "8g" },
    ingredients: ["rice", "nori", "cucumber", "avocado", "carrot", "wasabi"]
  },

  // Korean Cuisine
  {
    id: 23,
    title: "Bibimbap",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: true,
    readyInMinutes: 40,
    servings: 4,
    cuisines: ["korean"],
    nutrition: { calories: 450, protein: "16g" },
    ingredients: ["rice", "vegetables", "egg", "gochujang", "sesame oil"]
  },
  {
    id: 24,
    title: "Korean BBQ Beef",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["korean"],
    nutrition: { calories: 520, protein: "35g" },
    ingredients: ["beef", "soy sauce", "garlic", "pear", "sesame oil", "ginger"]
  },

  // Mediterranean Cuisine
  {
    id: 25,
    title: "Greek Salad",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 15,
    servings: 4,
    cuisines: ["mediterranean", "greek"],
    nutrition: { calories: 220, protein: "8g" },
    ingredients: ["tomato", "cucumber", "feta", "olives", "onion", "olive oil"]
  },
  {
    id: 26,
    title: "Hummus with Pita",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 10,
    servings: 6,
    cuisines: ["mediterranean", "middle eastern"],
    nutrition: { calories: 180, protein: "8g" },
    ingredients: ["chickpeas", "tahini", "lemon", "garlic", "olive oil", "pita"]
  },

  // Spanish Cuisine
  {
    id: 27,
    title: "Paella",
    image: "/src/assets/fried-rice.jpg",
    vegetarian: false,
    readyInMinutes: 60,
    servings: 6,
    cuisines: ["spanish"],
    nutrition: { calories: 480, protein: "28g" },
    ingredients: ["rice", "seafood", "chicken", "saffron", "tomato", "bell pepper"]
  },
  {
    id: 28,
    title: "Patatas Bravas",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["spanish"],
    nutrition: { calories: 320, protein: "6g" },
    ingredients: ["potatoes", "tomato sauce", "garlic", "paprika", "olive oil"]
  },

  // Brazilian Cuisine
  {
    id: 29,
    title: "Feijoada",
    image: "/src/assets/hero-food.jpg",
    vegetarian: false,
    readyInMinutes: 120,
    servings: 6,
    cuisines: ["brazilian"],
    nutrition: { calories: 580, protein: "32g" },
    ingredients: ["black beans", "pork", "beef", "sausage", "onion", "garlic"]
  },
  {
    id: 30,
    title: "Acai Bowl",
    image: "/src/assets/hero-food.jpg",
    vegetarian: true,
    readyInMinutes: 10,
    servings: 2,
    cuisines: ["brazilian"],
    nutrition: { calories: 280, protein: "8g" },
    ingredients: ["acai", "banana", "granola", "berries", "honey"]
  }
];