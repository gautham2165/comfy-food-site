export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  image: string;
  dishes: Dish[];
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVeg: boolean;
  rating: number;
  image?: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Spice Paradise",
    cuisine: "North Indian",
    rating: 4.3,
    deliveryTime: "25-30 mins",
    priceRange: "₹200-400",
    image: "/src/assets/restaurant-1.jpg",
    dishes: [
      {
        id: "1-1",
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken pieces",
        price: 280,
        category: "Main Course",
        isVeg: false,
        rating: 4.5
      },
      {
        id: "1-2", 
        name: "Dal Makhani",
        description: "Rich and creamy black lentils slow-cooked with butter",
        price: 220,
        category: "Main Course",
        isVeg: true,
        rating: 4.4
      },
      {
        id: "1-3",
        name: "Biryani",
        description: "Fragrant basmati rice with spiced meat and saffron",
        price: 350,
        category: "Rice",
        isVeg: false,
        rating: 4.6
      }
    ]
  },
  {
    id: "2",
    name: "Pizza Corner",
    cuisine: "Italian",
    rating: 4.1,
    deliveryTime: "20-25 mins", 
    priceRange: "₹300-600",
    image: "/src/assets/restaurant-2.jpg",
    dishes: [
      {
        id: "2-1",
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella, tomatoes and basil",
        price: 320,
        category: "Pizza",
        isVeg: true,
        rating: 4.2
      },
      {
        id: "2-2",
        name: "Pepperoni Pizza",
        description: "Loaded with spicy pepperoni and cheese",
        price: 450,
        category: "Pizza", 
        isVeg: false,
        rating: 4.3
      },
      {
        id: "2-3",
        name: "Garlic Bread",
        description: "Crispy bread with garlic butter and herbs",
        price: 180,
        category: "Appetizer",
        isVeg: true,
        rating: 4.0
      }
    ]
  },
  {
    id: "3",
    name: "Burger House",
    cuisine: "American",
    rating: 4.0,
    deliveryTime: "15-20 mins",
    priceRange: "₹150-350",
    image: "/src/assets/restaurant-3.jpg",
    dishes: [
      {
        id: "3-1",
        name: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, and special sauce",
        price: 280,
        category: "Burger",
        isVeg: false,
        rating: 4.1
      },
      {
        id: "3-2",
        name: "Veggie Burger",
        description: "Plant-based patty with fresh vegetables",
        price: 220,
        category: "Burger",
        isVeg: true,
        rating: 3.9
      },
      {
        id: "3-3",
        name: "French Fries",
        description: "Crispy golden fries with sea salt",
        price: 120,
        category: "Sides",
        isVeg: true,
        rating: 4.2
      }
    ]
  },
  {
    id: "4",
    name: "Dragon Garden",
    cuisine: "Chinese",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    priceRange: "₹250-500",
    image: "/src/assets/restaurant-1.jpg",
    dishes: [
      {
        id: "4-1",
        name: "Chicken Fried Rice",
        description: "Wok-tossed rice with chicken, vegetables and soy sauce",
        price: 280,
        category: "Chinese",
        isVeg: false,
        rating: 4.3
      },
      {
        id: "4-2",
        name: "Veg Hakka Noodles",
        description: "Stir-fried noodles with fresh vegetables and Chinese spices",
        price: 240,
        category: "Chinese",
        isVeg: true,
        rating: 4.2
      },
      {
        id: "4-3",
        name: "Sweet and Sour Chicken",
        description: "Crispy chicken with bell peppers in tangy sauce",
        price: 320,
        category: "Chinese",
        isVeg: false,
        rating: 4.5
      },
      {
        id: "4-4",
        name: "Veg Manchurian",
        description: "Deep-fried vegetable balls in spicy Manchurian sauce",
        price: 260,
        category: "Chinese",
        isVeg: true,
        rating: 4.1
      }
    ]
  },
  {
    id: "5",
    name: "Sweet Delights",
    cuisine: "Desserts & Beverages",
    rating: 4.2,
    deliveryTime: "15-20 mins",
    priceRange: "₹100-300",
    image: "/src/assets/restaurant-2.jpg",
    dishes: [
      {
        id: "5-1",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten chocolate center",
        price: 180,
        category: "Desserts",
        isVeg: true,
        rating: 4.6
      },
      {
        id: "5-2",
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee and mascarpone",
        price: 220,
        category: "Desserts",
        isVeg: true,
        rating: 4.4
      },
      {
        id: "5-3",
        name: "Fresh Mango Smoothie",
        description: "Creamy smoothie made with fresh mangoes and yogurt",
        price: 150,
        category: "Beverages",
        isVeg: true,
        rating: 4.3
      },
      {
        id: "5-4",
        name: "Cold Coffee",
        description: "Refreshing iced coffee with milk and ice cream",
        price: 120,
        category: "Beverages",
        isVeg: true,
        rating: 4.2
      },
      {
        id: "5-5",
        name: "Fresh Lime Soda",
        description: "Fizzy drink with fresh lime juice and mint",
        price: 80,
        category: "Beverages",
        isVeg: true,
        rating: 4.0
      }
    ]
  },
  {
    id: "6",
    name: "Cafe Mocha",
    cuisine: "Beverages & Snacks",
    rating: 4.1,
    deliveryTime: "10-15 mins",
    priceRange: "₹80-250",
    image: "/src/assets/restaurant-3.jpg",
    dishes: [
      {
        id: "6-1",
        name: "Cappuccino",
        description: "Rich espresso with steamed milk and foam",
        price: 120,
        category: "Beverages",
        isVeg: true,
        rating: 4.3
      },
      {
        id: "6-2",
        name: "Chocolate Milkshake",
        description: "Thick milkshake with chocolate ice cream",
        price: 160,
        category: "Beverages",
        isVeg: true,
        rating: 4.4
      },
      {
        id: "6-3",
        name: "Cheesecake Slice",
        description: "Creamy New York style cheesecake with berry topping",
        price: 200,
        category: "Desserts",
        isVeg: true,
        rating: 4.5
      },
      {
        id: "6-4",
        name: "Green Tea",
        description: "Refreshing hot green tea with natural antioxidants",
        price: 80,
        category: "Beverages",
        isVeg: true,
        rating: 4.0
      }
    ]
  }
];