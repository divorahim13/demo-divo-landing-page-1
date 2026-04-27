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
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Premium Animation Constants ---
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: EASE }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: EASE }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const slideInLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.75, ease: EASE }
};

const slideInRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.75, ease: EASE }
};

const scaleInSubtle = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: EASE }
};

// --- Reusable Components with Animation ---

function SectionHeader({ eyebrow, title, subtitle, light = false, centered = false }: { eyebrow?: string, title: string, subtitle?: string, light?: boolean, centered?: boolean }) {
  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={`mb-10 md:mb-16 ${light ? 'text-white' : 'text-slate-900'} ${centered ? 'flex flex-col items-center text-center' : ''}`}
    >
      {eyebrow && (
        <motion.span 
          variants={fadeUp}
          className={`${light ? 'text-sky-400' : 'text-sky-600'} text-xs font-black tracking-[0.4em] uppercase mb-3 block ${centered ? 'text-center' : ''}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 
        variants={fadeUp}
        className={`text-[clamp(32px,5vw,56px)] font-extrabold tracking-tight mb-4 leading-[1.1] ${centered ? 'text-center' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          variants={fadeUp}
          className={`${light ? 'text-slate-400' : 'text-slate-500'} text-base md:text-lg max-w-2xl font-medium leading-relaxed ${centered ? 'text-center mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

function FAQItem({ q, a, defaultOpen = false }: { q: string, a: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div 
      variants={fadeUp}
      className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-black text-slate-900 text-xl tracking-tight">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={`${isOpen ? 'text-sky-600' : 'text-slate-400'} group-hover:text-sky-500 transition-colors`}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="px-10 pb-10 text-slate-500 leading-relaxed text-lg font-medium border-t border-slate-50 pt-2">
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
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl h-[72px] shadow-lg shadow-slate-200/20 border-slate-100' 
            : 'bg-transparent h-24 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <motion.img 
              src="/images/logo.webp" 
              alt="Arcticool Logo" 
              whileHover={{ scale: 1.02 }}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { id: 'services', label: 'Layanan' },
              { id: 'about', label: 'Tentang' },
              { id: 'pricing', label: 'Harga' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contact', label: 'Kontak' }
            ].map((item) => (
              <motion.a 
                key={item.id} 
                href={`#${item.id}`} 
                whileHover={{ y: -2 }}
                className="text-[11px] font-black text-slate-600 hover:text-sky-600 transition-colors tracking-[0.15em] uppercase"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3 rounded-2xl font-black text-xs tracking-widest uppercase flex items-center gap-2 transition-all group border-b-4 border-black/10"
            >
              <WhatsAppIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
              WhatsApp Admin
            </motion.button>
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
              transition={{ duration: 0.4, ease: EASE }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-10 flex flex-col gap-6 text-center">
                {[
                  { id: 'services', label: 'Layanan' },
                  { id: 'about', label: 'Tentang' },
                  { id: 'pricing', label: 'Harga' },
                  { id: 'contact', label: 'Kontak' }
                ].map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-black text-slate-900 tracking-tight"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-4">
                  <button className="w-full bg-[#25D366] text-white py-5 rounded-[24px] font-black text-lg shadow-lg shadow-green-100 border-b-4 border-black/10">
                    WhatsApp Admin
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-24 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="relative z-10"
            >
              <motion.div 
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[10px] font-black tracking-[0.2em] uppercase mb-10"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                Teknisi Tersedia Hari Ini
              </motion.div>
              
              <motion.h1 
                variants={fadeUp}
                className="text-[clamp(40px,7vw,84px)] font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter"
              >
                Service AC <br />
                Panggilan <span className="text-sky-600">Rumah</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeUp}
                className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-14 max-w-lg font-medium"
              >
                Teknisi datang ke lokasi untuk cuci AC, isi freon, perbaikan, hingga bongkar pasang. 
                <span className="text-slate-900 font-bold italic"> Biaya dikonfirmasi di awal.</span>
              </motion.p>

              <motion.div 
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-5 mb-20"
              >
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#25D366] text-white px-12 py-6 rounded-[32px] font-black text-xl hover:bg-[#20ba5a] transition-all shadow-[0_20px_50px_rgba(37,211,102,0.25)] flex items-center justify-center gap-4 group border-b-8 border-black/10"
                >
                  <WhatsAppIcon className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                  WhatsApp Admin
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-slate-900 border-2 border-slate-100 px-12 py-6 rounded-[32px] font-black text-xl hover:border-slate-300 transition-all flex items-center justify-center gap-4 shadow-xl shadow-slate-100/50"
                >
                  <Calendar className="w-7 h-7 text-sky-600" />
                  Cek Jadwal
                </motion.button>
              </motion.div>

              {/* Hero Trust Points */}
              <motion.div 
                variants={fadeUp}
                className="flex flex-wrap gap-12 py-10 border-t border-slate-100"
              >
                {[
                  { icon: Zap, label: "Respon Cepat" },
                  { icon: Wallet, label: "Biaya Transparan" },
                  { icon: ShieldCheck, label: "Garansi Layanan" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-slate-600 font-black text-xs uppercase tracking-widest">
                    <item.icon className="w-5 h-5 text-sky-500" />
                    {item.label}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Hero */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={slideInRight}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative rounded-[80px] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.2)] bg-slate-100 group"
              >
                <img 
                  src="/images/hero-technician-ac.webp" 
                  alt="Teknisi AC Profesional Arcticool" 
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-[4/5] group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Floating Badges with subtle floating animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  opacity: { delay: 0.8, duration: 0.6 },
                  scale: { delay: 0.8, duration: 0.6 },
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                }}
                className="absolute -bottom-12 -left-12 bg-white p-8 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-6 max-w-[320px] z-20"
              >
                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 shadow-inner">
                  <Star className="w-8 h-8 fill-sky-600" />
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 tracking-tighter">5.000+</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Unit Ditangani</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, 6, 0]
                }}
                transition={{ 
                  opacity: { delay: 1, duration: 0.6 },
                  x: { delay: 1, duration: 0.6 },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }
                }}
                className="absolute top-1/4 -right-16 bg-white/95 backdrop-blur-md px-8 py-5 rounded-3xl shadow-[0_32px_64px_-16px_rgba(14,165,233,0.15)] border border-white/50 hidden lg:flex items-center gap-4 z-20"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping shadow-lg shadow-emerald-200" />
                <span className="text-base font-black text-slate-900 uppercase tracking-widest">Garansi 30 Hari</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-slate-50/50 py-20 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { title: "Peralatan Lengkap", desc: "Teknisi membawa tangga & peralatan sendiri", icon: Wrench },
                { title: "Harga Transparan", desc: "Biaya dikonfirmasi sebelum pengerjaan", icon: Wallet },
                { title: "Garansi Pasti", desc: "Garansi sesuai dengan jenis layanan Anda", icon: ShieldCheck },
                { title: "Jangkauan Luas", desc: "Bisa panggilan rumah, apartemen, & kantor", icon: MapPin }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-6 p-8 bg-white rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1.5">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-bold">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-6 py-16 md:py-24 bg-white overflow-hidden scroll-mt-[90px]">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              eyebrow="LAYANAN UNGGULAN"
              title="Solusi Lengkap Masalah AC"
              subtitle="Kami menyediakan berbagai layanan mulai dari perawatan rutin hingga perbaikan berat untuk semua merek dan jenis AC."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Featured Service */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
                whileHover={{ y: -6 }}
                className="lg:col-span-7 bg-[#0f172a] rounded-[64px] overflow-hidden flex flex-col md:flex-row shadow-2xl group"
              >
                <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                  <img 
                    src="/images/service-cleaning-ac.webp" 
                    alt="Cuci AC Indoor & Outdoor" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-transparent to-transparent hidden md:block" />
                </div>
                <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-sky-500 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8">BEST SELLER</div>
                  <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Cuci AC Indoor & Outdoor</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                    Membersihkan unit secara menyeluruh agar AC kembali dingin, hemat energi, dan udara lebih sehat.
                  </p>
                  <button className="flex items-center gap-3 text-sky-400 font-black text-sm uppercase tracking-widest hover:gap-5 transition-all group/btn">
                    Konsultasi layanan
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>

              {/* Secondary Services Grid */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {[
                  { title: "Isi Freon", desc: "Pengecekan dan penambahan freon sesuai standar unit.", icon: Droplets },
                  { title: "Perbaikan AC", desc: "Diagnosa masalah AC kurang dingin, bocor, atau mati total.", icon: Settings },
                  { title: "Bongkar Pasang", desc: "Pemindahan dan instalasi unit dengan pengerjaan rapi.", icon: HardHat },
                  { title: "Maintenance", desc: "Perawatan rutin terjadwal untuk rumah dan bisnis.", icon: Calendar }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeUp}
                    whileHover={{ y: -8 }}
                    className="p-10 bg-slate-50 rounded-[48px] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-sky-100 transition-all group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 mb-8 shadow-sm group-hover:bg-sky-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-bold">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="px-6 py-24 md:py-40 bg-slate-50/50 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 tracking-tighter leading-tight">Mengapa pelanggan memilih Arcticool?</h2>
                
                <motion.div variants={staggerContainer} className="space-y-10">
                  {[
                    "Teknisi menjelaskan kondisi unit sebelum pengerjaan",
                    "Biaya transparan dan dikonfirmasi di awal",
                    "Pengerjaan rapi untuk semua tipe bangunan",
                    "Tersedia garansi pengerjaan 30 hari",
                    "Jadwal fleksibel mengikuti ketersediaan Anda"
                  ].map((point, idx) => (
                    <motion.div 
                      key={idx}
                      variants={fadeUp}
                      className="flex gap-6 group items-center"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-100 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 stroke-[4]" />
                      </div>
                      <p className="text-xl font-black text-slate-700 tracking-tight leading-none">{point}</p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  variants={fadeUp}
                  className="mt-20 relative rounded-[56px] overflow-hidden shadow-2xl border-4 border-white group"
                >
                  <img 
                    src="/images/process-technician-inspection.webp" 
                    alt="Inspeksi Teknisi" 
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-sky-900/10 pointer-events-none" />
                </motion.div>
              </motion.div>

              {/* How We Work Panel */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                className="bg-white p-12 md:p-20 rounded-[80px] border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-50 rounded-bl-[200px] -z-0 transition-transform duration-700 group-hover:scale-110" />
                
                <h3 className="text-4xl font-black text-slate-900 mb-16 relative z-10 tracking-tighter">Prosedur Kerja Kami</h3>
                
                <motion.div variants={staggerContainer} className="space-y-16 relative z-10">
                  {[
                    { step: "01", title: "Konsultasi Keluhan", desc: "Ceritakan masalah AC Anda kepada admin." },
                    { step: "02", title: "Konfirmasi Jadwal", desc: "Tentukan waktu dan lokasi kunjungan teknisi." },
                    { step: "03", title: "Cek Kondisi Unit", desc: "Teknisi melakukan diagnosa awal di lokasi." },
                    { step: "04", title: "Konfirmasi Biaya", desc: "Harga disepakati sebelum pengerjaan dimulai." },
                    { step: "05", title: "Service & Uji Coba", desc: "AC diservice dan diuji sampai dingin kembali." }
                  ].map((item, idx) => (
                    <motion.div key={idx} variants={fadeUp} className="flex gap-10 group/item">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex-shrink-0 w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center font-black text-2xl group-hover/item:bg-sky-600 transition-colors shadow-xl"
                      >
                        {item.step}
                      </motion.div>
                      <div>
                        <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 font-bold text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-[#0b1b2d] py-16 md:py-24 px-6 relative overflow-hidden scroll-mt-[90px]">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none" 
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-10 md:mb-16">
              <SectionHeader 
                light 
                centered
                eyebrow="PAKET & HARGA"
                title="Estimasi Biaya Service AC"
                subtitle="Harga transparan untuk kebutuhan service, cuci, isi freon, dan bongkar pasang AC."
              />
              <motion.div 
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-amber-400 text-sm font-black uppercase tracking-widest"
              >
                <AlertCircle className="w-5 h-5" />
                Biaya final dikonfirmasi teknisi di lokasi
              </motion.div>
            </div>

            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch"
            >
              {/* Card 1 */}
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[40px] flex flex-col hover:border-sky-500/40 transition-all group"
              >
                <div className="mb-8">
                  <span className="text-sky-400 text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">BASIC CARE</span>
                  <h3 className="text-2xl font-black text-white mb-4">Cuci AC Standard</h3>
                  <p className="text-slate-400 text-sm font-medium mb-6">Pembersihan rutin agar AC tetap prima.</p>
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap overflow-hidden">
                    <span className="text-[10px] font-black text-slate-500 uppercase">Mulai</span>
                    <span className="text-[clamp(32px,4vw,48px)] font-black text-white tracking-tighter">Rp 75rb</span>
                    <span className="text-xs font-bold text-slate-500">/unit</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {["Cuci indoor & outdoor", "Pembersihan filter", "Cek aliran air", "Cek kondisi freon"].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                      <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-sky-400 stroke-[4]" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 mb-8 flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-sky-500" />
                  30–45 Menit
                </div>

                <button className="w-full py-4 rounded-2xl border-2 border-white/10 text-white font-black text-sm hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300">
                  Pesan Cuci AC
                </button>
              </motion.div>

              {/* Card 2 - Recommended */}
              <motion.div 
                variants={scaleInSubtle}
                whileHover={{ y: -12 }}
                className="relative bg-white p-8 md:p-10 rounded-[44px] shadow-[0_40px_80px_-20px_rgba(14,165,233,0.25)] z-10 flex flex-col group overflow-hidden border-2 border-sky-100"
              >
                <div className="absolute top-0 right-0 left-0 bg-sky-600 text-white text-[9px] font-black tracking-[0.3em] uppercase text-center py-2.5">
                  PALING DIREKOMENDASIKAN
                </div>

                <div className="mt-8 mb-8">
                  <span className="text-sky-600 text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">FULL SERVICE</span>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Paket Hemat Dingin</h3>
                  <p className="text-slate-500 text-sm font-medium mb-6">Solusi lengkap untuk performa maksimal.</p>
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap overflow-hidden">
                    <span className="text-[10px] font-black text-slate-400 uppercase">Mulai</span>
                    <span className="text-[clamp(40px,5vw,56px)] font-black text-slate-900 tracking-tighter">Rp 195rb</span>
                    <span className="text-xs font-bold text-slate-400">/paket</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {["Cuci indoor & outdoor", "Tambah freon lengkap", "Vakum drainase", "Cek suhu & tekanan", "Garansi 30 Hari"].map((f) => (
                    <div key={f} className="flex items-center gap-4 text-slate-700 text-base font-black tracking-tight">
                      <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-sky-600 stroke-[4]" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-auto bg-sky-50 rounded-2xl p-4 mb-8 flex items-center gap-3 text-sky-700 text-[10px] font-black uppercase tracking-widest">
                  <Star className="w-5 h-5 fill-sky-600 flex-shrink-0" />
                  60–90 Menit
                </div>

                <button className="w-full py-5 rounded-[20px] bg-slate-900 text-white font-black text-lg hover:bg-sky-600 transition-all duration-300 shadow-xl shadow-slate-200 border-b-4 border-black/20">
                  Pesan Paket
                </button>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[40px] flex flex-col hover:border-sky-500/40 transition-all group"
              >
                <div className="mb-8">
                  <span className="text-sky-400 text-[10px] font-black tracking-[0.3em] uppercase mb-4 block">INSTALLATION</span>
                  <h3 className="text-2xl font-black text-white mb-4">Bongkar Pasang</h3>
                  <p className="text-slate-400 text-sm font-medium mb-6">Pengerjaan rapi dan profesional.</p>
                  <div className="flex items-baseline gap-1.5 whitespace-nowrap overflow-hidden">
                    <span className="text-[10px] font-black text-slate-500 uppercase">Mulai</span>
                    <span className="text-[clamp(32px,4vw,48px)] font-black text-white tracking-tighter">Rp 350rb</span>
                    <span className="text-xs font-bold text-slate-500">/unit</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {["Bongkar unit lama", "Instalasi unit baru", "Pemasangan bracket", "Uji coba pendinginan", "Cek kebocoran"].map((f) => (
                    <div key={f} className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                      <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-sky-400 stroke-[4]" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 mb-8 flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-sky-500" />
                  Waktu Menyesuaikan
                </div>

                <button className="w-full py-4 rounded-2xl border-2 border-white/10 text-white font-black text-sm hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300">
                  Pilih Layanan
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-white py-16 md:py-24 px-6 scroll-mt-[90px]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:mb-24">
              <SectionHeader 
                centered
                eyebrow="TESTIMONI PELANGGAN"
                title="Apa Kata Pelanggan Kami?"
                subtitle="Lebih dari 5.000 pelanggan telah mempercayakan perawatan AC rumah, kantor, dan tempat usaha kepada Arcticool."
              />
            </div>

            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                { name: "Rendi Pratama", role: "Pemilik Rumah", loc: "Jakarta Selatan", text: "AC kamar sempat bocor dan kurang dingin. Setelah dicek, teknisi bersihkan indoor-outdoor. Sekarang sudah dingin lagi." },
                { name: "Sari Wijaya", role: "Office Manager", loc: "Tangerang", text: "Saya booking untuk service AC kantor. Tim datang sesuai jadwal, kerja rapi, dan biaya dijelaskan di awal. Sangat profesional." },
                { name: "Budi Santoso", role: "Pengusaha", loc: "Bekasi", text: "Bongkar pasang AC dari rumah lama ke baru, hasilnya sangat rapi dan unit dites dulu sebelum teknisi pulang. Puas sekali." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="bg-slate-50 p-8 md:p-10 rounded-[48px] border border-slate-100 flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex gap-1 mb-8"
                  >
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </motion.div>
                  <p className="text-slate-800 text-lg leading-relaxed font-black tracking-tight italic mb-8 flex-grow">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-5 pt-8 border-t border-slate-200/50">
                    <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-sky-100">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg tracking-tight">{item.name}</div>
                      <div className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">{item.loc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-slate-50 py-16 md:py-24 px-6 scroll-mt-[90px]">
          <div className="max-w-4xl mx-auto">
            <SectionHeader 
              title="Pertanyaan Umum"
              subtitle="Beberapa hal yang sering ditanyakan oleh pelanggan kami mengenai layanan Arcticool."
            />

            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <FAQItem q="Apakah teknisi bisa datang hari yang sama?" a="Ya, kami menyediakan layanan same-day service tergantung ketersediaan jadwal teknisi. Disarankan booking sebelum jam 11:00 pagi." defaultOpen />
              <FAQItem q="Apakah ada garansi setelah service?" a="Kami memberikan garansi pengerjaan selama 30 hari untuk layanan cuci dan perbaikan. Kepuasan Anda adalah prioritas kami." />
              <FAQItem q="Berapa lama proses cuci AC?" a="Proses cuci AC standard biasanya memakan waktu 30-45 menit per unit, tergantung tingkat kekotoran unit." />
              <FAQItem q="Apakah melayani area luar Jakarta?" a="Kami melayani seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dengan tim teknisi tersebar di berbagai wilayah." />
            </motion.div>
          </div>
        </section>

        {/* Final CTA & Contact */}
        <section id="contact" className="px-6 py-16 md:py-24 bg-white overflow-hidden scroll-mt-[90px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInLeft}
              >
                <span className="text-sky-600 text-sm font-black tracking-[0.5em] uppercase mb-10 block">HUBUNGI KAMI</span>
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-12 tracking-tighter leading-none">Butuh Service <br />Hari Ini?</h2>
                <p className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-16 max-w-lg font-medium">
                  Ceritakan masalah AC Anda sekarang. Admin kami akan segera menjadwalkan teknisi terdekat.
                </p>

                <div className="space-y-10">
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-8 group cursor-pointer">
                    <div className="w-20 h-20 rounded-[32px] bg-slate-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1.5">Call/WA</div>
                      <div className="text-3xl font-black text-slate-900 tracking-tight">0812-3456-7890</div>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex items-center gap-8 group cursor-pointer">
                    <div className="w-20 h-20 rounded-[32px] bg-slate-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1.5">Email Support</div>
                      <div className="text-3xl font-black text-slate-900 tracking-tight">halo@arcticool.com</div>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  variants={fadeUp}
                  className="mt-24 overflow-hidden rounded-[64px] shadow-2xl relative group"
                >
                  <img src="/images/cta-service-ac.webp" alt="Tim Arcticool" className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  <div className="absolute inset-0 bg-sky-900/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideInRight}
                className="bg-[#0f172a] p-12 md:p-20 rounded-[80px] shadow-[0_64px_128px_-32px_rgba(15,23,42,0.3)] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-[300px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">Formulir Pemesanan</h3>
                <p className="text-slate-400 text-lg mb-12 font-medium">Isi data di bawah, admin kami akan segera menghubungi Anda untuk konfirmasi.</p>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Nama Lengkap</label>
                      <input type="text" placeholder="Nama Anda" className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-5 text-white focus:border-sky-500 focus:bg-white/10 focus:outline-none transition-all placeholder:text-slate-600 font-bold" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                      <input type="tel" placeholder="0812..." className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-5 text-white focus:border-sky-500 focus:bg-white/10 focus:outline-none transition-all placeholder:text-slate-600 font-bold" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Alamat Lengkap</label>
                    <input type="text" placeholder="Jl. Sudirman No. 1..." className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-5 text-white focus:border-sky-500 focus:bg-white/10 focus:outline-none transition-all placeholder:text-slate-600 font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Keluhan AC</label>
                    <textarea rows={4} placeholder="Jelaskan masalah AC Anda..." className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-8 py-5 text-white focus:border-sky-500 focus:bg-white/10 focus:outline-none transition-all placeholder:text-slate-600 font-bold"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-sky-500 text-white py-7 rounded-[32px] font-black text-2xl hover:bg-sky-400 transition-all shadow-2xl shadow-sky-900/40 mt-10 uppercase tracking-widest border-b-8 border-sky-700"
                  >
                    Kirim Pesanan
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="bg-slate-50 py-24 px-6 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader centered eyebrow="WILAYAH LAYANAN" title="Melayani Seluruh Jabodetabek" />
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
            >
              {["Jakarta Selatan", "Jakarta Timur", "Jakarta Barat", "Jakarta Utara", "Jakarta Pusat", "Tangerang Selatan", "Depok", "Bekasi", "Bogor Kota"].map((area) => (
                <motion.div 
                  key={area}
                  variants={scaleInSubtle}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-10 py-5 rounded-3xl bg-white border border-slate-200 text-slate-900 text-sm font-black hover:border-sky-500 hover:text-sky-600 transition-all cursor-default shadow-sm"
                >
                  {area}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 md:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-24"
          >
            <div>
              <div className="flex items-center mb-10">
                <img 
                  src="/images/logo.webp" 
                  alt="Arcticool Logo" 
                  className="h-12 md:h-14 w-auto object-contain" 
                />
              </div>
              <p className="text-lg leading-relaxed mb-12 font-bold">
                Penyedia jasa service AC profesional dengan teknisi berpengalaman untuk kenyamanan hunian dan bisnis Anda.
              </p>
              <div className="flex gap-5">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <motion.a 
                    key={i} 
                    href="#" 
                    whileHover={{ y: -5, backgroundColor: '#0ea5e9' }}
                    className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/5 transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-12">Layanan Kami</h3>
              <ul className="space-y-6 text-base font-black">
                {["Cuci AC Berkala", "Tambah Freon", "Perbaikan Unit", "Bongkar Pasang", "Instalasi Baru", "Perawatan Kantor"].map((link) => (
                  <li key={link}>
                    <motion.a href="#" whileHover={{ x: 5, color: '#0ea5e9' }} className="flex items-center gap-4 group transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-12">Operasional</h3>
              <ul className="space-y-6 text-base font-black">
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span>Senin - Jumat</span>
                  <span className="text-white">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span>Sabtu</span>
                  <span className="text-white">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center pb-4">
                  <span>Minggu</span>
                  <span className="text-sky-500">Emergency Only</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-12">Kantor</h3>
              <div className="space-y-8 text-base font-black">
                <div className="flex gap-5">
                  <MapPin className="w-6 h-6 text-sky-500 flex-shrink-0" />
                  <p className="leading-relaxed">Kuningan, Jakarta Selatan, <br />DKI Jakarta 12940</p>
                </div>
                <div className="flex gap-5">
                  <Phone className="w-6 h-6 text-sky-500 flex-shrink-0" />
                  <p>0812-3456-7890</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs font-black tracking-widest uppercase opacity-40">
              © 2026 ARCTICOOL. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-10 text-xs font-black tracking-widest uppercase opacity-40">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button with Pulse */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
        }}
        transition={{ delay: 2.5, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-6 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
        />
        <div className="absolute right-full mr-6 bg-white text-slate-900 px-6 py-3 rounded-2xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-slate-100 -translate-x-4 group-hover:translate-x-0">
          Chat Admin Arcticool
        </div>
        <WhatsAppIcon className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
