
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Package, Settings, ShoppingCart, User, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className={`border-r bg-white transition-all duration-300 ${
      collapsed ? 'w-[70px]' : 'w-[250px]'
    }`}>
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-fruit-green flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 6.299c4.5.019 4.5 6.701 0 6.701H7.5c-4.5 0-4.5-6.701 0-6.701"/>
              <path d="M13.5 20V6.5c0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5V20M13.5 20H7.5"/>
            </svg>
          </div>
          {!collapsed && (
            <span className="text-lg font-bold text-fruit-green">Admin</span>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="flex flex-col gap-1 p-2">
          <Link to="/admin">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!collapsed ? 'px-2' : 'px-0 justify-center'}`}
            >
              <Package size={20} className="mr-2" />
              {!collapsed && <span>Dashboard</span>}
            </Button>
          </Link>
          <Link to="/admin/products">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!collapsed ? 'px-2' : 'px-0 justify-center'}`}
            >
              <Package size={20} className="mr-2" />
              {!collapsed && <span>Products</span>}
            </Button>
          </Link>
          <Link to="/admin/orders">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!collapsed ? 'px-2' : 'px-0 justify-center'}`}
            >
              <ShoppingCart size={20} className="mr-2" />
              {!collapsed && <span>Orders</span>}
            </Button>
          </Link>
          <Link to="/admin/customers">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!collapsed ? 'px-2' : 'px-0 justify-center'}`}
            >
              <Users size={20} className="mr-2" />
              {!collapsed && <span>Customers</span>}
            </Button>
          </Link>
          
          {!collapsed && <Separator className="my-2" />}
          
          <Link to="/admin/settings">
            <Button 
              variant="ghost" 
              className={`w-full justify-start ${!collapsed ? 'px-2' : 'px-0 justify-center'}`}
            >
              <Settings size={20} className="mr-2" />
              {!collapsed && <span>Settings</span>}
            </Button>
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
}
