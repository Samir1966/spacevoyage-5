import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-space-dark text-white relative overflow-x-hidden min-h-screen">
      {/* Fixed background */}
      <div className="stars-bg fixed inset-0 z-0"></div>
      
      {/* Particle animation container */}
      <ParticlesBackground />
      
      {/* Main content */}
      <div className="flex flex-col min-h-screen relative z-10">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
