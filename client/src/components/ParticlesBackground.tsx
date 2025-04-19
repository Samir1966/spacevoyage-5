import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

const ParticlesBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = React.useState<Particle[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
      
      const newParticles: Particle[] = [];
      
      // Create 100 particles
      for (let i = 0; i < 100; i++) {
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random position
        const x = Math.random() * containerWidth;
        const y = Math.random() * containerHeight;
        
        // Random opacity
        const opacity = Math.random() * 0.8 + 0.2;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        newParticles.push({
          id: i,
          x,
          y,
          size,
          opacity,
          delay
        });
      }
      
      setParticles(newParticles);
    };
    
    createParticles();
    
    // Handle window resize
    const handleResize = () => {
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white pointer-events-none"
          initial={{ 
            width: particle.size, 
            height: particle.size, 
            left: particle.x, 
            top: particle.y,
            opacity: 0
          }}
          animate={{ 
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: 3,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
