
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="fruit-card group">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="fruit-card-image transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
        </Link>
        {product.featured && (
          <Badge className="absolute left-2 top-2 bg-accent text-accent-foreground">
            Featured
          </Badge>
        )}
        {product.stock <= 20 && (
          <Badge variant="destructive" className="absolute right-2 top-2">
            Low Stock
          </Badge>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">
              <Link to={`/product/${product.id}`} className="hover:underline">
                {product.name}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
          </div>
          <p className="font-semibold">{formatCurrency(product.price)}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </p>
          <Button 
            size="sm" 
            onClick={() => addToCart(product)}
            disabled={product.stock <= 0}
            className="fruit-button-hover"
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
