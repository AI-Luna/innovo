import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

export const TechStack: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      title: "Instant Settlement",
      description: "Achieve real-time REC settlements and ensure alignment of REC serial numbers across transactions."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      title: "REC Enrichment",
      description: "Access detailed data for listed RECs, now with 16 enhanced characteristics for better reporting."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: "Reporting",
      description: "Leverage advanced reporting tools for comprehensive tracking and analysis of your REC portfolio."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      ),
      title: "Request Pricing",
      description: "Seamlessly create and manage price requests with our intuitive platform."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: "Retirement",
      description: "Simplify the retirement process with robust tracking and validation."
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      ),
      title: "Portfolio Management",
      description: "Manage multiple portfolios effortlessly through one unified dashboard."
    }
  ];

  return (
    <motion.section 
      className="pt-12 pb-24 relative overflow-hidden"
      style={{ backgroundColor: '#E0E0E0' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Description Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Title */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 font-hacker" style={{ color: '#1A1A1A' }}>
              Innovo Features
            </h2>
          </div>
          
          {/* Right: Description */}
          <div className="flex items-center">
            <p className="text-lg leading-relaxed font-bold font-hacker" style={{ color: '#1A1A1A' }}>
              An end-to-end energy trading system that streamlines transactions, automates settlements, and embeds verification directly into every trade.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-[#262626] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon - Centered */}
              <div className="mb-4 flex justify-center items-center" style={{ color: '#3670A3' }}>
                {feature.icon}
              </div>
              
              {/* Title - Centered */}
              <h3 className="text-xl font-normal mb-0 text-center font-hacker" style={{ color: '#E0E0E0' }}>
                {feature.title}
              </h3>
              
              {/* Description - Always visible with fade-in on scroll */}
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: (index * 0.1) + 0.5, ease: "easeOut" }}
              >
                <p className="text-sm leading-relaxed text-center font-hacker" style={{ color: '#E0E0E0' }}>
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;
