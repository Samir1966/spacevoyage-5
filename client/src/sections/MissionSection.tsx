import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

interface MissionSectionProps {
  extended?: boolean;
}

const MissionSection: React.FC<MissionSectionProps> = ({ extended = false }) => {
  return (
    <section id="missions" className="relative z-10 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
              {/* Background stars pattern (subtle) */}
              <div className="absolute inset-0 opacity-30 bg-space-dark">
                <div className="stars-bg"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-white">PRIVATE MISSION TO</span>
                <span className="text-[#FF6B4A]"> MARS</span>
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 text-lg mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Mars is there, waiting to be reached!
              </motion.p>
              
              <div className="flex items-center justify-between flex-wrap">
                <Link href={extended ? "/missions" : "#"}>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="mb-4 md:mb-0 font-bold"
                  >
                    BOOK A FLIGHT
                  </Button>
                </Link>
                
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-space-dark"></div>
                      <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-space-dark"></div>
                      <div className="w-8 h-8 rounded-full bg-red-500 border-2 border-space-dark"></div>
                      <div className="w-8 h-8 rounded-full bg-[#5B3DC8] flex items-center justify-center text-xs font-bold border-2 border-space-dark">1K+</div>
                    </div>
                    <p className="text-sm text-white/70 mt-2">People successfully landed on Mars</p>
                  </div>
                  
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-gray-300"></div>
                    </div>
                    <p className="text-sm text-white/70 mt-2">Challenging field of Aerospace</p>
                    <a href="#" className="text-xs text-white underline">READ MY STORY</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Planet illustration */}
            <motion.div 
              className="hidden md:block absolute -bottom-16 -left-16 z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-[#FF6B4A] to-red-700 opacity-60 blur-sm"></div>
            </motion.div>
            
            {/* Rocket illustrations */}
            <motion.div 
              className="absolute top-1/4 right-1/4 z-0 hidden md:block"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 16.5L3 20.5L7 19L4.5 16.5Z" fill="white" />
                <path d="M14.5 8L12 5.5L9.5 8L12 10.5L14.5 8Z" fill="white" />
                <path d="M9.5 12.5L7 15L9.5 17.5L12 15L9.5 12.5Z" fill="white" />
                <path d="M19.5 4.5L18 1L16.5 4.5L19.5 4.5Z" fill="#FF6B4A" />
                <path d="M20 14L21.5 16.5L19 17L20 14Z" fill="#5B3DC8" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
        
        {extended && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Mission Goals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FF6B4A] mr-2">•</span>
                  <span>Establish the first sustainable human presence on Mars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B4A] mr-2">•</span>
                  <span>Study the planet's geology and search for signs of past life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B4A] mr-2">•</span>
                  <span>Test technology for producing oxygen from the Martian atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B4A] mr-2">•</span>
                  <span>Prepare for future human missions and potential colonization</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Mission Timeline</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-24 font-bold text-[#4AB8FF]">2023</div>
                  <div>Mission planning and crew selection</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-bold text-[#4AB8FF]">2024</div>
                  <div>Launch preparation and final systems testing</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-bold text-[#4AB8FF]">2025</div>
                  <div>Launch window and 7-month journey to Mars</div>
                </div>
                <div className="flex">
                  <div className="w-24 font-bold text-[#4AB8FF]">2026</div>
                  <div>Mars landing and establishment of base camp</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionSection;
