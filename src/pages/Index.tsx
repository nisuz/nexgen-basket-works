
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import FeaturedCategories from '../components/FeaturedCategories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import { ProductType } from '../types/productTypes';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<ProductType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Fetch mock products
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Simulate API fetch with timeout
      setTimeout(() => {
        setProducts(MOCK_PRODUCTS);
        setIsLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  const addToCart = (product: ProductType) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cart.length} toggleCart={toggleCart} />
      
      <main className="flex-grow">
        <Hero />
        <FeaturedCategories />
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Products</h2>
          <ProductGrid 
            products={products} 
            addToCart={addToCart} 
            isLoading={isLoading} 
          />
        </section>
        <Newsletter />
      </main>
      
      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart}
        removeItem={removeFromCart}
      />
    </div>
  );
};

// Mock data
const MOCK_PRODUCTS: ProductType[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Minimalist white sneakers perfect for any casual outfit. Made with premium materials for comfort and durability."
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "Premium wireless headphones with industry-leading noise cancellation and impressive sound quality."
  },
  {
    id: 3,
    name: "Organic Cotton T-shirt",
    price: 29.99,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Soft and sustainable organic cotton t-shirt, perfect for everyday wear."
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours."
  },
  {
    id: 5,
    name: "Smartwatch Pro",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Feature-packed smartwatch with health tracking, notifications, and customizable watch faces."
  },
  {
    id: 6,
    name: "Minimalist Leather Wallet",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    description: "Slim and stylish leather wallet with RFID protection and multiple card slots."
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Compact and powerful Bluetooth speaker with 20-hour battery life and waterproof design."
  },
  {
    id: 8,
    name: "Modern Accent Chair",
    price: 199.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Stylish and comfortable accent chair that adds a modern touch to any room."
  },
];

export default Index;
