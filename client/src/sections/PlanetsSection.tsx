import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface Planet {
  id: string;
  name: string;
  color: string;
  description?: string;
  imageUrl: string;
}

interface PlanetsSectionProps {
  extended?: boolean;
}

const planets: Planet[] = [
  {
    id: 'mars',
    name: 'Mars',
    color: 'text-[#FF6B4A]',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'uranus',
    name: 'Uranus',
    color: 'text-[#4AB8FF]',
    description: 'Of all the planets only Uranus is called the ice giants.',
    imageUrl: 'https://images.unsplash.com/photo-1614313914067-384547da3b20?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'venus',
    name: 'Venus',
    color: 'text-red-400',
    imageUrl: 'https://images.unsplash.com/photo-1630855407415-b8aa7b206435?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    color: 'text-amber-500',
    description: 'The largest planet in our solar system, with a great red spot.',
    imageUrl: 'https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'saturn',
    name: 'Saturn',
    color: 'text-yellow-300',
    description: 'Known for its beautiful rings made of ice and rock.',
    imageUrl: 'https://images.unsplash.com/photo-1639472955693-39a149e92fe6?auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'neptune',
    name: 'Neptune',
    color: 'text-blue-500',
    description: 'The windiest planet with storms that can reach supersonic speeds.',
    imageUrl: 'https://images.unsplash.com/photo-1614313915166-6b144ba0cb5a?auto=format&fit=crop&w=100&h=100'
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
    <section id="planets" className="relative z-10 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <motion.div 
            className="md:w-1/3 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">PLANETS</h2>
            <p className="text-gray-300 max-w-md">
              Planets in the Solar System are divided.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displayPlanets.map((planet) => (
              <motion.div
                key={planet.id}
                className="glass rounded-2xl overflow-hidden planet-card"
                variants={itemVariants}
              >
                <div className={`p-6 flex flex-col h-full ${
                  planet.id === 'uranus' ? 'bg-gradient-to-br from-[#4AB8FF]/20 to-[#5B3DC8]/20' : ''
                }`}>
                  <div className="mb-4">
                    <img 
                      src={planet.imageUrl}
                      alt={planet.name} 
                      className={`${planet.id === 'uranus' ? 'w-16 h-16' : 'w-12 h-12'} object-cover rounded-full`} 
                    />
                  </div>
                  <h3 className={`font-bold text-xl ${planet.color}`}>{planet.name}</h3>
                  
                  {planet.description && (
                    <p className="text-sm text-white/70 mt-2">{planet.description}</p>
                  )}
                  
                  {!planet.description && (
                    <>
                      <div className="flex-grow"></div>
                      <Link href={`/planets?id=${planet.id}`}>
                        <a className="text-sm text-white/70 flex items-center mt-4">
                          Learn more
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </Link>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlanetsSection;
