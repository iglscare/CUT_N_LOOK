import './globals.css';
import React from 'react';
import { PageStack } from '@skyelite/ui';

export const metadata = {
  title: 'Cut N Looks | Haute Coiffure & Beauty Studio',
  description: 'A world-class luxury salon for precision hair architecture, balayage coloring, bridal couture, and organic skincare spa.',
  openGraph: {
    title: 'Cut N Looks | Haute Coiffure & Beauty Studio',
    description: 'Where precision meets beauty. Reserve your private session with our master stylists.',
    url: 'https://cutnlooks.com',
    siteName: 'Cut N Looks',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#141923] text-primary antialiased selection:bg-accent selection:text-surface">
        <PageStack>
          {children}
        </PageStack>
      </body>
    </html>
  );
}
