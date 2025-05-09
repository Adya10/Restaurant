import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedDishes from '../components/home/FeaturedDishes';
import AboutPreview from '../components/home/AboutPreview';
import ContactInfo from '../components/home/ContactInfo';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>China Restaurant Lotus | Authentic Chinese Cuisine in Hof</title>
        <meta name="description" content="Experience authentic Chinese cuisine at China Restaurant Lotus in Hof. Enjoy traditional dishes prepared with the finest ingredients in a welcoming atmosphere." />
      </Helmet>
      <Hero />
      <div className="bg-red-50 border-l-4 border-red-700 p-6 mx-4 md:mx-auto md:max-w-3xl my-12 rounded-lg">
        <div className="flex items-start">
          <div>
            <h3 className="text-xl font-bold text-red-700 mb-2">Important Announcements</h3>
            <div className="prose text-gray-700">
              <p className="mb-2">
                🎉 <strong>Chinese New Year Celebration:</strong> Join us for our special New Year's menu from February 10th to February 24th. Reservations recommended!
              </p>
              <p>
                ⚠️ <strong>Holiday Hours:</strong> Please note that we will be open on Monday, February 12th (Rosenmontag) from 11:30 - 14:00 and 17:30 - 22:00.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeaturedDishes />
      <AboutPreview />
      <ContactInfo />
    </Layout>
  );
};

export default HomePage;