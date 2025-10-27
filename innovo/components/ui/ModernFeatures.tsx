import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

// Typewriter effect component
const TypewriterText: React.FC< { text: string; speed?: number; startTyping: boolean }> = ({ text, speed = 30, startTyping }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!startTyping) {
      // Don't reset when scrolling away
      return;
    }

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, startTyping]);

  return (
    <>
      {displayedText}
      <span className="inline-block w-4 h-8 bg-[#FF4500] animate-pulse" />
    </>
  );
};

export const ModernFeatures: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate fade-in progress - smooth fade in as section comes into view
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const fadeProgress = Math.max(0, Math.min(1, scrollY / (viewportHeight * 1.5)));

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden h-screen flex items-center"
      style={{
        background: `linear-gradient(to bottom, transparent 0%, rgba(249, 250, 251, 0.3) 60%, rgba(249, 250, 251, 1) 100%)`
      }}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 -mt-[28rem]">
        {/* Text block */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="px-16 py-12">
            <div className="relative" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
              {/* Typewriter text */}
              <motion.p 
                className="text-2xl lg:text-3xl font-terminal font-bold text-white leading-relaxed max-w-4xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                onViewportEnter={() => setIsTyping(true)}
                onViewportLeave={() => setIsTyping(false)}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                <TypewriterText startTyping={isTyping} text="Innovo Markets is rebuilding the foundation of energy finance. By automating high-friction transactions and connecting market participants through one intelligent network, Innovo brings speed, trust, and clarity to the flow of energy commerce." />
              </motion.p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
