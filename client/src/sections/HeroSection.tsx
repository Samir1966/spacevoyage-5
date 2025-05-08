import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import plutoImagePath from '@assets/stunning-3d-render-pluto-celestial-body-ice-rock_191095-83472.jpg';
import spaceBgPath from '@assets/solar-system-background_1284-12725.avif';
import marsImagePath from '@assets/mars12.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 py-16 md:py-24 overflow-hidden">
      {/* Background with cosmic effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-dark"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="h-full w-full"
        >
          <img 
            src={spaceBgPath} 
            alt="Space background" 
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative">
          {/* Magic sparkle effects */}
          <motion.div 
            className="absolute -right-40 top-10 opacity-10 z-0 hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-[20rem] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#4AB8FF] via-[#FF6B4A] to-[#5B3DC8]">
              SPACE
            </h1>
          </motion.div>
          
          <motion.div 
            className="relative z-10 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AB8FF] to-[#FF6B4A]">
                EXPLORE
              </span>
              <span className="block text-white">THE UNIVERSE</span>
              <motion.div 
                className="absolute -top-6 -left-6 w-20 h-20 opacity-70"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-[#4AB8FF]/30"></div>
              </motion.div>
            </motion.h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl backdrop-blur-sm bg-space-dark/30 p-4 rounded-lg">
              Journey through the infinite cosmos, discover new worlds, and unravel the mysteries of space. Experience the grandeur of the universe with cutting-edge technology.
            </p>
            
            <div className="flex space-x-4">
              <Link href="/planet-predictor">
                <Button size="lg" className="uppercase tracking-wide bg-gradient-to-r from-[#FF6B4A] to-[#5B3DC8] hover:opacity-90 transition-all cosmic-button glow-effect shadow-xl">
                  <span className="mr-2">✧</span>
                  Discover Planets
                  <span className="ml-2">✧</span>
                </Button>
              </Link>
              <Link href="/calculators">
                <Button size="lg" variant="outline" className="uppercase tracking-wide border-[#4AB8FF] text-[#4AB8FF] hover:bg-[#4AB8FF]/10 magic-sparkle">
                  <span className="animate-pulse-slow">★</span>
                  <span className="mx-2">Space Tools</span>
                  <span className="animate-pulse-slow">★</span>
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Floating planet card with glow effect */}
          <motion.div 
            className="relative mt-16 md:mt-0 md:absolute md:top-1/2 md:left-1/3 md:transform md:-translate-y-1/2 z-10 planet-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden w-72 shadow-xl border border-white/10 relative glow-effect">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4AB8FF]/20 via-transparent to-[#FF6B4A]/20"></div>
              <img 
                src={marsImagePath}
                alt="Mars surface" 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4AB8FF] to-[#FF6B4A]">Mars Exploration</h3>
                <p className="text-gray-300 text-sm">Discover the mysteries of the red planet through our cutting-edge research and analysis tools.</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-white/60">Featured Mission</span>
                  <div className="h-6 w-6 rounded-full bg-[#FF6B4A] animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Pluto image with 3D effect */}
          <motion.div 
            className="relative mt-16 md:absolute md:right-0 md:bottom-0 md:transform md:translate-y-1/4 z-20"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ 
              filter: 'drop-shadow(0 0 15px rgba(75, 184, 255, 0.5))'
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <img 
                src={plutoImagePath} 
                alt="Planet Pluto" 
                className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-full" 
              />
              <motion.div
                className="absolute -inset-1 rounded-full"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(75, 184, 255, 0.3)', '0 0 40px rgba(75, 184, 255, 0.6)', '0 0 20px rgba(75, 184, 255, 0.3)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </motion.div>
          
          {/* Floating orbital rings */}
          <motion.div 
            className="hidden md:block absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/3 z-5 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <motion.div 
              className="w-[30rem] h-[30rem] rounded-full border border-[#4AB8FF]/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div 
              className="w-[24rem] h-[24rem] rounded-full border border-[#FF6B4A]/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <motion.div 
              className="w-[18rem] h-[18rem] rounded-full border border-[#5B3DC8]/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
