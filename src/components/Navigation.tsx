
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 flex items-center justify-center bg-pace-blue rounded-xl">
            <div className="absolute w-6 h-6 animate-pulse-soft text-white font-bold">
              🏃
            </div>
          </div>
          <span className="text-xl font-bold tracking-tight">PACE RUN</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-pace-blue transition-colors">Features</a>
          <a href="#challenges" className="text-sm font-medium hover:text-pace-blue transition-colors">Challenges</a>
          <a href="#social" className="text-sm font-medium hover:text-pace-blue transition-colors">Social</a>
          <a href="#download" className="pace-btn-primary">Download</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center text-slate-700 dark:text-slate-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 shadow-lg py-4 px-4 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-pace-blue transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#challenges" 
              className="text-sm font-medium hover:text-pace-blue transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Challenges
            </a>
            <a 
              href="#social" 
              className="text-sm font-medium hover:text-pace-blue transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Social
            </a>
            <a 
              href="#download" 
              className="pace-btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
