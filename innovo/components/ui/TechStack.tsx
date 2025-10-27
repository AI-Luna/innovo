import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

export const TechStack: React.FC = () => {
  return (
    <motion.section 
      className="bg-[#FF4500] py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* L-shaped corner brackets */}
        <div className="relative inline-block w-full">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-black"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-black"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-black"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-black"></div>
          </div>
          
          {/* Content */}
          <div className="px-16 py-12 text-center">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-gray-900 mx-auto max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Upgrading how energy moves isn't a project. It's the prerequisite to global transformation.
            </motion.h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
