import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-black/90 backdrop-blur-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <Globe className="w-8 h-8 text-white" />
          <span className="text-gradient">AI Organization</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-all hover:text-white ${
                location.pathname === item.path ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="btn-primary"
          >
            Book a Demo
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4 border-b border-neutral-800' : 'max-h-0 overflow-hidden py-0 border-none'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-2 px-4 text-sm transition-colors ${
                location.pathname === item.path 
                  ? 'text-white bg-neutral-800/50 rounded-md' 
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mt-2 btn-primary text-center"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;