import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import Map from '../components/contact/Map';
import { restaurantInfo } from '../data/restaurantInfo';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | China Restaurant Lotus</title>
        <meta name="description" content="Contact China Restaurant Lotus for inquiries or to place an order. Visit us in Hof or call us at 09281/95066." />
      </Helmet>
      
      {/* Contact Header */}
      <div 
        className="relative pt-20 pb-10 md:pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Get in touch with us or find our location
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <MapPin className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Address</h3>
              <address className="text-center not-italic text-gray-700">
                {restaurantInfo.address}
              </address>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Phone className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <a href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`} className="text-gray-700 hover:text-red-600 transition-colors">
                {restaurantInfo.phone}
              </a>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
              <div className="text-gray-700 text-sm text-center">
                <p className="font-medium mb-1">Tuesday - Sunday:</p>
                <p>11:30 - 14:00</p>
                <p>17:30 - 22:00</p>
                <p className="text-red-600 mt-2">Closed on Mondays (except public holidays)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">Find Us</h2>
          <Map />
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Do you take reservations?</h3>
              <p className="text-gray-700">
                Yes, we accept reservations. Please call us directly to make a reservation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Do you offer takeout and delivery?</h3>
              <p className="text-gray-700">
                Yes, we offer both takeout and delivery services. You can place an order by calling us directly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Can you accommodate dietary restrictions?</h3>
              <p className="text-gray-700">
                Yes, we can accommodate various dietary restrictions including vegetarian, vegan, and gluten-free options. Please inform your server about any allergies or dietary needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Do you have parking available?</h3>
              <p className="text-gray-700">
                Yes, we have parking spaces available for our customers in front of the restaurant. Additional street parking is also available nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;