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
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

function FAQItem({ q, a, defaultOpen = false }: { q: string, a: string, defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div 
      className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
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
            <div className="px-8 pb-8 text-slate-500 leading-relaxed">
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
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Arcticool
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="bg-[#22d3ee] hover:bg-[#06b6d4] text-white px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-cyan-100 group">
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <div className="pt-4 flex flex-col gap-4">
                  <button className="w-full bg-[#0f172a] text-white py-3 rounded-lg font-bold">Book Now</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative px-6 py-12 md:py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold tracking-wide mb-6 uppercase">
                Teknisi Terpercaya
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
                Jasa Service AC Profesional, 
                <span className="text-[#0284c7] block mt-2">Hasil Bersih & Dingin Maksimal</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Kembalikan kesejukan ruangan Anda dengan layanan teknik AC bersertifikat. 
                Transparan, bergaransi, dan dikerjakan oleh ahli berpengalaman.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button className="bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  Lihat Layanan
                </button>
                <button className="bg-[#22d3ee] hover:bg-[#06b6d4] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-100">
                  <MessageSquare className="w-5 h-5" />
                  Hubungi WhatsApp
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 border-t border-slate-100 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm font-medium">
                  Dipercaya oleh <span className="font-bold text-slate-900">12.000+</span> Pelanggan di Jakarta
                </p>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200" 
                  alt="AC Technician" 
                  className="w-full h-full object-cover aspect-[4/5] lg:aspect-[4/5]"
                />
              </div>

              {/* Stats Card Overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-10 -left-6 md:-left-12 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[220px]"
              >
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  <Star className="w-6 h-6 fill-sky-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">5.000+</div>
                  <div className="text-xs text-slate-500 font-medium">Unit Ditangani</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-12 md:py-20 bg-white border-t border-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Profesional</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Teknisi bersertifikat dan terlatih secara formal.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Transparan</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Harga sesuai pricelist, tanpa biaya tersembunyi.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Bergaransi</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Garansi pengerjaan 30 hari untuk kepuasan Anda.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-all">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Respon Cepat</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Kunjungan teknisi di hari yang sama saat order.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Layanan Kami) */}
        <section id="services" className="px-6 py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-[#0284c7] text-xs font-bold tracking-widest uppercase mb-3 block">
                  Layanan Kami
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-lg">
                  Solusi Lengkap Untuk Semua Masalah AC Anda
                </h2>
              </div>
              <a href="#" className="flex items-center gap-2 text-slate-900 font-bold hover:text-sky-600 transition-colors group">
                Lihat Semua Layanan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured Service Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="lg:col-span-1 bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="relative h-64 bg-sky-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=800" 
                    alt="Cleaning AC" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">Cuci AC Reguler</h3>
                    <span className="px-3 py-1 bg-sky-100 text-sky-700 text-[10px] font-bold uppercase rounded-full">
                      Terpopuler
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    Pembersihan unit indoor dan outdoor secara menyeluruh untuk udara yang lebih sehat dan hemat listrik.
                  </p>
                  <button className="mt-auto w-full py-4 px-6 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all">
                    Pesan Sekarang
                  </button>
                </div>
              </motion.div>

              {/* Specific Services Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service 1 */}
                <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Perbaikan AC</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Solusi untuk AC tidak dingin, berisik, atau bocor air.
                  </p>
                </motion.div>

                {/* Service 2 */}
                <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Isi/Tambah Freon</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Pengisian gas refrigeran R32, R410A, atau R22 sesuai standar.
                  </p>
                </motion.div>

                {/* Service 3 */}
                <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Bongkar Pasang</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Pemindahan unit AC lama atau pemasangan unit baru yang presisi.
                  </p>
                </motion.div>

                {/* Service 4 */}
                <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 mb-6">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Maintenance</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Kontrak perawatan berkala untuk kantor dan industri.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us & How We Work Section (Mengapa Memilih & Bagaimana Kami Bekerja) */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
              
              {/* Left Column: Why Choose Us */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                  Mengapa Memilih Arcticool?
                </h2>
                
                <div className="space-y-10">
                  {/* Item 1 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22d3ee] flex items-center justify-center text-white mt-1">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Laporan Digital</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Terima laporan hasil kerja dan foto unit sebelum/sesudah via WhatsApp.
                      </p>
                    </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22d3ee] flex items-center justify-center text-white mt-1">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Peralatan Modern</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Menggunakan jet cleaner tekanan tinggi dan alat deteksi freon digital.
                      </p>
                    </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22d3ee] flex items-center justify-center text-white mt-1">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Harga Kompetitif</h3>
                      <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Kualitas premium dengan harga yang tetap masuk akal dan terstandarisasi.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Column: How We Work */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
                  Bagaimana Kami Bekerja?
                </h2>

                <div className="relative space-y-12 py-8">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-14 bottom-8 w-0.5 bg-slate-200 z-0" />

                  {/* Step 1 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-8 relative z-10"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center font-bold text-sm shadow-lg relative z-20">
                      01
                    </div>
                    <div className="relative z-20 bg-white pr-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Pemesanan Online</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Isi formulir atau hubungi kami via WA untuk menentukan jadwal.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-8 relative z-10"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-900 bg-white text-slate-900 flex items-center justify-center font-bold text-sm relative z-20">
                      02
                    </div>
                    <div className="relative z-20 bg-white pr-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Kedatangan Teknisi</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Teknisi datang tepat waktu dengan perlengkapan lengkap dan APD.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-8 relative z-10"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-900 bg-white text-slate-900 flex items-center justify-center font-bold text-sm relative z-20">
                      03
                    </div>
                    <div className="relative z-20 bg-white pr-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Pengerjaan & Quality Control</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Service dilakukan secara teliti diikuti pengetesan suhu dan tekanan.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-8 relative z-10"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-slate-900 bg-white text-slate-900 flex items-center justify-center font-bold text-sm relative z-20">
                      04
                    </div>
                    <div className="relative z-20 bg-white pr-4">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Pembayaran & Garansi</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Pembayaran cashless dan penerimaan nota serta garansi digital.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Operational Areas (Wilayah Operasional) */}
        <section className="bg-slate-50 py-16 px-6 border-y border-slate-100">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">
              Wilayah Operasional
            </span>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Jakarta Selatan", "Jakarta Timur", "Jakarta Barat", "Tangerang Selatan", "Depok", "Bekasi"].map((area) => (
                <div 
                  key={area}
                  className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-400 hover:text-slate-900 transition-all cursor-default shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section (Investasi Untuk Kenyamanan) */}
        <section id="pricing" className="bg-[#0b1b2d] py-32 px-6 relative overflow-hidden">
          {/* Advanced Background Elements */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full -z-0" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full -z-0" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sky-400 text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
              >
                PAKET LAYANAN
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              >
                Investasi Untuk Kenyamanan
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8"
              >
                Pilih layanan terbaik sesuai kebutuhan AC Anda, dengan harga transparan dan tanpa biaya tersembunyi.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-300 text-sm font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Konsultasi gratis sebelum pengerjaan
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
              {/* Card 1: Cuci AC Standard */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-slate-800/40 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] flex flex-col transition-all hover:bg-slate-800/60 hover:border-sky-500/30"
              >
                <div className="mb-8">
                  <div className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">PERAWATAN RUTIN</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Cuci AC Standard</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">Rp 75rb</span>
                    <span className="text-slate-400 text-sm">/unit</span>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Perawatan rutin untuk menjaga AC tetap bersih dan bekerja optimal.
                </p>

                <div className="space-y-4 mb-12 flex-grow">
                  {[
                    "Cuci indoor & outdoor",
                    "Pembersihan filter",
                    "Pemeriksaan freon",
                    "Pemeriksaan aliran air"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-sky-400 stroke-[3]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 mb-8">
                  <div className="text-slate-500 text-xs font-medium italic">
                    "Estimasi pengerjaan 30–45 menit"
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl border-2 border-white/10 text-white font-bold hover:bg-white hover:text-[#0b1b2d] transition-all group-hover:border-white">
                  Pilih Paket
                </button>
              </motion.div>

              {/* Card 2: Paket Hemat Dingin (Recommended) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -12 }}
                className="relative bg-white p-[2px] rounded-[48px] shadow-2xl shadow-sky-500/20 -mt-6 mb-6"
              >
                {/* Gradient Border Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-cyan-600 rounded-[48px] -z-10 animate-pulse opacity-50" />
                
                <div className="bg-white p-10 rounded-[46px] flex flex-col h-full relative overflow-hidden">
                  {/* Recommended Badge */}
                  <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-[10px] font-bold tracking-[0.2em] uppercase text-center py-2.5">
                    PALING POPULER
                  </div>

                  <div className="mt-6 mb-8">
                    <div className="text-sky-600 text-xs font-bold tracking-widest uppercase mb-4">REKOMENDASI</div>
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Paket Hemat Dingin</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-slate-900 tracking-tighter">Rp 195rb</span>
                      <span className="text-slate-400 text-base">/paket</span>
                    </div>
                  </div>

                  <div className="bg-sky-50 rounded-2xl p-4 mb-8 border border-sky-100">
                    <p className="text-sky-900 text-sm font-medium leading-relaxed">
                      Pilihan paling lengkap untuk AC yang kurang dingin dan membutuhkan perawatan menyeluruh.
                    </p>
                  </div>

                  <div className="space-y-4 mb-12 flex-grow">
                    {[
                      "Cuci AC indoor & outdoor",
                      "Tambah freon (semua tipe)",
                      "Vakum saluran drainase",
                      "Pemeriksaan tekanan freon",
                      "Garansi 30 hari",
                      "Pengecekan performa pendinginan"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-sky-600 stroke-[3]" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-100 mb-8">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Estimasi pengerjaan 60–90 menit
                    </div>
                  </div>

                  <button className="w-full py-5 rounded-2xl bg-[#0b1b2d] text-white font-extrabold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                    Pesan Paket
                  </button>
                </div>
              </motion.div>

              {/* Card 3: Bongkar Pasang */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -8 }}
                className="group bg-slate-800/40 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] flex flex-col transition-all hover:bg-slate-800/60 hover:border-sky-500/30"
              >
                <div className="mb-8">
                  <div className="text-sky-400 text-xs font-bold tracking-widest uppercase mb-4">RELOKASI & PASANG</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Bongkar Pasang</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">Rp 350rb</span>
                    <span className="text-slate-400 text-sm">/unit</span>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Layanan pemindahan dan pemasangan ulang AC dengan pengerjaan rapi dan aman.
                </p>

                <div className="space-y-4 mb-12 flex-grow">
                  {[
                    "Pemindahan unit",
                    "Instalasi pipa baru",
                    "Pengecekan fungsi",
                    "Pemasangan bracket",
                    "Uji coba setelah pemasangan"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-sky-400 stroke-[3]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 mb-8">
                  <div className="text-slate-500 text-xs font-medium italic">
                    "Cocok untuk relokasi rumah / kantor"
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl border-2 border-white/10 text-white font-bold hover:bg-white hover:text-[#0b1b2d] transition-all group-hover:border-white">
                  Pilih Paket
                </button>
              </motion.div>
            </div>

            {/* Trust Indicators Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-12"
            >
              {[
                { icon: MessageSquare, label: "Konsultasi Gratis" },
                { icon: ShieldCheck, label: "Teknisi Profesional" },
                { icon: Zap, label: "Pengerjaan Cepat" },
                { icon: Wallet, label: "Harga Transparan" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-300 text-xs font-bold tracking-wider uppercase">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Testimonials Section (Apa Kata Mereka?) */}
        <section className="bg-white py-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Apa Kata Mereka?
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Dipercaya oleh lebih dari 12.000+ pelanggan terbaik kami di seluruh Jabodetabek.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Anwar Hakim",
                  role: "Bapak Rumah Tangga",
                  text: "Teknisinya sangat ramah dan pengerjaannya sangat bersih. AC saya jadi dingin lagi seperti baru beli. Sangat merekomendasikan layanan Arcticool!",
                  image: "1"
                },
                {
                  name: "Siska Amelia",
                  role: "Karyawan Swasta",
                  text: "Sangat puas dengan layanan cuci AC-nya. Laporan digitalnya keren banget, jadi tahu apa saja yang dikerjakan teknisi. Langganan terus!",
                  image: "2"
                },
                {
                  name: "Rendy Wijaya",
                  role: "Wiraswasta",
                  text: "Harga transparan dan tidak ada biaya tambahan yang aneh-aneh. Garansinya juga beneran ada. Terbaik pokoknya!",
                  image: "3"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm"
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-8">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.image}`} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-full bg-slate-100"
                    />
                    <div>
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="text-slate-400 text-sm font-medium">{item.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (Pertanyaan Umum) */}
        <section className="bg-slate-50/50 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
              Pertanyaan Umum
            </h2>

            <div className="space-y-4">
              <FAQItem 
                q="Apakah ada garansi setelah service?" 
                a="Ya, kami memberikan garansi pengerjaan selama 30 hari untuk semua jenis layanan service dan perbaikan." 
                defaultOpen={true}
              />
              <FAQItem 
                q="Apakah teknisi membawa tangga sendiri?" 
                a="Ya, teknisi kami selalu membawa peralatan lengkap termasuk tangga lipat. Anda tidak perlu menyediakan peralatan tambahan apa pun." 
              />
              <FAQItem 
                q="Berapa lama durasi pengerjaan cuci AC?" 
                a="Durasi pengerjaan biasanya memakan waktu sekitar 45-60 menit per unit, tergantung pada tingkat kekotoran dan posisi unit Anda." 
              />
            </div>
          </div>
        </section>

        {/* Contact Section (Hubungi Kami) */}
        <section id="contact" className="px-6 py-20">
          <div className="max-w-7xl mx-auto bg-[#0284c7] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-sky-200">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Siap Untuk Kesejukan Maksimal?
              </h2>
              <p className="text-sky-100 text-lg mb-12 max-w-2xl mx-auto">
                Tim teknisi kami tersedia 24/7 untuk memastikan kenyamanan udara di ruangan Anda. Konsultasikan masalah AC Anda gratis sekarang!
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white text-[#0284c7] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sky-50 transition-all flex items-center justify-center gap-3">
                  <MessageSquare className="w-6 h-6" />
                  Chat WhatsApp
                </button>
                <button className="bg-sky-600 text-white border border-sky-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sky-700 transition-all">
                  Hubungi: 0812-3456-7890
                </button>
              </div>

              <div className="mt-12 pt-12 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-sky-200 text-xs font-bold uppercase mb-2">Email</div>
                  <div className="text-white font-medium">halo@arcticool.com</div>
                </div>
                <div>
                  <div className="text-sky-200 text-xs font-bold uppercase mb-2">Jam Operasional</div>
                  <div className="text-white font-medium">Senin - Minggu: 08:00 - 20:00</div>
                </div>
                <div>
                  <div className="text-sky-200 text-xs font-bold uppercase mb-2">Kantor Pusat</div>
                  <div className="text-white font-medium">Kuningan, Jakarta Selatan</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detailed Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="text-2xl font-bold text-white mb-6">Arcticool</div>
              <p className="text-sm leading-relaxed mb-8">
                Solusi pendingin udara profesional nomor satu di Jakarta. Teknisi ahli, harga transparan, dan hasil yang selalu memuaskan.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-white font-bold mb-6">Layanan Pilihan</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Cuci AC Reguler</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perbaikan AC</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Isi Freon</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bongkar Pasang</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-white font-bold mb-6">Navigasi</h3>
              <ul className="space-y-4 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Semua Layanan</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricelist 2024</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-bold mb-6">Hubungi Kami</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                  <span>Jl. Kuningan No. 12, Kuningan Barat, Jakarta Selatan, 12710</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                  <span>0812-3456-7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-sky-500 shrink-0" />
                  <span>halo@arcticool.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2024 Arcticool Indonesia. Bagian dari PT Kesejukan Abadi.</p>
            <div className="flex gap-6 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white">Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
