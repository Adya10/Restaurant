import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import MenuNav from '../components/menu/MenuNav';
import MenuCategory from '../components/menu/MenuCategory';
import { menuCategories } from '../data/menuItems';
import { Info, Flame } from 'lucide-react';

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('specialties');

  const categories = menuCategories.map(cat => ({
    id: cat.id,
    name: cat.name
  }));

  const renderActiveCategory = () => {
    const category = menuCategories.find(cat => cat.id === activeCategory);
    if (!category) return null;

    return (
      <div>
        {category.info && (
          <div className="bg-red-50 border-l-4 border-red-700 p-4 mb-6">
            <p className="text-red-700 whitespace-pre-line">{category.info}</p>
            {category.info2 && (
              <p className="text-red-700 mt-2">{category.info2}</p>
            )}
          </div>
        )}
        <MenuCategory 
          title={category.name} 
          items={category.items} 
        />
      </div>
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Speisekarte | China Restaurant Lotus</title>
        <meta name="description" content="Entdecken Sie unsere vielfältige Speisekarte mit authentischen chinesischen Gerichten. Verfügbar für Restaurant, Abholen und Lieferung." />
      </Helmet>
      
      {/* Menu Header */}
      <div 
        className="relative pt-20 pb-10 md:pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6646233/pexels-photo-6646233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Speisekarte</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Authentische chinesische Küche mit traditionellen Rezepten und hochwertigen Zutaten
          </p>
        </div>
      </div>
      
      {/* Menu Navigation */}
      <MenuNav 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      
      {/* Menu Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Legend */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8 flex items-center">
          <Info className="h-5 w-5 mr-2 text-gray-500" />
          <span className="text-gray-600 mr-4">Legende:</span>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Flame className="h-5 w-5 mr-1 text-red-600" />
              <span className="text-gray-700">Scharf</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 bg-green-100 text-green-800 rounded-full mr-1 text-xs flex items-center justify-center">V</span>
              <span className="text-gray-700">Vegetarisch</span>
            </div>
          </div>
        </div>
        
        {renderActiveCategory()}
        
        {/* Note */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-3">Bitte beachten Sie</h3>
          <p className="text-gray-700 mb-2">
            Alle Gerichte können nach Ihrem gewünschten Schärfegrad angepasst werden. Bitte informieren Sie uns über etwaige Unverträglichkeiten oder Allergien.
          </p>
          <p className="text-gray-700">
            Preisänderungen vorbehalten. Alle Preise inkl. MwSt.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MenuPage;