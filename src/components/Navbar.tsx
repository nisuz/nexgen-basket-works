
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  cartCount: number;
  toggleCart: () => void;
}

const Navbar = ({ cartCount, toggleCart }: NavbarProps) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-900">
            NextGenShop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-700 font-medium">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-800 hover:text-blue-700 font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-700 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-700 font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleSearch} 
              className="text-gray-800 hover:text-blue-700"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleCart} 
              className="text-gray-800 hover:text-blue-700 relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleCart} 
              className="text-gray-800 relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-800"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar (conditionally rendered) */}
        {isSearchVisible && (
          <div className="py-3 px-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="bg-white border-t py-4 px-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-blue-700 font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-700 font-medium">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-800 hover:text-blue-700 font-medium">
              Categories
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-700 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-700 font-medium">
              Contact
            </Link>
          </nav>
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 rounded-md"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
