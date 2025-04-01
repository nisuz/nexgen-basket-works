
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-[#403E43] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#403E43] to-transparent z-10" />
      <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Transform Your <span className="text-[#FEC6A1]">Space</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md">
            Discover unique home decor pieces that reflect your personal style. Elevate your living spaces with our curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#FEC6A1] hover:bg-[#FDE1D3] text-[#403E43] border-none"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#403E43]"
            >
              View Collections
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
            alt="Modern Living Room" 
            className="rounded-lg shadow-xl max-h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
