import React from 'react';
import { motion } from 'framer-motion';

export const CTAOrange: React.FC = () => {
  return (
    <motion.section 
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: '#FF4500' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: false }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Top divider line */}
        <div className="h-px w-full mb-8" style={{ backgroundColor: '#000' }}></div>
        
        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8" style={{ color: '#000' }}>
            Energy markets need a digital backbone. We're building it.
          </h2>
        </motion.div>

        {/* Bottom divider line */}
        <div className="h-px w-full mb-12" style={{ backgroundColor: '#000' }}></div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#E0E0E0] border-2 border-black rounded-lg font-bold text-lg hover:bg-[#F0F0F0] transition-colors"
            style={{ color: '#000' }}
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTAOrange;
