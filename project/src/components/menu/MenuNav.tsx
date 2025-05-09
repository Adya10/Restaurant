import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface MenuNavProps {
  categories: { id: string; name: string }[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  const { language } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white border-b border-gray-200 py-4 transition-all duration-300 ${
        isSticky ? 'sticky top-16 z-10 shadow-md' : ''
      }`}
      role="navigation"
      aria-label={language === 'de' ? 'Menü-Navigation' : 'Menu Navigation'}
    >
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto pb-2 scrollbar-hide space-x-6" role="menubar">
          {categories.map((category) => (
            <li key={category.id} role="none">
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-md transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-red-700 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
                aria-current={activeCategory === category.id ? 'true' : undefined}
              >
                {language === 'de' ? category.name : category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuNav;