import React from 'react';
import { ArrowRight, Package, CheckCircle } from 'lucide-react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Same-Day Delivery Across Toronto, Guaranteed
            </h1>
            
            <p className="text-xl text-blue-100 max-w-lg">
              Fast, Reliable, and Guaranteed
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-blue-50">Same-day delivery guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-blue-50">Safe Handling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-blue-50">Built for business needs</span>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#get-quote" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 group"
              >
                Join Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 w-full" id="get-quote">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;