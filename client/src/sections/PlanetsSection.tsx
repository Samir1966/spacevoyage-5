import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import plutoImagePath from '@assets/stunning-3d-render-pluto-celestial-body-ice-rock_191095-83472.jpg';
import planetsInfoGraphicPath from '@assets/planets-solar-system-infographic_1308-51252.avif';
import marsImagePath from '@assets/mars12.jpg';
import space2Path from '@assets/space2.jpeg';
import space3Path from '@assets/spac3.jpeg';

interface Planet {
  id: string;
  name: string;
  color: string;
  description?: string;
  imageUrl: string;
  bgGradient: string;
  size?: string;
  distanceFromSun?: string;
  specialFeature?: string;
}

interface PlanetsSectionProps {
  extended?: boolean;
}

const planets: Planet[] = [
  {
    id: 'mars',
    name: 'Mars',
    color: 'text-[#FF6B4A]',
    bgGradient: 'from-[#FF6B4A]/20 to-[#FF8F6A]/5',
    imageUrl: marsImagePath,
    size: '6,779 km',
    distanceFromSun: '227.9 million km',
    specialFeature: 'Olympus Mons, largest volcano'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    color: 'text-[#4AB8FF]',
    bgGradient: 'from-[#4AB8FF]/20 to-[#5B3DC8]/5',
    description: 'The only planet that rotates on its side with an axial tilt of 98 degrees.',
    imageUrl: space2Path,
    size: '50,724 km',
    distanceFromSun: '2.9 billion km'
  },
  {
    id: 'venus',
    name: 'Venus',
    color: 'text-[#FF9A8A]',
    bgGradient: 'from-[#FF9A8A]/20 to-[#FFBE8A]/5',
    imageUrl: space3Path,
    size: '12,104 km',
    distanceFromSun: '108.2 million km',
    specialFeature: 'Hottest planet'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    color: 'text-amber-500',
    bgGradient: 'from-amber-500/20 to-amber-300/5',
    description: 'The largest planet in our solar system, with a great red spot that could fit three Earths inside.',
    imageUrl: 'https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?auto=format&fit=crop&w=100&h=100',
    size: '139,820 km',
    distanceFromSun: '778.5 million km'
  },
  {
    id: 'pluto',
    name: 'Pluto',
    color: 'text-blue-300',
    bgGradient: 'from-blue-300/20 to-blue-100/5',
    description: 'A dwarf planet in the Kuiper belt with a heart-shaped region named Tombaugh Regio.',
    imageUrl: plutoImagePath,
    size: '2,376 km',
    distanceFromSun: '5.9 billion km'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    color: 'text-blue-500',
    bgGradient: 'from-blue-500/20 to-blue-300/5',
    description: 'The windiest planet with storms that can reach supersonic speeds of over 2,000 km/h.',
    imageUrl: 'https://images.unsplash.com/photo-1614313915166-6b144ba0cb5a?auto=format&fit=crop&w=100&h=100',
    size: '49,244 km',
    distanceFromSun: '4.5 billion km'
  }
];

