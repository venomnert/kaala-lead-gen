import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, rating }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} mr-1`}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Their same-day delivery service has been a game-changer for our e-commerce business. Our customers love the speed and reliability.",
      author: "Michael Chen",
      company: "Urban Gadgets",
      rating: 5
    },
    {
      quote: "I've been using their services for my small business for over a year now. The real-time tracking gives me peace of mind every time.",
      author: "Sarah Johnson",
      company: "Bloom Boutique",
      rating: 5
    },
    {
      quote: "Extremely professional couriers and competitive rates. They've never let us down on time-sensitive deliveries across Toronto.",
      author: "David Patel",
      company: "Quick Print Co.",
      rating: 4
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Here's what businesses across the GTA think about our delivery service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Join over 500 satisfied businesses who trust us with their delivery needs.
          </p>
          <a 
            href="#get-quote" 
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;