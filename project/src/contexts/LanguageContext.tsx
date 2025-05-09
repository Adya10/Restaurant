import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    'nav.home': 'Home',
    'nav.menu': 'Speisekarte',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.jobs': 'Mini Jobs',
    'nav.order': 'Jetzt bestellen',
    'home.hero.title': 'Authentische Chinesische Küche',
    'home.hero.subtitle': 'Erleben Sie traditionelle Aromen und kulinarische Exzellenz im China Restaurant Lotus.',
    'menu.appetizers': 'Vorspeisen',
    'menu.main': 'Hauptgerichte',
    'menu.vegetarian': 'Vegetarische Gerichte',
    'menu.rice': 'Reisgerichte',
    'menu.noodles': 'Nudelgerichte',
    'menu.specialties': 'Spezialitäten des Hauses',
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Kontaktieren Sie uns oder finden Sie unseren Standort',
    'contact.address': 'Adresse',
    'contact.phone': 'Telefon',
    'contact.hours': 'Öffnungszeiten',
    'contact.closed': 'Geschlossen',
    'footer.quickLinks': 'Schnellzugriff',
    'footer.rights': 'Alle Rechte vorbehalten',
    'about.title': 'Unsere Geschichte',
    'about.subtitle': 'Eine Reise voller Leidenschaft, Tradition und authentischer chinesischer Aromen',
    'jobs.title': 'Werde Teil unseres Teams',
    'jobs.subtitle': 'Starten Sie Ihre Karriere in der Gastronomie mit China Restaurant Lotus'
  },
  en: {
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.jobs': 'Mini Jobs',
    'nav.order': 'Order Now',
    'home.hero.title': 'Authentic Chinese Cuisine',
    'home.hero.subtitle': 'Experience traditional flavors and culinary excellence at China Restaurant Lotus.',
    'menu.appetizers': 'Appetizers',
    'menu.main': 'Main Courses',
    'menu.vegetarian': 'Vegetarian Dishes',
    'menu.rice': 'Rice Dishes',
    'menu.noodles': 'Noodle Dishes',
    'menu.specialties': 'Chef\'s Specialties',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch with us or find our location',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Opening Hours',
    'contact.closed': 'Closed',
    'footer.quickLinks': 'Quick Links',
    'footer.rights': 'All rights reserved',
    'about.title': 'Our Story',
    'about.subtitle': 'A journey of passion, tradition, and authentic Chinese flavors',
    'jobs.title': 'Join Our Team',
    'jobs.subtitle': 'Start your journey in hospitality with China Restaurant Lotus'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.de] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}