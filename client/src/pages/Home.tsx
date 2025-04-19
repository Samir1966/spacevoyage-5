import React from 'react';
import HeroSection from '@/sections/HeroSection';
import PlanetsSection from '@/sections/PlanetsSection';
import MissionSection from '@/sections/MissionSection';
import ConceptsSection from '@/sections/ConceptsSection';
import ExploreSection from '@/sections/ExploreSection';
import ArticlesSection from '@/sections/ArticlesSection';
import NewsletterSection from '@/sections/NewsletterSection';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <PlanetsSection />
      <MissionSection />
      <ConceptsSection />
      <ExploreSection />
      <ArticlesSection />
      <NewsletterSection />
    </motion.div>
  );
};

export default Home;
