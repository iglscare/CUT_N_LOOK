'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { AnimatedButton, AnimatedModal } from '@skyelite/ui';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const CATEGORIES = ['All', 'Hair Architecture', 'Coloring', 'Skincare', 'Bridal'];

const SERVICES = [
  {
    id: '1',
    category: 'Hair Architecture',
    title: 'Signature Precision Cut & Blowout',
    description: 'Bespoke hair design tailored to your face structure, hair texture, and personal aesthetic. Includes scalp detox and signature blow-dry styling.',
    duration: '75 min',
    price: '₹1,999',
    popular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    details: ['1:1 Face Shape Analysis', 'Organic Scalp Steam Wash', 'Custom Blowout & Finish'],
  },
  {
    id: '2',
    category: 'Coloring',
    title: 'Haute Balayage & Glossing Ritual',
    description: 'Hand-painted dimensional balayage with custom tone glossing for seamless, sun-kissed perfection and ultra-shine longevity.',
    duration: '150 min',
    price: '₹7,999',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    details: ['Free-hand Balayage Technique', 'Bond-building Glossing Treatment', 'UV Protection Serum Blowout'],
  },
  {
    id: '3',
    category: 'Skincare',
    title: 'Dewy Glass Skin Facial Spa',
    description: 'Triple-layer hydration ritual featuring botanical enzyme peel, LED light therapy, and deep lymphatic facial contouring.',
    duration: '90 min',
    price: '₹4,999',
    popular: false,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop',
    details: ['Organic Botanical Enzyme Peel', 'Custom Color LED Therapy', 'Chilled Rose Quartz Sculpting'],
  },
  {
    id: '4',
    category: 'Bridal',
    title: 'Royal Couture Bridal Suite',
    description: 'Comprehensive bridal glam package including preliminary trial session, wedding day hair architecture, and airbrush makeup.',
    duration: '210 min',
    price: '₹14,999',
    popular: true,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    details: ['Pre-wedding Hair & Makeup Trial', 'HD Airbrush Couture Makeup', 'Bridal Suite Refreshments'],
  },
  {
    id: '5',
    category: 'Hair Architecture',
    title: 'Keratin Silk Press Ritual',
    description: 'Organic amino acid smoothing treatment that eliminates frizz while preserving natural hair volume and luster for up to 12 weeks.',
    duration: '120 min',
    price: '₹5,999',
    popular: false,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    details: ['Zero-Formaldehyde Amino Formula', 'Deep Thermal Pressing', 'Silk Sealer Polish'],
  },
  {
    id: '6',
    category: 'Skincare',
    title: 'Botanical Scalp & Hair Detox',
    description: 'Rejuvenating scalp steam spa with tea tree exfoliation, head massage, and customized deep conditioning therapy.',
    duration: '60 min',
    price: '₹2,999',
    popular: false,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    details: ['Micro-exfoliating Scalp Scrub', 'Warm Botanical Steam Therapy', 'Neck & Shoulder Massage'],
  },
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeServiceDetails, setActiveServiceDetails] = useState<typeof SERVICES[0] | null>(null);

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-28 px-4 sm:px-8 bg-background text-primary">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Bespoke Offerings
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-primary tracking-tight mb-6">
            Services & Architecture
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Every service is executed with surgical precision and artistic intention, using only sustainable, ultra-pure beauty formulations.
          </p>
        </div>

        {/* Category Tabs with Framer Motion Spring Underline */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive ? 'text-primary font-bold' : 'text-secondary hover:text-primary'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-surface border border-accent/40 rounded-full shadow-subtle"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Services Grid with Framer Motion 3D Hover Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative rounded-3xl bg-surface border border-border p-8 shadow-subtle flex flex-col justify-between overflow-hidden cursor-pointer hover:border-accent/50 hover:shadow-hover"
              >
                {/* Background Image Parallax Glow */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  />
                  {service.popular && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" /> Signature
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest">
                      {service.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-secondary font-medium">
                      <Clock className="w-3.5 h-3.5 text-accent" /> {service.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                  <span className="text-2xl font-display font-bold text-primary">
                    {service.price}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveServiceDetails(service)}
                      className="px-4 py-2 rounded-full text-xs font-semibold text-secondary hover:text-primary transition-colors"
                    >
                      Details
                    </button>
                    <AnimatedButton
                      variant="gold"
                      size="sm"
                      onClick={() => onSelectService(service.title)}
                    >
                      Book <ArrowRight className="w-3.5 h-3.5" />
                    </AnimatedButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatedModal
        isOpen={!!activeServiceDetails}
        onClose={() => setActiveServiceDetails(null)}
        title={activeServiceDetails?.title}
      >
        {activeServiceDetails && (
          <div className="space-y-6">
            <p className="text-secondary text-sm leading-relaxed">
              {activeServiceDetails.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-accent">
                What's Included:
              </h4>
              {activeServiceDetails.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-primary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <div>
                <span className="text-xs text-secondary block">Investment</span>
                <span className="text-2xl font-display font-bold text-primary">{activeServiceDetails.price}</span>
              </div>
              <AnimatedButton
                variant="gold"
                size="md"
                onClick={() => {
                  onSelectService(activeServiceDetails.title);
                  setActiveServiceDetails(null);
                }}
              >
                Reserve Session
              </AnimatedButton>
            </div>
          </div>
        )}
      </AnimatedModal>
    </section>
  );
};
