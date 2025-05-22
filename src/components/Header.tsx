
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import CartSheet from '@/components/CartSheet';

export default function Header() {
  const { state } = useCart();
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
          
          <Link to="/" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-fruit-green flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 6.299c4.5.019 4.5 6.701 0 6.701H7.5c-4.5 0-4.5-6.701 0-6.701"/>
                <path d="M13.5 20V6.5c0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5V20M13.5 20H7.5"/>
              </svg>
            </span>
            <span className="text-xl font-bold text-fruit-green">FruitMarket</span>
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex md:gap-6">
              <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
              <Link to="/shop" className="text-sm font-medium hover:text-primary">Shop</Link>
              <Link to="/categories" className="text-sm font-medium hover:text-primary">Categories</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary">About</Link>
            </nav>
          )}
        </div>

        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 top-16 bg-white z-30 p-4`}>
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/admin" 
              className="text-lg font-medium p-2 hover:bg-muted rounded-md mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Admin Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-[200px] pl-8 md:w-[300px]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </form>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart size={20} />
                {state.totalItems > 0 && (
                  <Badge className="absolute -right-2 -top-2 h-5 w-5 p-0 flex items-center justify-center">
                    {state.totalItems}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent>
              <CartSheet />
            </SheetContent>
          </Sheet>

          {!isMobile && (
            <Link to="/admin">
              <Button variant="ghost">Admin</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
