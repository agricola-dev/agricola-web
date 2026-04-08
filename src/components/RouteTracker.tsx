import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth } from '@/lib/analytics';

const SCROLL_MILESTONES = [25, 50, 75, 90];

export function RouteTracker() {
  const { pathname } = useLocation();
  const firedMilestones = useRef<Set<number>>(new Set());

  // Fire page view on route change, reset scroll milestones
  useEffect(() => {
    trackPageView(pathname);
    firedMilestones.current = new Set();
  }, [pathname]);

  // Scroll depth tracking
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of SCROLL_MILESTONES) {
        if (percent >= milestone && !firedMilestones.current.has(milestone)) {
          firedMilestones.current.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
