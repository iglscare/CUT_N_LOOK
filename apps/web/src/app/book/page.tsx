'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  User,
  Phone,
  Mail,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Star,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CardPage, AnimatedText, AnimatedButton } from '@skyelite/ui';

export default function BookPage() {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    service: 'Signature Precision Cut & Blowout',
    stylist: 'Elena Rostova',
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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
    const whatsappUrl = `https://wa.me/919910346363?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    sendWhatsAppBooking(formData);
  };

  const servicesList = [
    { title: 'Signature Precision Cut & Blowout', price: '₹1,999', time: '75 min', category: 'Hair Architecture' },
    { title: 'Haute Balayage & Glossing Ritual', price: '₹7,999', time: '150 min', category: 'Coloring' },
    { title: 'Royal Couture Bridal Suite', price: '₹14,999', time: '210 min', category: 'Bridal' },
    { title: 'Dewy Glass Skin Facial Spa', price: '₹4,999', time: '90 min', category: 'Skincare' },
    { title: 'Keratin Silk Press Ritual', price: '₹5,999', time: '120 min', category: 'Hair Architecture' },
    { title: 'Botanical Scalp & Hair Detox', price: '₹2,999', time: '60 min', category: 'Skincare' }
  ];

  const stylistsList = [
    { name: 'Elena Rostova', role: 'Master Hair Architect', experience: '12 Yrs Exp' },
    { name: 'Marcus Thorne', role: 'Barber & Spa Director', experience: '10 Yrs Exp' },
    { name: 'Sophia Lin', role: 'Skincare Specialist', experience: '8 Yrs Exp' },
    { name: 'Chloe Dubois', role: 'Bridal Couture Specialist', experience: '14 Yrs Exp' }
  ];

  const timeSlots = ['09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '05:00 PM', '06:30 PM'];

  return (
    <CardPage>
      <div className="min-h-screen bg-[#FAFAF8] text-[#202A36] font-sans pt-28 pb-20 px-4 sm:px-8">
        <Navbar onBookClick={() => setStep(1)} />

        <div className="max-w-[1440px] mx-auto pt-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8A86B] mb-3 block">
              Private Reservation
            </span>
            <AnimatedText
              text="Reserve Your Experience"
              as="h1"
              className="text-4xl sm:text-6xl font-display font-bold text-[#202A36] tracking-tight justify-center mb-4"
            />
            <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed">
              Select your desired service, master stylist, and preferred time slot for a private session in our Dwarka, New Delhi studio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Interactive Form Card */}
            <div className="lg:col-span-8 bg-white border border-black/10 rounded-[32px] p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C8A86B] mb-2 block">
                    Reservation Confirmed
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#202A36] mb-4">
                    We Look Forward to Welcoming You
                  </h2>
                  <p className="text-[#6B7280] text-sm max-w-md mx-auto leading-relaxed mb-8">
                    Thank you, <span className="text-[#202A36] font-bold">{formData.name || 'Valued Client'}</span>. Your reservation for <span className="text-[#202A36] font-bold">{formData.service}</span> with <span className="text-[#202A36] font-bold">{formData.stylist}</span> has been saved for <span className="text-[#202A36] font-bold">{formData.date}</span> at <span className="text-[#202A36] font-bold">{formData.time}</span>.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setStep(1); }}
                    className="px-8 py-3.5 rounded-full bg-[#202A36] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <div>
                  {/* Step Progress Bar */}
                  <div className="mb-10">
                    <div className="flex items-center gap-2 mb-3">
                      {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                            step >= s ? 'bg-[#C8A86B]' : 'bg-black/10'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                      <span className="text-[#C8A86B]">Step {step} of 3</span>
                      <span>
                        {step === 1 && 'Treatment & Stylist'}
                        {step === 2 && 'Date & Time'}
                        {step === 3 && 'Contact Details'}
                      </span>
                    </div>
                  </div>

                  {/* Step 1: Select Service & Stylist */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-8"
                    >
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#202A36] mb-4">
                          1. Select Treatment
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {servicesList.map((s) => (
                            <button
                              key={s.title}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: s.title })}
                              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                                formData.service === s.title
                                  ? 'border-[#C8A86B] bg-[#C8A86B]/10 text-[#202A36] shadow-sm font-semibold'
                                  : 'border-black/10 bg-[#FAFAF8] text-[#6B7280] hover:border-[#C8A86B]/50'
                              }`}
                            >
                              <span className="text-[10px] uppercase font-bold text-[#C8A86B] tracking-wider block mb-1">
                                {s.category}
                              </span>
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-sm text-[#202A36]">{s.title}</span>
                                <span className="text-[#C8A86B] font-serif font-bold text-base">{s.price}</span>
                              </div>
                              <span className="text-xs text-[#6B7280]">{s.time}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#202A36] mb-4">
                          2. Select Master Stylist
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {stylistsList.map((st) => (
                            <button
                              key={st.name}
                              type="button"
                              onClick={() => setFormData({ ...formData, stylist: st.name })}
                              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                                formData.stylist === st.name
                                  ? 'border-[#C8A86B] bg-[#C8A86B]/10 text-[#202A36] shadow-sm font-semibold'
                                  : 'border-black/10 bg-[#FAFAF8] text-[#6B7280] hover:border-[#C8A86B]/50'
                              }`}
                            >
                              <p className="font-bold text-sm text-[#202A36]">{st.name}</p>
                              <p className="text-xs text-[#6B7280]">{st.role} • {st.experience}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        className="w-full py-4 rounded-full bg-[#202A36] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-md"
                      >
                        <span>Continue to Date & Time</span>
                        <ChevronRight className="w-4 h-4 text-[#C8A86B]" />
                      </button>
                    </motion.div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-8"
                    >
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#202A36] mb-3">
                          Select Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36] font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#202A36] mb-4">
                          Select Time Slot
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setFormData({ ...formData, time: slot })}
                              className={`py-4 px-3 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                                formData.time === slot
                                  ? 'border-[#C8A86B] bg-[#C8A86B]/15 text-[#202A36] shadow-sm'
                                  : 'border-black/10 bg-[#FAFAF8] text-[#6B7280] hover:border-[#C8A86B]/50'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <button
                          onClick={() => setStep(1)}
                          className="px-8 py-4 rounded-full border border-black/10 text-[#202A36] font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#FAFAF8] cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                          onClick={() => setStep(3)}
                          className="flex-1 py-4 rounded-full bg-[#202A36] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-md"
                        >
                          <span>Enter Contact Details</span>
                          <ChevronRight className="w-4 h-4 text-[#C8A86B]" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact & Confirm */}
                  {step === 3 && (
                    <motion.form
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block font-bold text-[#202A36] mb-2 uppercase tracking-wider text-xs">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Victoria Stirling"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-bold text-[#202A36] mb-2 uppercase tracking-wider text-xs">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-1234"
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36]"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-[#202A36] mb-2 uppercase tracking-wider text-xs">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="client@domain.com"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-5 py-4 bg-[#FAFAF8] border border-black/10 rounded-2xl focus:outline-none focus:border-[#C8A86B] text-sm text-[#202A36]"
                          />
                        </div>
                      </div>

                      {/* Summary Box */}
                      <div className="p-5 rounded-2xl bg-[#C8A86B]/10 border border-[#C8A86B]/30 text-xs text-[#202A36]">
                        <p className="font-bold text-[#C8A86B] uppercase tracking-wider mb-2">Reservation Summary:</p>
                        <p className="text-[#6B7280] mb-1">Treatment: <span className="text-[#202A36] font-bold">{formData.service}</span></p>
                        <p className="text-[#6B7280] mb-1">Stylist: <span className="text-[#202A36] font-bold">{formData.stylist}</span></p>
                        <p className="text-[#6B7280]">Date & Time: <span className="text-[#202A36] font-bold">{formData.date} at {formData.time}</span></p>
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-8 py-4 rounded-full border border-black/10 text-[#202A36] font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-[#FAFAF8] cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-4 rounded-full bg-[#C8A86B] text-[#202A36] font-bold text-xs tracking-wider uppercase hover:bg-[#B8975B] shadow-md cursor-pointer transition-all"
                        >
                          Confirm Reservation Now
                        </button>
                      </div>
                    </motion.form>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar: Studio Info & Guarantee */}
            <div className="lg:col-span-4 space-y-6">
              {/* Studio Info Card */}
              <div className="bg-white border border-black/10 rounded-[32px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
                <h3 className="text-xl font-serif font-bold text-[#202A36] mb-6">
                  Dwarka, New Delhi Studio
                </h3>

                <div className="space-y-4 text-xs text-[#6B7280]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C8A86B] shrink-0 mt-0.5" />
                    <span className="text-[#202A36] font-medium">D-451, 1st Floor, Ramphal Chowk,<br />Sector 7, Dwarka, New Delhi 110075</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C8A86B] shrink-0" />
                    <a href="tel:+919910346363" className="text-[#202A36] font-bold hover:text-[#C8A86B] transition-colors">+91 99103 46363</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#C8A86B] shrink-0" />
                    <span className="text-[#202A36] font-medium">Mon - Sun: 10:00 AM - 9:00 PM</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/8 flex items-center gap-3">
                  <div className="flex text-[#C8A86B] gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C8A86B]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#202A36]">4.9 / 5 Rated Salon</span>
                </div>
              </div>

              {/* Concierge Guarantee */}
              <div className="bg-[#C8A86B]/10 border border-[#C8A86B]/30 rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-3 text-[#C8A86B]">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-xs font-bold uppercase tracking-wider">Concierge Guarantee</span>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  Complimentary 1:1 consultation included with every session. Free cancellation up to 24 hours prior.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </CardPage>
  );
}
