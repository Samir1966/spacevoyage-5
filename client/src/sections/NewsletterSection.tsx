import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    // For demonstration purposes, we would normally call an API here
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
      variant: "default"
    });
    
    setEmail('');
  };

  return (
    <section className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Stay Updated
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Subscribe to our newsletter to receive the latest news and updates about space exploration.
              </motion.p>
              
              <motion.form 
                className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onSubmit={handleSubmit}
              >
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#5B3DC8]" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
