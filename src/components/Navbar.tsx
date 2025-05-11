
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, User } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

const Navbar = () => {
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "Authentication",
      description: "Login functionality will be connected to the backend",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-airbnb-primary font-bold text-2xl">HomeHaven</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center mx-auto max-w-xl w-full">
          <div className="relative w-full">
            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition-shadow duration-200">
              <div className="border-r border-gray-300 pr-4 mr-4">
                <span className="text-sm font-medium">Anywhere</span>
              </div>
              <div className="border-r border-gray-300 pr-4 mr-4">
                <span className="text-sm font-medium">Any week</span>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="text-sm mr-2">Add guests</span>
                <Button variant="default" size="icon" className="rounded-full bg-airbnb-primary text-white h-8 w-8">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="mr-2 hidden md:flex" onClick={handleLogin}>
            Become a Host
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full border border-gray-300">
                <Menu className="h-4 w-4 mr-2" />
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={handleLogin}>Sign up</DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogin}>Log in</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/listings">Browse Listings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/help">Help Center</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      
      {/* Search Bar - Mobile */}
      <div className="md:hidden px-4 pb-4">
        <Button variant="outline" className="w-full flex items-center justify-between rounded-full border border-gray-300 py-3 px-4 shadow-sm">
          <div className="flex items-center">
            <Search className="h-4 w-4 mr-2" />
            <span className="text-sm text-gray-500">Where to?</span>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;

