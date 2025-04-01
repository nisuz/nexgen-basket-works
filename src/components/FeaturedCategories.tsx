
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  title: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ title, image, link }) => (
  <Link to={link} className="relative group overflow-hidden rounded-lg">
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
    <img 
      src={image} 
      alt={title} 
      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute bottom-0 left-0 w-full p-4 z-20">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="inline-block mt-2 text-sm text-white/90 group-hover:translate-x-2 transition-transform">
        Shop Now &rarr;
      </span>
    </div>
  </Link>
);

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Lighting",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      link: "/category/lighting"
    },
    {
      id: 2,
      title: "Textiles",
      image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d",
      link: "/category/textiles"
    },
    {
      id: 3,
      title: "Decorative",
      image: "https://images.unsplash.com/photo-1493957988430-a5f2e15f39a3",
      link: "/category/decorative"
    },
    {
      id: 4,
      title: "Storage",
      image: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea",
      link: "/category/storage"
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Shop by Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
