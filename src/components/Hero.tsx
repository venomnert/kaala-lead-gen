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
            <div className="flex items-center gap-2 mb-4 bg-blue-600/30 rounded-full px-4 py-2 w-fit animate-fade-in">
              <Package size={18} className="text-blue-200" />
              <span className="text-sm font-medium text-blue-100">GTA's #1 Rated Delivery Service</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Same-Day Delivery Across Toronto, Guaranteed
            </h1>
            
            <p className="text-xl text-blue-100 max-w-lg">
              Join 500+ businesses who trust us with their time-sensitive deliveries. Get a free quote in 60 seconds.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-blue-50">Same-day delivery guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-blue-50">Real-time GPS tracking included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-blue-50">Free insurance up to $1000</span>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#get-quote" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 group"
              >
                Get Your Free Quote Now
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-200">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-blue-200">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99%</div>
                <div className="text-sm text-blue-200">On-Time Rate</div>
              </div>
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