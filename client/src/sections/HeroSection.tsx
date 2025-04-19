import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Large "SPACE" text in background */}
          <motion.div 
            className="absolute -right-40 top-10 opacity-10 z-0 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-[20rem] font-bold tracking-tighter">SPACE</h1>
          </motion.div>
          
          <motion.div 
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              GO BEYOND
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl">
              Space is the boundless three-dimensional extent in which objects and events have relative position.
            </p>
            
            <Link href="/concepts">
              <Button size="lg" className="uppercase tracking-wide">
                Explore
              </Button>
            </Link>
          </motion.div>
          
          {/* Concept card */}
          <motion.div 
            className="relative mt-16 md:mt-0 md:absolute md:top-1/2 md:left-1/3 md:transform md:-translate-y-1/2 z-10 planet-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden w-64 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1614727187346-ec3a009092b0?auto=format&fit=crop&w=600&h=400"
                alt="Cosmic nebula" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Concept of space</h3>
                <p className="text-gray-400 text-sm">Blog | Article</p>
              </div>
            </div>
          </motion.div>
          
          {/* Earth image */}
          <motion.div 
            className="relative mt-16 md:absolute md:right-0 md:bottom-0 md:transform md:translate-y-1/4 z-20 animate-float"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=600&h=600" 
              alt="Planet Earth" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full" 
            />
          </motion.div>
          
          {/* Astronaut */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-1/4 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
            }}
            style={{ animationName: 'float', animationDuration: '6s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=300&h=300" 
              alt="Astronaut" 
              className="w-28 h-auto object-contain" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
