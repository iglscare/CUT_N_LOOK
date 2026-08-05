'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Gallery } from '@/components/Gallery';
import { BeforeAfter } from '@/components/BeforeAfter';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CardPage } from '@skyelite/ui';

export default function GalleryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <CardPage>
      <div className="min-h-screen bg-[#FAFAF8] text-[#1F1F1F] font-sans pt-20">
        <Navbar onBookClick={() => setIsBookingOpen(true)} />

        {/* Primary Editorial Masonry Collage Gallery */}
        <Gallery />

        {/* Live Interactive Before & After Transformation Drag Slider */}
        <BeforeAfter />

        {/* Official Instagram Feed Reel Strip */}
        <InstagramFeed />

        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </CardPage>
  );
}
