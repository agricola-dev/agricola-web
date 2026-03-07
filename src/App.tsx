import { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ProblemSolution } from './sections/ProblemSolution';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Impact } from './sections/Impact';
import { Testimonials } from './sections/Testimonials';
import { DownloadCTA } from './sections/DownloadCTA';
import { Footer } from './sections/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Impact />
        {/* Hidden for future use: What Farmers Are Saying */}
        {/* <Testimonials /> */}
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
