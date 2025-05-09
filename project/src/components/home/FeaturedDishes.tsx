import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedItems } from '../../data/menuItems';
import { ChefHat, Flame, Bell } from 'lucide-react';

const FeaturedDishes: React.FC = () => {
  const featuredItems = getFeaturedItems();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Our <span className="text-red-700">Signature</span> Dishes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our chef's special selection of authentic Chinese cuisine, 
            crafted with traditional recipes and premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gray-200">
                {/* Placeholder for food image - replace with actual images later */}
                <div 
                  className="h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url('https://images.pexels.com/photos/5836771/pexels-photo-5836771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` 
                  }}
                ></div>
                {item.spicy && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white p-1 rounded-full">
                    <Flame className="h-5 w-5" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                  <span className="text-lg font-medium text-red-700">€{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <ChefHat className="h-5 w-5 mr-1" />
                    <span className="text-sm">Chef's Special</span>
                  </div>
                  {item.vegetarian && (
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Vegetarian
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;