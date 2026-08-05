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

  const sendWhatsAppBooking = (data: typeof formData) => {
    const textMessage = `✨ *CUT N LOOKS SALON — APPOINTMENT RESERVATION* ✨\n\n` +
      `👤 *Client Name:* ${data.name || 'Valued Client'}\n` +
      `📞 *Phone Number:* ${data.phone}\n` +
      `✉️ *Email:* ${data.email || 'N/A'}\n\n` +
      `💇‍♀️ *Treatment Service:* ${data.service}\n` +
      `✂️ *Master Stylist:* ${data.stylist}\n` +
      `📅 *Date:* ${data.date}\n` +
      `⏰ *Time Slot:* ${data.time}\n\n` +
      `📍 *Studio Location:* D-451, 1st Floor, Ramphal Chowk, Sector 7, Dwarka, New Delhi 110075\n\n` +
      `Please confirm my reservation. Thank you!`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919468264728?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    sendWhatsAppBooking(formData);
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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-2xl bg-[#FAFAF8] border border-black/10 rounded-[36px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.18)] overflow-hidden text-[#1F1F1F]"
        >
          {/* Subtle Ambient Gold Spotlight Glow */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#C8A86B]/15 blur-[90px] rounded-full pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-black/10 shadow-sm flex items-center justify-center text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white transition-all z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mb-5 shadow-sm">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-600 mb-2 block">
                INSTANT WHATSAPP DISPATCH READY
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#1F1F1F] mb-3 tracking-tight">
                Reservation Dispatched to WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] max-w-md leading-relaxed mb-8 font-normal">
                Your luxury appointment for <span className="font-bold text-[#1F1F1F]">{formData.service}</span> with <span className="font-bold text-[#1F1F1F]">{formData.stylist}</span> has been formatted for our Dwarka studio WhatsApp desk (+91 94682 64728).
              </p>

              <div className="w-full flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => sendWhatsAppBooking(formData)}
                  className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Open Official WhatsApp Chat 💬</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="py-3 text-xs text-[#6B7280] hover:text-[#1F1F1F] underline transition-colors cursor-pointer"
                >
                  Close Reservation Window
                </button>
              </div>
            </div>
          ) : (
            <div className="relative z-10">
              {/* Step Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                        step >= s ? 'bg-[#C8A86B]' : 'bg-black/10'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A86B] block mb-1">
                  STEP 0{step} OF 03 — RESERVATION
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-[#1F1F1F]">
                  {step === 1 && 'Select Service & Master Stylist'}
                  {step === 2 && 'Select Date & Time Slot'}
                  {step === 3 && 'Confirm Client Details'}
                </h2>
              </div>

              {/* Step 1: Service & Stylist Selection */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#6B7280]">
                        1. SELECT TREATMENT
                      </label>
                      <span className="text-[10px] text-[#C8A86B] font-bold uppercase tracking-wider">Indian Pricing (₹)</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-52 overflow-y-auto pr-1">
                      {servicesList.map((s) => {
                        const isSelected = formData.service === s.title;
                        return (
                          <button
                            key={s.title}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: s.title })}
                            className={`p-4 rounded-2xl border text-left text-xs transition-all cursor-pointer relative ${
                              isSelected
                                ? 'bg-gradient-to-br from-white to-[#F7F4EC] border-2 border-[#C8A86B] text-[#1F1F1F] shadow-md'
                                : 'bg-white border-black/10 text-[#6B7280] hover:border-[#C8A86B]/50 hover:shadow-sm'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2 gap-2">
                              <span className="font-bold text-[#1F1F1F] leading-snug">{s.title}</span>
                              <span className="text-[#C8A86B] font-serif font-bold text-sm shrink-0">{s.price}</span>
                            </div>
                            <span className="text-[10px] text-[#6B7280] flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#C8A86B]" /> {s.time} duration
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                      2. SELECT MASTER STYLIST
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {stylistsList.map((st) => {
                        const isSelected = formData.stylist === st.name;
                        return (
                          <button
                            key={st.name}
                            type="button"
                            onClick={() => setFormData({ ...formData, stylist: st.name })}
                            className={`p-3.5 rounded-2xl border text-left text-xs transition-all cursor-pointer flex items-center gap-3 ${
                              isSelected
                                ? 'bg-gradient-to-br from-white to-[#F7F4EC] border-2 border-[#C8A86B] text-[#1F1F1F] shadow-sm'
                                : 'bg-white border-black/10 text-[#6B7280] hover:border-[#C8A86B]/50'
                            }`}
                          >
                            <div className="relative w-8 h-8 rounded-full bg-[#1F1F1F] text-white font-serif font-bold flex items-center justify-center text-xs shrink-0">
                              {st.name.charAt(0)}
                              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white" />
                            </div>
                            <div>
                              <p className="font-bold text-[#1F1F1F] leading-tight">{st.name}</p>
                              <p className="text-[10px] text-[#6B7280]">{st.role}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="mt-2 w-full py-4 rounded-full bg-[#1F1F1F] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-[#C8A86B] hover:text-[#1F1F1F] transition-all shadow-md"
                  >
                    <span>Proceed to Schedule Slot</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Date & Time Slot */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-2">
                      SELECT RESERVATION DATE
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#1F1F1F] font-medium shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                      AVAILABLE TIME SLOTS
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((slot) => {
                        const isSelected = formData.time === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData({ ...formData, time: slot })}
                            className={`py-3.5 px-2 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#1F1F1F] text-white border-[#1F1F1F] shadow-md'
                                : 'bg-white border-black/10 text-[#6B7280] hover:border-[#C8A86B]/50'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-full border border-black/10 text-[#1F1F1F] font-bold text-xs tracking-wider uppercase flex items-center gap-1 hover:bg-white cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 py-4 rounded-full bg-[#1F1F1F] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-[#C8A86B] hover:text-[#1F1F1F] transition-all shadow-md"
                    >
                      <span>Enter Contact Info</span>
                      <ChevronRight className="w-4 h-4" />
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
                      className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#1F1F1F] shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#6B7280] mb-1 uppercase tracking-wider text-[11px]">
                        Phone Number (WhatsApp)
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99103 46363"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#1F1F1F] shadow-sm"
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
                        className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#1F1F1F] shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Summary Ticket Card */}
                  <div className="p-4.5 rounded-2xl bg-white border border-[#C8A86B]/40 shadow-sm text-xs text-[#1F1F1F] my-2">
                    <p className="font-bold text-[#C8A86B] uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C8A86B]" /> RESERVATION TICKET SUMMARY:
                    </p>
                    <p className="text-[#6B7280]">{formData.service} with <span className="text-[#1F1F1F] font-bold">{formData.stylist}</span></p>
                    <p className="text-[#6B7280]">{formData.date} at <span className="text-[#1F1F1F] font-bold">{formData.time}</span></p>
                    <p className="text-[10px] text-[#6B7280] mt-1 italic">Location: D-451, 1st Floor, Ramphal Chowk, Sector 7, Dwarka, New Delhi 110075</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-4 rounded-full border border-black/10 text-[#1F1F1F] font-bold text-xs tracking-wider uppercase flex items-center gap-1 hover:bg-white cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
                    >
                      <span>CONFIRM & SEND ON WHATSAPP 💬</span>
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
