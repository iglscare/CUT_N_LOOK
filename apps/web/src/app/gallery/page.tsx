'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Gallery } from '@/components/Gallery';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CardPage, AnimatedText } from '@skyelite/ui';

export default function GalleryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <CardPage>
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-surface font-sans pt-24">
        <Navbar onBookClick={() => setIsBookingOpen(true)} />

        <div className="max-w-[1440px] mx-auto px-6 pt-12 text-center">
          <AnimatedText text="Studio Portfolio" as="h1" className="text-5xl sm:text-7xl font-display font-bold justify-center mb-4" />
          <p className="text-secondary text-base max-w-xl mx-auto">Explore high-fashion hair architecture, bridal glow, and live before & after transformations.</p>
        </div>

        <Gallery />
        <BeforeAfter />

        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </CardPage>
  );
}
