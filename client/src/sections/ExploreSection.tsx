import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ExploreSection: React.FC = () => {
  return (
    <section id="explore" className="relative z-10 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-12 gradient-text text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start Your Space Journey
          </motion.h2>
          
          {/* Space Rocket Launch */}
          <motion.div 
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=1200&h=800" 
                alt="Rocket launch" 
                className="w-full h-full object-cover opacity-30" 
              />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="font-bold text-2xl mb-4">Space Tourism</h3>
                <p className="text-gray-300 mb-6">
                  Experience the thrill of zero gravity and witness the beauty of Earth from space. Our space tourism program offers once-in-a-lifetime journeys beyond our atmosphere.
                </p>
                <div className="flex space-x-4">
                  <Button>
                    Book a Trip
                  </Button>
                  <Button variant="secondary">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-64 h-64 relative animate-float glow-effect">
                  <img 
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&h=600" 
                    alt="Earth from space" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Space Research Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Research Card 1 */}
            <motion.div 
              className="glass rounded-2xl overflow-hidden planet-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-[#FF6B4A]/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6B4A]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Space Research
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Join our research initiatives to expand human knowledge about space, from advanced propulsion systems to extraterrestrial habitats.
                </p>
                <a href="#" className="text-[#4AB8FF] flex items-center text-sm">
                  Join the team
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Research Card 2 */}
            <motion.div 
              className="glass rounded-2xl overflow-hidden planet-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-[#4AB8FF]/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4AB8FF]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </span>
                  Space Technology
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Explore our cutting-edge technologies that make space exploration possible, from spacecraft design to life support systems.
                </p>
                <a href="#" className="text-[#4AB8FF] flex items-center text-sm">
                  Discover more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
