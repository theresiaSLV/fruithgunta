
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-full bg-fruit-green flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 6.299c4.5.019 4.5 6.701 0 6.701H7.5c-4.5 0-4.5-6.701 0-6.701"/>
                  <path d="M13.5 20V6.5c0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5V20M13.5 20H7.5"/>
                </svg>
              </span>
              <span className="text-xl font-bold text-fruit-green">FruitMarket</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              FruitMarket brings fresh, organic fruits right to your doorstep. Sourced directly from local farms.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-foreground">All Products</Link>
              </li>
              <li>
                <Link to="/categories/berries" className="text-muted-foreground hover:text-foreground">Berries</Link>
              </li>
              <li>
                <Link to="/categories/tropical" className="text-muted-foreground hover:text-foreground">Tropical</Link>
              </li>
              <li>
                <Link to="/categories/citrus" className="text-muted-foreground hover:text-foreground">Citrus</Link>
              </li>
              <li>
                <Link to="/categories/exotic" className="text-muted-foreground hover:text-foreground">Exotic</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact Us</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="text-muted-foreground">123 Orchard Street</li>
              <li className="text-muted-foreground">Fruitville, FL 34232</li>
              <li className="text-muted-foreground">info@fruitmarket.com</li>
              <li className="text-muted-foreground">(800) FRUITS-1</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2025 FruitMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
