// This is a mock service that returns traditional dishes associated with different countries.
const countryFoods = {
  india: [
    { name: "Butter Chicken", description: "Creamy tomato-based curry", icon: "🍛" },
    { name: "Masala Dosa", description: "Crispy crepe with potato filling", icon: "🥞" },
    { name: "Biryani", description: "Fragrant spiced rice with meat/veg", icon: "🍲" }
  ],
  usa: [
    { name: "Hamburger", description: "Classic grilled beef patty", icon: "🍔" },
    { name: "Apple Pie", description: "Traditional sweet fruit pie", icon: "🥧" },
    { name: "Clam Chowder", description: "Creamy seafood soup", icon: "🥣" }
  ],
  uk: [
    { name: "Fish and Chips", description: "Fried fish with thick-cut fries", icon: "🐟" },
    { name: "Shepherd's Pie", description: "Minced meat topped with mash", icon: "🥧" },
    { name: "Full English", description: "Traditional hearty breakfast", icon: "🍳" }
  ],
  france: [
    { name: "Ratatouille", description: "Stewed vegetable medley", icon: "🥘" },
    { name: "Croissant", description: "Buttery, flaky pastry", icon: "🥐" },
    { name: "Coq au Vin", description: "Chicken braised in red wine", icon: "🍗" }
  ],
  default: [
    { name: "Pizza", description: "Italian dough with toppings", icon: "🍕" },
    { name: "Sushi", description: "Japanese rice and seafood", icon: "🍣" },
    { name: "Tacos", description: "Mexican corn tortilla with filling", icon: "🌮" }
  ]
};

export const getFoodByCountry = (countryName) => {
  if (!countryName) return countryFoods.default;
  const normalizedCountry = countryName.toLowerCase().trim();
  return countryFoods[normalizedCountry] || countryFoods.default;
};
