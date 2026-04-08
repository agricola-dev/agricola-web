import type { LegalPageData } from './legalTypes';

export const privacyPolicyContent: LegalPageData = {
  title: 'Privacy Policy',
  effectiveDate: '8 April 2026',
  intro:
    'Agricola ("we", "us", or "our") operates the Agricola mobile application and website at agricola-app.com. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services. By using Agricola, you agree to the practices described in this policy.',
  sections: [
    {
      heading: '1. Information We Collect',
      paragraphs: [
        'We collect information you provide directly and information generated through your use of the app.',
      ],
      listItems: [
        'Account information: your name and email address when you register',
        'Profile photo: an optional image you upload to your profile',
        'Agricultural data: crop records, planting dates, harvest data, inventory entries, and post-harvest loss records you create',
        'Marketplace data: product listings, pricing, and order information if you use the AgriShop feature',
        'Device information: device type and operating system version, collected automatically',
        'Crash reports: diagnostic data sent to Firebase Crashlytics when the app encounters an error',
      ],
    },
    {
      heading: '2. How We Collect Information',
      paragraphs: [
        'Information is collected in the following ways:',
      ],
      listItems: [
        'Directly from you when you create an account, enter crop or inventory data, or upload images',
        'Automatically through Firebase Crashlytics when the app crashes or encounters errors',
        'Through Firebase Authentication when you sign in with email/password or Google Sign-In',
      ],
    },
    {
      heading: '3. How We Use Your Information',
      paragraphs: [
        'We use the information we collect solely to provide and improve the Agricola service:',
      ],
      listItems: [
        'To create and manage your account',
        'To store and display your crop, inventory, and marketplace data',
        'To diagnose and fix technical issues using crash reports',
        'To communicate with you about your account or service updates',
        'To improve the app based on aggregated, anonymised usage patterns',
      ],
    },
    {
      heading: '4. Data Storage and Security',
      paragraphs: [
        'Your data is stored on Google Cloud infrastructure in the africa-south1 (Johannesburg) region. Profile photos and marketplace images are stored in Firebase Storage.',
        'All data is transmitted over encrypted HTTPS connections. We apply industry-standard security measures to protect your information from unauthorised access, alteration, or disclosure.',
      ],
    },
    {
      heading: '5. Third-Party Services',
      paragraphs: [
        'We use the following third-party services to operate Agricola. Each service processes data according to its own privacy policy:',
      ],
      listItems: [
        'Firebase Authentication (Google LLC) — manages user sign-in',
        'Firebase Storage (Google LLC) — stores profile photos and marketplace images',
        'Firebase Crashlytics (Google LLC) — collects crash diagnostics',
        'Google Cloud (Google LLC) — hosts application infrastructure and data storage',
      ],
    },
    {
      heading: '6. Data Sharing',
      paragraphs: [
        'We do not sell, rent, or trade your personal information to third parties.',
        'We may disclose your information only in the following limited circumstances: (a) with your explicit consent; (b) to comply with a legal obligation, court order, or lawful request from a government authority; (c) to protect the rights, property, or safety of Agricola, our users, or the public.',
        'The third-party service providers listed above receive only the data necessary to perform their specific functions.',
      ],
    },
    {
      heading: '7. Your Rights',
      paragraphs: [
        'Under the Botswana Data Protection Act 2024 and, where applicable, the South African Protection of Personal Information Act (POPIA), you have the following rights regarding your personal data:',
      ],
      listItems: [
        'Access: request a copy of the personal data we hold about you',
        'Correction: request correction of inaccurate or incomplete data',
        'Deletion: request deletion of your account and associated data',
        'Portability: request your data in a structured, machine-readable format',
        'Objection: object to certain types of processing',
      ],
    },
    {
      heading: '8. Data Retention',
      paragraphs: [
        'We retain your personal data for as long as your account is active or as needed to provide the service. If you delete your account, we will delete your personal data within 30 days, except where retention is required by law.',
      ],
    },
    {
      heading: "9. Children's Privacy",
      paragraphs: [
        'Agricola is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it.',
      ],
    },
    {
      heading: '10. Changes to This Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the effective date at the top of this page. Your continued use of Agricola after changes are posted constitutes your acceptance of the updated policy.',
      ],
    },
    {
      heading: '11. Contact Us',
      paragraphs: [
        'If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:',
        'Email: dumelang@agricola-app.com\nPhone: +267 78 210 642\nWebsite: agricola-app.com',
        'Agricola is operated from Botswana. This policy is governed by the laws of Botswana.',
      ],
    },
  ],
};
