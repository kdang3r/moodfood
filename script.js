// Recipe database organized by mood
const recipes = {
    happy: [
        {
            name: "Rainbow Pasta Salad",
            description: "A vibrant, colorful pasta salad that's as fun to make as it is to eat! Perfect for bringing a smile to your face.",
            time: "20 minutes",
            ingredients: [
                "1 lb tri-color rotini pasta",
                "1 cup cherry tomatoes, halved",
                "1 yellow bell pepper, diced",
                "1 red bell pepper, diced",
                "1/2 cup black olives",
                "1/2 cup feta cheese, crumbled",
                "1/4 cup red onion, diced",
                "3 tbsp olive oil",
                "2 tbsp lemon juice",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cook pasta according to package directions, then rinse with cold water",
                "In a large bowl, combine pasta with all vegetables",
                "Whisk together olive oil, lemon juice, salt, and pepper",
                "Pour dressing over pasta and toss to combine",
                "Add feta cheese and gently mix",
                "Chill for at least 30 minutes before serving"
            ]
        },
        {
            name: "Sunshine Smoothie Bowl",
            description: "A bright and cheerful smoothie bowl topped with fresh fruits that will brighten any day!",
            time: "10 minutes",
            ingredients: [
                "2 frozen bananas",
                "1 cup frozen mango",
                "1/2 cup orange juice",
                "1/4 cup Greek yogurt",
                "1 tbsp honey",
                "Fresh berries for topping",
                "Granola for topping",
                "Coconut flakes for topping"
            ],
            instructions: [
                "Blend frozen bananas, mango, orange juice, yogurt, and honey until smooth",
                "Pour into a bowl",
                "Top with fresh berries, granola, and coconut flakes",
                "Serve immediately and enjoy the sunshine!"
            ]
        },
        {
            name: "Colorful Veggie Stir-Fry",
            description: "A quick and cheerful stir-fry packed with colorful vegetables that's both healthy and delicious!",
            time: "15 minutes",
            ingredients: [
                "2 tbsp sesame oil",
                "1 red bell pepper, sliced",
                "1 yellow bell pepper, sliced",
                "1 cup snap peas",
                "1 cup carrots, julienned",
                "1 cup purple cabbage, shredded",
                "2 cloves garlic, minced",
                "1 tbsp ginger, grated",
                "3 tbsp soy sauce",
                "1 tbsp honey",
                "Sesame seeds for garnish"
            ],
            instructions: [
                "Heat sesame oil in a large pan over high heat",
                "Add bell peppers, snap peas, and carrots, stir-fry for 3 minutes",
                "Add cabbage, garlic, and ginger, cook for 2 more minutes",
                "Mix soy sauce and honey, pour over vegetables",
                "Toss everything together and cook for 1 minute",
                "Garnish with sesame seeds and serve over rice"
            ]
        }
    ],
    cozy: [
        {
            name: "Creamy Tomato Soup",
            description: "A warm, comforting bowl of creamy tomato soup that feels like a hug in a bowl. Perfect for chilly days.",
            time: "30 minutes",
            ingredients: [
                "2 tbsp butter",
                "1 onion, diced",
                "2 cloves garlic, minced",
                "1 can (28 oz) crushed tomatoes",
                "2 cups vegetable broth",
                "1/2 cup heavy cream",
                "1 tsp sugar",
                "1 tsp dried basil",
                "Salt and pepper to taste",
                "Fresh basil for garnish"
            ],
            instructions: [
                "Melt butter in a large pot over medium heat",
                "Add onion and cook until soft, about 5 minutes",
                "Add garlic and cook for 1 minute",
                "Add tomatoes, broth, sugar, and basil",
                "Simmer for 20 minutes",
                "Blend until smooth (or use immersion blender)",
                "Stir in cream and season with salt and pepper",
                "Garnish with fresh basil and serve hot"
            ]
        },
        {
            name: "Classic Mac and Cheese",
            description: "The ultimate comfort food - creamy, cheesy, and absolutely irresistible. Pure coziness in every bite.",
            time: "25 minutes",
            ingredients: [
                "1 lb elbow macaroni",
                "4 tbsp butter",
                "1/4 cup all-purpose flour",
                "2 cups whole milk",
                "2 cups shredded cheddar cheese",
                "1 cup shredded Gruyère cheese",
                "1/2 tsp salt",
                "1/4 tsp black pepper",
                "1/4 tsp paprika",
                "1/2 cup breadcrumbs (optional)"
            ],
            instructions: [
                "Cook macaroni according to package directions",
                "Melt butter in a large saucepan over medium heat",
                "Whisk in flour and cook for 1 minute",
                "Gradually whisk in milk until smooth",
                "Cook, stirring constantly, until thickened",
                "Remove from heat and stir in cheeses until melted",
                "Season with salt, pepper, and paprika",
                "Mix in cooked pasta",
                "Optional: Top with breadcrumbs and broil for 2 minutes"
            ]
        },
        {
            name: "Chicken Pot Pie",
            description: "A hearty, warm pot pie with tender chicken and vegetables in a rich, creamy sauce. The definition of comfort food.",
            time: "60 minutes",
            ingredients: [
                "2 cups cooked chicken, diced",
                "1 cup frozen mixed vegetables",
                "1/3 cup butter",
                "1/3 cup flour",
                "1/2 cup onion, diced",
                "1 3/4 cups chicken broth",
                "2/3 cup milk",
                "Salt and pepper to taste",
                "1 pie crust (top and bottom)"
            ],
            instructions: [
                "Preheat oven to 425°F",
                "Melt butter in a large skillet, add onion and cook until soft",
                "Stir in flour, then gradually add broth and milk",
                "Cook until thickened, then add chicken and vegetables",
                "Season with salt and pepper",
                "Pour into pie crust, cover with top crust",
                "Bake for 30-35 minutes until golden brown",
                "Let cool for 10 minutes before serving"
            ]
        }
    ],
    energetic: [
        {
            name: "Power Green Smoothie",
            description: "A nutrient-packed smoothie that will give you the energy boost you need to power through your day!",
            time: "5 minutes",
            ingredients: [
                "2 cups spinach",
                "1 banana",
                "1/2 cup Greek yogurt",
                "1/2 cup pineapple chunks",
                "1 tbsp chia seeds",
                "1 cup almond milk",
                "1 tsp honey",
                "Ice cubes"
            ],
            instructions: [
                "Add all ingredients to a blender",
                "Blend until smooth and creamy",
                "Pour into a glass and enjoy immediately",
                "Feel the energy boost!"
            ]
        },
        {
            name: "Quinoa Power Bowl",
            description: "A protein-packed bowl with quinoa, fresh vegetables, and a zesty dressing that will fuel your active lifestyle.",
            time: "25 minutes",
            ingredients: [
                "1 cup quinoa, cooked",
                "1 cup chickpeas, roasted",
                "1 cup cherry tomatoes, halved",
                "1 cucumber, diced",
                "1/2 cup feta cheese",
                "1/4 cup red onion, diced",
                "2 tbsp olive oil",
                "1 tbsp lemon juice",
                "Fresh herbs (parsley, mint)",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cook quinoa according to package directions and let cool",
                "Roast chickpeas at 400°F for 20 minutes until crispy",
                "Combine quinoa with all vegetables",
                "Whisk together olive oil and lemon juice for dressing",
                "Toss everything together",
                "Top with feta cheese and fresh herbs",
                "Season with salt and pepper"
            ]
        },
        {
            name: "Energizing Overnight Oats",
            description: "Prepare these the night before for a quick, energizing breakfast that's ready when you are!",
            time: "5 minutes (plus overnight)",
            ingredients: [
                "1/2 cup rolled oats",
                "1/2 cup almond milk",
                "1/4 cup Greek yogurt",
                "1 tbsp chia seeds",
                "1 tbsp almond butter",
                "1 tsp honey",
                "Fresh berries",
                "Sliced almonds"
            ],
            instructions: [
                "Mix oats, milk, yogurt, chia seeds, almond butter, and honey",
                "Stir until well combined",
                "Cover and refrigerate overnight",
                "In the morning, top with fresh berries and sliced almonds",
                "Enjoy cold or at room temperature"
            ]
        }
    ],
    comforting: [
        {
            name: "Classic Beef Stew",
            description: "A hearty, slow-cooked stew with tender beef and vegetables that warms you from the inside out.",
            time: "2 hours",
            ingredients: [
                "2 lbs beef stew meat, cubed",
                "2 tbsp olive oil",
                "1 onion, diced",
                "3 carrots, sliced",
                "2 potatoes, cubed",
                "2 cups beef broth",
                "1 cup red wine",
                "2 tbsp tomato paste",
                "2 bay leaves",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Heat oil in a large Dutch oven, brown beef on all sides",
                "Remove beef and add onion, cook until soft",
                "Add carrots and potatoes, cook for 5 minutes",
                "Return beef to pot, add broth, wine, and tomato paste",
                "Add bay leaves, salt, and pepper",
                "Simmer covered for 1.5 hours until meat is tender",
                "Remove bay leaves and serve hot"
            ]
        },
        {
            name: "Homemade Chicken Noodle Soup",
            description: "The ultimate comfort food - warm, soothing, and healing. Perfect for when you need a little TLC.",
            time: "45 minutes",
            ingredients: [
                "1 lb chicken breast, diced",
                "2 tbsp olive oil",
                "1 onion, diced",
                "3 carrots, sliced",
                "3 celery stalks, sliced",
                "8 cups chicken broth",
                "2 cups egg noodles",
                "1 tsp dried thyme",
                "Salt and pepper to taste",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Heat oil in a large pot, cook chicken until no longer pink",
                "Add onion, carrots, and celery, cook for 5 minutes",
                "Add broth and bring to a boil",
                "Add noodles and thyme, cook according to package directions",
                "Season with salt and pepper",
                "Garnish with fresh parsley and serve hot"
            ]
        },
        {
            name: "Warm Apple Crumble",
            description: "A warm, cinnamon-spiced apple crumble that's like a warm hug for your taste buds. Best served with vanilla ice cream.",
            time: "45 minutes",
            ingredients: [
                "6 apples, peeled and sliced",
                "1/2 cup sugar",
                "1 tsp cinnamon",
                "1 cup flour",
                "1/2 cup brown sugar",
                "1/2 cup butter, cold and cubed",
                "1/2 cup rolled oats",
                "Vanilla ice cream for serving"
            ],
            instructions: [
                "Preheat oven to 375°F",
                "Toss apples with sugar and cinnamon, place in baking dish",
                "Mix flour, brown sugar, butter, and oats until crumbly",
                "Sprinkle crumble mixture over apples",
                "Bake for 35-40 minutes until golden and bubbly",
                "Serve warm with vanilla ice cream"
            ]
        }
    ],
    romantic: [
        {
            name: "Seared Salmon with Asparagus",
            description: "An elegant, restaurant-quality dish that's surprisingly easy to make. Perfect for a romantic dinner for two.",
            time: "25 minutes",
            ingredients: [
                "2 salmon fillets",
                "1 lb asparagus, trimmed",
                "2 tbsp olive oil",
                "2 cloves garlic, minced",
                "1 lemon, juiced",
                "2 tbsp butter",
                "Salt and pepper to taste",
                "Fresh dill for garnish"
            ],
            instructions: [
                "Season salmon with salt and pepper",
                "Heat oil in a large skillet, sear salmon skin-side up for 4 minutes",
                "Flip and cook for 3-4 more minutes",
                "Remove salmon, add asparagus to the same pan",
                "Cook asparagus for 5 minutes, add garlic",
                "Add butter and lemon juice, toss asparagus",
                "Serve salmon over asparagus, garnish with dill"
            ]
        },
        {
            name: "Chocolate Lava Cakes",
            description: "Decadent, warm chocolate cakes with a gooey center. The perfect romantic dessert to share.",
            time: "20 minutes",
            ingredients: [
                "4 oz dark chocolate",
                "1/2 cup butter",
                "2 eggs",
                "2 egg yolks",
                "1/4 cup sugar",
                "2 tbsp flour",
                "Powdered sugar for dusting",
                "Fresh berries for serving"
            ],
            instructions: [
                "Preheat oven to 425°F",
                "Melt chocolate and butter together",
                "Whisk eggs, yolks, and sugar until pale",
                "Fold in chocolate mixture and flour",
                "Pour into 4 ramekins",
                "Bake for 12-14 minutes until edges are set",
                "Dust with powdered sugar and serve immediately with berries"
            ]
        },
        {
            name: "Creamy Risotto with Mushrooms",
            description: "A luxurious, creamy risotto that's elegant and impressive. Perfect for a special romantic evening.",
            time: "35 minutes",
            ingredients: [
                "1 1/2 cups Arborio rice",
                "4 cups warm chicken or vegetable broth",
                "1/2 cup white wine",
                "1 lb mixed mushrooms, sliced",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "1/2 cup Parmesan cheese",
                "2 tbsp butter",
                "2 tbsp olive oil",
                "Fresh thyme",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Heat oil in a large pan, sauté mushrooms until golden, set aside",
                "In the same pan, cook onion until soft, add garlic",
                "Add rice and toast for 2 minutes",
                "Add wine and stir until absorbed",
                "Add broth one ladle at a time, stirring constantly",
                "Continue until rice is creamy and al dente (about 20 minutes)",
                "Stir in mushrooms, butter, and Parmesan",
                "Season with salt, pepper, and fresh thyme"
            ]
        }
    ],
    adventurous: [
        {
            name: "Thai Green Curry",
            description: "A bold, aromatic curry that will take your taste buds on an adventure. Spicy, flavorful, and exotic!",
            time: "30 minutes",
            ingredients: [
                "1 lb chicken or tofu, cubed",
                "2 tbsp green curry paste",
                "1 can coconut milk",
                "1 eggplant, cubed",
                "1 bell pepper, sliced",
                "1/4 cup Thai basil",
                "2 tbsp fish sauce",
                "1 tbsp brown sugar",
                "1 lime, juiced",
                "Jasmine rice for serving"
            ],
            instructions: [
                "Heat a large pan, add curry paste and cook for 1 minute",
                "Add half the coconut milk and bring to a simmer",
                "Add chicken/tofu and cook for 5 minutes",
                "Add remaining coconut milk, eggplant, and bell pepper",
                "Simmer for 10 minutes until vegetables are tender",
                "Stir in fish sauce, sugar, and lime juice",
                "Garnish with Thai basil and serve over jasmine rice"
            ]
        },
        {
            name: "Korean Bibimbap",
            description: "A colorful Korean rice bowl with marinated vegetables and a fried egg. An exciting mix of flavors and textures!",
            time: "40 minutes",
            ingredients: [
                "2 cups cooked rice",
                "1 carrot, julienned",
                "1 zucchini, julienned",
                "1 cup spinach",
                "1 cup bean sprouts",
                "1/2 lb beef, thinly sliced",
                "2 eggs",
                "2 tbsp gochujang",
                "1 tbsp sesame oil",
                "2 cloves garlic, minced",
                "Soy sauce and sugar for marinade"
            ],
            instructions: [
                "Marinate beef with soy sauce, sugar, and garlic",
                "Sauté each vegetable separately with sesame oil",
                "Cook beef until done",
                "Fry eggs sunny-side up",
                "Arrange rice in bowls, top with vegetables and beef",
                "Place egg on top, drizzle with gochujang and sesame oil",
                "Mix everything together before eating"
            ]
        },
        {
            name: "Moroccan Tagine",
            description: "A fragrant, spiced Moroccan stew with tender meat and dried fruits. A culinary journey to North Africa!",
            time: "1.5 hours",
            ingredients: [
                "2 lbs lamb or chicken, cubed",
                "1 onion, diced",
                "2 cloves garlic, minced",
                "1 tsp ground cumin",
                "1 tsp ground coriander",
                "1 tsp ground cinnamon",
                "1/2 tsp ground ginger",
                "1/2 cup dried apricots",
                "1/2 cup dates, pitted",
                "2 cups chicken broth",
                "1/4 cup almonds, toasted",
                "Fresh cilantro for garnish"
            ],
            instructions: [
                "Heat oil in a large pot, brown meat on all sides",
                "Add onion and garlic, cook until soft",
                "Add all spices and cook for 1 minute",
                "Add broth, bring to a boil, then simmer for 1 hour",
                "Add dried fruits and cook for 15 more minutes",
                "Garnish with almonds and cilantro",
                "Serve with couscous or rice"
            ]
        }
    ],
    relaxed: [
        {
            name: "Mediterranean Quinoa Bowl",
            description: "A light, fresh bowl inspired by the Mediterranean. Simple, healthy, and perfectly relaxing.",
            time: "20 minutes",
            ingredients: [
                "1 cup quinoa, cooked",
                "1 cup cherry tomatoes, halved",
                "1 cucumber, diced",
                "1/2 cup Kalamata olives",
                "1/2 cup feta cheese",
                "1/4 cup red onion, diced",
                "3 tbsp olive oil",
                "1 tbsp lemon juice",
                "Fresh oregano",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cook quinoa according to package directions and let cool",
                "Combine quinoa with all vegetables",
                "Whisk together olive oil and lemon juice",
                "Toss everything together",
                "Top with feta cheese and fresh oregano",
                "Season with salt and pepper",
                "Enjoy at room temperature"
            ]
        },
        {
            name: "Simple Caprese Salad",
            description: "Fresh, simple, and elegant. Just a few quality ingredients that speak for themselves.",
            time: "10 minutes",
            ingredients: [
                "4 large tomatoes, sliced",
                "1 lb fresh mozzarella, sliced",
                "1/4 cup fresh basil leaves",
                "3 tbsp extra virgin olive oil",
                "1 tbsp balsamic vinegar",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Arrange tomato and mozzarella slices on a platter",
                "Tuck fresh basil leaves between slices",
                "Drizzle with olive oil and balsamic vinegar",
                "Season with salt and pepper",
                "Let sit for 10 minutes before serving",
                "Enjoy the simplicity!"
            ]
        },
        {
            name: "Herbal Tea and Light Snacks",
            description: "Sometimes the most relaxing meal is a simple spread of light, fresh foods with a warm cup of tea.",
            time: "5 minutes",
            ingredients: [
                "Your favorite herbal tea",
                "Fresh fruit (berries, grapes, apple slices)",
                "Mixed nuts",
                "Cheese and crackers",
                "Dark chocolate squares",
                "Honey for tea"
            ],
            instructions: [
                "Brew a pot of your favorite herbal tea",
                "Arrange fresh fruit on a plate",
                "Set out a small bowl of mixed nuts",
                "Arrange cheese and crackers",
                "Add a few squares of dark chocolate",
                "Pour tea, add honey if desired",
                "Take your time and enjoy slowly"
            ]
        }
    ],
    celebratory: [
        {
            name: "Beef Wellington",
            description: "An impressive, elegant dish perfect for celebrations. Tender beef wrapped in puff pastry - absolutely show-stopping!",
            time: "2 hours",
            ingredients: [
                "2 lb beef tenderloin",
                "1 lb puff pastry",
                "8 oz mushrooms, finely chopped",
                "2 tbsp butter",
                "4 slices prosciutto",
                "2 tbsp Dijon mustard",
                "1 egg, beaten",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Season and sear beef on all sides, let cool",
                "Sauté mushrooms until dry, season and cool",
                "Roll out pastry, layer prosciutto, then mushrooms",
                "Brush beef with mustard, place on mushroom layer",
                "Wrap tightly in pastry, seal edges",
                "Brush with egg wash, score top",
                "Bake at 400°F for 25-30 minutes until golden",
                "Rest for 10 minutes before slicing"
            ]
        },
        {
            name: "Champagne Risotto with Lobster",
            description: "A luxurious, celebratory risotto made with champagne and topped with succulent lobster. Pure elegance!",
            time: "40 minutes",
            ingredients: [
                "1 1/2 cups Arborio rice",
                "1 cup champagne",
                "4 cups warm seafood or chicken broth",
                "2 lobster tails, cooked and chopped",
                "1 shallot, diced",
                "1/2 cup heavy cream",
                "1/2 cup Parmesan cheese",
                "2 tbsp butter",
                "Fresh chives",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Cook shallot in butter until soft",
                "Add rice and toast for 2 minutes",
                "Add champagne and stir until absorbed",
                "Add broth one ladle at a time, stirring constantly",
                "Continue until rice is creamy (about 20 minutes)",
                "Stir in cream, Parmesan, and lobster",
                "Season with salt and pepper",
                "Garnish with fresh chives and serve immediately"
            ]
        },
        {
            name: "Triple Chocolate Layer Cake",
            description: "A decadent, show-stopping chocolate cake with three layers of chocolate goodness. Perfect for any celebration!",
            time: "1.5 hours",
            ingredients: [
                "2 cups flour",
                "2 cups sugar",
                "3/4 cup cocoa powder",
                "2 tsp baking soda",
                "1 tsp salt",
                "2 eggs",
                "1 cup buttermilk",
                "1 cup vegetable oil",
                "1 cup hot coffee",
                "Chocolate buttercream frosting",
                "Chocolate ganache",
                "Fresh berries for garnish"
            ],
            instructions: [
                "Preheat oven to 350°F, prepare 3 cake pans",
                "Mix dry ingredients in a large bowl",
                "Add eggs, buttermilk, and oil, mix well",
                "Stir in hot coffee (batter will be thin)",
                "Divide into 3 pans, bake for 25-30 minutes",
                "Cool completely, then frost between layers",
                "Cover with ganache and garnish with berries",
                "Celebrate with a slice!"
            ]
        }
    ]
};

