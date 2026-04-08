import { useEffect } from 'react';

const DEFAULT_TITLE = 'Agricola - Empowering Botswana Farmers';
const DEFAULT_DESCRIPTION =
  'Agricola empowers Botswana\'s farmers and agricultural merchants with smart tools to track crops, manage inventory, and reduce post-harvest losses.';
const DEFAULT_CANONICAL = 'https://agricola-app.com/';

export function useDocumentHead(title: string, description: string, canonicalPath: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://agricola-app.com${canonicalPath}`);

    return () => {
      document.title = DEFAULT_TITLE;
      document.querySelector('meta[name="description"]')?.setAttribute('content', DEFAULT_DESCRIPTION);
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', DEFAULT_CANONICAL);
    };
  }, [title, description, canonicalPath]);
}
