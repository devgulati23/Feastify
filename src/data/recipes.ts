import butterChicken from "@/assets/butter-chicken.jpg";
import vegetableBiryani from "@/assets/vegetable-biryani.jpg";
import paneerTikka from "@/assets/paneer-tikka-masala.jpg";
import pastaCarbonara from "@/assets/pasta-carbonara.jpg";
import margheritaPizza from "@/assets/margherita-pizza.jpg";
import chickenParmigiana from "@/assets/chicken-parmigiana.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import springRolls from "@/assets/spring-rolls.jpg";
import sweetSourPork from "@/assets/sweet-sour-pork.jpg";
import chickenTacos from "@/assets/chicken-tacos.jpg";
import quesadilla from "@/assets/quesadilla.jpg";
import beefEnchiladas from "@/assets/beef-enchiladas.jpg";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqRibs from "@/assets/bbq-ribs.jpg";
import caesarSalad from "@/assets/caesar-salad.jpg";
import padThai from "@/assets/pad-thai.jpg";
import greenCurry from "@/assets/green-curry.jpg";
import tomYumSoup from "@/assets/tom-yum-soup.jpg";
import coqAuVin from "@/assets/coq-au-vin.jpg";
import ratatouille from "@/assets/ratatouille.jpg";
import chickenTeriyaki from "@/assets/chicken-teriyaki.jpg";
import vegetableSushi from "@/assets/vegetable-sushi.jpg";
import bibimbap from "@/assets/bibimbap.jpg";
import koreanBbqBeef from "@/assets/korean-bbq-beef.jpg";
import greekSalad from "@/assets/greek-salad.jpg";
import hummusPita from "@/assets/hummus-pita.jpg";
import paella from "@/assets/paella.jpg";
import patatasBravas from "@/assets/patatas-bravas.jpg";
import feijoada from "@/assets/feijoada.jpg";
import acaiBowl from "@/assets/acai-bowl.jpg";

