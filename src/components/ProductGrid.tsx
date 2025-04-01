
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types/productTypes';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';

interface ProductGridProps {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
  isLoading: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, addToCart, isLoading }) => {
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };
  
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Skeleton className="w-full h-64" />
            <div className="p-4">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-5 w-1/3 mb-4" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2">
              <button 
                onClick={() => toggleFavorite(product.id)} 
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart 
                  size={18} 
                  fill={favorites.includes(product.id) ? "#f43f5e" : "none"} 
                  stroke={favorites.includes(product.id) ? "#f43f5e" : "currentColor"}
                />
              </button>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link 
                to={`/product/${product.id}`} 
                className="bg-white text-[#403E43] py-2 px-4 rounded-md mr-2 hover:bg-[#F1F0FB] transition-colors"
              >
                Quick View
              </Link>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">{product.name}</h3>
                <p className="text-[#403E43] font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
            
            <Button 
              onClick={() => addToCart(product)} 
              className="w-full mt-4 bg-[#403E43] hover:bg-[#221F26] text-white flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
