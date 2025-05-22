
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';

export default function CartSheet() {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  
  if (state.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some delicious fruits to your cart!</p>
        <Button asChild>
          <a href="/shop">Continue Shopping</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={clearCart}
          className="text-muted-foreground hover:text-destructive"
        >
          Clear all
        </Button>
      </div>
      
      <Separator className="my-2" />
      
      <div className="flex-1 overflow-auto py-2">
        {state.items.map((item) => (
          <div key={item.id} className="flex py-4">
            <div className="h-16 w-16 overflow-hidden rounded-md border">
              <img 
                src={item.image} 
                alt={item.name} 
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
            
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {formatCurrency(item.price)} each
                  </p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeFromCart(item.id)}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                  <Trash size={16} />
                </Button>
              </div>
              
              <div className="flex items-center mt-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-r-none"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  <Minus size={14} />
                </Button>
                <div className="h-8 px-3 flex items-center justify-center border-y">
                  {item.quantity}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="h-8 w-8 rounded-l-none"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={14} />
                </Button>
                
                <div className="ml-auto font-medium">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-auto pt-4">
        <Separator className="mb-4" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Subtotal</span>
          <span className="font-semibold">{formatCurrency(state.totalPrice)}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 mb-4">
          Shipping and taxes calculated at checkout
        </p>
        <Button className="w-full">Proceed to Checkout</Button>
      </div>
    </div>
  );
}
