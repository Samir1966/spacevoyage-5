import React from 'react';
import ConceptsSection from '@/sections/ConceptsSection';
import NewsletterSection from '@/sections/NewsletterSection';
import { motion } from 'framer-motion';

const Concepts: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Space Concepts</h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Explore the fascinating concepts and phenomena that define our understanding of space and the cosmos.
        </p>
      </div>
      
      <ConceptsSection extended={true} />
      <NewsletterSection />
    </motion.div>
  );
};

export default Concepts;