const PlanetsSection: React.FC<PlanetsSectionProps> = ({ extended = false }) => {
  const displayPlanets = extended ? planets : planets.slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="planets" className="relative z-10 py-20 overflow-hidden">
      {/* Solar system background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <img 
          src={planetsInfoGraphicPath}
          alt="Solar system" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Decorative orbital lines */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10">
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-[#FF6B4A]/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-[#4AB8FF]/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full border border-[#5B3DC8]/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with magic sparkle effect */}
        <div className="flex flex-col md:flex-row mb-16">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#4AB8FF] to-[#FF6B4A]">COSMIC WORLDS</h2>
              
              {/* Animated sparkles */}
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#4AB8FF]/20"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#FF6B4A]/20"
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              ></motion.div>
            </div>
            
            <p className="text-gray-300 max-w-md text-lg">
              Explore our solar system's remarkable planets, each with unique characteristics and mysteries waiting to be discovered.
            </p>
            
            {/* Interactive legend */}
            {extended && (
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B4A] mr-2"></div>
                  <span className="text-sm text-gray-300">Terrestrial</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#4AB8FF] mr-2"></div>
                  <span className="text-sm text-gray-300">Gas Giants</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                  <span className="text-sm text-gray-300">Dwarf Planets</span>
                </div>
              </div>
            )}
          </motion.div>
          
          {/* Interactive planets diagram */}
          {extended && (
            <motion.div 
              className="md:w-1/2 hidden md:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-80 h-80">
                {/* Sun */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ 
                    boxShadow: ['0 0 20px rgba(255, 191, 0, 0.5)', '0 0 40px rgba(255, 191, 0, 0.7)', '0 0 20px rgba(255, 191, 0, 0.5)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                
                {/* Planets orbit */}
                {planets.slice(0, 4).map((planet, index) => {
                  const orbitSize = 90 + index * 40;
                  const planetSize = 8 - index;
                  const duration = 15 + index * 5;
                  const delay = index * 0.2;
                  
                  return (
                    <React.Fragment key={planet.id}>
                      {/* Orbit path */}
                      <div 
                        className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
                        style={{ 
                          width: `${orbitSize}px`, 
                          height: `${orbitSize}px`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      ></div>
                      
                      {/* Planet */}
                      <motion.div
                        className="absolute"
                        style={{ 
                          width: `${planetSize}px`, 
                          height: `${planetSize}px`,
                        }}
                        animate={{
                          rotate: 360
                        }}
                        transition={{ 
                          duration: duration, 
                          repeat: Infinity, 
                          ease: "linear",
                          delay: delay 
                        }}
                      >
                        <div 
                          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full`}
                          style={{
                            width: `${planetSize}px`, 
                            height: `${planetSize}px`,
                            backgroundColor: planet.id === 'mars' ? '#FF6B4A' : 
                                            planet.id === 'venus' ? '#FF9A8A' : 
                                            planet.id === 'uranus' ? '#4AB8FF' : 
                                            '#FFBE8A',
                            left: `${orbitSize / 2}px`
                          }}
                        ></div>
                      </motion.div>
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Planet cards with enhanced magic effects */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayPlanets.map((planet) => (
            <motion.div
              key={planet.id}
              className="glass rounded-2xl overflow-hidden planet-card border border-white/5"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className={`bg-gradient-to-br ${planet.bgGradient} p-6 flex flex-col h-full relative`}>
                {/* Animated glow effect */}
                <motion.div 
                  className="absolute inset-0 opacity-30"
                  animate={{ 
                    background: ['radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)', 
                                'radial-gradient(circle at 20% 70%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                                'radial-gradient(circle at 80% 30%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)',
                                'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)']
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                <div className="flex items-start mb-6">
                  <div className="relative mr-4 flex-shrink-0">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-1 rounded-full opacity-30"
                      style={{ borderWidth: '1px', borderStyle: 'dashed', borderColor: `${planet.id === 'mars' ? '#FF6B4A' : planet.id === 'uranus' ? '#4AB8FF' : '#FFBE8A'}` }}
                    ></motion.div>
                    <img 
                      src={planet.imageUrl}
                      alt={planet.name} 
                      className="w-20 h-20 object-cover rounded-full relative z-10" 
                    />
                  </div>
                  
                  <div>
                    <h3 className={`font-bold text-2xl ${planet.color} mb-1`}>{planet.name}</h3>
                    <div className="flex items-center text-xs text-white/60">
                      <span className="flex-shrink-0">
                        {planet.size && <span className="mr-2">{planet.size}</span>}
                      </span>
                      {planet.specialFeature && (
                        <span className="ml-2 bg-white/10 px-2 py-1 rounded-full text-xs">
                          {planet.specialFeature}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {planet.description && (
                  <p className="text-sm text-white/80 mb-4">{planet.description}</p>
                )}
                
                <div className="mt-auto space-y-3">
                  {planet.distanceFromSun && (
                    <div className="flex items-center text-sm">
                      <div className="w-4 h-4 mr-2 rounded-full bg-yellow-400/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      </div>
                      <span className="text-white/70">{planet.distanceFromSun} from Sun</span>
                    </div>
                  )}
                  
                  <Link href={`/planet-predictor?planet=${planet.id}`}>
                    <div className="w-full py-2 px-4 bg-white/5 hover:bg-white/10 text-white rounded-lg text-center transition-colors cursor-pointer flex items-center justify-center">
                      <span>Explore {planet.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View more button */}
        {!extended && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/planets">
              <div className="inline-flex items-center justify-center px-8 py-3 border border-[#4AB8FF] text-[#4AB8FF] rounded-full hover:bg-[#4AB8FF]/10 transition-colors cursor-pointer group">
                <span>View all planets</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PlanetsSection;
