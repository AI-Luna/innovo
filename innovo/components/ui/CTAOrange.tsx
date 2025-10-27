import React from 'react';
import { motion } from 'framer-motion';

export const CTAOrange: React.FC = () => {
  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#FF4500' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Top divider line */}
        <div className="h-px w-full mb-8" style={{ backgroundColor: '#000' }}></div>
        
        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8" style={{ color: '#000' }}>
            An optimized power grid is no longer a nice to have: It's the prerequisite to human progress.
          </h2>
        </motion.div>

        {/* Bottom divider line */}
        <div className="h-px w-full mb-12" style={{ backgroundColor: '#000' }}></div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#E0E0E0] border-2 border-black rounded-lg font-bold text-lg hover:bg-[#F0F0F0] transition-colors"
            style={{ color: '#000' }}
          >
            Book a demo
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTAOrange;
