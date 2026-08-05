'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Services } from '@/components/Services';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { CardPage, AnimatedText } from '@skyelite/ui';

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  return (
    <CardPage>
      <div className="min-h-screen bg-background text-primary selection:bg-accent selection:text-surface font-sans pt-24">
        <Navbar onBookClick={() => setIsBookingOpen(true)} />

        <div className="max-w-[1440px] mx-auto px-6 pt-12 text-center">
          <AnimatedText text="Our Bespoke Menu" as="h1" className="text-5xl sm:text-7xl font-display font-bold justify-center mb-4" />
          <p className="text-secondary text-base max-w-xl mx-auto">Discover our signature hair architecture, balayage glossing, skincare hydra-facials, and bridal couture.</p>
        </div>

        <Services onSelectService={(svc) => { setSelectedService(svc); setIsBookingOpen(true); }} />

        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService={selectedService} />
      </div>
    </CardPage>
  );
}
