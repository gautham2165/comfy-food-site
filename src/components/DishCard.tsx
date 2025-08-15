import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dish } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface DishCardProps {
  dish: Dish;
  restaurantName: string;
}

const DishCard = ({ dish, restaurantName }: DishCardProps) => {
  const { dispatch } = useCart();
  const { toast } = useToast();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        restaurantName
      }
    });
    
    toast({
      title: "Added to cart!",
      description: `${dish.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-1 pr-4">
            <div className="flex items-center space-x-2 mb-1">
              <div className={`w-3 h-3 rounded border-2 ${dish.isVeg ? 'border-green-500' : 'border-red-500'}`}>
                <div className={`w-1 h-1 rounded-full mx-auto mt-0.5 ${dish.isVeg ? 'bg-green-500' : 'bg-red-500'}`} />
              </div>
            </div>
            
            <h3 className="font-semibold text-foreground mb-1">{dish.name}</h3>
            
            <div className="flex items-center space-x-1 mb-2">
              <Star className="h-3 w-3 fill-rating-star text-rating-star" />
              <span className="text-xs text-muted-foreground">{dish.rating}</span>
            </div>
            
            <p className="text-price-text font-semibold text-lg mb-2">₹{dish.price}</p>
            
            <p className="text-muted-foreground text-sm line-clamp-2">
              {dish.description}
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            {dish.image && (
              <img 
                src={dish.image}
                alt={dish.name}
                className="w-20 h-20 object-cover rounded mb-2"
              />
            )}
            <Button 
              size="sm"
              onClick={addToCart}
              className="w-20 h-8 text-xs"
            >
              <Plus className="h-3 w-3 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DishCard;