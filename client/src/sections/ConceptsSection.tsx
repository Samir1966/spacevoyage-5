import React from 'react';
import { motion } from 'framer-motion';

interface Concept {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ConceptsSectionProps {
  extended?: boolean;
}

const concepts: Concept[] = [
  {
    id: 'black-holes',
    title: 'Black Holes',
    description: 'Regions of spacetime where gravity is so strong that nothing can escape from it.',
    imageUrl: 'https://images.unsplash.com/photo-1614313915166-6b144ba0cb5a?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'nebulae',
    title: 'Nebulae',
    description: 'Interstellar clouds of dust, hydrogen, helium and other ionized gases.',
    imageUrl: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'exoplanets',
    title: 'Exoplanets',
    description: 'Planets outside our solar system that orbit around stars other than the Sun.',
    imageUrl: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'dark-matter',
    title: 'Dark Matter',
    description: 'Mysterious substance that doesn\'t emit light but accounts for most of the matter in the universe.',
    imageUrl: 'https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'galaxies',
    title: 'Galaxies',
    description: 'Massive, gravitationally bound systems of stars, stellar remnants, interstellar gas, dust, and dark matter.',
    imageUrl: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'wormholes',
    title: 'Wormholes',
    description: 'Theoretical passages through space-time that could create shortcuts for long journeys across the universe.',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&h=400'
  }
];

const ConceptsSection: React.FC<ConceptsSectionProps> = ({ extended = false }) => {
  const displayConcepts = extended ? concepts : concepts.slice(0, 3);
  
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
    <section id="concepts" className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        {!extended && (
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Space Concepts
          </motion.h2>
        )}
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayConcepts.map((concept) => (
            <motion.div 
              key={concept.id}
              className="glass rounded-2xl overflow-hidden planet-card"
              variants={itemVariants}
            >
              <img 
                src={concept.imageUrl}
                alt={concept.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{concept.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {concept.description}
                </p>
                <a href="#" className="text-[#4AB8FF] flex items-center text-sm">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConceptsSection;
