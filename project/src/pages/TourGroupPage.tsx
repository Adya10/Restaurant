import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import { MapPin, Phone } from 'lucide-react';

const TourGroupPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>旅游团 | China Restaurant Lotus</title>
        <meta name="description" content="欢迎中国旅游团 - China Restaurant Lotus" />
      </Helmet>

      {/* Tour Group Header */}
      <div 
        className="relative pt-20 pb-10 md:pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center text-white mt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">欢迎中国旅游团</h1>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">订团餐电话</h2>
              <div className="flex items-center justify-center mt-4">
                <Phone className="h-6 w-6 text-red-600 mr-2" />
                <a 
                  href="tel:09281-95066" 
                  className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  09281-95066
                </a>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">地址</h2>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-red-600 mr-2" />
                <div className="text-xl">
                  <div className="font-bold">China Restaurant Lotus</div>
                  <div>Ernst - Reuter - Str. 28</div>
                  <div>95032 Hof</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TourGroupPage;