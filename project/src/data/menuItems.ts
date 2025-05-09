import { MenuItem, MenuCategory } from '../types';

export const menuCategories: MenuCategory[] = [
  {
    id: 'specialties',
    name: 'SPEZIALITÄTEN DES HAUSES',
    items: [
      {
        id: 123,
        name: 'HOT POT',
        description: '',
        price: '101.00',
        category: 'specialties',
        imageUrl: 'https://en.wikipedia.org/wiki/List_of_Chinese_dishes#/media/File:Day177lilybday.JPG'
      },
      {
        id: 124,
        name: 'PEKING ENTE',
        description: '',
        price: '102.00',
        category: 'specialties',
        imageUrl: 'https://en.wikipedia.org/wiki/List_of_Chinese_dishes#/media/File:Peking_Duck,_2014_(02).jpg'
      },
      {
        id: 125,
        name: 'Hummer mit Luach in Ingwer-Knoblauchsoße',
        description: '',
        price: '50.00',
        category: 'specialties'
      }
    ]
  },
  {
    id: 'soups',
    name: 'SUPPEN',
    items: [
      {
        id: 1,
        name: 'Gemüsesuppe mit Champignon',
        description: '',
        price: '5.50',
        category: 'soups'
      },
      {
        id: 2,
        name: 'Wan Tan Suppe (Schweinehack in Teigmantel)',
        description: '',
        price: '6.00',
        category: 'soups'
      },
      {
        id: 3,
        name: 'Glasnudelsuppe (mit Hühnerfl. und Ei)',
        description: '',
        price: '6.00',
        category: 'soups'
      }
    ]
  },
  {
    id: 'for-two',
    name: 'GEMISCHTE AUSWAHL FÜR 2 PERSONEN',
    info: 'mit Vorspeise: Sauerscharf Suppe oder Frühlingsrolle',
    items: [
      {
        id: 308,
        name: 'Glücksteller für 2 Personen',
        description: 'Schweinefleisch, Rindfleisch, Hühnerfleisch und Ente [gebacken] mit Gemüse',
        price: '33.00',
        category: 'for-two'
      },
      {
        id: 310,
        name: '2 Personen Menü',
        description: 'Rindfleisch mit Gemüse in Steak-Pfeffersoße auf heiße Platte\nGebackene Ente mit Gemüse, scharf\nGebackenes Hühnerfleisch in Lotussoße',
        price: '35.00',
        category: 'for-two'
      },
      {
        id: 388,
        name: '旅游团特别餐',
        description: '',
        price: '9.00',
        category: 'for-two'
      }
    ]
  },
  {
    id: 'vegetables',
    name: 'GEMÜSE GERICHTE',
    items: [
      {
        id: 85,
        name: 'Chop Suey mit etwas Glasnudeln (Dekoration)',
        description: '',
        price: '12.00',
        category: 'vegetables',
        vegetarian: true
      }
    ]
  },
  {
    id: 'lunch',
    name: 'MITTAGSTELLER',
    info: 'MONTAG bis SAMSTAG 11:30 Uhr bis 13:00 Uhr',
    info2: '(außer Sonntags und Feiertage)',
    items: [
      {
        id: 901,
        name: 'Rindfleisch mit Gemüse in scharfer Soße',
        description: '',
        price: '9.00',
        category: 'lunch',
        spicy: true
      },
      {
        id: 909,
        name: 'Ente [gebacken] mit Gemüse in milder Kantonsoße',
        description: '',
        price: '11.00',
        category: 'lunch'
      },
      {
        id: 912,
        name: 'Ente [gebacken] mit Gemüse in süßsauer Soße',
        description: '',
        price: '11.00',
        category: 'lunch'
      }
    ]
  }
];

export const getMenuItemsByCategory = (categoryId: string) => {
  const category = menuCategories.find(cat => cat.id === categoryId);
  return category?.items || [];
};

export const getFeaturedItems = () => {
  return menuCategories
    .flatMap(category => category.items)
    .filter(item => item.featured);
};