let currentMood = null;
let currentRecipeIndex = 0;

// Get all mood buttons
const moodButtons = document.querySelectorAll('.mood-btn');
const recipeSection = document.getElementById('recipeSection');
const recipeName = document.getElementById('recipeName');
const recipeMood = document.getElementById('recipeMood');
const recipeTime = document.getElementById('recipeTime');
const recipeDescription = document.getElementById('recipeDescription');
const recipeIngredients = document.getElementById('recipeIngredients');
const recipeInstructions = document.getElementById('recipeInstructions');
const newRecipeBtn = document.getElementById('newRecipeBtn');

// Add event listeners to mood buttons
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.getAttribute('data-mood');
        selectMood(mood);
    });
});

// Function to select a mood and show a recipe
function selectMood(mood) {
    currentMood = mood;
    currentRecipeIndex = Math.floor(Math.random() * recipes[mood].length);
    displayRecipe();
    recipeSection.style.display = 'block';
    
    // Scroll to recipe section
    recipeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Function to display the current recipe
function displayRecipe() {
    if (!currentMood) return;
    
    const recipe = recipes[currentMood][currentRecipeIndex];
    
    recipeName.textContent = recipe.name;
    recipeMood.textContent = currentMood.charAt(0).toUpperCase() + currentMood.slice(1);
    recipeTime.textContent = recipe.time;
    recipeDescription.textContent = recipe.description;
    
    // Clear and populate ingredients
    recipeIngredients.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        recipeIngredients.appendChild(li);
    });
    
    // Clear and populate instructions
    recipeInstructions.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        recipeInstructions.appendChild(li);
    });
}

// Add event listener to new recipe button
newRecipeBtn.addEventListener('click', () => {
    if (!currentMood) return;
    
    // Get a different random recipe for the same mood
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * recipes[currentMood].length);
    } while (newIndex === currentRecipeIndex && recipes[currentMood].length > 1);
    
    currentRecipeIndex = newIndex;
    displayRecipe();
    
    // Add a subtle animation
    recipeSection.style.animation = 'none';
    setTimeout(() => {
        recipeSection.style.animation = 'fadeIn 0.5s ease';
    }, 10);
});

