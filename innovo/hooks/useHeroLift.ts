import { useEffect, useState } from 'react';

export const useHeroLift = () => {
  const [isLifted, setIsLifted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const liftThreshold = window.innerHeight * 0.5;
      setIsLifted(currentScrollY > liftThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isLifted, scrollY };
};
