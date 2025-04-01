
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent z-10" />
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Summer Collection <span className="text-coral-400">2023</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md">
            Discover the latest trends and high-quality products at unbeatable prices. Shop now and elevate your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-coral-500 hover:bg-coral-600 text-white border-none"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
            >
              View Catalog
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Hero Product" 
            className="rounded-lg shadow-xl max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
