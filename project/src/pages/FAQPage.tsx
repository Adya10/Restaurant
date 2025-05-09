import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQ | China Restaurant Lotus</title>
        <meta name="description" content="Frequently asked questions about China Restaurant Lotus in Hof. Find answers about reservations, delivery, dietary options, and more." />
      </Helmet>

      {/* FAQ Header */}
      <div 
        className="relative pt-20 pb-10 md:pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Frequently Asked Questions</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Find answers to common questions about our restaurant and services
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Do you take reservations?</h2>
              <p className="text-gray-700">
                Yes, we accept reservations. You can call us at 09281/95066 to make a reservation. We recommend booking in advance, especially for weekends and special occasions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Do you offer takeout and delivery?</h2>
              <p className="text-gray-700">
                Yes, we offer both takeout and delivery services. You can place your order by calling us directly at 09281/95066. Our delivery area covers Hof and surrounding areas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">What are your opening hours?</h2>
              <p className="text-gray-700">
                We are open Tuesday through Sunday from 11:30 - 14:00 and 17:30 - 22:00. We are closed on Mondays except for public holidays.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Do you have vegetarian options?</h2>
              <p className="text-gray-700">
                Yes, we offer a variety of vegetarian dishes. These are clearly marked on our menu. We can also modify certain dishes to accommodate vegetarian preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Can you accommodate dietary restrictions?</h2>
              <p className="text-gray-700">
                Yes, we can accommodate various dietary restrictions. Please inform our staff about any allergies or dietary requirements when ordering, and we will do our best to accommodate your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Do you have parking available?</h2>
              <p className="text-gray-700">
                Yes, we have parking spaces available directly in front of the restaurant. Additional street parking is also available nearby.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Do you accept credit cards?</h2>
              <p className="text-gray-700">
                Yes, we accept all major credit cards including Visa, Mastercard, and EC cards. Cash payments are also welcome.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Can I modify the spice level of dishes?</h2>
              <p className="text-gray-700">
                Yes, we can adjust the spice level of most dishes according to your preference. Please let us know your preferred spice level when ordering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage