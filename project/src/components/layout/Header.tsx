import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: '旅游团', path: '/tour' },
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.jobs'), path: '/jobs' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md text-black py-3' : 'bg-transparent py-6'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center"
          aria-label={language === 'de' ? 'Zur Startseite' : 'Go to homepage'}
        >
          <img 
            src="/lotus-logo.png"
            alt="China Restaurant Lotus Logo" 
            className={`h-12 transition-all duration-300 ${scrolled ? 'opacity-100' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          className="hidden md:flex items-center space-x-8"
          role="navigation"
          aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}
        >
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 hover:text-red-600 ${
                    isActive(link.path) ? 'text-red-600' : scrolled ? 'text-gray-800' : 'text-white'
                  }`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2" role="group" aria-label={language === 'de' ? 'Sprachwahl' : 'Language selection'}>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors duration-300 ${
                language === 'en' ? 'bg-red-700 text-white' : 
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <span className={scrolled ? 'text-gray-300' : 'text-white/30'} aria-hidden="true">|</span>
            <button
              onClick={() => setLanguage('de')}
              className={`px-2 py-1 rounded transition-colors duration-300 ${
                language === 'de' ? 'bg-red-700 text-white' : 
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-pressed={language === 'de'}
            >
              DE
            </button>
          </div>

          <a
            href="tel:0928195066"
            className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
            aria-label={language === 'de' ? 'Jetzt bestellen: 09281/95066' : 'Order now: 09281/95066'}
          >
            {t('nav.order')}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? (language === 'de' ? 'Menü schließen' : 'Close menu') : (language === 'de' ? 'Menü öffnen' : 'Open menu')}
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-black' : 'text-white'}`} aria-hidden="true" />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-black' : 'text-white'}`} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="container mx-auto px-4 py-4" role="navigation" aria-label={language === 'de' ? 'Mobile Navigation' : 'Mobile navigation'}>
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block py-2 font-medium ${
                    isActive(link.path) ? 'text-red-600' : 'text-gray-800'
                  }`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex space-x-4 py-2 mt-4" role="group" aria-label={language === 'de' ? 'Sprachwahl' : 'Language selection'}>
            <button 
              onClick={() => setLanguage('en')}
              className={`text-gray-800 hover:text-red-600 transition-colors ${
                language === 'en' ? 'text-red-600' : ''
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <button 
              onClick={() => setLanguage('de')}
              className={`text-gray-800 hover:text-red-600 transition-colors ${
                language === 'de' ? 'text-red-600' : ''
              }`}
              aria-pressed={language === 'de'}
            >
              DE
            </button>
          </div>

          <a
            href="tel:0928195066"
            className="block mt-4 bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md text-center transition-colors duration-300"
            aria-label={language === 'de' ? 'Jetzt bestellen: 09281/95066' : 'Order now: 09281/95066'}
          >
            {t('nav.order')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header