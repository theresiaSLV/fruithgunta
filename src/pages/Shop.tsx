
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { getProductsByCategory, searchProducts } from '@/data/products';
import { Category } from '@/types';
import CategoryFilter from '@/components/CategoryFilter';
import { Search } from 'lucide-react';

export default function Shop() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const [products, setProducts] = useState(searchQuery ? searchProducts(searchQuery) : getProductsByCategory('all'));
  const [category, setCategory] = useState<Category>('all');
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [priceRange, setPriceRange] = useState([0, 10]);
  
  useEffect(() => {
    let filtered = searchQuery ? searchProducts(searchQuery) : getProductsByCategory(category);
    
    // Apply price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setProducts(filtered);
  }, [category, searchQuery, priceRange]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL with search query
    const url = new URL(window.location.href);
    if (localSearchQuery) {
      url.searchParams.set('q', localSearchQuery);
    } else {
      url.searchParams.delete('q');
    }
    window.history.pushState({}, '', url.toString());
    
    setProducts(localSearchQuery ? searchProducts(localSearchQuery) : getProductsByCategory(category));
  };

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
    setLocalSearchQuery('');
    
    // Remove search query from URL
    const url = new URL(window.location.href);
    url.searchParams.delete('q');
    window.history.pushState({}, '', url.toString());
  };

  const maxPrice = 10;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Sidebar filters */}
            <div className="w-full md:w-64">
              <div className="rounded-lg border p-4 space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                  <CategoryFilter 
                    currentCategory={category}
                    onCategoryChange={handleCategoryChange}
                  />
                </div>
                
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Search</h3>
                  <form onSubmit={handleSearch} className="relative">
                    <Input 
                      type="search" 
                      placeholder="Search fruits..."
                      value={localSearchQuery}
                      onChange={e => setLocalSearchQuery(e.target.value)}
                      className="pr-8"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <Search size={18} />
                    </button>
                  </form>
                </div>
                
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Price Range</h3>
                  <div className="space-y-4">
                    <Slider 
                      defaultValue={[0, maxPrice]} 
                      max={maxPrice} 
                      step={0.5}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <span>${priceRange[0].toFixed(2)}</span>
                      <span>${priceRange[1].toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 mt-8 md:mt-0">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                  {searchQuery ? `Search Results for "${searchQuery}"` : 
                    category === 'all' ? 'All Fruits' : `${category.charAt(0).toUpperCase() + category.slice(1)} Fruits`}
                </h1>
                <p className="text-muted-foreground">{products.length} products</p>
              </div>
              
              {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <h2 className="text-lg font-semibold">No products found</h2>
                  <p className="mt-2 text-muted-foreground">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
