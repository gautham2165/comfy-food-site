import React from 'react';
import { Star, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Restaurant } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      onClick={() => navigate(`/restaurant/${restaurant.id}`)}
    >
      <div className="relative">
        <img 
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-card px-2 py-1 rounded text-xs font-medium">
          {restaurant.priceRange}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-foreground">{restaurant.name}</h3>
          <div className="flex items-center space-x-1 text-accent">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisine}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <span className="text-accent font-medium">Free Delivery</span>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;