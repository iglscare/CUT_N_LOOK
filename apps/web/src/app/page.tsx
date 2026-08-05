'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { BeforeAfter } from '@/components/BeforeAfter';
import { Gallery } from '@/components/Gallery';
import { Stylists } from '@/components/Stylists';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { InstagramFeed } from '@/components/InstagramFeed';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { AnimeScrollReveal } from '@/components/AnimeScrollReveal';
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { DominoTrailSection } from '@/components/DominoTrailSection';
import { CardPage } from '@skyelite/ui';

export default function CutNLooksLandingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedStylist, setSelectedStylist] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string, stylistName?: string) => {
    setSelectedService(serviceName);
    setSelectedStylist(stylistName);
    setIsBookingOpen(true);
  };

  return (
    <CardPage>
      {/* Anime.js Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Floating Header Navbar */}
      <Navbar onBookClick={() => handleOpenBooking()} />

      {/* Main Sections with Anime.js & Framer Motion Transitions */}
      <main>
        <Hero onBookClick={() => handleOpenBooking()} />

        <AnimeScrollReveal direction="up">
          <Services onSelectService={(svc) => handleOpenBooking(svc)} />
        </AnimeScrollReveal>

        <AnimeScrollReveal direction="up" delay={100}>
          <BeforeAfter />
        </AnimeScrollReveal>

        <AnimeScrollReveal direction="up">
          <Gallery />
        </AnimeScrollReveal>

        <AnimeScrollReveal direction="up" delay={100}>
          <Stylists onBookStylist={(stylist) => handleOpenBooking(undefined, stylist)} />
        </AnimeScrollReveal>

        <AnimeScrollReveal direction="up">
          <Testimonials />
        </AnimeScrollReveal>

        <AnimeScrollReveal direction="up" delay={100}>
          <Pricing onBookClick={(svc) => handleOpenBooking(svc)} />
        </AnimeScrollReveal>

        {/* GSAP ScrollTrigger + Framer Motion Domino Trail Canvas */}
        <DominoTrailSection />

        {/* Appointment CTA Banner */}
        <AnimeScrollReveal direction="up">
          <section className="py-28 bg-accent-light border-y border-accent/20 text-center px-4 sm:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
                Bespoke Hair & Skincare Session
              </span>
              <h2 className="text-4xl sm:text-6xl font-display font-bold text-primary tracking-tight mb-6">
                Experience the Art of Perfection
              </h2>
              <p className="text-secondary text-base sm:text-lg mb-10 leading-relaxed font-normal">
                Appointments fill quickly. Reserve your private session with our master stylists today.
              </p>
              <button
                onClick={() => handleOpenBooking()}
                className="px-10 py-5 rounded-full bg-primary text-background font-medium text-xs sm:text-sm tracking-wider uppercase hover:bg-primary/95 shadow-hover hover:-translate-y-1 transition-all cursor-pointer"
              >
                Book Your Appointment
              </button>
            </div>
          </section>
        </AnimeScrollReveal>

        <AnimeScrollReveal direction="up">
          <InstagramFeed />
        </AnimeScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Drawer Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
        initialStylist={selectedStylist}
      />
    </CardPage>
  );
}
