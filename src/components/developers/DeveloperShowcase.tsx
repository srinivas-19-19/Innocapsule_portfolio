import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Sparkles,
  FolderGit2,
  Briefcase,
  Send,
  MapPin,
  Mail,
  Globe2,
  Download,
  ArrowRight,
  Mouse,
  ArrowLeft,
} from 'lucide-react'
import { developersData, type DeveloperProfile } from '../../data/developers'

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
)

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const TwitterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

interface DeveloperShowcaseProps {
  initialDeveloper?: 'founder' | 'co-founder'
  onBackToHome?: () => void
}

export const DeveloperShowcase: React.FC<DeveloperShowcaseProps> = ({
  initialDeveloper = 'founder',
  onBackToHome,
}) => {
  const [selectedId, setSelectedId] = useState<'founder' | 'co-founder'>(initialDeveloper)
  const [activeSubTab, setActiveSubTab] = useState('About')
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const dev: DeveloperProfile = developersData[selectedId]

  const subNavItems = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact']

  return (
    <div className="relative w-full min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Bar: Developer Switcher & Return to Home */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-[#FF4500] dark:text-neutral-400 dark:hover:text-[#FF4500] transition-colors py-1.5 px-3 rounded-full bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to InnoCapsule
          </button>
        )}

        {/* Dual Developer Switcher Pill */}
        <div className="inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] backdrop-blur-md shadow-sm">
          <button
            type="button"
            onClick={() => setSelectedId('founder')}
            className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
              selectedId === 'founder'
                ? 'text-white'
                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
            }`}
          >
            {selectedId === 'founder' && (
              <motion.div
                layoutId="devActivePill"
                className="absolute inset-0 rounded-full bg-[#FF4500] shadow-[0_2px_12px_rgba(255,69,0,0.4)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              Nand Kishore (Me)
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedId('co-founder')}
            className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
              selectedId === 'co-founder'
                ? 'text-white'
                : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
            }`}
          >
            {selectedId === 'co-founder' && (
              <motion.div
                layoutId="devActivePill"
                className="absolute inset-0 rounded-full bg-[#FF4500] shadow-[0_2px_12px_rgba(255,69,0,0.4)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              My Friend (Co-Founder)
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ========================================================= */}
          {/* 1. HERO SECTION WITH 3D AVATAR & PERSPECTIVE GRID         */}
          {/* ========================================================= */}
          <div className="relative rounded-3xl overflow-hidden bg-white/70 dark:bg-[#0F131A]/80 border border-black/[0.06] dark:border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] mb-8">
            {/* 3D Perspective Grid Background */}
            <div className="absolute inset-0 bg-perspective-grid opacity-60 dark:opacity-30 pointer-events-none" />

            {/* Giant Background Typography Watermark */}
            <div className="absolute inset-x-0 top-10 flex flex-col items-center justify-center select-none pointer-events-none opacity-15 dark:opacity-10 z-0">
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-neutral-800 dark:text-white">
                I'M BORN TO
              </span>
              <span
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-widest text-transparent"
                style={{
                  WebkitTextStroke: '2px #FF4500',
                }}
              >
                INNOVATE
              </span>
            </div>

            {/* Main 3-Column Hero Composition */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-8 lg:p-12 min-h-[460px]">
              {/* Left Column: Key Stats & Social Links */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#FF4500] tracking-tight">
                      {dev.stats.experience}
                    </div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {dev.stats.experienceLabel}
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#FF4500] tracking-tight">
                      {dev.stats.projects}
                    </div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {dev.stats.projectsLabel}
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#FF4500] tracking-tight">
                      {dev.stats.drive}
                    </div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {dev.stats.driveLabel}
                    </div>
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-[#FF4500] tracking-tight">
                      {dev.stats.satisfaction}
                    </div>
                    <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {dev.stats.satisfactionLabel}
                    </div>
                  </div>
                </div>

                {/* Social Icon Pills */}
                <div className="flex items-center gap-2 pt-2">
                  <a
                    href={dev.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] hover:scale-110 transition-all border border-black/[0.06] dark:border-white/[0.08]"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={dev.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] hover:scale-110 transition-all border border-black/[0.06] dark:border-white/[0.08]"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={dev.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] hover:scale-110 transition-all border border-black/[0.06] dark:border-white/[0.08]"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={dev.socials.website}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300 hover:text-[#FF4500] dark:hover:text-[#FF4500] hover:scale-110 transition-all border border-black/[0.06] dark:border-white/[0.08]"
                    aria-label="Website"
                  >
                    <Globe2 className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Center Column: 3D Character Avatar & Floating Badge */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center py-4 relative">
                <motion.div
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="relative group cursor-pointer"
                >
                  {/* Subtle ambient backglow */}
                  <div className="absolute -inset-4 rounded-full bg-[#FF4500]/15 dark:bg-[#FF4500]/25 blur-2xl pointer-events-none" />

                  {/* Avatar Frame */}
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-gradient-to-b from-white/30 to-black/5 dark:from-white/10 dark:to-black/30 border border-black/[0.08] dark:border-white/[0.1] shadow-2xl">
                    <img
                      src={dev.avatar}
                      alt={dev.name}
                      onError={(e) => {
                        // Fallback to original image if 3D not found
                        const target = e.target as HTMLImageElement
                        if (target.src !== dev.fallbackAvatar) {
                          target.src = dev.fallbackAvatar
                        }
                      }}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out select-none"
                    />
                  </div>

                  {/* Floating Pill Badge: ▶ [Name] */}
                  <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white dark:bg-[#1A202C] text-[#111827] dark:text-white border border-black/[0.08] dark:border-white/[0.12] shadow-lg flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold z-20"
                  >
                    <span className="text-[#FF4500] text-[10px]">▶</span>
                    <span>{dev.badgeText}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column: Name, Subtitle, Bio, Actions, Quote */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 text-left">
                <div>
                  {/* Handwritten Signature Script Name */}
                  <h1 className="font-signature text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white flex items-center gap-2 leading-tight">
                    {dev.signatureName}
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4500] inline-block -mt-2" />
                  </h1>

                  {/* Subtitle */}
                  <div className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-300 mt-1">
                    {dev.role}
                  </div>

                  {/* Bio Paragraph */}
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                    {dev.bio}
                  </p>
                </div>

                {/* Call-to-action buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setContactModalOpen(true)}
                    type="button"
                    className="px-5 py-2 rounded-full bg-[#FF4500] hover:bg-[#E03E00] text-white text-xs font-bold shadow-[0_2px_12px_rgba(255,69,0,0.35)] hover:shadow-[0_4px_20px_rgba(255,69,0,0.5)] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    Hire Me <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={dev.socials.website}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-neutral-800 dark:text-neutral-200 border border-black/[0.08] dark:border-white/[0.12] text-xs font-semibold transition-all flex items-center gap-2"
                  >
                    Download CV <Download className="w-3.5 h-3.5 text-neutral-500" />
                  </a>
                </div>

                {/* Freelance Availability Badge */}
                <div className="flex items-center gap-2 pt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>{dev.availability}</span>
                </div>

                {/* Handwritten Quote */}
                <div className="pt-2">
                  <p className="font-signature text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 leading-none">
                    "{dev.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. ANGLED ORANGE MARQUEE RIBBON                          */}
          {/* ========================================================= */}
          <div className="relative w-full overflow-hidden my-10 py-3 sm:py-3.5 bg-[#FF4500] text-white font-extrabold uppercase text-xs sm:text-sm tracking-widest -rotate-1 shadow-lg shadow-[#FF4500]/25 rounded-xl select-none">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
              <span className="flex items-center gap-6">
                <span>✦ CREATIVE CODE</span>
                <span>✦ FULLSTACK DEVELOPER</span>
                <span>✦ WEB DESIGNER</span>
                <span>✦ ANIMATION SPECIALIST</span>
                <span>✦ UI/UX INNOVATION</span>
                <span>✦ CLEAN ARCHITECTURE</span>
              </span>
              <span className="flex items-center gap-6" aria-hidden="true">
                <span>✦ CREATIVE CODE</span>
                <span>✦ FULLSTACK DEVELOPER</span>
                <span>✦ WEB DESIGNER</span>
                <span>✦ ANIMATION SPECIALIST</span>
                <span>✦ UI/UX INNOVATION</span>
                <span>✦ CLEAN ARCHITECTURE</span>
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. SUB-NAVIGATION PILL BAR & SCROLL INDICATOR             */}
          {/* ========================================================= */}
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="inline-flex p-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-md overflow-x-auto max-w-full">
              {subNavItems.map((tab) => {
                const isActive = activeSubTab === tab
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveSubTab(tab)}
                    className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="subTabPill"
                        className="absolute inset-0 rounded-full bg-[#111827] dark:bg-white/20 shadow-sm"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                )
              })}
            </div>

            {/* Scroll Down Mouse Graphic */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-400 dark:text-neutral-500">
              <span>Scroll Down</span>
              <Mouse className="w-4 h-4 animate-bounce text-neutral-400" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* 4. BENTO GRID DASHBOARD CARDS                             */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            {/* CARD 1: About Me (Col 1-3) */}
            <div className="lg:col-span-3 rounded-2xl p-6 bg-white dark:bg-[#121620] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                    <User className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                    About Me
                  </h3>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {dev.about.bio}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-black/[0.05] dark:border-white/[0.06] text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF4500] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400">Location</div>
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">{dev.about.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF4500] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400">Email</div>
                    <a
                      href={`mailto:${dev.about.email}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 hover:text-[#FF4500] transition-colors break-all"
                    >
                      {dev.about.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#FF4500] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-400">Languages</div>
                    <div className="font-medium text-neutral-800 dark:text-neutral-200">{dev.about.languages}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: My Skills & Services I Offer (Col 4-6) */}
            <div className="lg:col-span-3 rounded-2xl p-6 bg-white dark:bg-[#121620] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between space-y-6">
              {/* Part A: My Skills */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                      My Skills
                    </h3>
                  </div>
                  <span className="text-[10px] text-neutral-400">Always learning</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 text-[11px] font-medium border border-black/[0.04] dark:border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Part B: Services I Offer */}
              <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                      Services I Offer
                    </h3>
                  </div>
                  <span className="text-[10px] text-neutral-400">End-to-end solutions</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {dev.services.map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-md bg-[#FF4500]/10 text-[#FF4500] dark:text-[#FF6B35] text-[11px] font-semibold"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 3: Featured Projects (Col 7-9) */}
            <div className="lg:col-span-3 rounded-2xl p-6 bg-white dark:bg-[#121620] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                      Featured Projects
                    </h3>
                  </div>
                  <a
                    href="#work"
                    onClick={onBackToHome}
                    className="text-[11px] font-semibold text-[#FF4500] hover:underline flex items-center gap-1"
                  >
                    View All →
                  </a>
                </div>

                <div className="space-y-4">
                  {dev.projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors group cursor-pointer"
                    >
                      {/* Project Thumbnail */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0 border border-black/[0.08] dark:border-white/[0.1]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs text-neutral-900 dark:text-white truncate group-hover:text-[#FF4500] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-0.5">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 4: Experience & Let's Work Together (Col 10-12) */}
            <div className="lg:col-span-3 flex flex-col gap-5 justify-between">
              {/* Part A: Experience Timeline */}
              <div className="rounded-2xl p-6 bg-white dark:bg-[#121620] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                    Experience
                  </h3>
                </div>

                <div className="space-y-3.5 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-black/[0.06] dark:before:bg-white/[0.08]">
                  {dev.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-6">
                      <span className="absolute left-1.5 top-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4500] ring-4 ring-white dark:ring-[#121620]" />
                      <div className="text-[10px] font-mono text-neutral-400">
                        {exp.period}
                      </div>
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">
                        {exp.role}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {exp.company}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part B: Let's Work Together Banner Card */}
              <div
                onClick={() => setContactModalOpen(true)}
                className="rounded-2xl p-5 bg-[#121620] text-white border border-white/[0.1] shadow-xl flex items-center justify-between gap-4 cursor-pointer group hover:border-[#FF4500]/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#FF4500]/20 flex items-center justify-center text-[#FF4500] shrink-0 mt-0.5">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white group-hover:text-[#FF4500] transition-colors">
                      Let's Work Together
                    </h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Have a project in mind? Let's discuss!
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#FF4500] group-hover:bg-[#E03E00] flex items-center justify-center text-white shrink-0 transition-transform group-hover:translate-x-0.5 shadow-md shadow-[#FF4500]/30">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Quick Contact Modal */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white dark:bg-[#161B26] rounded-3xl p-6 sm:p-8 border border-black/[0.08] dark:border-white/[0.12] shadow-2xl relative"
            >
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                Let's Build Together
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
                Direct communication with {dev.name} ({dev.role}).
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${dev.about.email}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#FF4500] hover:bg-[#E03E00] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#FF4500]/25 transition-all"
                >
                  <Mail className="w-4 h-4" /> Send Email to {dev.about.email}
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={dev.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#FF4500]" /> LinkedIn
                  </a>
                  <a
                    href={dev.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 border border-black/[0.06] dark:border-white/[0.08]"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-[#FF4500]" /> GitHub
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="mt-6 w-full py-2 text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
