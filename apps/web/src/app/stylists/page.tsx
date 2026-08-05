'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Stylists } from '@/components/Stylists';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CardPage, AnimatedText } from '@skyelite/ui';

export default function StylistsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState<string | undefined>(undefined);

  return (
    <CardPage>
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-surface font-sans pt-24">
        <Navbar onBookClick={() => setIsBookingOpen(true)} />

        <div className="max-w-[1440px] mx-auto px-6 pt-12 text-center">
          <AnimatedText text="Master Artisans" as="h1" className="text-5xl sm:text-7xl font-display font-bold justify-center mb-4" />
          <p className="text-secondary text-base max-w-xl mx-auto">Trained in London, Paris, and Tokyo. Meet our world-class hair & beauty specialists.</p>
        </div>

        <Stylists onBookStylist={(stylist) => { setSelectedStylist(stylist); setIsBookingOpen(true); }} />

        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialStylist={selectedStylist} />
      </div>
    </CardPage>
  );
}
