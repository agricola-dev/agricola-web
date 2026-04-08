import { LegalPageLayout } from '@/components/LegalPageLayout';
import { privacyPolicyContent } from '@/data/privacyPolicyContent';
import { useDocumentHead } from '@/hooks/useDocumentHead';

export function PrivacyPolicyPage() {
  useDocumentHead(
    'Privacy Policy — Agricola',
    'Read the Agricola Privacy Policy to learn how we collect, use, and protect your personal data.',
    '/privacy'
  );

  return <LegalPageLayout data={privacyPolicyContent} />;
}
