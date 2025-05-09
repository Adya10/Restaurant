import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "China Restaurant Lotus offers the most authentic Chinese food I've had outside of China. The Peking Duck is absolutely divine!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael K.",
    text: "Great service and delicious food. We order takeout regularly and it's always fresh and prompt. The Kung Pao Chicken is our family favorite.",
    rating: 5
  },
  {
    id: 3,
    name: "Christina L.",
    text: "Wonderful atmosphere and exceptional quality. We celebrated our anniversary here and had a memorable experience. Will definitely return!",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            What Our <span className="text-red-700">Customers</span> Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - here's what our customers have to say about their dining experience at China Restaurant Lotus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
              <p className="font-medium text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;