import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '@/sections/Hero';
import { ProblemSolution } from '@/sections/ProblemSolution';
import { Features } from '@/sections/Features';
import { HowItWorks } from '@/sections/HowItWorks';
import { DownloadCTA } from '@/sections/DownloadCTA';

export function HomePage() {
  const location = useLocation();

  // Scroll reveal animation
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    });

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle cross-page scroll (e.g. clicking "Features" from /privacy)
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      {/* <Impact /> */}
      {/* <Testimonials /> */}
      <DownloadCTA />
    </>
  );
}
