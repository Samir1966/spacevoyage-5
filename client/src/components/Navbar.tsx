import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Calculator, Telescope, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/concepts", label: "Concepts" },
    { href: "/planets", label: "Planets" },
    { href: "/planet-predictor", label: "Planet Predictor", icon: <Telescope className="h-4 w-4 mr-1" /> },
    { href: "/calculators", label: "Space Calculators", icon: <Calculator className="h-4 w-4 mr-1" /> },
    { href: "/articles", label: "Articles" },
  ];

  return (
    <header className="relative z-20">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-white font-bold text-2xl tracking-wider cursor-pointer">
              <span className="text-[#FF6B4A]">The</span>S
            </div>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className={`hover:text-[#FF6B4A] transition-colors font-medium cursor-pointer flex items-center ${
                location === link.href ? 'text-[#FF6B4A]' : 'text-white'
              }`}>
                {link.icon && link.icon}
                {link.label}
              </div>
            </Link>
          ))}
        </div>
        
        <Link href="/planet-predictor">
          <Button className="hidden md:block" variant="default">
            <Telescope className="h-4 w-4 mr-2" />
            Explore Space
          </Button>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-space-darker">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div 
                  className={`hover:text-[#FF6B4A] transition-colors font-medium py-2 flex items-center cursor-pointer ${
                    location === link.href ? 'text-[#FF6B4A]' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon && link.icon}
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/planet-predictor">
              <Button 
                className="w-full" 
                variant="default"
                onClick={() => setIsMenuOpen(false)}
              >
                <Telescope className="h-4 w-4 mr-2" />
                Explore Space
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
