'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, CheckCircle2, User, Phone, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialStylist?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialStylist
}) => {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    service: initialService || 'Signature Precision Cut & Blowout',
    stylist: initialStylist || 'Elena Rostova',
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setFormData(prev => ({ ...prev, service: initialService }));
    if (initialStylist) setFormData(prev => ({ ...prev, stylist: initialStylist }));
    setStep(1);
    setIsSubmitted(false);
  }, [initialService, initialStylist, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2800);
  };

  const servicesList = [
    { title: 'Signature Precision Cut & Blowout', price: '₹1,999', time: '75m' },
    { title: 'Haute Balayage & Glossing Ritual', price: '₹7,999', time: '150m' },
    { title: 'Royal Couture Bridal Suite', price: '₹14,999', time: '210m' },
    { title: 'Dewy Glass Skin Facial Spa', price: '₹4,999', time: '90m' },
    { title: 'Keratin Silk Press Ritual', price: '₹5,999', time: '120m' },
    { title: 'Botanical Scalp & Hair Detox', price: '₹2,999', time: '60m' }
  ];

  const stylistsList = [
    { name: 'Elena Rostova', role: 'Master Stylist' },
    { name: 'Marcus Thorne', role: 'Barber & Spa' },
    { name: 'Sophia Lin', role: 'Skincare Specialist' },
    { name: 'Chloe Dubois', role: 'Bridal Couture' }
  ];

  const timeSlots = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '05:00 PM', '06:30 PM'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white/85 backdrop-blur-2xl backdrop-saturate-150 border border-white/90 rounded-[36px] p-6 sm:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.18),inset_0_1.5px_0px_rgba(255,255,255,1)] overflow-hidden text-[#202A36]"
        >
          {/* Gold Ambient Backdrop Glow */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#C8A86B]/20 blur-[90px] rounded-full pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 border border-white/90 shadow-sm flex items-center justify-center text-[#202A36] hover:bg-[#C8A86B] hover:text-[#181C24] transition-all z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#202A36] mb-2">
                Reservation Confirmed
              </h3>
              <p className="text-sm text-[#6B7280] max-w-sm leading-relaxed">
                Thank you, <span className="font-bold text-[#202A36]">{formData.name || 'Valued Client'}</span>. Your private session for <span className="font-bold text-[#202A36]">{formData.date}</span> at <span className="font-bold text-[#202A36]">{formData.time}</span> with <span className="font-bold text-[#202A36]">{formData.stylist}</span> has been confirmed at our Dwarka, New Delhi studio.
              </p>
            </div>
          ) : (
            <div className="relative z-10">
              {/* Wizard Steps Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                        step >= s ? 'bg-[#C8A86B]' : 'bg-black/10'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C8A86B] block mb-1">
                  Step {step} of 3 — Reservation
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-[#202A36]">
                  {step === 1 && 'Select Treatment & Stylist'}
                  {step === 2 && 'Choose Date & Time Slot'}
                  {step === 3 && 'Enter Contact Details'}
                </h2>
              </div>

              {/* Step 1: Service & Stylist Selection */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                      1. SELECT TREATMENT
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-48 overflow-y-auto pr-1">
                      {servicesList.map((s) => (
                        <button
                          key={s.title}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s.title })}
                          className={`p-3.5 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                            formData.service === s.title
                              ? 'border-2 border-[#C8A86B] bg-[#C8A86B]/15 text-[#202A36] font-semibold shadow-sm'
                              : 'border-white/90 bg-white/70 backdrop-blur-sm text-[#6B7280] hover:border-[#C8A86B]/50 hover:bg-white'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-bold text-[#202A36]">{s.title}</span>
                            <span className="text-[#C8A86B] font-serif font-bold">{s.price}</span>
                          </div>
                          <span className="text-[10px] text-[#6B7280] flex items-center gap-1"><Clock className="w-3 h-3 text-[#C8A86B]" /> {s.time} duration</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                      2. SELECT MASTER STYLIST
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {stylistsList.map((st) => (
                        <button
                          key={st.name}
                          type="button"
                          onClick={() => setFormData({ ...formData, stylist: st.name })}
                          className={`p-3.5 rounded-2xl border text-left text-xs transition-all cursor-pointer ${
                            formData.stylist === st.name
                              ? 'border-2 border-[#C8A86B] bg-[#C8A86B]/15 text-[#202A36] font-semibold shadow-sm'
                              : 'border-white/90 bg-white/70 backdrop-blur-sm text-[#6B7280] hover:border-[#C8A86B]/50 hover:bg-white'
                          }`}
                        >
                          <p className="font-bold text-[#202A36]">{st.name}</p>
                          <p className="text-[10px] text-[#6B7280]">{st.role}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="mt-2 w-full py-4 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-[#D4B579] transition-all shadow-md"
                  >
                    <span>Continue to Date & Time</span>
                    <ChevronRight className="w-4 h-4 text-[#181C24]" />
                  </button>
                </div>
              )}

              {/* Step 2: Date & Time Slot */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                      Select Reservation Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 bg-white/90 border border-white/90 backdrop-blur-md rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36] font-medium shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: slot })}
                          className={`py-3.5 px-2 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                            formData.time === slot
                              ? 'border-2 border-[#C8A86B] bg-[#C8A86B]/20 text-[#202A36] shadow-sm'
                              : 'border-white/90 bg-white/80 backdrop-blur-sm text-[#6B7280] hover:border-[#C8A86B]/50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-full border border-black/10 text-[#202A36] font-bold text-xs tracking-wider uppercase flex items-center gap-1 hover:bg-white/80 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-4 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-[#D4B579] transition-all shadow-md"
                    >
                      <span>Enter Your Details</span>
                      <ChevronRight className="w-4 h-4 text-[#181C24]" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Submit */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold text-[#6B7280] mb-1 uppercase tracking-wider text-[11px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Victoria Stirling"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/90 border border-white/90 backdrop-blur-md rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36] shadow-inner"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#6B7280] mb-1 uppercase tracking-wider text-[11px]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99103 46363"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white/90 border border-white/90 backdrop-blur-md rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36] shadow-inner"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#6B7280] mb-1 uppercase tracking-wider text-[11px]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@cutnlooks.in"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/90 border border-white/90 backdrop-blur-md rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36] shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-white/90 border border-[#C8A86B]/40 backdrop-blur-md shadow-sm text-xs text-[#202A36] my-2">
                    <p className="font-bold text-[#C8A86B] uppercase tracking-wider text-[10px] mb-1">Reservation Summary:</p>
                    <p className="text-[#6B7280]">{formData.service} with <span className="text-[#202A36] font-bold">{formData.stylist}</span></p>
                    <p className="text-[#6B7280]">{formData.date} at <span className="text-[#202A36] font-bold">{formData.time}</span></p>
                    <p className="text-[10px] text-[#6B7280] mt-1 italic">Location: D-451, 1st Floor, Ramphal Chowk, Sector 7, Dwarka, New Delhi</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-4 rounded-full border border-black/10 text-[#202A36] font-bold text-xs tracking-wider uppercase flex items-center gap-1 hover:bg-white/80 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 rounded-full bg-[#C8A86B] text-[#181C24] font-bold text-xs tracking-wider uppercase hover:bg-[#D4B579] shadow-md cursor-pointer transition-all"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
