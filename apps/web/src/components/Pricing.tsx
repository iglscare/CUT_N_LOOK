'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingProps {
  onBookClick: (serviceName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBookClick }) => {
  const tiers = [
    {
      name: 'Essential Grooming',
      price: '$95',
      desc: 'Ideal for bi-weekly hair maintenance and razor styling.',
      features: [
        'Precision Haircut & Scalp Massage',
        'Signature Hot Towel Refresh',
        'Organic Beard Trim or Blowout',
        'Complimentary Herbal Beverage'
      ]
    },
    {
      name: 'Signature Luxe Suite',
      popular: true,
      price: '$185',
      desc: 'Our most sought-after full hair & skin rejuvenation package.',
      features: [
        'Haute Haircut & Style Architecture',
        'Ammonia-free Gloss Color or Balayage Refresh',
        'Ultrasonic Hydra-Facial Treatment',
        'Scalp Steam & Keratin Conditioning',
        'Priority Appointment Scheduling'
      ]
    },
    {
      name: 'Haute Couture VIP',
      price: '$350',
      desc: 'Complete head-to-toe luxury transformation experience.',
      features: [
        'Full Balayage / Color Transformation',
        'Red-Carpet Hair Styling & Makeup',
        'Dewy Collagen Facial & Eye Lift',
        'Gel Manicure & Pedicure Spa Ritual',
        'Private VIP Dressing Lounge Access'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-surface border-t border-border px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary tracking-tight mb-4">
            Curated Packages
          </h2>
          <p className="text-secondary text-base">
            No hidden add-ons. Every package includes a personalized consultation and premium organic treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-primary text-background shadow-hover ring-2 ring-accent'
                  : 'bg-background text-primary border border-border hover:border-accent/40 shadow-subtle hover:shadow-hover'
              }`}
            >
              <div>
                {tier.popular && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-accent text-primary mb-6">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-display font-bold mb-2">{tier.name}</h3>
                <p className={`text-xs mb-8 ${tier.popular ? 'text-background/80' : 'text-secondary'}`}>
                  {tier.desc}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`text-4xl sm:text-5xl font-display font-bold ${tier.popular ? 'text-accent' : 'text-primary'}`}>
                    {tier.price}
                  </span>
                  <span className={`text-xs ${tier.popular ? 'text-background/70' : 'text-secondary'}`}>/ session</span>
                </div>

                <ul className="flex flex-col gap-4 mb-10 text-xs sm:text-sm font-normal">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 shrink-0 ${tier.popular ? 'text-accent' : 'text-accent'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onBookClick(tier.name)}
                className={`w-full py-3.5 rounded-full font-medium text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  tier.popular
                    ? 'bg-accent text-primary hover:bg-accent-hover shadow-sm'
                    : 'bg-primary text-background hover:bg-primary/90'
                }`}
              >
                Select Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
