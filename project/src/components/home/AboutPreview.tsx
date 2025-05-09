import React from 'react';
import { Link } from 'react-router-dom';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Welcome to <span className="text-red-700">China Restaurant Lotus</span>
          </h2>
          <p className="text-gray-700 mb-4">
            For over 20 years, we have been serving authentic Chinese cuisine to the people of Hof and surrounding areas.
          </p>
          <p className="text-gray-700 mb-6">
            Our recipes have been passed down through generations, preserving the authentic flavors of Chinese culinary heritage while adding our own unique touch. We take pride in using only the freshest ingredients to create memorable dining experiences.
          </p>
          <Link 
            to="/menu" 
            className="inline-flex items-center text-red-700 font-medium hover:text-red-800 transition-colors"
          >
            View our menu
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;