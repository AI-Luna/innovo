'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useHeroLift } from '../../hooks/useHeroLift';

export const ModernHero: React.FC = () => {
  const { isLifted, scrollY } = useHeroLift();
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Determine if nav should be collapsed (show only logo, Careers, Contact)
  const isNavCollapsed = typeof window !== 'undefined' ? scrollY > window.innerHeight * 0.5 : false;
  
  // Calculate lift progress for smooth transition
  const liftProgress = typeof window !== 'undefined' 
    ? Math.min(scrollY / (window.innerHeight * 1.2), 1)
    : 0;

  return (
    <div className="page-container">
      {/* Hero page that lifts up */}
      <motion.section 
        className="min-h-screen bg-gray-800 flex flex-col relative overflow-hidden"
        style={{
          zIndex: 10
        }}
        animate={{
          translateY: typeof window !== 'undefined' ? -liftProgress * window.innerHeight : 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onEnded={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play();
            }
          }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/5324177-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"
          style={{ zIndex: 1 }}
        />

        {/* Navigation Bar - Fixed at top, shrinks on scroll */}
        <motion.div 
          className="fixed top-8 left-1/2 -translate-x-1/2"
          style={{ zIndex: 50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.nav
            animate={{ 
              scale: isNavCollapsed ? 0.9 : 1
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#262626] backdrop-blur-sm rounded-2xl px-8 py-3 flex items-center gap-8 shadow-lg"
          >
            {/* Navigation Links - Hide most links when collapsed */}
            <motion.div 
              className="hidden lg:flex items-center gap-8"
              animate={{
                opacity: isNavCollapsed ? 0 : 1,
                width: isNavCollapsed ? 0 : 'auto',
                marginRight: isNavCollapsed ? 0 : 'auto',
                overflow: 'hidden'
              }}
              transition={{ duration: 0.3 }}
            >
              <a href="#" className="text-[#FF4500] font-mono font-medium hover:text-[#e63e00] transition-colors whitespace-nowrap">Solutions</a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap font-mono">Technology</a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap font-mono">Resources</a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors whitespace-nowrap font-mono">About Us</a>
            </motion.div>
            
            {/* Careers - Always visible */}
            <a 
              href="#" 
              className="text-gray-200 hover:text-white transition-colors font-mono"
            >
              Careers
            </a>

            {/* Contact Link */}
            <a 
              href="#" 
              className="text-white font-bold hover:text-gray-300 transition-colors font-mono"
            >
              Contact
            </a>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.nav>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 relative flex items-center justify-center" style={{ zIndex: 10 }}>
          {/* Bottom Left Text */}
          <motion.div
            animate={{ 
              opacity: 1 - liftProgress,
              color: liftProgress > 0.5 ? `rgb(0, 0, 0)` : `rgb(255, 255, 255)`
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="absolute bottom-16 left-8 lg:left-16 max-w-lg"
          >
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Automating Energy.</span>
              <span className="block">Simplifying Transactions.</span>
            </h2>
          </motion.div>

          {/* Bottom Right Text */}
          <motion.div
            animate={{ 
              opacity: 1 - liftProgress,
              color: liftProgress > 0.5 ? `rgb(0, 0, 0)` : `rgb(255, 255, 255)`
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
            className="absolute bottom-16 right-8 lg:right-16 max-w-md text-right"
          >
            <p className="text-lg leading-relaxed">
              Innovo connects the environmental commodity market through one intelligent platform, bringing clarity to transactions and building the digital foundation of modern energy.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
