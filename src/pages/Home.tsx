import React from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import { mockRestaurants } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-food-delivery.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/search?category=${encodeURIComponent(categoryName)}`);
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary to-primary-hover flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Delicious food, delivered fast
            </h1>
            <p className="text-xl mb-6 opacity-90">
              Order from your favorite restaurants and get fresh, hot food delivered to your doorstep in minutes.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8"
              onClick={() => navigate('/search')}
            >
              Order Now
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Pizza', emoji: '🍕' },
              { name: 'Burger', emoji: '🍔' },
              { name: 'Indian', emoji: '🍛' },
              { name: 'Chinese', emoji: '🥡' },
              { name: 'Desserts', emoji: '🍰' },
              { name: 'Beverages', emoji: '🥤' }
            ].map((category) => (
              <div 
                key={category.name}
                className="bg-card p-6 rounded-lg text-center hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="text-3xl mb-2">{category.emoji}</div>
                <div className="font-medium text-foreground">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Restaurants</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">ComfortableFoods</h3>
          <p className="mb-4">Your favorite food, delivered with love</p>
          <div className="text-sm opacity-80">
            © 2024 ComfortableFoods.com. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;