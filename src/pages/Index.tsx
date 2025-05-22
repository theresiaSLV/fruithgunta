
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getFeaturedProducts, getProductsByCategory } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types';

export default function Index() {
  const [featuredProducts, setFeaturedProducts] = useState(getFeaturedProducts());
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [categoryProducts, setCategoryProducts] = useState(getProductsByCategory(selectedCategory));
  
  useEffect(() => {
    setCategoryProducts(getProductsByCategory(selectedCategory));
  }, [selectedCategory]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-fruit-green to-fruit-lightGreen py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <Badge className="mb-4 bg-white/20 text-white">Fresh & Organic Fruits</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Fresh Fruits Delivered <br className="hidden sm:inline" />
              To Your Doorstep
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Discover the freshest, highest quality fruits sourced directly from local farmers. 
              Experience nature's sweetness delivered right to your home.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-fruit-green hover:bg-white/90">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Fruits</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Our handpicked selection of premium fruits, chosen for their exceptional taste and quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/shop" className="inline-flex items-center gap-2">
                  View All Products <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/50 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Browse by Category</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Explore our fruit selection by category to find exactly what you're looking for.
              </p>
            </div>
            
            <Tabs 
              defaultValue="all" 
              onValueChange={(value) => setSelectedCategory(value as Category)}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="berries">Berries</TabsTrigger>
                  <TabsTrigger value="citrus">Citrus</TabsTrigger>
                  <TabsTrigger value="tropical">Tropical</TabsTrigger>
                  <TabsTrigger value="exotic">Exotic</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={selectedCategory}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {categoryProducts.slice(0, 4).map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                {categoryProducts.length > 4 && (
                  <div className="mt-8 text-center">
                    <Button asChild variant="outline">
                      <Link to={`/categories/${selectedCategory}`}>
                        View More {selectedCategory !== 'all' ? selectedCategory : 'fruits'}
                      </Link>
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose FruitMarket?</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                We take pride in providing the highest quality fruits with exceptional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Farm Fresh Quality</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our fruits are sourced directly from local farms, ensuring maximum freshness and quality.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Eco-Friendly Packaging</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    All our products come in sustainable, environmentally friendly packaging.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold">Fast Delivery</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We deliver within 24 hours to ensure you receive the freshest fruits possible.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
