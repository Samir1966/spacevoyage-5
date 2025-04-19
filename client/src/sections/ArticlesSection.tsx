import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  description: string;
  category: {
    name: string;
    color: string;
    bgColor: string;
  };
  date: string;
  imageUrl: string;
}

interface ArticlesSectionProps {
  extended?: boolean;
}

const articles: Article[] = [
  {
    id: 'interstellar-travel',
    title: 'The Future of Interstellar Travel',
    description: 'Exploring breakthrough propulsion technologies that could one day take humanity to the stars.',
    category: {
      name: 'Technology',
      color: 'text-[#5B3DC8]',
      bgColor: 'bg-[#5B3DC8]/20'
    },
    date: 'June 12, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'mars-colonization',
    title: 'Mars Colonization Plans',
    description: 'A comprehensive look at how humanity plans to establish permanent habitats on the Red Planet.',
    category: {
      name: 'Exploration',
      color: 'text-[#FF6B4A]',
      bgColor: 'bg-[#FF6B4A]/20'
    },
    date: 'May 28, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'extraterrestrial-life',
    title: 'Searching for Extraterrestrial Life',
    description: 'How scientists are looking for signs of life beyond Earth using advanced telescopes and instruments.',
    category: {
      name: 'Science',
      color: 'text-[#50E3C2]',
      bgColor: 'bg-[#50E3C2]/20'
    },
    date: 'April 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'space-tourism',
    title: 'The Rise of Space Tourism',
    description: 'An inside look at the companies making space travel accessible to civilians and the future of the industry.',
    category: {
      name: 'Business',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    date: 'March 5, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'dark-energy',
    title: 'The Mystery of Dark Energy',
    description: 'New research sheds light on the mysterious force driving the accelerating expansion of our universe.',
    category: {
      name: 'Astrophysics',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    },
    date: 'February 20, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&h=400'
  },
  {
    id: 'lunar-gateway',
    title: 'The Lunar Gateway Project',
    description: 'How the upcoming space station in lunar orbit will serve as a stepping stone for deep space exploration.',
    category: {
      name: 'Infrastructure',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    date: 'January 12, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1614726365952-510103b5fe98?auto=format&fit=crop&w=600&h=400'
  }
];

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ extended = false }) => {
  const displayArticles = extended ? articles : articles.slice(0, 3);
  
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
    <section id="articles" className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        {!extended && (
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>
        )}
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayArticles.map((article) => (
            <motion.div 
              key={article.id}
              className="glass rounded-2xl overflow-hidden planet-card h-full"
              variants={itemVariants}
            >
              <img 
                src={article.imageUrl}
                alt={article.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <span className={`inline-block px-3 py-1 ${article.category.bgColor} ${article.category.color} text-xs rounded-full mb-3`}>
                  {article.category.name}
                </span>
                <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-400">{article.date}</span>
                  <a href="#" className="text-[#4AB8FF] flex items-center text-sm">
                    Read article
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {!extended && (
          <div className="text-center mt-10">
            <Button variant="outline">
              View all articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
