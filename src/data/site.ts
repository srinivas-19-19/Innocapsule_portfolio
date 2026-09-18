export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  ticker: string
  tagline: {
    lead: string
    highlight: string
  }
  description: string
  navItems: NavItem[]
  cta: {
    primary: string
    secondary: string
    contactLink: string
    workLink: string
  }
  meta: {
    status: string
    version: string
    coordinates: string
    buildFocus: string
  }
  socials: {
    github?: string
    linkedin?: string
    x?: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'INNOCAPSULE',
  ticker: 'IDEAS → INTELLIGENCE → PRODUCTS',
  tagline: {
    lead: 'We build ideas into',
    highlight: 'intelligent products.',
  },
  description:
    'Innocapsule is a technology startup building modern digital products, intelligent systems, and scalable software experiences for the next generation of web and autonomous interfaces.',
  navItems: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#capabilities' },
    { label: 'Projects', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Developers', href: '#developers' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: {
    primary: 'Explore Capabilities',
    secondary: 'Hire Developer',
    contactLink: '#contact',
    workLink: '#capabilities',
  },
  meta: {
    status: 'SYSTEMS ONLINE // V1.0',
    version: 'ENGINEERING CORE 2026',
    coordinates: '37.7749° N, 122.4194° W',
    buildFocus: 'AUTONOMOUS AGENTS • WEB PLATFORMS • 3D EXPERIENCES',
  },
  socials: {
    github: 'https://github.com/innocapsule',
    linkedin: 'https://linkedin.com/company/innocapsule',
  },
}
