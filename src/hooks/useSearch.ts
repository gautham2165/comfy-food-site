import { useMemo } from 'react';
import { mockRestaurants, Restaurant, Dish } from '@/data/mockData';

export interface SearchResult {
  type: 'restaurant' | 'dish';
  restaurant: Restaurant;
  dish?: Dish;
}

export const useSearch = (query: string, category?: string) => {
  const results = useMemo(() => {
    let filteredResults: SearchResult[] = [];
    
    // Filter by category first if provided
    let restaurantsToSearch = mockRestaurants;
    if (category) {
      restaurantsToSearch = mockRestaurants.filter(restaurant => 
        restaurant.cuisine.toLowerCase().includes(category.toLowerCase()) ||
        restaurant.dishes.some(dish => dish.category.toLowerCase().includes(category.toLowerCase()))
      );
    }

    // If no query, return restaurants filtered by category
    if (!query.trim()) {
      filteredResults = restaurantsToSearch.map(restaurant => ({
        type: 'restaurant' as const,
        restaurant
      }));
    } else {
      const searchTerm = query.toLowerCase();
      
      // Search in restaurants
      restaurantsToSearch.forEach(restaurant => {
        // Check if restaurant name or cuisine matches
        if (
          restaurant.name.toLowerCase().includes(searchTerm) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm)
        ) {
          filteredResults.push({
            type: 'restaurant',
            restaurant
          });
        }
        
        // Search in dishes
        restaurant.dishes.forEach(dish => {
          if (
            dish.name.toLowerCase().includes(searchTerm) ||
            dish.description.toLowerCase().includes(searchTerm) ||
            dish.category.toLowerCase().includes(searchTerm)
          ) {
            filteredResults.push({
              type: 'dish',
              restaurant,
              dish
            });
          }
        });
      });
    }

    return filteredResults;
  }, [query, category]);

  return results;
};