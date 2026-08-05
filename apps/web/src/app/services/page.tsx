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

        <Services onSelectService={(svc) => { setSelectedService(svc); setIsBookingOpen(true); }} />

        <Footer />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialService={selectedService} />
      </div>
    </CardPage>
  );
}
