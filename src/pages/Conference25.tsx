import React, { useState } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { historicalMedia } from '../data/historicalMedia';
import { submitConferenceRegistration } from '../services/firebase';
import { OfficialLetterModal } from '../components/OfficialLetterModal';
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  FileText,
  Calendar,
  MapPin,
  Download,
  UserCheck
} from 'lucide-react';

export const Conference25: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  // UI state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    format: 'inPerson' as 'inPerson' | 'online',
    trackId: 1,
    organization: '',
    position: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  // Smooth scroll
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = t.registration.errors.required;
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = t.registration.errors.email;
    }
    if (!formData.phone.trim()) errors.phone = t.registration.errors.phone;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const selectedTrack = t.tracks.items.find((tr) => tr.id === formData.trackId);
      const res = await submitConferenceRegistration({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        format: formData.format,
        trackId: formData.trackId,
        trackTitle: selectedTrack?.title || `Track ${formData.trackId}`,
        organization: formData.organization,
        position: formData.position,
        language
      });
      setSubmittedId(res.id);
    } catch (err) {
      console.error('Registration failed:', err);
      alert('Ошибка отправки. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1E3A8A] font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 1. PINNED HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/95 border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Dynamic Brand & Micro-badge */}
          <div className="flex items-center gap-4">
            <a href="#hero" className="flex items-center gap-3 group">
              <span className="text-[22px] font-black tracking-tighter text-[#1E3A8A] uppercase group-hover:text-blue-700 transition">
                {t.header.orgName}
              </span>
            </a>
            <div className="hidden sm:inline-block px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-[#1E3A8A] text-white">
              {t.header.anniversaryBadge}
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#1E3A8A]/85">
            <button onClick={() => scrollTo('hero')} className="hover:text-blue-600 transition cursor-pointer">
              {t.header.nav.hero}
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-blue-600 transition cursor-pointer">
              {t.header.nav.about}
            </button>
            <button onClick={() => scrollTo('tracks')} className="hover:text-blue-600 transition cursor-pointer">
              {t.header.nav.tracks}
            </button>
            <button onClick={() => scrollTo('speakers')} className="hover:text-blue-600 transition cursor-pointer">
              {t.header.nav.speakers}
            </button>
            <button onClick={() => scrollTo('archive')} className="hover:text-blue-600 transition cursor-pointer">
              {t.header.nav.archive}
            </button>
            <button onClick={() => scrollTo('register')} className="hover:text-blue-600 transition cursor-pointer">
              {t.header.nav.register}
            </button>
          </nav>

          {/* Right: Language Switcher & Blue CTA */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Language Segmented Control (KY / RU / EN) */}
            <div className="flex items-center border border-zinc-300 p-0.5 bg-zinc-100 font-mono text-xs font-bold">
              {(['ky', 'ru', 'en'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 uppercase transition cursor-pointer ${
                    language === lang
                      ? 'bg-[#1E3A8A] text-white'
                      : 'text-zinc-600 hover:text-[#1E3A8A] hover:bg-zinc-200'
                  }`}
                  aria-label={`Switch language to ${lang.toUpperCase()}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Registration Button in Brighter Navy Blue */}
            <button
              onClick={() => scrollTo('register')}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-[#1E3A8A] hover:bg-[#172554] text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm"
            >
              {t.header.registerBtn}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#1E3A8A] hover:text-blue-600 transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Minimalist Overlay */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-20 bottom-0 bg-white border-b border-zinc-200 p-8 flex flex-col justify-between z-40">
            <div className="space-y-6 pt-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#1E3A8A] block font-bold">
                {t.header.anniversaryBadge}
              </span>
              <nav className="flex flex-col space-y-5 text-2xl font-black uppercase tracking-tight text-[#1E3A8A]">
                <button
                  onClick={() => scrollTo('hero')}
                  className="text-left hover:text-blue-600 transition border-b border-zinc-100 pb-3"
                >
                  {t.header.nav.hero}
                </button>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-left hover:text-blue-600 transition border-b border-zinc-100 pb-3"
                >
                  {t.header.nav.about}
                </button>
                <button
                  onClick={() => scrollTo('tracks')}
                  className="text-left hover:text-blue-600 transition border-b border-zinc-100 pb-3"
                >
                  {t.header.nav.tracks}
                </button>
                <button
                  onClick={() => scrollTo('speakers')}
                  className="text-left hover:text-blue-600 transition border-b border-zinc-100 pb-3"
                >
                  {t.header.nav.speakers}
                </button>
                <button
                  onClick={() => scrollTo('archive')}
                  className="text-left hover:text-blue-600 transition border-b border-zinc-100 pb-3"
                >
                  {t.header.nav.archive}
                </button>
                <button
                  onClick={() => scrollTo('register')}
                  className="text-left hover:text-blue-600 transition border-b border-zinc-100 pb-3"
                >
                  {t.header.nav.register}
                </button>
              </nav>
            </div>

            <div className="pt-8">
              <button
                onClick={() => scrollTo('register')}
                className="w-full py-4 bg-[#1E3A8A] text-white text-sm font-bold uppercase tracking-wider text-center block"
              >
                {t.header.registerBtn}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO BANNER (Full-Bleed Strip — Completely Centered Content) */}
      <section id="hero" className="relative pt-20 min-h-[92vh] flex items-center justify-center bg-[#1E3A8A] border-b border-blue-950 overflow-hidden text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${historicalMedia.heroExamHall})` }}
        />
        <div className="absolute inset-0 bg-[#172554]/90 backdrop-contrast-125" />

        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Top Tagline / Title Kicker */}
            <div className="inline-block px-4 py-2 bg-[#1E3A8A] border border-white/30 text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase mb-8 max-w-3xl leading-relaxed text-center shadow-sm">
              {t.hero.tagline}
            </div>

            {/* Monumental Headline (70px) — Centered */}
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-white uppercase leading-[1.05] mb-4 text-center">
              {t.hero.title}
            </h1>

            {/* Sub-headline / Slogan — Centered */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-200 tracking-normal mb-8 text-center">
              {t.hero.titleAccent}
            </div>

            {/* Metadata Bar — Centered Container */}
            <div className="border border-white/20 bg-white/10 backdrop-blur-sm p-4 sm:p-6 mb-8 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono tracking-wider text-white text-center sm:text-left justify-center mx-auto">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <Calendar className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="uppercase font-semibold">{t.hero.dateMeta}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <MapPin className="w-4 h-4 text-blue-300 shrink-0" />
                <span className="uppercase font-semibold">{t.hero.locationMeta}</span>
              </div>
            </div>

            {/* Supporting Organizers Statement — Centered */}
            <p className="text-sm sm:text-base text-blue-100 max-w-3xl leading-relaxed mb-10 font-normal text-center mx-auto">
              {t.hero.organizers}
            </p>

            {/* Action Buttons — Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto mx-auto">
              <button
                onClick={() => scrollTo('register')}
                className="w-full sm:w-auto px-8 py-4 bg-[#1E3A8A] hover:bg-[#172554] border border-white/40 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>{t.hero.btnApply}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsLetterModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 border border-white hover:bg-white hover:text-[#1E3A8A] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{t.hero.btnLetter}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONCEPT & AGENDA (White Strip — #FFFFFF) */}
      <section id="about" className="py-24 sm:py-32 bg-white border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          {/* Section Kicker */}
          <span className="font-mono text-xs font-bold tracking-widest text-[#1E3A8A] uppercase block mb-3">
            {t.concept.tag}
          </span>

          {/* Section Title (70px) */}
          <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-[#1E3A8A] uppercase leading-none mb-6">
            {t.concept.title}
          </h2>

          <div className="w-full h-px bg-zinc-200 mb-8" />

          {/* Subtitle & Timestamp */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E3A8A] tracking-tight max-w-2xl">
              {t.concept.subtitle}
            </h3>
            <div className="font-mono text-xs font-bold uppercase text-[#1E3A8A] tracking-widest shrink-0">
              {t.concept.timestamp}
            </div>
          </div>

          {/* Two-Column Text Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-sm sm:text-base text-zinc-700 leading-relaxed">
            <div className="border-t lg:border-t-0 pt-6 lg:pt-0">
              <p>{t.concept.col1}</p>
            </div>
            <div className="border-t lg:border-t-0 lg:border-l lg:border-zinc-200 pt-6 lg:pt-0 lg:pl-16">
              <p>{t.concept.col2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INSTITUTE BLOCK (Split Layout Strip) */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <span className="font-mono text-xs font-bold tracking-widest text-[#1E3A8A] uppercase block mb-3">
            {t.institute.tag}
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-[#1E3A8A] uppercase leading-none mb-4">
                {t.institute.title}
              </h2>
              <div className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 mb-8">
                {t.institute.subtitle}
              </div>

              <div className="space-y-6 text-sm sm:text-base text-zinc-800 leading-relaxed">
                <p className="font-semibold text-lg text-[#1E3A8A]">
                  {t.institute.lead}
                </p>
                <p>{t.institute.body1}</p>
                <p>{t.institute.body2}</p>
              </div>

              {/* Quotation Box */}
              <div className="mt-10 p-6 sm:p-8 bg-white border border-zinc-300 border-l-4 border-l-[#1E3A8A]">
                <p className="text-base sm:text-lg font-bold text-[#1E3A8A] italic mb-3">
                  {t.institute.quote}
                </p>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block">
                  — {t.institute.quoteAuthor}
                </span>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="border border-zinc-300 bg-white p-2 shadow-sm">
                <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-200 relative">
                  <img
                    src={historicalMedia.ceatmFounding}
                    alt="CEATM Foundation Archive"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#1E3A8A] text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1">
                    {t.header.orgName} • Архив
                  </div>
                </div>
                <div className="p-3 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                  2002–2026: {t.header.anniversaryBadge}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY METRICS STRIP (Full-Bleed 4 Columns) */}
      <section className="bg-white border-b border-zinc-200">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200">
          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E3A8A] tracking-tight mb-2">
              {t.metrics.item1Val}
            </span>
            <div className="w-8 h-1 bg-[#1E3A8A] mb-4" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              {t.metrics.item1Label}
            </span>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1E3A8A] tracking-tight mb-2">
              {t.metrics.item2Val}
            </span>
            <div className="w-8 h-1 bg-[#1E3A8A] mb-4" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              {t.metrics.item2Label}
            </span>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E3A8A] tracking-tight mb-2">
              {t.metrics.item3Val}
            </span>
            <div className="w-8 h-1 bg-[#1E3A8A] mb-4" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              {t.metrics.item3Label}
            </span>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-between">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1E3A8A] tracking-tight mb-2">
              {t.metrics.item4Val}
            </span>
            <div className="w-8 h-1 bg-[#1E3A8A] mb-4" />
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-600">
              {t.metrics.item4Label}
            </span>
          </div>
        </div>
      </section>

      {/* 6. SPEAKERS SECTION — 3 BLANK SLOTS (Navy Blue — #1E3A8A) */}
      <section id="speakers" className="py-24 sm:py-32 bg-[#1E3A8A] text-white border-b border-blue-950">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <span className="font-mono text-xs font-bold tracking-widest text-blue-200 uppercase block mb-3">
            {t.speakers.tag}
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-white uppercase leading-none mb-6">
            {t.speakers.title}
          </h2>

          <div className="w-full h-px bg-white/20 mb-6" />

          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mb-16">
            {t.speakers.subtitle}
          </p>

          {/* Exactly 3 [БЛАНК] Speaker Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-blue-900">
            {t.speakers.items.map((sp) => (
              <div
                key={sp.id}
                className="border-r border-b border-blue-900 p-8 sm:p-10 flex flex-col justify-between bg-[#172554] hover:bg-[#1E40AF] transition"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs uppercase text-blue-300 tracking-widest mb-6">
                    <span>СЛОТ {sp.slotNumber}</span>
                    <span className="px-2 py-0.5 border border-white/20 text-white">БЛАНК</span>
                  </div>

                  {/* Institutional Placeholder Box */}
                  <div className="aspect-[4/3] w-full border border-dashed border-white/20 bg-[#1E3A8A]/50 flex flex-col items-center justify-center p-6 text-center mb-6">
                    <UserCheck className="w-8 h-8 text-blue-300 mb-3" />
                    <span className="font-mono text-xs uppercase tracking-wider text-blue-100 font-bold">
                      {sp.placeholderTitle}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {sp.placeholderTitle}
                  </h3>

                  <p className="text-xs text-blue-100 leading-relaxed">
                    {sp.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 mt-8 text-[11px] font-mono text-blue-300 uppercase tracking-wider">
                  Оргкомитет • 2026
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 9 TRACKS MATRIX STRIP (White Strip) */}
      <section id="tracks" className="py-24 sm:py-32 bg-white border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <span className="font-mono text-xs font-bold tracking-widest text-[#1E3A8A] uppercase block mb-3">
            {t.tracks.tag}
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-[#1E3A8A] uppercase leading-none mb-6">
            {t.tracks.title}
          </h2>

          <div className="w-full h-px bg-zinc-200 mb-6" />

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mb-16">
            {t.tracks.subtitle}
          </p>

          {/* 3x3 Grid of 9 Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-zinc-200">
            {t.tracks.items.map((track) => (
              <div
                key={track.id}
                className="border-r border-b border-zinc-200 p-8 flex flex-col justify-between hover:bg-[#F8FAFC] transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#1E3A8A]">
                      {track.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                      НАПРАВЛЕНИЕ {track.id}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1E3A8A] uppercase tracking-tight mb-3 leading-snug">
                    {track.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {track.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ORGANIZERS & PARTNERS (Navy Blue — #1E3A8A, 3 Official Entities) */}
      <section className="py-24 sm:py-32 bg-[#1E3A8A] text-white border-b border-blue-950">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <span className="font-mono text-xs font-bold tracking-widest text-blue-200 uppercase block mb-3">
            {t.partners.tag}
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-white uppercase leading-none mb-6">
            {t.partners.title}
          </h2>

          <div className="w-full h-px bg-white/20 mb-12" />

          {/* 3 Official Entities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.partners.orgs.map((o, idx) => (
              <div
                key={idx}
                className="border border-white/20 p-8 flex flex-col justify-between bg-[#172554]"
              >
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-300 block mb-4">
                    [ 0{idx + 1} ]
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2 leading-snug">
                    {o.name}
                  </h3>
                </div>
                <div className="pt-6 border-t border-white/10 font-mono text-xs text-blue-200 uppercase tracking-wider">
                  {o.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PARALLAX IMAGE BREAK */}
      <section className="relative h-[440px] flex items-center justify-center overflow-hidden border-b border-blue-950">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${historicalMedia.auditoriumParallax})` }}
        />
        <div className="absolute inset-0 bg-[#172554]/90 backdrop-contrast-125" />

        <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-snug mb-6">
            {t.parallax.quote}
          </p>
          <div className="w-12 h-1 bg-white/40 mx-auto mb-4" />
          <span className="font-mono text-xs uppercase tracking-widest text-blue-200">
            {t.parallax.subquote}
          </span>
        </div>
      </section>

      {/* 10. ARCHIVE SECTION — 3 BLANK SLOTS */}
      <section id="archive" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-zinc-200">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <span className="font-mono text-xs font-bold tracking-widest text-[#1E3A8A] uppercase block mb-3">
            {t.archive.tag}
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-[#1E3A8A] uppercase leading-none mb-6">
            {t.archive.title}
          </h2>

          <div className="w-full h-px bg-zinc-200 mb-6" />

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mb-16">
            {t.archive.subtitle}
          </p>

          {/* Exactly 3 [БЛАНК] Archive Slots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.archive.items.map((art) => (
              <div
                key={art.id}
                className="border border-zinc-300 bg-white p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-6">
                    <span className="text-sm font-bold text-zinc-500">СЛОТ {art.slotNumber}</span>
                    <span className="px-2 py-0.5 bg-zinc-100 text-zinc-700 uppercase font-bold text-[10px]">
                      БЛАНК
                    </span>
                  </div>

                  <div className="aspect-[16/10] w-full border border-dashed border-zinc-300 bg-zinc-50 mb-6 flex items-center justify-center p-4 text-center">
                    <span className="font-mono text-xs uppercase text-zinc-400 font-bold">
                      [Архивдик материалдар даярдалууда]
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E3A8A] uppercase tracking-tight mb-2">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                    {art.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-400 uppercase">
                  {t.header.orgName} • 25 ЖЫЛ
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. REGISTRATION STRIP (Navy Blue — #1E3A8A) */}
      <section id="register" className="py-24 sm:py-32 bg-[#1E3A8A] text-white border-b border-blue-950">
        <div className="w-full px-4 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-xs font-bold tracking-widest text-blue-200 uppercase block mb-3">
              {t.registration.tag}
            </span>

            <h2 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight text-white uppercase leading-none mb-6">
              {t.registration.title}
            </h2>

            <div className="w-full h-px bg-white/20 mb-6" />

            <p className="text-sm sm:text-base text-blue-100 mb-12">
              {t.registration.subtitle}
            </p>

            <div className="border border-white/20 bg-[#172554] p-6 sm:p-12">
              {submittedId ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 border border-white text-white mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                    {t.registration.successTitle}
                  </h3>
                  <p className="text-blue-100 text-sm max-w-md mx-auto">
                    {t.registration.successMessage}
                  </p>
                  <div className="inline-block p-4 border border-white/20 bg-black/40 font-mono text-sm">
                    <span className="text-zinc-300 block text-xs uppercase mb-1">
                      {t.registration.regIdLabel}
                    </span>
                    <span className="text-white font-bold text-lg">{submittedId}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setSubmittedId(null);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          format: 'inPerson',
                          trackId: 1,
                          organization: '',
                          position: ''
                        });
                      }}
                      className="px-6 py-3 bg-white text-[#1E3A8A] text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition cursor-pointer"
                    >
                      {t.registration.newRegBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.fullName} *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={t.registration.fields.fullNamePlaceholder}
                        className={`w-full bg-[#0F172A] border ${
                          formErrors.fullName ? 'border-red-400' : 'border-white/20'
                        } px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono`}
                      />
                      {formErrors.fullName && (
                        <span className="text-xs text-red-400 font-mono mt-1 block">
                          {formErrors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.email} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.registration.fields.emailPlaceholder}
                        className={`w-full bg-[#0F172A] border ${
                          formErrors.email ? 'border-red-400' : 'border-white/20'
                        } px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono`}
                      />
                      {formErrors.email && (
                        <span className="text-xs text-red-400 font-mono mt-1 block">
                          {formErrors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.phone} *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.registration.fields.phonePlaceholder}
                        className={`w-full bg-[#0F172A] border ${
                          formErrors.phone ? 'border-red-400' : 'border-white/20'
                        } px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono`}
                      />
                      {formErrors.phone && (
                        <span className="text-xs text-red-400 font-mono mt-1 block">
                          {formErrors.phone}
                        </span>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.organization}
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder={t.registration.fields.organizationPlaceholder}
                        className="w-full bg-[#0F172A] border border-white/20 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono"
                      />
                    </div>

                    {/* Position */}
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.position}
                      </label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder={t.registration.fields.positionPlaceholder}
                        className="w-full bg-[#0F172A] border border-white/20 px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono"
                      />
                    </div>

                    {/* Format */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.format}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label
                          className={`border p-4 flex items-center gap-3 cursor-pointer transition ${
                            formData.format === 'inPerson'
                              ? 'border-white bg-white/20 text-white font-bold'
                              : 'border-white/20 bg-[#0F172A] text-blue-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name="fmt"
                            checked={formData.format === 'inPerson'}
                            onChange={() => setFormData({ ...formData, format: 'inPerson' })}
                            className="text-[#1E3A8A]"
                          />
                          <span className="font-mono text-xs uppercase">
                            {t.registration.fields.formatInPerson}
                          </span>
                        </label>
                        <label
                          className={`border p-4 flex items-center gap-3 cursor-pointer transition ${
                            formData.format === 'online'
                              ? 'border-white bg-white/20 text-white font-bold'
                              : 'border-white/20 bg-[#0F172A] text-blue-200'
                          }`}
                        >
                          <input
                            type="radio"
                            name="fmt"
                            checked={formData.format === 'online'}
                            onChange={() => setFormData({ ...formData, format: 'online' })}
                            className="text-[#1E3A8A]"
                          />
                          <span className="font-mono text-xs uppercase">
                            {t.registration.fields.formatOnline}
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Track Selection */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-blue-200 mb-2">
                        {t.registration.fields.track} *
                      </label>
                      <select
                        value={formData.trackId}
                        onChange={(e) => setFormData({ ...formData, trackId: Number(e.target.value) })}
                        className="w-full bg-[#0F172A] border border-white/20 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white font-mono"
                      >
                        {t.tracks.items.map((tr) => (
                          <option key={tr.id} value={tr.id}>
                            {tr.number}. {tr.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-white hover:bg-zinc-200 disabled:bg-zinc-700 text-[#1E3A8A] text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>{isSubmitting ? t.registration.submittingBtn : t.registration.submitBtn}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-[10px] text-blue-300 uppercase tracking-widest text-center block mt-3">
                      [ Firestore: conferenceRegistrations • {t.header.orgName} ]
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. DEEP NAVY FOOTER (#172554) */}
      <footer className="bg-[#172554] text-white border-t border-blue-950">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-900 border-b border-blue-900">
          <div className="p-8 sm:p-12">
            <span className="text-xl font-black uppercase tracking-tight text-white block mb-4">
              {t.header.orgName}
            </span>
            <p className="text-xs text-blue-100 leading-relaxed mb-6">
              {t.footer.brandDesc}
            </p>
            <div className="inline-block px-2.5 py-1 bg-white/10 font-mono text-[10px] uppercase tracking-widest text-blue-200">
              2002 — 2026: {t.header.anniversaryBadge}
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-300 block mb-4">
              {t.footer.col1Title}
            </span>
            <p className="text-sm text-white font-semibold mb-2">
              {t.footer.address}
            </p>
            <p className="text-xs text-blue-200 leading-relaxed">
              Конгресс-холл (Бишкек)
            </p>
          </div>

          <div className="p-8 sm:p-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-300 block mb-4">
              {t.footer.col2Title}
            </span>
            <div className="space-y-1.5 font-mono text-xs text-white">
              {t.footer.phones.map((p, idx) => (
                <a key={idx} href={`tel:${p.replace(/\s+/g, '')}`} className="block hover:underline">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-300 block mb-4">
              {t.footer.col3Title}
            </span>
            <a
              href={`mailto:${t.footer.email}`}
              className="font-mono text-xs text-white hover:underline block mb-6"
            >
              {t.footer.email}
            </a>
            <button
              onClick={() => setIsLetterModalOpen(true)}
              className="w-full py-2.5 px-3 border border-white/30 hover:border-white text-white font-mono text-[11px] font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-between"
            >
              <span>{t.hero.btnLetter}</span>
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-blue-300">
          <div>{t.footer.copyright}</div>
          <div>
            <button onClick={() => scrollTo('hero')} className="hover:text-white transition cursor-pointer uppercase">
              ↑ ВЕРХ
            </button>
          </div>
        </div>
      </footer>

      {/* Official Letter Modal */}
      <OfficialLetterModal
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
      />
    </div>
  );
};
