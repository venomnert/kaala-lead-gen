import React from 'react';
import { MapPin, Phone, Mail, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Package size={24} className="text-blue-400" />
              <span className="text-xl font-bold">GTA Parcel</span>
            </div>
            <p className="text-gray-400 mb-6">
              Fast, reliable parcel delivery services across the Greater Toronto Area. Same-day delivery and real-time tracking.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">123 Delivery Street, Toronto, ON M5V 2B7, Canada</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">(416) 555-0123</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">info@gtaparcel.com</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Same-Day Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Scheduled Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Express Delivery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Business Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">E-commerce Integration</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-blue-400 transition">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition">Testimonials</a></li>
              <li><a href="#get-quote" className="text-gray-400 hover:text-blue-400 transition">Get a Quote</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Toronto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Mississauga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Brampton</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Vaughan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Markham</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Richmond Hill</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GTA Parcel. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;