import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, LogIn } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/get-started');
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'pricing' } });
    } else {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'features' } });
    } else {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ReviewPro+</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                location.pathname === '/' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/short-term-rentals" 
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                location.pathname === '/short-term-rentals' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
            >
              Short-Term Rentals
            </Link>
            <Link 
              to="/restaurant" 
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                location.pathname === '/restaurant' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
            >
              Restaurants
            </Link>
            <Link 
              to="/case-studies" 
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                location.pathname === '/case-studies' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
            >
              Case Studies
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                location.pathname === '/blog' ? 'text-indigo-600 dark:text-indigo-400' : ''
              }`}
            >
              Blog
            </Link>
            <button 
              onClick={handleFeaturesClick}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Features
            </button>
            <button 
              onClick={handlePricingClick}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Pricing
            </button>
            <DarkModeToggle />
            <Link 
              to="/login"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </Link>
            <button 
              onClick={handleGetStarted}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <Link 
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <LogIn className="h-5 w-5" />
            </Link>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-gray-600 dark:text-gray-300" /> : <Menu className="text-gray-600 dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Home</Link>
            <Link to="/short-term-rentals" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Short-Term Rentals</Link>
            <Link to="/restaurant" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Restaurants</Link>
            <Link to="/case-studies" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Case Studies</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-600 dark:text-gray-300">Blog</Link>
            <button 
              onClick={handleFeaturesClick}
              className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300"
            >
              Features
            </button>
            <button 
              onClick={handlePricingClick}
              className="block w-full text-left px-3 py-2 text-gray-600 dark:text-gray-300"
            >
              Pricing
            </button>
            <button 
              onClick={handleGetStarted}
              className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}