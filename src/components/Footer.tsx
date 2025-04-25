import React from 'react';
import { MapPin, Phone, Mail, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GTA Parcel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;