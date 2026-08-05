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

        <Stylists onBookStylist={(stylist) => { setSelectedStylist(stylist); setIsBookingOpen(true); }} />

        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialStylist={selectedStylist} />
      </div>
    </CardPage>
  );
}
