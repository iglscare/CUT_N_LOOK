'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Instagram, Star, ShieldCheck } from 'lucide-react';

interface StylistsProps {
  onBookStylist: (stylistName: string) => void;
}

export const Stylists: React.FC<StylistsProps> = ({ onBookStylist }) => {
  const team = [
    {
      name: 'Elena Rostova',
      role: 'Creative Director & Master Stylist',
      exp: '14+ Years Experience',
      specialty: 'Precision Bob Architecture & Balayage',
      instagram: '@elena.cutnlooks',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Marcus Thorne',
      role: 'Senior Barber & Beard Sculptor',
      exp: '10+ Years Experience',
      specialty: 'Straight Razor Fades & Scalp Detox',
      instagram: '@marcus.cuts',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Sophia Lin',
      role: 'Lead Skincare Specialist',
      exp: '8+ Years Experience',
      specialty: 'Ultrasonic Hydra-Facials & Gua Sha Spa',
      instagram: '@sophia.skin',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
    },
    {
      name: 'Chloe Dubois',
      role: 'Couture Bridal Artist',
      exp: '11+ Years Experience',
      specialty: 'Red-Carpet Airbrush Makeup & Updos',
      instagram: '@chloe.bridal',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="stylists" className="py-24 sm:py-32 bg-surface border-t border-border px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
            Artisans of Beauty
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-primary tracking-tight mb-4">
            Meet Our Master Stylists
          </h2>
          <p className="text-secondary text-base">
            Trained in London, Paris, and Tokyo. Dedicated to elevating your personal style.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group p-8 rounded-3xl bg-background border border-border hover:border-accent/40 shadow-subtle hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Circular Portrait with Status */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-2 border-accent/30 p-1 group-hover:border-accent transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-surface" title="Available Today" />
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                  {member.role}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-medium text-secondary bg-surface px-3 py-1 rounded-full border border-border">
                    {member.exp}
                  </span>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[11px] text-secondary hover:text-accent flex items-center gap-1">
                    <Instagram className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs text-secondary leading-relaxed font-normal pt-4 border-t border-border w-full mb-6">
                  <span className="font-semibold text-primary block mb-1">Specialization:</span>
                  {member.specialty}
                </p>
              </div>

              {/* Direct Booking Action */}
              <button
                onClick={() => onBookStylist(member.name)}
                className="w-full py-2.5 rounded-full bg-surface border border-border text-primary text-xs font-medium hover:bg-primary hover:text-background transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-accent" /> Book with {member.name.split(' ')[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
