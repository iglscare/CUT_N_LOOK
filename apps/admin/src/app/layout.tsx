import './globals.css';
import React from 'react';
import { WatermarkButton } from '@skyelite/ui';

export const metadata = {
  title: 'SkyElite Admin Dashboard | Salon Owner Operations',
  description: 'Manage salon appointments, stylists, customer CRM, financial analytics, and AI marketing generator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian-900 text-slate-100 antialiased selection:bg-skygold-500 selection:text-obsidian-900">
        {children}
        <WatermarkButton />
      </body>
    </html>
  );
}
