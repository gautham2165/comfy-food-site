import React, { useState } from 'react';
import { MapPin, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@/components/SearchBar';

const Header = () => {
  const [location, setLocation] = useState('Select location');
  const { state } = useCart();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => navigate('/')}
          >
            ComfortableFoods
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <button 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => {
                const newLocation = prompt('Enter your location:', location);
                if (newLocation) setLocation(newLocation);
              }}
            >
              {location}
            </button>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <SearchBar className="flex-1" />
          </div>

          {/* Cart */}
          <Button 
            variant="outline"
            className="relative"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {state.items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;