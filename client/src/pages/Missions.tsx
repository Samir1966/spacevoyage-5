import React from 'react';
import MissionSection from '@/sections/MissionSection';
import NewsletterSection from '@/sections/NewsletterSection';
import { motion } from 'framer-motion';

const Missions: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Missions</h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Learn about our current and upcoming space missions, from Mars exploration to deep space travel.
        </p>
      </div>
      
      <MissionSection extended={true} />
      <NewsletterSection />
    </motion.div>
  );
};

export default Missions;
