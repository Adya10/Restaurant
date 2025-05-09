import React from 'react';
import { MenuItem } from '../../types';
import { Flame } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ title, items }) => {
  const { language } = useLanguage();

  return (
    <div className="mb-12" role="region" aria-label={title}>
      <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-red-800 border-b-2 border-red-800 pb-2">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 gap-y-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-start p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
            <div className="flex-1 pr-4">
              <div className="flex items-center mb-1">
                <span className="text-gray-600 mr-2">{item.id}.</span>
                <h3 className="text-xl font-medium">{item.name}</h3>
                {item.spicy && (
                  <Flame 
                    className="h-5 w-5 ml-2 text-red-600" 
                    aria-label={language === 'de' ? 'Scharf' : 'Spicy'}
                  />
                )}
                {item.vegetarian && (
                  <span 
                    className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full"
                    aria-label={language === 'de' ? 'Vegetarisch' : 'Vegetarian'}
                  >
                    {language === 'de' ? 'Veg' : 'Veg'}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
              )}
            </div>
            <div className="font-medium text-red-700 whitespace-nowrap" aria-label={language === 'de' ? 'Preis' : 'Price'}>
              €{item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;