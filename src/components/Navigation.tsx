import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Trainings', path: '/trainings' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-burnt-orange text-white p-2 rounded-lg">
              <span className="font-bold text-xl">KG</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-forest-green">KHARIS GABI</span>
              <p className="text-xs text-gray-600 -mt-1">CATERING SERVICES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors hover:text-burnt-orange ${
                  isActive(item.path)
                    ? 'text-burnt-orange border-b-2 border-burnt-orange'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/quote">
              <Button className="bg-golden-yellow hover:bg-golden-yellow/90 text-white px-6 py-2 rounded-full font-semibold">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-burnt-orange transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-burnt-orange bg-light-beige'
                      : 'text-gray-700 hover:text-burnt-orange hover:bg-light-beige'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/quote" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 bg-golden-yellow hover:bg-golden-yellow/90 text-white font-semibold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
