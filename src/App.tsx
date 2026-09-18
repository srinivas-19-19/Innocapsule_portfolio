import React, { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/navigation/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Capabilities } from './components/capabilities/Capabilities'
import { FeaturedWork } from './components/projects/FeaturedWork'
import { Process } from './components/process/Process'
import { TechnologyEcosystem } from './components/technology/TechnologyEcosystem'
import { EngineeringPrinciples } from './components/principles/EngineeringPrinciples'
import { Leadership } from './components/team/Leadership'
import { DeveloperShowcase } from './components/developers/DeveloperShowcase'
import { BrandMark } from './components/ui/BrandMark'
import { siteConfig } from './data/site'
import { ArrowUpRight } from 'lucide-react'

export const MainContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'developers'>(() => {
    if (typeof window !== 'undefined') {
      if (
        window.location.hash.includes('developer') ||
        window.location.search.includes('view=developers')
      ) {
        return 'developers'
      }
    }
    return 'home'
  })

  const [selectedDeveloper, setSelectedDeveloper] = useState<'founder' | 'co-founder'>(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash.includes('co-founder') || window.location.hash.includes('friend')) {
        return 'co-founder'
      }
    }
    return 'founder'
  })

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.includes('developer')) {
        setCurrentView('developers')
        if (hash.includes('co-founder') || hash.includes('friend')) {
          setSelectedDeveloper('co-founder')
        } else {
          setSelectedDeveloper('founder')
        }
      } else if (hash === '#hero' || hash === '' || hash === '#about') {
        setCurrentView('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleSelectView = (
    view: 'home' | 'developers',
    developer?: 'founder' | 'co-founder'
  ) => {
    setCurrentView(view)
    if (developer) {
      setSelectedDeveloper(developer)
    }
    if (view === 'developers') {
      window.location.hash = developer === 'co-founder' ? '#developer-friend' : '#developers'
    } else {
      window.location.hash = '#hero'
    }
  }

  const handleOpenDeveloper = (id: 'founder' | 'co-founder') => {
    setSelectedDeveloper(id)
    setCurrentView('developers')
    window.location.hash = id === 'co-founder' ? '#developer-friend' : '#developers'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F8F9FA] dark:bg-[#090B0E] text-[#111827] dark:text-[#F3F4F6] selection:bg-[#FF4500]/20 selection:text-[#FF4500] transition-colors duration-300">
      {/* Floating Pill Navbar with Theme Toggle */}
      <Navbar
        currentView={currentView}
        onSelectView={handleSelectView}
      />

      {/* Main Dynamic View Content */}
      <main>
        {currentView === 'developers' ? (
          <DeveloperShowcase
            initialDeveloper={selectedDeveloper}
            onBackToHome={() => {
              setCurrentView('home')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        ) : (
          <>
            {/* 1. Hero with 3D Intelligent Core */}
            <Hero />

            {/* 2. Editorial Storytelling: About Innocapsule */}
            <About />

            {/* 3. Interactive Capability System: What We Build */}
            <Capabilities />

            {/* 4. Portfolio Showcase: Selected Work */}
            <FeaturedWork />

            {/* 5. Methodology & Delivery: Our Process */}
            <Process />

            {/* 6. System Architecture: Technology Ecosystem */}
            <TechnologyEcosystem />

            {/* 7. Engineering Manifesto: How We Think */}
            <EngineeringPrinciples />

            {/* 8. Leadership Core: 3D Interactive ID Cards with direct link to Developer Profiles */}
            <Leadership onOpenDeveloper={handleOpenDeveloper} />

            {/* Anchor for Contact */}
            <section id="contact" className="sr-only">
              <h2>Contact</h2>
            </section>
          </>
        )}
      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-black/[0.08] dark:border-white/[0.08] py-12 bg-[#F8F9FA] dark:bg-[#090B0E] text-xs font-mono-tech text-neutral-500 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BrandMark size={22} withText={true} animate={false} />
            <span className="text-neutral-400 dark:text-neutral-600">//</span>
            <span>{siteConfig.meta.version}</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-600 dark:text-neutral-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF4500] transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4500]"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF4500] transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF4500]"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="text-[11px] text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} InnoCapsule. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const App: React.FC = () => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
    </NextThemesProvider>
  )
}

export default App

