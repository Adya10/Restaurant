import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Instagram, BookIcon as TiktokIcon } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-red-500">
              {restaurantInfo.name}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-red-400" />
                <address className="not-italic">
                  {restaurantInfo.address}
                </address>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-400" />
                <a href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-red-400 transition-colors">
                  {restaurantInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-red-500">
              Opening Hours
            </h3>
            <div className="space-y-2">
              <div className="flex">
                <Clock className="h-5 w-5 mr-2 mt-1 text-red-400" />
                <div>
                  <span className="font-medium">Tuesday - Sunday: </span>
                  <div>
                    <span>11:30 - 14:00</span>
                    <br />
                    <span>17:30 - 22:00</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Clock className="h-5 w-5 mr-2 mt-1 text-red-400" />
                <div>
                  <span className="font-medium">Monday: </span>
                  <span>Closed (Open on public holidays)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-red-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-red-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-red-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-red-400 transition-colors hidden">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors hidden">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-red-400 transition-colors hidden">
                <TiktokIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} {restaurantInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer