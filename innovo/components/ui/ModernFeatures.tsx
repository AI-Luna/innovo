import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

// Typewriter effect component
const TypewriterText: React.FC< { text: string; speed?: number; startTyping: boolean }> = ({ text, speed = 50, startTyping }) => {
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
      <span className="font-bold">{displayedText}</span>
      <span 
        className="inline-block" 
        style={{ 
          backgroundColor: '#FF4500',
          width: '0.6ch',
          height: '1em',
          verticalAlign: 'text-bottom',
          animation: 'blink 1s ease-in-out infinite',
          marginLeft: '2px'
        }}
      >
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
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
      className="relative overflow-hidden h-screen flex items-center justify-center"
      style={{
        background: `linear-gradient(to bottom, transparent 0%, rgba(224, 224, 224, 0.3) 40%, rgba(224, 224, 224, 1) 70%)`
      }}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Text block */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="px-6 py-4">
            {/* Typewriter text */}
            <motion.p 
              className="text-2xl lg:text-3xl font-bold leading-relaxed"
              style={{ color: '#E0E0E0' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onViewportEnter={() => setIsTyping(true)}
              onViewportLeave={() => setIsTyping(false)}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <span>Innovo Markets is rebuilding the foundation of energy finance by{' '}</span>
              <TypewriterText startTyping={isTyping} speed={50} text="automating how environmental commodities are transacted, verified, and settled across a unified digital network" />
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
