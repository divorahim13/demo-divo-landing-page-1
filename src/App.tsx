/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  Star,
  Menu,
  X,
  ArrowRight,
  Wrench,
  Droplets,
  HardHat,
  Calendar,
  Check,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Clock,
  Search,
  Settings,
  AlertCircle
} from 'lucide-react';
import { WhatsAppIcon } from './icons';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

function FAQItem({ q, a, defaultOpen = false }: { q: string, a: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div 
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-900 text-lg">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-8 text-slate-500 leading-relaxed text-base">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-100">
              <Zap className="w-6 h-6 fill-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              ARCTICOOL
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'About', 'Pricing', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold text-slate-600 hover:text-sky-600 transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-green-100 group border-b-4 border-black/10">
              <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Admin
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-3 bg-slate-50 rounded-xl text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-10 flex flex-col gap-8">
                {['Services', 'About', 'Pricing', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-bold text-slate-900"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-4">
                  <button className="w-full bg-[#0284c7] text-white py-4 rounded-2xl font-bold shadow-lg shadow-sky-100">
                    Booking Sekarang
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-black tracking-widest uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                Teknisi Tersedia Hari Ini
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-8 tracking-tight">
                Service AC Panggilan <br />
                <span className="text-sky-600">Rumah & Kantor</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-lg">
                Teknisi datang ke lokasi untuk cuci AC, isi freon, pengecekan, perbaikan, hingga bongkar pasang. 
                <span className="text-slate-900 font-semibold italic"> Biaya dikonfirmasi sebelum pengerjaan dimulai.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-14">
                <button className="bg-[#25D366] text-white px-10 py-5 rounded-[24px] font-bold text-lg hover:bg-[#20ba5a] transition-all shadow-2xl shadow-green-100 flex items-center justify-center gap-3 group border-b-4 border-black/10">
                  <WhatsAppIcon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Chat Teknisi via WhatsApp
                </button>
                <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-[24px] font-bold text-lg hover:border-slate-300 transition-all flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6 text-sky-600" />
                  Cek Jadwal Hari Ini
                </button>
              </div>

              {/* Hero Trust Points */}
              <div className="flex flex-wrap gap-8 py-8 border-t border-slate-100">
                {[
                  { icon: Zap, label: "Respon Cepat" },
                  { icon: Wallet, label: "Biaya Transparan" },
                  { icon: ShieldCheck, label: "Garansi Layanan" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <item.icon className="w-5 h-5 text-sky-500" />
                    {item.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Visual Hero */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100">
                <img 
                  src="/images/hero-technician-ac.webp" 
                  alt="Teknisi AC Profesional Arcticool sedang melakukan perbaikan unit indoor" 
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-[4/5] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-50 flex items-center gap-5 max-w-[280px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
                  <Star className="w-7 h-7 fill-sky-600" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tighter">5.000+</div>
                  <div className="text-sm text-slate-500 font-bold">Unit Ditangani</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/4 -right-12 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/50 hidden lg:flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-sm font-extrabold text-slate-900">Garansi Layanan 30 Hari</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar - Compact Trust Chips */}
        <section className="bg-slate-50/50 py-16 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Peralatan Lengkap", desc: "Teknisi membawa tangga & peralatan sendiri", icon: Wrench },
                { title: "Harga Transparan", desc: "Biaya dikonfirmasi sebelum pengerjaan", icon: Wallet },
                { title: "Garansi Pasti", desc: "Garansi sesuai dengan jenis layanan Anda", icon: ShieldCheck },
                { title: "Jangkauan Luas", desc: "Bisa panggilan rumah, apartemen, & kantor", icon: MapPin }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-tight font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section (Layanan Kami) */}
        <section id="services" className="px-6 py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-sky-600 text-xs font-black tracking-[0.3em] uppercase mb-4 block">LAYANAN UNGGULAN</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Solusi Lengkap Masalah AC</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Featured Service: Cuci AC */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 bg-[#0f172a] rounded-[48px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
              >
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <img 
                    src="/images/service-cleaning-ac.webp" 
                    alt="Proses cuci AC menggunakan water pressure jet" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent hidden md:block" />
                </div>
                <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500 text-white text-[10px] font-black tracking-widest uppercase mb-6">BEST SELLER</div>
                  <h3 className="text-3xl font-extrabold text-white mb-6">Cuci AC Indoor & Outdoor</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-8">
                    Membersihkan unit indoor, outdoor, filter, dan saluran pembuangan agar AC kembali dingin, tidak bau, dan tidak mudah bocor.
                  </p>
                  <button className="flex items-center gap-3 text-sky-400 font-bold hover:gap-5 transition-all group">
                    Konsultasi layanan
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Secondary Services Grid */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Isi Freon", desc: "Pengecekan dan penambahan freon sesuai kebutuhan unit.", icon: Droplets },
                  { title: "Perbaikan AC", desc: "Diagnosa masalah AC kurang dingin, bocor, atau error.", icon: Settings },
                  { title: "Bongkar Pasang", desc: "Pemindahan dan pemasangan ulang AC yang rapi dan aman.", icon: HardHat },
                  { title: "Maintenance", desc: "Perawatan rutin untuk rumah, kantor, cafe, dan ruko.", icon: Calendar }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-800 mb-6 shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us & How We Work (Mengapa Memilih Kami & Prosedur) */}
        <section className="px-6 py-24 md:py-32 bg-slate-50/30 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 tracking-tight">Mengapa pelanggan memilih Arcticool?</h2>
                
                <div className="space-y-8">
                  {[
                    "Teknisi menjelaskan kondisi unit sebelum pengerjaan",
                    "Biaya transparan dan dikonfirmasi di awal",
                    "Pengerjaan rapi untuk rumah, kantor, dan ruko",
                    "Tersedia garansi sesuai jenis layanan",
                    "Jadwal kunjungan sesuai ketersediaan Anda"
                  ].map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-5 group"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white mt-1 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 stroke-[4]" />
                      </div>
                      <p className="text-lg font-bold text-slate-700 leading-tight">{point}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16 relative">
                  <div className="relative rounded-[48px] overflow-hidden shadow-2xl">
                    <img 
                      src="/images/process-technician-inspection.webp" 
                      alt="Teknisi Arcticool sedang melakukan pengecekan tekanan freon" 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* How We Work Panel */}
              <div className="bg-white p-10 md:p-16 rounded-[60px] border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-[100px] -z-0" />
                
                <h3 className="text-3xl font-black text-slate-900 mb-12 relative z-10">Prosedur Kerja Kami</h3>
                
                <div className="space-y-12 relative z-10">
                  {[
                    { step: "01", title: "Konsultasi Keluhan", desc: "Ceritakan masalah AC Anda kepada admin." },
                    { step: "02", title: "Konfirmasi Jadwal", desc: "Tentukan waktu dan lokasi kunjungan teknisi." },
                    { step: "03", title: "Cek Kondisi Unit", desc: "Teknisi melakukan diagnosa awal di lokasi." },
                    { step: "04", title: "Konfirmasi Biaya", desc: "Harga disepakati sebelum pengerjaan dimulai." },
                    { step: "05", title: "Service & Uji Coba", desc: "AC diservice dan diuji sampai dingin kembali." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-8 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl group-hover:bg-sky-600 transition-colors shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section (Estimasi Biaya) */}
        <section id="pricing" className="bg-[#0b1b2d] py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <span className="text-sky-400 text-xs font-black tracking-[0.4em] uppercase mb-6 block">PRICING & PACKAGES</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Estimasi Biaya Service AC</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Harga berikut adalah estimasi awal. Biaya final akan dikonfirmasi setelah teknisi mengecek kondisi unit dan lokasi pengerjaan.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold">
                <AlertCircle className="w-5 h-5" />
                Tidak ada pengerjaan tambahan tanpa persetujuan pelanggan.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
              {/* Card 1: Cuci AC Standard */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-800/30 backdrop-blur-xl border border-white/10 p-12 rounded-[48px] flex flex-col hover:border-sky-500/30 transition-all"
              >
                <div className="mb-10">
                  <div className="text-sky-400 text-[10px] font-black tracking-widest uppercase mb-4">PERAWATAN RUTIN</div>
                  <h3 className="text-2xl font-black text-white mb-4">Cuci AC Standard</h3>
                  <p className="text-slate-500 text-sm font-medium mb-8">Untuk perawatan rutin AC rumah, kamar, kos, atau kantor kecil.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400 mr-1">Mulai</span>
                    <span className="text-5xl font-black text-white tracking-tighter">Rp 75rb</span>
                    <span className="text-slate-400 text-sm">/unit</span>
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {[
                    "Cuci indoor dan outdoor",
                    "Pembersihan filter",
                    "Pengecekan aliran air",
                    "Pengecekan kondisi freon"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-sky-400 stroke-[4]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 mb-10 flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-sky-500" />
                  Estimasi 30–45 Menit
                </div>

                <button className="w-full py-5 rounded-2xl border-2 border-white/10 text-white font-black text-lg hover:bg-white hover:text-[#0b1b2d] transition-all">
                  Pesan Cuci AC
                </button>
              </motion.div>

              {/* Card 2: Paket Hemat Dingin (Recommended) */}
              <motion.div 
                whileHover={{ y: -15 }}
                className="relative bg-white p-12 rounded-[56px] shadow-2xl shadow-sky-500/20 z-10 flex flex-col scale-105"
              >
                <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-[10px] font-black tracking-[0.3em] uppercase text-center py-3 rounded-t-[56px]">
                  PALING DIREKOMENDASIKAN
                </div>

                <div className="mt-8 mb-10">
                  <div className="text-sky-600 text-[10px] font-black tracking-widest uppercase mb-4">PAKET FAVORIT</div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Paket Hemat Dingin</h3>
                  <p className="text-slate-500 text-sm font-medium mb-8">Cocok untuk AC yang kurang dingin, lama tidak diservice, atau bermasalah.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400 mr-1">Mulai</span>
                    <span className="text-6xl font-black text-slate-900 tracking-tighter">Rp 195rb</span>
                    <span className="text-slate-400 text-base">/paket</span>
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {[
                    "Cuci indoor dan outdoor",
                    "Tambah freon (all type)",
                    "Vakum saluran drainase",
                    "Cek tekanan & suhu",
                    "Garansi 30 Hari",
                    "Pengecekan performa"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-4 text-slate-700 text-sm font-bold">
                      <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-sky-600 stroke-[4]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="bg-sky-50/50 rounded-2xl p-4 mb-10 flex items-center gap-3 text-sky-700 text-xs font-bold">
                  <Star className="w-5 h-5 fill-sky-600 text-sky-600" />
                  Paket favorit rumah & kantor
                </div>

                <button className="w-full py-6 rounded-2xl bg-[#0b1b2d] text-white font-black text-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  Pesan Paket Favorit
                </button>
              </motion.div>

              {/* Card 3: Bongkar Pasang */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-slate-800/30 backdrop-blur-xl border border-white/10 p-12 rounded-[48px] flex flex-col hover:border-sky-500/30 transition-all"
              >
                <div className="mb-10">
                  <div className="text-sky-400 text-[10px] font-black tracking-widest uppercase mb-4">RELOKASI & PASANG</div>
                  <h3 className="text-2xl font-black text-white mb-4">Bongkar Pasang</h3>
                  <p className="text-slate-500 text-sm font-medium mb-8">Untuk relokasi AC rumah, kantor, apartemen, atau ruko.</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-slate-400 mr-1">Mulai</span>
                    <span className="text-5xl font-black text-white tracking-tighter">Rp 350rb</span>
                    <span className="text-slate-400 text-sm">/unit</span>
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {[
                    "Bongkar unit AC lama",
                    "Instalasi ulang unit baru",
                    "Pemasangan bracket",
                    "Uji coba pendinginan",
                    "Pengecekan kebocoran"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-sky-400 stroke-[4]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 mb-10 flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-sky-500" />
                  Waktu Menyesuaikan Lokasi
                </div>

                <button className="w-full py-5 rounded-2xl border-2 border-white/10 text-white font-black text-lg hover:bg-white hover:text-[#0b1b2d] transition-all">
                  Booking Sekarang
                </button>
              </motion.div>
            </div>

            {/* Bottom Trust Chips */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 border-t border-white/10">
              {["Konsultasi Gratis", "Biaya Transparan", "Garansi Layanan", "Teknisi Berpengalaman"].map((trust) => (
                <div key={trust} className="flex items-center gap-3 text-slate-400 font-black text-xs tracking-widest uppercase">
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                  {trust}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-24 md:py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Kepuasan Pelanggan</h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
                Dipercaya oleh lebih dari 5.000+ pelanggan terbaik kami di seluruh Jabodetabek.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: "Rendi Pratama",
                  role: "Pemilik Rumah",
                  loc: "Jakarta Selatan",
                  text: "AC kamar sempat bocor dan kurang dingin. Setelah dicek, teknisi bersihkan indoor-outdoor dan saluran pembuangan. Sekarang sudah normal lagi."
                },
                {
                  name: "Sari Wijaya",
                  role: "Office Manager",
                  loc: "Tangerang",
                  text: "Saya booking untuk service AC kantor. Tim datang sesuai jadwal, kerja rapi, dan biaya dijelaskan sebelum mulai. Sangat profesional."
                },
                {
                  name: "Budi Santoso",
                  role: "Pengusaha",
                  loc: "Bekasi",
                  text: "Bongkar pasang AC dari rumah lama ke rumah baru, hasilnya rapi dan unit dites dulu sebelum teknisi pulang. Puas sekali."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-slate-50 p-12 rounded-[48px] border border-slate-100 flex flex-col"
                >
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-800 text-lg leading-relaxed font-bold italic mb-10 flex-grow">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-5 pt-8 border-t border-slate-200/50">
                    <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-black text-xl shadow-lg">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg">{item.name}</div>
                      <div className="text-slate-500 text-sm font-bold tracking-tight">{item.role} • {item.loc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-24 md:py-40 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-20 text-center tracking-tight">Tanya Jawab Umum</h2>

            <div className="space-y-6">
              <FAQItem 
                q="Apakah teknisi bisa datang hari yang sama?" 
                a="Ya, kami menyediakan layanan same-day service tergantung ketersediaan jadwal teknisi. Sangat disarankan untuk booking sebelum jam 12:00 siang." 
                defaultOpen={true}
              />
              <FAQItem 
                q="Apakah harga sudah termasuk pengecekan?" 
                a="Pengecekan dasar sudah termasuk dalam biaya cuci AC. Untuk diagnosa kerusakan berat tanpa pengerjaan, akan dikenakan biaya visit teknisi." 
              />
              <FAQItem 
                q="Berapa lama proses cuci AC?" 
                a="Proses cuci AC standard biasanya memakan waktu 30-45 menit per unit, tergantung pada tingkat kekotoran dan posisi unit." 
              />
              <FAQItem 
                q="Apakah ada garansi setelah service?" 
                a="Kami memberikan garansi pengerjaan 30 hari untuk service cuci dan perbaikan. Syarat dan ketentuan berlaku sesuai jenis layanan." 
              />
              <FAQItem 
                q="Apakah bisa service AC kantor atau ruko?" 
                a="Tentu saja. Kami melayani unit skala besar untuk perkantoran, ruko, restoran, hingga apartemen dengan penawaran harga khusus." 
              />
            </div>
          </div>
        </section>

        {/* Final CTA & Contact Section */}
        <section id="contact" className="px-6 py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-sky-600 text-sm font-black tracking-[0.4em] uppercase mb-8 block">BOOKING NOW</span>
                <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-10 tracking-tighter">Butuh Service AC Hari Ini?</h2>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-lg">
                  Ceritakan keluhan AC Anda. Tim admin kami akan segera menjadwalkan kunjungan teknisi terdekat ke lokasi Anda.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-sky-600">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-black uppercase mb-1">Call/WA Admin</div>
                      <div className="text-2xl font-black text-slate-900">0812-3456-7890</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-sky-600">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-black uppercase mb-1">Email Support</div>
                      <div className="text-2xl font-black text-slate-900">halo@arcticool.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 overflow-hidden rounded-[48px] shadow-2xl relative group">
                  <img src="/images/cta-service-ac.webp" alt="Tim teknisi AC Arcticool siap melayani Anda" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-sky-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-[#0f172a] p-12 md:p-20 rounded-[60px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-bl-[200px] pointer-events-none" />
                
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Form Booking</h3>
                <p className="text-slate-400 mb-12">Admin akan menghubungi Anda untuk konfirmasi jadwal dan biaya.</p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                      <input type="text" placeholder="Contoh: Rendi" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-sky-500 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                      <input type="tel" placeholder="0812..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-sky-500 focus:outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Alamat / Area</label>
                    <input type="text" placeholder="Jl. Sudirman, Jaksel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-sky-500 focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Jenis Layanan</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-sky-500 focus:outline-none transition-all appearance-none cursor-pointer">
                      <option className="bg-slate-900">Pilih Layanan...</option>
                      <option className="bg-slate-900">Cuci AC Standard</option>
                      <option className="bg-slate-900">Paket Hemat Dingin</option>
                      <option className="bg-slate-900">Bongkar Pasang</option>
                      <option className="bg-slate-900">Perbaikan & Pengecekan</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Keluhan AC</label>
                    <textarea rows={4} placeholder="Jelaskan masalah AC Anda..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-sky-500 focus:outline-none transition-all"></textarea>
                  </div>
                  <button className="w-full bg-sky-500 text-white py-6 rounded-[24px] font-black text-xl hover:bg-sky-400 transition-all shadow-xl shadow-sky-900/20 mt-8 uppercase tracking-widest">
                    Kirim Permintaan Booking
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Areas Section */}
        <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-sky-600 text-xs font-black tracking-[0.4em] uppercase mb-8 block">AREA LAYANAN KAMI</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Melayani Seluruh Jabodetabek</h2>
            <p className="text-slate-500 font-medium mb-12 max-w-2xl mx-auto">Kami melayani kunjungan teknisi untuk rumah, kantor, apartemen, ruko, cafe, dan tempat usaha.</p>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Jakarta Selatan", "Jakarta Timur", "Jakarta Barat", "Jakarta Utara", "Jakarta Pusat", "Tangerang Selatan", "Depok", "Bekasi", "Bogor (Area Tertentu)"].map((area) => (
                <div 
                  key={area}
                  className="px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm font-black hover:border-sky-500 hover:text-sky-600 transition-all cursor-default shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-12 text-slate-400 text-sm font-bold italic">Hubungi admin untuk memastikan jangkauan teknisi di lokasi spesifik Anda.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-8 text-white">
                <Zap className="w-8 h-8 fill-sky-500 text-sky-500" />
                <span className="text-2xl font-black tracking-tighter">ARCTICOOL</span>
              </div>
              <p className="text-base leading-relaxed mb-10 font-medium">
                Penyedia jasa service AC profesional dengan teknisi berpengalaman. Prioritas kami adalah kualitas pengerjaan dan kepuasan pelanggan dengan harga yang transparan.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all text-white border border-white/5">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-widest mb-10">Layanan Populer</h3>
              <ul className="space-y-5 text-sm font-bold">
                {["Cuci AC Berkala", "Paket Tambah Freon", "Perbaikan AC Bocor", "Instalasi AC Baru", "Bongkar Pasang Unit", "Maintenance Kantor"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours Column */}
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-widest mb-10">Jam Operasional</h3>
              <ul className="space-y-6 text-sm font-bold">
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span>Senin - Jumat</span>
                  <span className="text-white">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span>Sabtu</span>
                  <span className="text-white">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span>Minggu</span>
                  <span className="text-sky-400 font-black">Open (Booking Only)</span>
                </li>
              </ul>
            </div>

            {/* Address Column */}
            <div>
              <h3 className="text-white font-black text-sm uppercase tracking-widest mb-10">Kantor Pusat</h3>
              <div className="space-y-6 text-sm font-bold">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <p className="leading-relaxed">Kuningan, Jakarta Selatan, <br />DKI Jakarta 12940</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <p>0812-3456-7890</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold tracking-widest uppercase">
              © 2026 ARCTICOOL. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-8 text-xs font-black tracking-widest uppercase">
              <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center group"
      >
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-black shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
          Chat Admin Arcticool
        </div>
        <WhatsAppIcon className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
