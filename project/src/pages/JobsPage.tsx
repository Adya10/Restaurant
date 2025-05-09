import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/layout/Layout';
import { Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantInfo';

const JobsPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Mini Jobs | China Restaurant Lotus</title>
        <meta name="description" content="Join our team at China Restaurant Lotus. We offer mini jobs perfect for students looking to gain experience in hospitality." />
      </Helmet>

      {/* Jobs Header */}
      <div 
        className="relative pt-20 pb-10 md:pb-20 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4 text-center text-white mt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Join Our Team</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Start your journey in hospitality with China Restaurant Lotus
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Requirements Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
                Before You <span className="text-red-700">Apply</span>
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
                <p className="text-gray-700">Please consider the following points:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>If you are under 18, please check with your parents beforehand</li>
                  <li>You must be at least 16 years old to work with us</li>
                  <li>You should have a good command of English</li>
                  <li>Work may also be required during school holidays and on public holidays</li>
                  <li>Experience in the hospitality industry is not essential, but would be an advantage</li>
                </ul>
              </div>
            </section>

            {/* What We Offer Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
                What We <span className="text-red-700">Offer</span>
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Responsible work for students</li>
                  <li>Regular working hours</li>
                  <li>Experience in interacting with guests</li>
                  <li>Insight into Chinese cuisine</li>
                  <li>Teamwork with friendly colleagues</li>
                  <li>For highly motivated employees, basics of Cantonese Chinese are taught</li>
                </ul>
              </div>
            </section>

            {/* Information for Applicants */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
                Important <span className="text-red-700">Information</span>
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <p className="text-gray-700">
                  Working with us is ideally suited to school pupils or students who do not have any other part-time jobs.
                </p>
                <p className="text-gray-700">
                  It is important that you assess for yourself beforehand whether additional work will affect your academic performance.
                </p>
                <p className="text-gray-700">
                  The work will slightly limit your free time, so it is intended as a small example for future professional life.
                </p>
              </div>
            </section>

            {/* How to Apply */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-6">
                How to <span className="text-red-700">Apply</span>
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 mb-4">
                  We do not require a written application. Simply call us to schedule an appointment.
                </p>
                <p className="text-gray-700 mb-6">
                  Please understand that preference will be given to applicants who best fit into the Lotus team.
                </p>
                <div className="flex items-center justify-center">
                  <a
                    href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobsPage;