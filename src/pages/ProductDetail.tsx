
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProductById, getProductsByCategory } from '@/data/products';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import { ShoppingCart, ChevronLeft, Plus, Minus } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      
      if (foundProduct) {
        // Get related products from the same category
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 py-16">
          <div className="container text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-8 text-muted-foreground">The product you are looking for does not exist.</p>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container">
          <Button 
            variant="ghost" 
            className="mb-6 inline-flex items-center"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft size={16} className="mr-2" />
            Back
          </Button>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
              {product.featured && (
                <Badge className="absolute left-4 top-4 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              )}
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="mt-2 flex items-center">
                <Badge variant="secondary" className="capitalize">
                  {product.category}
                </Badge>
                <p className="ml-4 text-sm text-muted-foreground">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </p>
              </div>
              
              <div className="mt-6">
                <p className="text-3xl font-semibold">{formatCurrency(product.price)}</p>
                <p className="text-sm text-muted-foreground">Per unit</p>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Description</h2>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="mt-8">
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-r-none"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus size={16} />
                  </Button>
                  <div className="px-6 py-2 border-y border-x-0 flex-1 text-center">
                    {quantity}
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-l-none"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              </div>
              
              <Button 
                className="mt-4 w-full fruit-button-hover"
                size="lg"
                disabled={product.stock <= 0}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2" />
                Add to Cart
              </Button>

              <Card className="mt-8 bg-muted/50 p-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <h3 className="font-medium">Fast Delivery</h3>
                    <p className="text-sm text-muted-foreground">
                      Fresh fruits delivered to your doorstep within 24 hours.
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Quality Guarantee</h3>
                    <p className="text-sm text-muted-foreground">
                      Not satisfied? We'll refund your purchase.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
