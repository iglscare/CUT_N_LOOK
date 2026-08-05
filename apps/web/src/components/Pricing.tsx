'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ShieldCheck, Crown, Flame, HeartHandshake } from 'lucide-react';

interface PricingProps {
  onBookClick: (serviceName?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onBookClick }) => {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#F6F4EE] border-t border-black/8 px-4 sm:px-8 overflow-hidden select-none">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C8A86B] mb-3 block">
            TRANSPARENT PUZZLE PACKAGES
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1F1F1F] tracking-tight mb-4">
            Curated Beauty Bento
          </h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base max-w-xl mx-auto font-normal">
            Interlocking luxury packages tailored for hair architecture, skin rejuvenation, and complete gala glamour.
          </p>
        </div>

        {/* Interlocking Seamless Zero-Gap Puzzle Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0 items-stretch rounded-[36px] overflow-hidden border border-black/10 shadow-lg bg-white">

          {/* ITEM 1: Tall Left Photo Card (Span 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 relative overflow-hidden min-h-[380px] lg:min-h-[500px] group cursor-pointer border-r border-b border-black/8"
          >
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=900"
              alt="Hair Transformation Model"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest mb-2 border border-white/30">
                <Sparkles className="w-3 h-3 text-[#C8A86B]" /> Haute Hair Studio
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">Master Balayage & Glossing</h3>
            </div>
          </motion.div>

          {/* ITEM 2: Light Sage/Mint Package Card (Span 3 cols) - TOP ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.04 }}
            className="lg:col-span-3 relative bg-[#EBF4EE] p-7 sm:p-8 border-r border-b border-[#D5E6DA] flex flex-col justify-between group z-10"
          >
            {/* Bottom Male Puzzle Tab extending into Row 2 */}
            <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#EBF4EE] z-30 shadow-sm" />
            {/* Right Female Puzzle Notch */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F6F4EE] z-20" />

            <div>
              <div className="w-10 h-10 rounded-full bg-[#3D7A56]/15 flex items-center justify-center text-[#3D7A56] mb-6">
                <Flame className="w-5 h-5" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1F3E2C] mb-2">Fresh Start</h3>
              <p className="text-xs text-[#4A6B56] leading-relaxed mb-6">
                Essential bi-weekly haircut maintenance & scalp revitalizing treatment.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-serif font-bold text-[#1F3E2C]">$95</span>
                <span className="text-xs text-[#5C7D68] uppercase font-medium">/ session</span>
              </div>

              <ul className="space-y-3 text-xs text-[#31523E] mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D7A56] shrink-0" />
                  <span>Precision Cut & Razor Edging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D7A56] shrink-0" />
                  <span>Signature Hot Towel Massage</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3D7A56] shrink-0" />
                  <span>Botanical Scalp Detox</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBookClick('Fresh Start Package')}
              className="w-full py-3 rounded-full bg-[#3D7A56] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#2F6144] transition-colors cursor-pointer shadow-sm"
            >
              Select Package
            </button>
          </motion.div>

          {/* ITEM 3: Center Photo Banner Card (Span 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="lg:col-span-3 relative overflow-hidden min-h-[240px] lg:min-h-full border-r border-b border-black/8"
          >
            {/* Bottom Male Puzzle Tab extending down */}
            <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#181C24] z-30 shadow-md" />

            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=900"
              alt="Luxury Salon Spa Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute top-6 left-6 right-6 text-white text-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E2C792] block mb-1">
                ORGANIC HYDRA SPA
              </span>
              <h4 className="font-serif text-xl font-bold">100% Ammonia-Free Oils</h4>
            </div>
          </motion.div>

          {/* ITEM 4: Warm Cream Package Card (Span 3 cols) - TOP ROW RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="lg:col-span-3 relative bg-[#FDF7EE] p-7 sm:p-8 border-b border-[#F3E5CE] flex flex-col justify-between group z-10"
          >
            {/* Bottom Male Puzzle Tab extending down */}
            <div className="hidden lg:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FDF7EE] z-30 shadow-sm" />

            <div>
              <div className="w-10 h-10 rounded-full bg-[#C8A86B]/20 flex items-center justify-center text-[#9E7C3B] mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#3B2E17] mb-2">Express Touch-Up</h3>
              <p className="text-xs text-[#7A653F] leading-relaxed mb-6">
                Quick blowout, gloss refresher & face-framing trim.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-serif font-bold text-[#3B2E17]">$65</span>
                <span className="text-xs text-[#8A7550] uppercase font-medium">/ session</span>
              </div>

              <ul className="space-y-3 text-xs text-[#524225] mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9E7C3B] shrink-0" />
                  <span>Silk Press & Blowout</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9E7C3B] shrink-0" />
                  <span>Glaze Color Refresh</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#9E7C3B] shrink-0" />
                  <span>Express Scalp Steam</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBookClick('Express Touch-Up Package')}
              className="w-full py-3 rounded-full bg-[#C8A86B] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B8975B] transition-colors cursor-pointer shadow-sm"
            >
              Select Package
            </button>
          </motion.div>

          {/* ITEM 5: Dark Luxury Signature Suite (Span 4 cols) - MIDDLE ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.04 }}
            className="lg:col-span-4 relative bg-[#181C24] text-white p-8 border-r border-b border-white/10 flex flex-col justify-between shadow-2xl z-20"
          >
            {/* Top Female Puzzle Notch receiving Card 2's bottom tab */}
            <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#181C24] z-10" />
            {/* Right Male Puzzle Tab extending onto Card 6 */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#181C24] z-30 shadow-md" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full bg-[#C8A86B]/20 flex items-center justify-center text-[#C8A86B]">
                  <Crown className="w-5 h-5 text-[#C8A86B]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#C8A86B] text-[#181C24] text-[10px] font-bold uppercase tracking-widest">
                  MOST POPULAR
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold mb-2 text-white">Signature Luxe Suite</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6">
                Our most sought-after full hair & skin rejuvenation suite.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-serif font-bold text-[#C8A86B]">$185</span>
                <span className="text-xs text-white/60 uppercase font-medium">/ session</span>
              </div>

              <ul className="space-y-3.5 text-xs text-white/90 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Haute Haircut & Style Architecture</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Ammonia-Free Gloss or Balayage Refresh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Ultrasonic Hydra-Facial Treatment</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Scalp Steam & Keratin Conditioning</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Priority Appointment Scheduling</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBookClick('Signature Luxe Suite')}
              className="w-full py-4 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B579] transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              <span>Book Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* ITEM 6: Clean White Haute Couture VIP Card (Span 4 cols) - MIDDLE ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="lg:col-span-4 relative bg-white p-8 border-r border-b border-black/8 flex flex-col justify-between z-10"
          >
            {/* Left Female Puzzle Notch receiving Card 5's right tab */}
            <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#181C24] z-10" />
            {/* Top Female Puzzle Notch receiving Card 3's bottom tab */}
            <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#181C24] z-10" />
            {/* Right Male Puzzle Tab extending onto Card 7 */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white z-30 shadow-sm border-r border-black/8" />

            <div>
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#1F1F1F] mb-6">
                <Sparkles className="w-5 h-5 text-[#C8A86B]" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#1F1F1F] mb-2">Haute Couture VIP</h3>
              <p className="text-xs text-[#666666] leading-relaxed mb-6">
                Complete head-to-toe luxury transformation & VIP dressing access.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-serif font-bold text-[#1F1F1F]">$350</span>
                <span className="text-xs text-[#888888] uppercase font-medium">/ session</span>
              </div>

              <ul className="space-y-3.5 text-xs text-[#333333] mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Full Balayage / Color Transformation</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Red-Carpet Hair Styling & Makeup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Dewy Collagen Facial & Eye Lift</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Gel Manicure & Pedicure Spa Ritual</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#C8A86B] shrink-0" />
                  <span>Private VIP Dressing Lounge Access</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBookClick('Haute Couture VIP')}
              className="w-full py-4 rounded-full bg-[#1F1F1F] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer shadow-sm"
            >
              Select Package
            </button>
          </motion.div>

          {/* ITEM 7: Soft Lavender/Pink Bridal & Spa Card (Span 4 cols) - MIDDLE ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.12 }}
            className="lg:col-span-4 relative bg-[#F5EEF8] p-8 border-b border-[#E4D5EA] flex flex-col justify-between z-10"
          >
            {/* Left Female Puzzle Notch receiving Card 6's right tab */}
            <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white z-10" />
            {/* Top Female Puzzle Notch receiving Card 4's bottom tab */}
            <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FDF7EE] z-10" />

            <div>
              <div className="w-10 h-10 rounded-full bg-[#7A3E8A]/15 flex items-center justify-center text-[#7A3E8A] mb-6">
                <HeartHandshake className="w-5 h-5" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#421D4C] mb-2">Bridal & Gala Suite</h3>
              <p className="text-xs text-[#6B4477] leading-relaxed mb-6">
                Dedicated bridal team, trial styling & high-definition airbrush makeup.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-serif font-bold text-[#421D4C]">$280</span>
                <span className="text-xs text-[#7B5986] uppercase font-medium">/ package</span>
              </div>

              <ul className="space-y-3.5 text-xs text-[#4A2E53] mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#7A3E8A] shrink-0" />
                  <span>2x Pre-Wedding Hair & Makeup Trials</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#7A3E8A] shrink-0" />
                  <span>HD Waterproof Airbrush Makeup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#7A3E8A] shrink-0" />
                  <span>Custom Veil & Accessory Placement</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#7A3E8A] shrink-0" />
                  <span>On-Location Touch-up Stylist</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onBookClick('Bridal & Gala Suite')}
              className="w-full py-4 rounded-full bg-[#7A3E8A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#643073] transition-colors cursor-pointer shadow-sm"
            >
              Reserve Bridal Suite
            </button>
          </motion.div>

          {/* ITEM 8: Wide Bottom Left Member Pass Card (Span 6 cols) - BOTTOM ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.04 }}
            className="lg:col-span-6 relative bg-white p-8 border-r border-black/8 flex flex-col sm:flex-row items-center gap-6 z-10"
          >
            {/* Right Male Puzzle Tab extending onto Card 9 */}
            <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white z-30 shadow-sm border-r border-black/8" />

            <div className="w-full sm:w-1/2 h-48 sm:h-full rounded-2xl overflow-hidden relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800"
                alt="VIP Membership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A86B] block mb-1">
                  UNLIMITED MONTHLY BLOWOUTS
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#1F1F1F] mb-2">Luxe Club Membership</h4>
                <p className="text-xs text-[#666666] leading-relaxed mb-4">
                  Enjoy unlimited weekly blowouts, 20% off all retail products & priority booking.
                </p>
                <div className="text-3xl font-serif font-bold text-[#1F1F1F] mb-4">
                  $149 <span className="text-xs font-normal text-[#888888]">/ month</span>
                </div>
              </div>

              <button
                onClick={() => onBookClick('Luxe Club Membership')}
                className="py-3 px-6 rounded-full bg-[#1F1F1F] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer self-start"
              >
                Join Luxe Club
              </button>
            </div>
          </motion.div>

          {/* ITEM 9: Wide Bottom Right VIP Annual Pass Card (Span 6 cols) - BOTTOM ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="lg:col-span-6 relative bg-[#181C24] text-white p-8 flex flex-col sm:flex-row items-center gap-6 z-10"
          >
            {/* Left Female Puzzle Notch receiving Card 8's right tab */}
            <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white z-10" />

            <div className="w-full sm:w-1/2 h-48 sm:h-full rounded-2xl overflow-hidden relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800"
                alt="Annual VIP Pass"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="flex-1 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A86B] block mb-1">
                  ALL-INCLUSIVE ANNUAL ACCESS
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mb-2">Annual VIP Gold Pass</h4>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Full year of unlimited styling, custom color transformations & private concierge.
                </p>
                <div className="text-3xl font-serif font-bold text-[#C8A86B] mb-4">
                  $1,500 <span className="text-xs font-normal text-white/60">/ year</span>
                </div>
              </div>

              <button
                onClick={() => onBookClick('Annual VIP Gold Pass')}
                className="py-3 px-6 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs uppercase tracking-wider hover:bg-[#D4B579] transition-colors cursor-pointer self-start shadow-sm"
              >
                Claim Annual Pass
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