export const hardcodedRecipes = [
  // Indian Cuisine
  {
    id: 1,
    title: "Butter Chicken",
    image: butterChicken,
    vegetarian: false,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["indian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 420, unit: "kcal" },
        { name: "Protein", amount: 25, unit: "g" }
      ]
    },
    ingredients: ["chicken", "tomato", "cream", "onion", "garlic", "ginger", "spices"],
    extendedIngredients: [
      { id: 1, original: "500g chicken breast, cubed" },
      { id: 2, original: "2 large tomatoes, chopped" },
      { id: 3, original: "200ml heavy cream" },
      { id: 4, original: "1 large onion, diced" },
      { id: 5, original: "3 cloves garlic, minced" },
      { id: 6, original: "1 inch ginger, grated" },
      { id: 7, original: "2 tsp garam masala" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Heat oil in a pan and cook chicken until golden brown." },
        { number: 2, step: "Add onions, garlic, and ginger. Cook until fragrant." },
        { number: 3, step: "Add tomatoes and spices. Cook until sauce thickens." },
        { number: 4, step: "Stir in cream and simmer for 5 minutes. Serve hot." }
      ]
    }],
    summary: "A creamy and flavorful Indian curry with tender chicken in a rich tomato-based sauce."
  },
  {
    id: 2,
    title: "Vegetable Biryani",
    image: vegetableBiryani,
    vegetarian: true,
    readyInMinutes: 60,
    servings: 6,
    cuisines: ["indian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 350, unit: "kcal" },
        { name: "Protein", amount: 12, unit: "g" }
      ]
    },
    ingredients: ["rice", "vegetables", "onion", "spices", "yogurt", "saffron"],
    extendedIngredients: [
      { id: 1, original: "2 cups basmati rice" },
      { id: 2, original: "Mixed vegetables (carrots, peas, beans)" },
      { id: 3, original: "2 large onions, sliced" },
      { id: 4, original: "Biryani spices" },
      { id: 5, original: "1 cup yogurt" },
      { id: 6, original: "Pinch of saffron" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Soak rice for 30 minutes, then boil until 70% cooked." },
        { number: 2, step: "Sauté vegetables with spices until tender." },
        { number: 3, step: "Layer rice and vegetables alternately." },
        { number: 4, step: "Cover and cook on low heat for 45 minutes." }
      ]
    }],
    summary: "A fragrant Indian rice dish layered with spiced vegetables and aromatic basmati rice."
  },
  {
    id: 3,
    title: "Paneer Tikka Masala",
    image: paneerTikka,
    vegetarian: true,
    readyInMinutes: 40,
    servings: 4,
    cuisines: ["indian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 380, unit: "kcal" },
        { name: "Protein", amount: 18, unit: "g" }
      ]
    },
    ingredients: ["paneer", "tomato", "cream", "onion", "spices", "bell pepper"],
    extendedIngredients: [
      { id: 1, original: "400g paneer, cubed" },
      { id: 2, original: "3 large tomatoes" },
      { id: 3, original: "150ml heavy cream" },
      { id: 4, original: "2 onions, diced" },
      { id: 5, original: "Indian spices" },
      { id: 6, original: "1 bell pepper, cubed" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Marinate paneer cubes in yogurt and spices for 30 minutes." },
        { number: 2, step: "Grill paneer until charred on all sides." },
        { number: 3, step: "Prepare masala sauce with tomatoes, onions, and spices." },
        { number: 4, step: "Add grilled paneer to sauce and simmer with cream." }
      ]
    }],
    summary: "Grilled paneer cubes in a rich, creamy tomato-based curry sauce."
  },

  // Italian Cuisine
  {
    id: 4,
    title: "Spaghetti Carbonara",
    image: pastaCarbonara,
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 520, unit: "kcal" },
        { name: "Protein", amount: 22, unit: "g" }
      ]
    },
    ingredients: ["spaghetti", "bacon", "eggs", "cheese", "garlic", "black pepper"],
    extendedIngredients: [
      { id: 1, original: "400g spaghetti pasta" },
      { id: 2, original: "200g bacon, diced" },
      { id: 3, original: "4 large eggs" },
      { id: 4, original: "100g Parmesan cheese, grated" },
      { id: 5, original: "3 cloves garlic, minced" },
      { id: 6, original: "Fresh black pepper to taste" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Cook spaghetti in salted boiling water until al dente." },
        { number: 2, step: "Fry bacon until crispy, add garlic for last minute." },
        { number: 3, step: "Whisk eggs with cheese and black pepper." },
        { number: 4, step: "Toss hot pasta with bacon, then quickly mix in egg mixture off heat." }
      ]
    }],
    summary: "Classic Italian pasta dish with a creamy egg and cheese sauce, crispy bacon, and black pepper."
  },
  {
    id: 5,
    title: "Margherita Pizza",
    image: margheritaPizza,
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 320, unit: "kcal" },
        { name: "Protein", amount: 14, unit: "g" }
      ]
    },
    ingredients: ["flour", "tomato", "mozzarella", "basil", "olive oil"],
    extendedIngredients: [
      { id: 1, original: "300g pizza flour" },
      { id: 2, original: "200g crushed tomatoes" },
      { id: 3, original: "250g fresh mozzarella" },
      { id: 4, original: "Fresh basil leaves" },
      { id: 5, original: "Extra virgin olive oil" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Make pizza dough and let it rise for 1 hour." },
        { number: 2, step: "Roll out dough and spread tomato sauce." },
        { number: 3, step: "Add mozzarella and fresh basil leaves." },
        { number: 4, step: "Bake at 250°C for 10-12 minutes until golden." }
      ]
    }],
    summary: "Classic Italian pizza with tomato sauce, fresh mozzarella, and basil."
  },
  {
    id: 6,
    title: "Chicken Parmigiana",
    image: chickenParmigiana,
    vegetarian: false,
    readyInMinutes: 50,
    servings: 4,
    cuisines: ["italian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 580, unit: "kcal" },
        { name: "Protein", amount: 35, unit: "g" }
      ]
    },
    ingredients: ["chicken", "tomato sauce", "mozzarella", "parmesan", "breadcrumbs"],
    extendedIngredients: [
      { id: 1, original: "4 chicken breasts" },
      { id: 2, original: "2 cups tomato sauce" },
      { id: 3, original: "200g mozzarella cheese, shredded" },
      { id: 4, original: "100g parmesan cheese, grated" },
      { id: 5, original: "1 cup breadcrumbs" },
      { id: 6, original: "2 eggs, beaten" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Pound chicken breasts to even thickness and season with salt and pepper." },
        { number: 2, step: "Dip chicken in beaten eggs, then coat with breadcrumbs." },
        { number: 3, step: "Fry chicken until golden brown on both sides." },
        { number: 4, step: "Top with tomato sauce and cheeses, then bake at 180°C for 20 minutes." }
      ]
    }],
    summary: "Breaded chicken breast topped with tomato sauce and melted cheese, baked to perfection."
  },

  // Chinese Cuisine
  {
    id: 7,
    title: "Chicken Fried Rice",
    image: friedRice,
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["chinese"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 380, unit: "kcal" },
        { name: "Protein", amount: 20, unit: "g" }
      ]
    },
    ingredients: ["rice", "chicken", "eggs", "vegetables", "soy sauce", "garlic"],
    extendedIngredients: [
      { id: 1, original: "3 cups cooked rice, day-old" },
      { id: 2, original: "300g chicken breast, diced" },
      { id: 3, original: "2 eggs, beaten" },
      { id: 4, original: "1 cup mixed vegetables (peas, carrots, corn)" },
      { id: 5, original: "3 tbsp soy sauce" },
      { id: 6, original: "3 cloves garlic, minced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Heat oil in a wok and scramble the eggs, then set aside." },
        { number: 2, step: "Stir-fry chicken until cooked through, add garlic." },
        { number: 3, step: "Add vegetables and cook for 2 minutes." },
        { number: 4, step: "Add rice, soy sauce, and eggs. Stir-fry until well combined and heated through." }
      ]
    }],
    summary: "Classic Chinese fried rice with chicken, eggs, and vegetables in savory soy sauce."
  },
  {
    id: 8,
    title: "Vegetable Spring Rolls",
    image: springRolls,
    vegetarian: true,
    readyInMinutes: 30,
    servings: 6,
    cuisines: ["chinese"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 150, unit: "kcal" },
        { name: "Protein", amount: 5, unit: "g" }
      ]
    },
    ingredients: ["cabbage", "carrots", "spring roll wrapper", "soy sauce", "ginger"],
    extendedIngredients: [
      { id: 1, original: "2 cups cabbage, shredded" },
      { id: 2, original: "1 cup carrots, julienned" },
      { id: 3, original: "12 spring roll wrappers" },
      { id: 4, original: "2 tbsp soy sauce" },
      { id: 5, original: "1 inch ginger, grated" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Stir-fry vegetables with ginger and soy sauce until tender." },
        { number: 2, step: "Let the filling cool completely." },
        { number: 3, step: "Place filling on spring roll wrapper and roll tightly, sealing edges with water." },
        { number: 4, step: "Deep fry until golden and crispy. Serve with sweet chili sauce." }
      ]
    }],
    summary: "Crispy Chinese spring rolls filled with fresh vegetables and aromatic ginger."
  },
  {
    id: 9,
    title: "Sweet and Sour Pork",
    image: sweetSourPork,
    vegetarian: false,
    readyInMinutes: 35,
    servings: 4,
    cuisines: ["chinese"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 450, unit: "kcal" },
        { name: "Protein", amount: 28, unit: "g" }
      ]
    },
    ingredients: ["pork", "pineapple", "bell pepper", "onion", "vinegar", "sugar"],
    extendedIngredients: [
      { id: 1, original: "500g pork, cubed" },
      { id: 2, original: "1 cup pineapple chunks" },
      { id: 3, original: "2 bell peppers, cubed" },
      { id: 4, original: "1 onion, cubed" },
      { id: 5, original: "3 tbsp rice vinegar" },
      { id: 6, original: "4 tbsp sugar" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Coat pork pieces in cornstarch and deep fry until crispy." },
        { number: 2, step: "Make sauce by combining vinegar, sugar, ketchup, and soy sauce." },
        { number: 3, step: "Stir-fry bell peppers and onions until slightly tender." },
        { number: 4, step: "Add pineapple, sauce, and crispy pork. Toss to coat and serve immediately." }
      ]
    }],
    summary: "Classic Chinese dish with crispy pork in tangy sweet and sour sauce with pineapple."
  },

  // Mexican Cuisine
  {
    id: 10,
    title: "Chicken Tacos",
    image: chickenTacos,
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["mexican"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 320, unit: "kcal" },
        { name: "Protein", amount: 25, unit: "g" }
      ]
    },
    ingredients: ["chicken", "tortilla", "tomato", "onion", "lettuce", "cheese", "lime"],
    extendedIngredients: [
      { id: 1, original: "500g chicken breast, diced" },
      { id: 2, original: "8 corn tortillas" },
      { id: 3, original: "2 tomatoes, diced" },
      { id: 4, original: "1 onion, diced" },
      { id: 5, original: "Lettuce, shredded" },
      { id: 6, original: "100g cheese, shredded" },
      { id: 7, original: "2 limes, cut in wedges" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Season chicken with taco spices and cook in a hot pan until done." },
        { number: 2, step: "Warm tortillas in a dry pan or microwave." },
        { number: 3, step: "Assemble tacos with chicken, lettuce, tomato, onion, and cheese." },
        { number: 4, step: "Serve with lime wedges and your favorite salsa." }
      ]
    }],
    summary: "Flavorful Mexican tacos with seasoned chicken and fresh toppings."
  },
  {
    id: 11,
    title: "Vegetarian Quesadilla",
    image: quesadilla,
    vegetarian: true,
    readyInMinutes: 15,
    servings: 2,
    cuisines: ["mexican"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 380, unit: "kcal" },
        { name: "Protein", amount: 18, unit: "g" }
      ]
    },
    ingredients: ["tortilla", "cheese", "bell pepper", "onion", "beans"],
    extendedIngredients: [
      { id: 1, original: "4 large flour tortillas" },
      { id: 2, original: "200g cheese, shredded" },
      { id: 3, original: "1 bell pepper, sliced" },
      { id: 4, original: "1 onion, sliced" },
      { id: 5, original: "1 cup black beans, cooked" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Sauté bell pepper and onion until softened." },
        { number: 2, step: "Place cheese, vegetables, and beans on one tortilla." },
        { number: 3, step: "Top with another tortilla and cook in a pan until golden and cheese melts." },
        { number: 4, step: "Flip and cook the other side. Cut into wedges and serve with sour cream." }
      ]
    }],
    summary: "Crispy Mexican quesadilla filled with melted cheese, vegetables, and beans."
  },
  {
    id: 12,
    title: "Beef Enchiladas",
    image: beefEnchiladas,
    vegetarian: false,
    readyInMinutes: 45,
    servings: 6,
    cuisines: ["mexican"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 520, unit: "kcal" },
        { name: "Protein", amount: 30, unit: "g" }
      ]
    },
    ingredients: ["beef", "tortilla", "cheese", "onion", "tomato sauce", "spices"],
    extendedIngredients: [
      { id: 1, original: "500g ground beef" },
      { id: 2, original: "12 corn tortillas" },
      { id: 3, original: "300g cheese, shredded" },
      { id: 4, original: "1 onion, diced" },
      { id: 5, original: "2 cups enchilada sauce" },
      { id: 6, original: "Mexican spices" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Brown ground beef with onion and spices." },
        { number: 2, step: "Fill tortillas with beef mixture and roll up." },
        { number: 3, step: "Place seam-side down in baking dish and cover with enchilada sauce." },
        { number: 4, step: "Top with cheese and bake at 180°C for 25 minutes until bubbly." }
      ]
    }],
    summary: "Mexican enchiladas filled with seasoned beef, topped with sauce and melted cheese."
  },

  // American Cuisine
  {
    id: 13,
    title: "Classic Burger",
    image: classicBurger,
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["american"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 580, unit: "kcal" },
        { name: "Protein", amount: 35, unit: "g" }
      ]
    },
    ingredients: ["beef", "bun", "lettuce", "tomato", "onion", "cheese", "pickle"],
    extendedIngredients: [
      { id: 1, original: "600g ground beef" },
      { id: 2, original: "4 burger buns" },
      { id: 3, original: "Lettuce leaves" },
      { id: 4, original: "2 tomatoes, sliced" },
      { id: 5, original: "1 onion, sliced" },
      { id: 6, original: "4 cheese slices" },
      { id: 7, original: "Pickle slices" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Form ground beef into 4 patties and season with salt and pepper." },
        { number: 2, step: "Grill or pan-fry patties to desired doneness." },
        { number: 3, step: "Add cheese slice in last minute of cooking to melt." },
        { number: 4, step: "Toast buns and assemble burgers with lettuce, tomato, onion, pickles, and condiments." }
      ]
    }],
    summary: "Classic American cheeseburger with all the traditional toppings."
  },
  {
    id: 14,
    title: "BBQ Ribs",
    image: bbqRibs,
    vegetarian: false,
    readyInMinutes: 180,
    servings: 4,
    cuisines: ["american"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 720, unit: "kcal" },
        { name: "Protein", amount: 45, unit: "g" }
      ]
    },
    ingredients: ["pork ribs", "bbq sauce", "onion", "garlic", "spices"],
    extendedIngredients: [
      { id: 1, original: "1.5 kg pork ribs" },
      { id: 2, original: "2 cups BBQ sauce" },
      { id: 3, original: "1 onion, sliced" },
      { id: 4, original: "4 cloves garlic, minced" },
      { id: 5, original: "Dry rub spices (paprika, brown sugar, salt, pepper)" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Rub ribs with spice mixture and let marinate for 2 hours." },
        { number: 2, step: "Wrap ribs in foil with onion and garlic, bake at 150°C for 2.5 hours." },
        { number: 3, step: "Unwrap, brush with BBQ sauce, and broil for 10 minutes." },
        { number: 4, step: "Brush with more sauce and serve with extra on the side." }
      ]
    }],
    summary: "Fall-off-the-bone American BBQ ribs with smoky, tangy barbecue sauce."
  },
  {
    id: 15,
    title: "Caesar Salad",
    image: caesarSalad,
    vegetarian: true,
    readyInMinutes: 15,
    servings: 4,
    cuisines: ["american"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 250, unit: "kcal" },
        { name: "Protein", amount: 8, unit: "g" }
      ]
    },
    ingredients: ["lettuce", "parmesan", "croutons", "caesar dressing", "lemon"],
    extendedIngredients: [
      { id: 1, original: "1 large romaine lettuce, chopped" },
      { id: 2, original: "100g parmesan cheese, shaved" },
      { id: 3, original: "1 cup croutons" },
      { id: 4, original: "Caesar dressing" },
      { id: 5, original: "1 lemon, juiced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Wash and chop romaine lettuce into bite-sized pieces." },
        { number: 2, step: "Toss lettuce with Caesar dressing until well coated." },
        { number: 3, step: "Add croutons and toss gently." },
        { number: 4, step: "Top with parmesan shavings and a squeeze of lemon juice." }
      ]
    }],
    summary: "Classic Caesar salad with crisp romaine, parmesan, and crunchy croutons."
  },

  // Thai Cuisine
  {
    id: 16,
    title: "Pad Thai",
    image: padThai,
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 420, unit: "kcal" },
        { name: "Protein", amount: 22, unit: "g" }
      ]
    },
    ingredients: ["rice noodles", "shrimp", "eggs", "bean sprouts", "lime", "peanuts"],
    extendedIngredients: [
      { id: 1, original: "250g rice noodles" },
      { id: 2, original: "300g shrimp, peeled" },
      { id: 3, original: "2 eggs" },
      { id: 4, original: "2 cups bean sprouts" },
      { id: 5, original: "2 limes" },
      { id: 6, original: "1/2 cup roasted peanuts, crushed" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Soak rice noodles in warm water until softened, then drain." },
        { number: 2, step: "Stir-fry shrimp until pink, push to side and scramble eggs." },
        { number: 3, step: "Add noodles and Pad Thai sauce, toss to coat." },
        { number: 4, step: "Add bean sprouts, toss briefly. Serve with lime wedges and crushed peanuts." }
      ]
    }],
    summary: "Thailand's famous stir-fried noodles with shrimp, eggs, and tangy tamarind sauce."
  },
  {
    id: 17,
    title: "Green Curry",
    image: greenCurry,
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 380, unit: "kcal" },
        { name: "Protein", amount: 15, unit: "g" }
      ]
    },
    ingredients: ["coconut milk", "green curry paste", "vegetables", "basil", "lime"],
    extendedIngredients: [
      { id: 1, original: "400ml coconut milk" },
      { id: 2, original: "3 tbsp green curry paste" },
      { id: 3, original: "Mixed vegetables (eggplant, bamboo shoots, bell pepper)" },
      { id: 4, original: "Fresh Thai basil" },
      { id: 5, original: "1 lime, juiced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Heat coconut milk in a pot and stir in green curry paste." },
        { number: 2, step: "Add vegetables and simmer until tender." },
        { number: 3, step: "Season with fish sauce or soy sauce and sugar to taste." },
        { number: 4, step: "Add basil leaves and lime juice before serving with rice." }
      ]
    }],
    summary: "Aromatic Thai green curry with vegetables in creamy coconut milk sauce."
  },
  {
    id: 18,
    title: "Tom Yum Soup",
    image: tomYumSoup,
    vegetarian: false,
    readyInMinutes: 20,
    servings: 4,
    cuisines: ["thai"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 180, unit: "kcal" },
        { name: "Protein", amount: 18, unit: "g" }
      ]
    },
    ingredients: ["shrimp", "lemongrass", "lime leaves", "chili", "mushrooms"],
    extendedIngredients: [
      { id: 1, original: "300g shrimp, peeled" },
      { id: 2, original: "2 stalks lemongrass, bruised" },
      { id: 3, original: "6 kaffir lime leaves" },
      { id: 4, original: "3 Thai chilies" },
      { id: 5, original: "200g mushrooms, sliced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Bring water to boil and add lemongrass, lime leaves, and chilies." },
        { number: 2, step: "Add mushrooms and simmer for 5 minutes." },
        { number: 3, step: "Add shrimp and cook until pink, about 3 minutes." },
        { number: 4, step: "Season with fish sauce, lime juice, and Tom Yum paste. Serve hot." }
      ]
    }],
    summary: "Spicy and sour Thai soup with shrimp, lemongrass, and aromatic herbs."
  },

  // French Cuisine
  {
    id: 19,
    title: "Coq au Vin",
    image: coqAuVin,
    vegetarian: false,
    readyInMinutes: 90,
    servings: 4,
    cuisines: ["french"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 520, unit: "kcal" },
        { name: "Protein", amount: 38, unit: "g" }
      ]
    },
    ingredients: ["chicken", "wine", "onion", "mushrooms", "bacon", "herbs"],
    extendedIngredients: [
      { id: 1, original: "1 whole chicken, cut into pieces" },
      { id: 2, original: "500ml red wine" },
      { id: 3, original: "12 pearl onions" },
      { id: 4, original: "250g mushrooms" },
      { id: 5, original: "150g bacon, diced" },
      { id: 6, original: "Fresh thyme and bay leaves" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Brown chicken pieces in butter, then set aside." },
        { number: 2, step: "Cook bacon, onions, and mushrooms in the same pot." },
        { number: 3, step: "Return chicken to pot, add wine and herbs. Bring to boil." },
        { number: 4, step: "Cover and simmer for 1 hour until chicken is tender. Serve with crusty bread." }
      ]
    }],
    summary: "Classic French chicken braised in red wine with mushrooms and bacon."
  },
  {
    id: 20,
    title: "Ratatouille",
    image: ratatouille,
    vegetarian: true,
    readyInMinutes: 45,
    servings: 6,
    cuisines: ["french"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 180, unit: "kcal" },
        { name: "Protein", amount: 6, unit: "g" }
      ]
    },
    ingredients: ["eggplant", "zucchini", "tomato", "bell pepper", "onion", "herbs"],
    extendedIngredients: [
      { id: 1, original: "1 large eggplant, sliced" },
      { id: 2, original: "2 zucchini, sliced" },
      { id: 3, original: "4 tomatoes, sliced" },
      { id: 4, original: "2 bell peppers, sliced" },
      { id: 5, original: "1 onion, diced" },
      { id: 6, original: "Fresh herbs (thyme, basil)" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Sauté onion in olive oil until soft, add garlic." },
        { number: 2, step: "Spread onion mixture in baking dish." },
        { number: 3, step: "Arrange sliced vegetables in alternating pattern over onions." },
        { number: 4, step: "Drizzle with olive oil, season, and bake at 180°C for 45 minutes." }
      ]
    }],
    summary: "Beautiful French vegetable dish with layered eggplant, zucchini, and tomatoes."
  },

  // Japanese Cuisine
  {
    id: 21,
    title: "Chicken Teriyaki",
    image: chickenTeriyaki,
    vegetarian: false,
    readyInMinutes: 25,
    servings: 4,
    cuisines: ["japanese"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 420, unit: "kcal" },
        { name: "Protein", amount: 32, unit: "g" }
      ]
    },
    ingredients: ["chicken", "soy sauce", "mirin", "sugar", "garlic", "ginger"],
    extendedIngredients: [
      { id: 1, original: "600g chicken thighs" },
      { id: 2, original: "4 tbsp soy sauce" },
      { id: 3, original: "3 tbsp mirin" },
      { id: 4, original: "2 tbsp sugar" },
      { id: 5, original: "2 cloves garlic, minced" },
      { id: 6, original: "1 inch ginger, grated" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Mix soy sauce, mirin, sugar, garlic, and ginger for teriyaki sauce." },
        { number: 2, step: "Pan-fry chicken until golden brown on both sides." },
        { number: 3, step: "Pour teriyaki sauce over chicken and simmer until sauce thickens and coats chicken." },
        { number: 4, step: "Serve over rice with sesame seeds and steamed vegetables." }
      ]
    }],
    summary: "Juicy Japanese chicken glazed with sweet and savory teriyaki sauce."
  },
  {
    id: 22,
    title: "Vegetable Sushi",
    image: vegetableSushi,
    vegetarian: true,
    readyInMinutes: 45,
    servings: 4,
    cuisines: ["japanese"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 280, unit: "kcal" },
        { name: "Protein", amount: 8, unit: "g" }
      ]
    },
    ingredients: ["rice", "nori", "cucumber", "avocado", "carrot", "wasabi"],
    extendedIngredients: [
      { id: 1, original: "2 cups sushi rice, cooked and seasoned" },
      { id: 2, original: "6 nori sheets" },
      { id: 3, original: "1 cucumber, julienned" },
      { id: 4, original: "2 avocados, sliced" },
      { id: 5, original: "1 carrot, julienned" },
      { id: 6, original: "Wasabi and pickled ginger" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Place nori sheet on bamboo mat, spread rice evenly leaving 1 inch at top." },
        { number: 2, step: "Arrange vegetables in a line across center of rice." },
        { number: 3, step: "Roll tightly using bamboo mat, seal edge with water." },
        { number: 4, step: "Cut into 6-8 pieces with sharp wet knife. Serve with soy sauce, wasabi, and ginger." }
      ]
    }],
    summary: "Fresh Japanese vegetable sushi rolls with cucumber, avocado, and carrot."
  },

  // Korean Cuisine
  {
    id: 23,
    title: "Bibimbap",
    image: bibimbap,
    vegetarian: true,
    readyInMinutes: 40,
    servings: 4,
    cuisines: ["korean"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 450, unit: "kcal" },
        { name: "Protein", amount: 16, unit: "g" }
      ]
    },
    ingredients: ["rice", "vegetables", "egg", "gochujang", "sesame oil"],
    extendedIngredients: [
      { id: 1, original: "4 cups cooked rice" },
      { id: 2, original: "Assorted vegetables (spinach, carrots, zucchini, mushrooms, bean sprouts)" },
      { id: 3, original: "4 eggs" },
      { id: 4, original: "Gochujang (Korean chili paste)" },
      { id: 5, original: "Sesame oil" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Cook each vegetable separately with garlic and sesame oil, season lightly." },
        { number: 2, step: "Fry eggs sunny-side up." },
        { number: 3, step: "Place rice in bowls, arrange vegetables in sections around the bowl." },
        { number: 4, step: "Top with fried egg and serve with gochujang. Mix everything together before eating." }
      ]
    }],
    summary: "Korean rice bowl with colorful vegetables, egg, and spicy gochujang sauce."
  },
  {
    id: 24,
    title: "Korean BBQ Beef",
    image: koreanBbqBeef,
    vegetarian: false,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["korean"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 520, unit: "kcal" },
        { name: "Protein", amount: 35, unit: "g" }
      ]
    },
    ingredients: ["beef", "soy sauce", "garlic", "pear", "sesame oil", "ginger"],
    extendedIngredients: [
      { id: 1, original: "600g beef (ribeye or sirloin), thinly sliced" },
      { id: 2, original: "4 tbsp soy sauce" },
      { id: 3, original: "4 cloves garlic, minced" },
      { id: 4, original: "1 Asian pear, grated" },
      { id: 5, original: "2 tbsp sesame oil" },
      { id: 6, original: "1 inch ginger, grated" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Mix soy sauce, garlic, pear, sesame oil, ginger, and sugar for marinade." },
        { number: 2, step: "Marinate beef slices for at least 30 minutes." },
        { number: 3, step: "Grill or pan-fry beef over high heat until caramelized." },
        { number: 4, step: "Garnish with sesame seeds and green onions. Serve with lettuce wraps and rice." }
      ]
    }],
    summary: "Tender Korean bulgogi beef marinated in sweet and savory sauce."
  },

  // Mediterranean Cuisine
  {
    id: 25,
    title: "Greek Salad",
    image: greekSalad,
    vegetarian: true,
    readyInMinutes: 15,
    servings: 4,
    cuisines: ["mediterranean", "greek"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 220, unit: "kcal" },
        { name: "Protein", amount: 8, unit: "g" }
      ]
    },
    ingredients: ["tomato", "cucumber", "feta", "olives", "onion", "olive oil"],
    extendedIngredients: [
      { id: 1, original: "4 tomatoes, cut in wedges" },
      { id: 2, original: "1 cucumber, sliced" },
      { id: 3, original: "200g feta cheese, cubed" },
      { id: 4, original: "1 cup kalamata olives" },
      { id: 5, original: "1 red onion, thinly sliced" },
      { id: 6, original: "Extra virgin olive oil" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Combine tomatoes, cucumber, onion, and olives in a bowl." },
        { number: 2, step: "Add feta cheese cubes on top." },
        { number: 3, step: "Drizzle generously with olive oil and red wine vinegar." },
        { number: 4, step: "Season with oregano, salt, and pepper. Toss gently and serve." }
      ]
    }],
    summary: "Classic Greek salad with fresh vegetables, feta cheese, and olives."
  },
  {
    id: 26,
    title: "Hummus with Pita",
    image: hummusPita,
    vegetarian: true,
    readyInMinutes: 10,
    servings: 6,
    cuisines: ["mediterranean", "middle eastern"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 180, unit: "kcal" },
        { name: "Protein", amount: 8, unit: "g" }
      ]
    },
    ingredients: ["chickpeas", "tahini", "lemon", "garlic", "olive oil", "pita"],
    extendedIngredients: [
      { id: 1, original: "400g cooked chickpeas" },
      { id: 2, original: "3 tbsp tahini" },
      { id: 3, original: "2 lemons, juiced" },
      { id: 4, original: "3 cloves garlic" },
      { id: 5, original: "Extra virgin olive oil" },
      { id: 6, original: "6 pita breads" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Blend chickpeas, tahini, lemon juice, and garlic until smooth." },
        { number: 2, step: "Add water gradually to achieve desired consistency." },
        { number: 3, step: "Transfer to serving plate and make a well in center." },
        { number: 4, step: "Drizzle with olive oil and sprinkle with paprika. Serve with warm pita bread." }
      ]
    }],
    summary: "Creamy Middle Eastern hummus dip served with warm pita bread."
  },

  // Spanish Cuisine
  {
    id: 27,
    title: "Paella",
    image: paella,
    vegetarian: false,
    readyInMinutes: 60,
    servings: 6,
    cuisines: ["spanish"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 480, unit: "kcal" },
        { name: "Protein", amount: 28, unit: "g" }
      ]
    },
    ingredients: ["rice", "seafood", "chicken", "saffron", "tomato", "bell pepper"],
    extendedIngredients: [
      { id: 1, original: "2 cups paella rice" },
      { id: 2, original: "Mixed seafood (shrimp, mussels, squid)" },
      { id: 3, original: "300g chicken, diced" },
      { id: 4, original: "Pinch of saffron" },
      { id: 5, original: "2 tomatoes, grated" },
      { id: 6, original: "2 bell peppers, sliced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Brown chicken in paella pan, then set aside." },
        { number: 2, step: "Sauté bell peppers, add tomatoes and cook until soft." },
        { number: 3, step: "Add rice, saffron, and broth. Arrange chicken and seafood on top." },
        { number: 4, step: "Simmer without stirring for 20-25 minutes until rice is cooked and forms socarrat." }
      ]
    }],
    summary: "Traditional Spanish rice dish with seafood, chicken, and saffron."
  },
  {
    id: 28,
    title: "Patatas Bravas",
    image: patatasBravas,
    vegetarian: true,
    readyInMinutes: 30,
    servings: 4,
    cuisines: ["spanish"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 320, unit: "kcal" },
        { name: "Protein", amount: 6, unit: "g" }
      ]
    },
    ingredients: ["potatoes", "tomato sauce", "garlic", "paprika", "olive oil"],
    extendedIngredients: [
      { id: 1, original: "4 large potatoes, cubed" },
      { id: 2, original: "1 cup tomato sauce" },
      { id: 3, original: "4 cloves garlic, minced" },
      { id: 4, original: "2 tsp smoked paprika" },
      { id: 5, original: "Olive oil for frying" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Fry potato cubes in olive oil until golden and crispy." },
        { number: 2, step: "Make bravas sauce by sautéing garlic, adding tomato sauce and paprika." },
        { number: 3, step: "Season sauce with cayenne pepper for heat." },
        { number: 4, step: "Serve potatoes topped with bravas sauce and aioli." }
      ]
    }],
    summary: "Spanish crispy fried potatoes with spicy tomato sauce and aioli."
  },

  // Brazilian Cuisine
  {
    id: 29,
    title: "Feijoada",
    image: feijoada,
    vegetarian: false,
    readyInMinutes: 120,
    servings: 6,
    cuisines: ["brazilian"],
    nutrition: { 
      nutrients: [
        { name: "Calories", amount: 580, unit: "kcal" },
        { name: "Protein", amount: 32, unit: "g" }
      ]
    },
    ingredients: ["black beans", "pork", "beef", "sausage", "onion", "garlic"],
    extendedIngredients: [
      { id: 1, original: "500g dried black beans" },
      { id: 2, original: "300g pork shoulder" },
      { id: 3, original: "200g beef, cubed" },
      { id: 4, original: "200g smoked sausage" },
      { id: 5, original: "2 onions, diced" },
      { id: 6, original: "6 cloves garlic, minced" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Soak black beans overnight, then drain and rinse." },
        { number: 2, step: "Cook beans with all meats, onion, and garlic for 2 hours until tender." },
        { number: 3, step: "Remove some beans, mash, and return to pot to thicken." },
        { number: 4, step: "Serve over rice with orange slices, farofa, and collard greens." }
      ]
    }],
    summary: "Traditional Brazilian black bean stew with pork, beef, and sausage."
  },
  {
    id: 30,
    title: "Acai Bowl",
    image: acaiBowl,
    vegetarian: true,
    readyInMinutes: 10,
    servings: 2,
    cuisines: ["brazilian"],
    nutrition: { calories: 280, protein: "8g" },
    ingredients: ["acai", "banana", "granola", "berries", "honey"],
    extendedIngredients: [
      { id: 1, original: "100g frozen acai" },
      { id: 2, original: "1 banana, sliced" },
      { id: 3, original: "50g granola" },
      { id: 4, original: "Mixed berries" },
      { id: 5, original: "2 tbsp honey" }
    ],
    analyzedInstructions: [{
      steps: [
        { number: 1, step: "Blend frozen acai with a little water until smooth." },
        { number: 2, step: "Pour into a bowl and top with banana slices." },
        { number: 3, step: "Add granola, berries, and drizzle with honey." },
        { number: 4, step: "Serve immediately while cold." }
      ]
    }],
    summary: "A healthy Brazilian superfood bowl with acai, fruits, and granola."
  }
].map(recipe => ({
  ...recipe,
  // Ensure all recipes have required properties
  extendedIngredients: recipe.extendedIngredients || recipe.ingredients?.map((ing, index) => ({
    id: index + 1,
    original: ing
  })) || [],
  analyzedInstructions: recipe.analyzedInstructions || [{
    steps: [{ number: 1, step: "Recipe instructions not available." }]
  }],
  summary: recipe.summary || "No description available.",
  nutrition: recipe.nutrition || { nutrients: [] }
}));