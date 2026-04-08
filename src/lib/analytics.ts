declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

export function trackPageView(path: string) {
  gtag('event', 'page_view', { page_path: path });
}

export function trackCTAClick(label: string, location: string) {
  gtag('event', 'cta_click', { label, location });
}

export function trackScrollDepth(percent: number) {
  gtag('event', 'scroll_depth', { percent });
}
