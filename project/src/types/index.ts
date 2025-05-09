export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  featured?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  imageUrl?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  info?: string;
  info2?: string;
  items: MenuItem[];
}

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  hours: {
    day: string;
    hours: string;
  }[];
}