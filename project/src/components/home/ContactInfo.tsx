import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';

const ContactInfo: React.FC = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Hours */}
          <div className="bg-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
              <Clock className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Opening Hours</h3>
            <p className="mb-2">
              <span className="font-medium">Tuesday - Sunday:</span><br />
              11:30 - 14:00<br />
              17:30 - 22:00
            </p>
            <p className="text-sm text-gray-400">
              Closed on Mondays (except public holidays)
            </p>
          </div>

          {/* Location */}
          <div className="bg-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
              <MapPin className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Location</h3>
            <address className="not-italic">
              {restaurantInfo.address}
            </address>
          </div>

          {/* Phone */}
          <div className="bg-gray-900 p-6 rounded-lg transform transition-transform duration-300 hover:-translate-y-2">
            <div className="mb-4 flex justify-center">
              <Phone className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reservations</h3>
            <p className="mb-2">Call us to make a reservation:</p>
            <a 
              href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`} 
              className="text-xl font-medium text-red-400 hover:text-red-300 transition-colors"
            >
              {restaurantInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;