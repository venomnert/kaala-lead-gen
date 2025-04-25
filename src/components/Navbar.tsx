import React, { useState, useEffect } from 'react';
import { Menu, X, Package } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-gray-800 shadow-md py-3' : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package size={28} className={isScrolled ? 'text-blue-600' : 'text-white'} />
            <span className="font-bold text-xl">Kaala</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="font-medium hover:text-blue-400 transition"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="font-medium hover:text-blue-400 transition"
            >
              How It Works
            </button>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('get-quote')} 
              className={`${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-white hover:bg-gray-100 text-blue-600'
              } font-medium px-5 py-2 rounded-lg transition duration-300`}
            >
              Join Now
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2"
            >
              {isMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-blue-900 z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col space-y-8 text-center text-white">
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="text-2xl font-medium hover:text-blue-400 transition"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-2xl font-medium hover:text-blue-400 transition"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-2xl font-medium hover:text-blue-400 transition"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('get-quote')} 
            className="text-2xl font-medium bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;