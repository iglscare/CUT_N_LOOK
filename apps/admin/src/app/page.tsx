'use client';

import React, { useState } from 'react';
import { Button, Card, Badge, Input, Modal } from '@skyelite/ui';
import {
  Scissors, LayoutDashboard, Calendar as CalendarIcon, Users, UserCheck, DollarSign,
  TrendingUp, Bot, Sparkles, MessageSquare, Award, Clock, ArrowUpRight, CheckCircle, Search, Filter, ShieldAlert
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'crm' | 'ai-assistant'>('overview');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiOutput, setAiOutput] = useState<string | null>(null);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // Mock Data
  const metrics = {
    monthlyRevenue: '$24,850.00',
    revenueGrowth: '+18.4%',
    totalAppointments: 342,
    activeCustomers: 890,
    retentionRate: '76%'
  };

  const appointmentsList = [
    { id: 'APT-1092', customer: 'Alexander Vance', service: 'Executive Hair Architecture', stylist: 'Marcus Thorne', time: '10:30 AM', price: '$65', status: 'CONFIRMED' },
    { id: 'APT-1093', customer: 'Elena Rostova', service: 'Hydra-Radiance Facial Spa', stylist: 'Sophia Lin', time: '11:45 AM', price: '$95', status: 'IN_PROGRESS' },
    { id: 'APT-1094', customer: 'David Beckham', service: 'Royal Beard Sculpture', stylist: 'Marcus Thorne', time: '01:15 PM', price: '$45', status: 'PENDING' },
    { id: 'APT-1095', customer: 'Seraphina Cruz', service: 'Platinum Hair Rejuvenation', stylist: 'Chloe Dubois', time: '02:30 PM', price: '$120', status: 'CONFIRMED' },
    { id: 'APT-1096', customer: 'Jameson Hayes', service: 'Executive Hair Architecture', stylist: 'Sophia Lin', time: '04:00 PM', price: '$65', status: 'COMPLETED' },
  ];

  const handleAiAction = (actionType: string) => {
    setIsGeneratingAi(true);
    setAiOutput(null);

    setTimeout(() => {
      setIsGeneratingAi(false);
      if (actionType === 'instagram') {
        setAiOutput("📱 **Instagram Campaign Suggestion:**\n\n✨ 'Transform Your Style with Royal Beard Sculpture & Hot Towel Detox!'\n📍 Highlight Marcus Thorne's precision shave technique.\n🎁 Offer 15% bonus loyalty points for weekend bookings via SkyElite Web App.\n#SkyEliteGrooming #LuxurySalon #BeardCare #BarberShop");
      } else if (actionType === 'retention') {
        setAiOutput("📈 **AI Customer Retention Insights:**\n\n- 42 clients haven't visited in over 45 days.\n- Recommended Action: Trigger automated WhatsApp SMS offering 'Complimentary Scalp Detox with your next haircut'.\n- Estimated Revenue Recovery: $2,730");
      } else if (actionType === 'revenue') {
        setAiOutput("📊 **Monthly Revenue Summary:**\n\n- Haircut & Styling: $11,200 (45%)\n- Color & Chemical Treatments: $7,800 (31%)\n- Facial & Spa Services: $5,850 (24%)\n- Peak hours: Fridays 2:00 PM - 7:00 PM");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-obsidian-900 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-obsidian-800 border-r border-obsidian-700 p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-skygold-400 to-skygold-600 flex items-center justify-center shadow-lg">
              <Scissors className="w-5 h-5 text-obsidian-900" />
            </div>
            <div>
              <span className="text-lg font-serif font-bold gold-gradient-text">SKYELITE</span>
              <span className="text-[9px] block text-slate-400 uppercase tracking-widest font-semibold">Salon Owner HQ</span>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-skygold-500/20 text-skygold-400 border border-skygold-500/40'
                  : 'text-slate-400 hover:bg-obsidian-700 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Overview Dashboard
            </button>

            <button
              onClick={() => setActiveTab('appointments')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'appointments'
                  ? 'bg-skygold-500/20 text-skygold-400 border border-skygold-500/40'
                  : 'text-slate-400 hover:bg-obsidian-700 hover:text-white'
              }`}
            >
              <CalendarIcon className="w-4 h-4" /> Appointments
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'crm'
                  ? 'bg-skygold-500/20 text-skygold-400 border border-skygold-500/40'
                  : 'text-slate-400 hover:bg-obsidian-700 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" /> Customer CRM
            </button>

            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === 'ai-assistant'
                  ? 'bg-skygold-500/20 text-skygold-400 border border-skygold-500/40'
                  : 'text-slate-400 hover:bg-obsidian-700 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" /> AI Salon Assistant
            </button>
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="pt-6 border-t border-obsidian-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-skygold-500/30 text-skygold-400 flex items-center justify-center font-bold text-sm border border-skygold-500/50">
              SO
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Salon Owner</p>
              <p className="text-[10px] text-slate-400">owner@skyelite.com</p>
            </div>
          </div>
          <Badge variant="gold">OWNER</Badge>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Top Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white">Salon Operations Control Center</h1>
            <p className="text-slate-400 text-xs mt-1">Real-time metrics, appointment schedules, and AI analytics insights.</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="http://localhost:3000" target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">View Public Website</Button>
            </a>
            <Button variant="gold" size="sm" onClick={() => setActiveTab('ai-assistant')}>
              <Sparkles className="w-4 h-4 mr-1" /> Launch AI Insight
            </Button>
          </div>
        </header>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card variant="glass">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 uppercase font-semibold">Monthly Revenue</span>
              <DollarSign className="w-5 h-5 text-skygold-400" />
            </div>
            <p className="text-2xl font-serif font-bold text-white mb-1">{metrics.monthlyRevenue}</p>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" /> {metrics.revenueGrowth} vs last month
            </span>
          </Card>

          <Card variant="glass">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 uppercase font-semibold">Total Appointments</span>
              <CalendarIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-2xl font-serif font-bold text-white mb-1">{metrics.totalAppointments}</p>
            <span className="text-xs text-slate-400">94% Fulfillment rate</span>
          </Card>

          <Card variant="glass">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 uppercase font-semibold">Active Clients</span>
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-2xl font-serif font-bold text-white mb-1">{metrics.activeCustomers}</p>
            <span className="text-xs text-emerald-400 font-medium">{metrics.retentionRate} Client Retention</span>
          </Card>

          <Card variant="glass">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 uppercase font-semibold">AI Assistant Status</span>
              <Sparkles className="w-5 h-5 text-skygold-400 animate-pulse" />
            </div>
            <p className="text-2xl font-serif font-bold text-skygold-400 mb-1">Active</p>
            <span className="text-xs text-slate-400">Automatic Campaign Drafts</span>
          </Card>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Appointment Schedule List */}
            <div className="lg:col-span-2">
              <Card variant="default">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                    <Clock className="w-5 h-5 text-skygold-400" /> Today's Live Schedule
                  </h3>
                  <Badge variant="gold">5 Active Slots</Badge>
                </div>

                <div className="flex flex-col gap-3">
                  {appointmentsList.map((apt) => (
                    <div key={apt.id} className="p-4 rounded-xl bg-obsidian-900/80 border border-obsidian-700 flex items-center justify-between hover:border-skygold-500/40 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-obsidian-800 border border-skygold-500/30 flex items-center justify-center font-bold text-xs text-skygold-400">
                          {apt.customer.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{apt.customer}</p>
                          <p className="text-xs text-slate-400">{apt.service} • <span className="text-skygold-300">{apt.stylist}</span></p>
                        </div>
                      </div>

                      <div className="text-right flex items-center gap-4">
                        <div>
                          <p className="text-sm font-serif font-bold text-skygold-400">{apt.time}</p>
                          <p className="text-xs text-slate-400">{apt.price}</p>
                        </div>
                        <Badge variant={apt.status === 'CONFIRMED' ? 'success' : apt.status === 'IN_PROGRESS' ? 'gold' : 'outline'}>
                          {apt.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Stylists & Quick AI Column */}
            <div className="flex flex-col gap-6">
              <Card variant="gold">
                <h3 className="text-base font-serif font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-skygold-400" /> Top Stylist Rankings
                </h3>
                <div className="flex flex-col gap-3 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian-900/60 border border-obsidian-700">
                    <span className="font-semibold text-white">Marcus Thorne</span>
                    <span className="text-skygold-400 font-bold">$8,450 / 92 Appointments</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian-900/60 border border-obsidian-700">
                    <span className="font-semibold text-white">Sophia Lin</span>
                    <span className="text-skygold-400 font-bold">$7,200 / 84 Appointments</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian-900/60 border border-obsidian-700">
                    <span className="font-semibold text-white">Chloe Dubois</span>
                    <span className="text-skygold-400 font-bold">$6,100 / 68 Appointments</span>
                  </div>
                </div>
              </Card>

              <Card variant="glass">
                <h3 className="text-base font-serif font-bold text-white mb-2 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-skygold-400" /> Quick AI Assistant
                </h3>
                <p className="text-xs text-slate-300 mb-4">Generate instant Instagram campaigns or client retention insights.</p>
                <div className="flex flex-col gap-2">
                  <Button variant="gold" size="sm" onClick={() => handleAiAction('instagram')}>
                    Generate Instagram Post
                  </Button>
                  <Button variant="secondary" size="sm" onClick={() => handleAiAction('retention')}>
                    Check Client Retention Plan
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Tab 2: AI Assistant Module */}
        {(activeTab === 'ai-assistant' || aiOutput) && (
          <Card variant="gold" className="mt-4">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-skygold-400 animate-spin" />
              <h3 className="text-xl font-serif font-bold text-white">SkyElite AI Recommendation Engine</h3>
            </div>

            <div className="flex gap-3 mb-6">
              <Button variant="gold" size="sm" onClick={() => handleAiAction('instagram')}>
                Instagram Campaign Generator
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleAiAction('retention')}>
                Customer Retention AI
              </Button>
              <Button variant="secondary" size="sm" onClick={() => handleAiAction('revenue')}>
                Summarize Monthly Revenue
              </Button>
            </div>

            {isGeneratingAi && (
              <div className="p-8 text-center text-skygold-400 font-semibold animate-pulse">
                Analyzing salon data & generating campaign insights...
              </div>
            )}

            {aiOutput && !isGeneratingAi && (
              <div className="p-6 rounded-xl bg-obsidian-900 border border-skygold-500/40 text-sm whitespace-pre-line leading-relaxed text-slate-200">
                {aiOutput}
              </div>
            )}
          </Card>
        )}
      </main>
    </div>
  );
}
