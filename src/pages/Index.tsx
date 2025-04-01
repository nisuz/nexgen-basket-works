
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
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Items</h2>
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
    name: "Scandinavian Floor Lamp",
    price: 129.99,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    description: "Minimalist wooden floor lamp with adjustable height and linen shade, perfect for any modern living space.",
    options: {
      color: ["Natural Wood", "Black", "White"]
    }
  },
  {
    id: 2,
    name: "Handwoven Cotton Throw",
    price: 49.99,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d",
    description: "Soft handwoven cotton throw with decorative tassels, ideal for adding texture and warmth to your sofa or bed.",
    options: {
      color: ["Cream", "Grey", "Terracotta", "Sage"]
    }
  },
  {
    id: 3,
    name: "Ceramic Vase Set",
    price: 79.99,
    category: "Decorative",
    image: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3",
    description: "Set of three handcrafted ceramic vases in varying heights, perfect for fresh or dried flower arrangements.",
    options: {
      color: ["Matte White", "Sand", "Dusty Blue"]
    }
  },
  {
    id: 4,
    name: "Woven Storage Basket",
    price: 34.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea",
    description: "Natural fiber woven basket with handles, ideal for stylish storage of blankets, toys, or magazines.",
    options: {
      size: ["Small", "Medium", "Large"]
    }
  },
  {
    id: 5,
    name: "Macramé Wall Hanging",
    price: 59.99,
    category: "Wall Decor",
    image: "https://images.unsplash.com/photo-1631477076114-9123dfccc09e",
    description: "Handcrafted cotton macramé wall hanging on a wooden dowel, adding texture and bohemian charm to any room.",
    options: {
      size: ["Small", "Medium", "Large"]
    }
  },
  {
    id: 6,
    name: "Marble Serving Board",
    price: 45.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25",
    description: "Elegant marble serving board with metallic inlay, perfect for cheese platters or as a decorative accent.",
    options: {
      material: ["White Marble", "Black Marble"]
    }
  },
  {
    id: 7,
    name: "Scented Soy Candle",
    price: 29.99,
    category: "Home Fragrance",
    image: "https://images.unsplash.com/photo-1602523069431-40e9f2176210",
    description: "Hand-poured soy wax candle in a ceramic vessel with wooden lid, featuring natural essential oil fragrance.",
    options: {
      color: ["White", "Grey", "Terracotta"],
      size: ["8oz", "12oz"]
    }
  },
  {
    id: 8,
    name: "Velvet Accent Pillow",
    price: 39.99,
    category: "Textiles",
    image: "https://images.unsplash.com/photo-1584304773337-6a633bd0ce5a",
    description: "Luxurious velvet pillow with piped edges, adding a touch of elegance and comfort to any seating area.",
    options: {
      color: ["Emerald", "Navy", "Rust", "Blush"],
      size: ["18x18", "20x20"]
    }
  },
];

export default Index;
