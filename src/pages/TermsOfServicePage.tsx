import { LegalPageLayout } from '@/components/LegalPageLayout';
import { termsOfServiceContent } from '@/data/termsOfServiceContent';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export function TermsOfServicePage() {
  useDocumentHead(
    'Terms of Service — Agricola',
    'Read the Agricola Terms of Service to understand the rules and conditions for using the platform.',
    '/terms'
  );

  return <LegalPageLayout data={termsOfServiceContent} />;
}
