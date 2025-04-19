import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/concepts", label: "Concepts" },
    { href: "/planets", label: "Planets" },
    { href: "/missions", label: "About" },
    { href: "/articles", label: "Articles" },
  ];

  return (
    <header className="relative z-20">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-white font-bold text-2xl tracking-wider">
              <span className="text-[#FF6B4A]">The</span>S
            </a>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={`hover:text-[#FF6B4A] transition-colors font-medium ${
                location === link.href ? 'text-[#FF6B4A]' : 'text-white'
              }`}>
                {link.label}
              </a>
            </Link>
          ))}
        </div>
        
        <Link href="/concepts">
          <Button className="hidden md:block" variant="default">
            Explore
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
                <a 
                  className={`hover:text-[#FF6B4A] transition-colors font-medium py-2 ${
                    location === link.href ? 'text-[#FF6B4A]' : 'text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/concepts">
              <Button 
                className="w-full" 
                variant="default"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
