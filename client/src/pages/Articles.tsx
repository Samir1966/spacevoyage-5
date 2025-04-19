import React from 'react';
import ArticlesSection from '@/sections/ArticlesSection';
import NewsletterSection from '@/sections/NewsletterSection';
import { motion } from 'framer-motion';

const Articles: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Space Articles</h1>
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Stay updated with the latest discoveries, research, and advancements in space exploration.
        </p>
      </div>
      
      <ArticlesSection extended={true} />
      <NewsletterSection />
    </motion.div>
  );
};

export default Articles;
