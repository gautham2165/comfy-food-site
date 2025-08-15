import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import DishCard from '@/components/DishCard';
import { mockRestaurants } from '@/data/mockData';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const restaurant = mockRestaurants.find(r => r.id === id);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const categories = [...new Set(restaurant.dishes.map(dish => dish.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Restaurant Header */}
      <div className="relative">
        <img 
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <Button 
          variant="outline"
          className="absolute top-4 left-4 bg-card"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Restaurant Info */}
        <div className="bg-card rounded-lg p-6 -mt-8 relative z-10 shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">{restaurant.name}</h1>
          <p className="text-muted-foreground mb-4">{restaurant.cuisine}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <span className="text-muted-foreground">{restaurant.priceRange}</span>
            </div>
            <div className="text-accent font-medium">Free Delivery</div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {categories.map((category) => (
            <Button 
              key={category}
              variant="outline"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Dishes */}
        <div className="space-y-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-xl font-semibold text-foreground mb-4">{category}</h2>
              <div className="grid gap-4">
                {restaurant.dishes
                  .filter(dish => dish.category === category)
                  .map((dish) => (
                    <DishCard 
                      key={dish.id} 
                      dish={dish} 
                      restaurantName={restaurant.name}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;