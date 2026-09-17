import React from 'react'
import { Navbar } from './components/navigation/Navbar'
import { Hero } from './components/hero/Hero'
import { About } from './components/about/About'
import { Capabilities } from './components/capabilities/Capabilities'
import { FeaturedWork } from './components/projects/FeaturedWork'
import { Process } from './components/process/Process'
import { TechnologyEcosystem } from './components/technology/TechnologyEcosystem'
import { EngineeringPrinciples } from './components/principles/EngineeringPrinciples'
import { Leadership } from './components/team/Leadership'
import { BrandMark } from './components/ui/BrandMark'
import { siteConfig } from './data/site'
import { ArrowUpRight } from 'lucide-react'

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#06070B] text-[#F3F4F6] selection:bg-[#00F0FF]/20 selection:text-[#00F0FF]">
      {/* Floating Minimal Navbar */}
      <Navbar />

      {/* Main Continuous Journey */}
      <main>
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

        {/* 8. Leadership Core: 3D Interactive ID Cards */}
        <Leadership />

        {/* Anchor for Contact */}
        <section id="contact" className="sr-only">
          <h2>Contact</h2>
        </section>
      </main>

      {/* Minimal Studio Footer */}
      <footer className="border-t border-white/[0.08] py-12 bg-[#06070B] text-xs font-mono-tech text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BrandMark size={22} withText={true} animate={false} />
            <span className="text-neutral-600">//</span>
            <span>{siteConfig.meta.version}</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00F0FF] transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00F0FF]"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00F0FF] transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00F0FF]"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="text-[11px] text-neutral-600">
            &copy; {new Date().getFullYear()} Innocapsule. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
