import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import DishCard from '@/components/DishCard';
import { useSearch, SearchResult } from '@/hooks/useSearch';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || '';
  
  const results = useSearch(query, category);
  
  // Group results by type
  const restaurantResults = results.filter(result => result.type === 'restaurant');
  const dishResults = results.filter(result => result.type === 'dish');

  const getTitle = () => {
    if (category && query) {
      return `Results for "${query}" in ${category}`;
    } else if (category) {
      return `${category} Restaurants`;
    } else if (query) {
      return `Search results for "${query}"`;
    }
    return 'Search Results';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{getTitle()}</h1>
            <p className="text-muted-foreground">
              {results.length} result{results.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold mb-2">No results found</h2>
            <p className="text-muted-foreground mb-6">
              Try searching with different keywords or browse our restaurants
            </p>
            <Button onClick={() => navigate('/')}>
              Browse Restaurants
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Restaurant Results */}
            {restaurantResults.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Restaurants ({restaurantResults.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restaurantResults.map((result) => (
                    <RestaurantCard 
                      key={result.restaurant.id} 
                      restaurant={result.restaurant} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Dish Results */}
            {dishResults.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Dishes ({dishResults.length})
                </h2>
                <div className="space-y-4">
                  {dishResults.map((result) => (
                    <Card key={`${result.restaurant.id}-${result.dish?.id}`} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Available at {result.restaurant.name}
                          </p>
                          <Button 
                            variant="link" 
                            className="p-0 h-auto text-primary text-sm"
                            onClick={() => navigate(`/restaurant/${result.restaurant.id}`)}
                          >
                            View Restaurant →
                          </Button>
                        </div>
                      </div>
                      {result.dish && (
                        <DishCard 
                          dish={result.dish} 
                          restaurantName={result.restaurant.name}
                        />
                      )}
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;