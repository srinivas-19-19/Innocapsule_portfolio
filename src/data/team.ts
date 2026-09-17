export interface TeamMember {
  id: string
  role: string
  subtitle: string
  clearance: string
  badgeId: string
  image: string
  bio: string
  focus: string[]
  verified: boolean
}

const baseUrl = import.meta.env.BASE_URL || '/'
const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

export const teamMembers: TeamMember[] = [
  {
    id: 'founder',
    role: 'Founder',
    subtitle: 'Founder & Product Architect',
    clearance: 'LEVEL 01 // CORE AUTHORITY',
    badgeId: 'INN-001-FNDR',
    image: `${cleanBase}team/founder.png`,
    bio: 'Guiding visionary strategy, design systems, and intelligent product architecture from concept to deployed systems.',
    focus: ['Systems Architecture', 'Product Strategy', 'Autonomous UX'],
    verified: true,
  },
  {
    id: 'co-founder',
    role: 'Co-Founder',
    subtitle: 'Co-Founder & Operations',
    clearance: 'LEVEL 01 // CORE AUTHORITY',
    badgeId: 'INN-002-COFNDR',
    image: `${cleanBase}team/co-founder.jpg`,
    bio: 'Directing operational scale, technical infrastructure, and engineering execution across product portfolios.',
    focus: ['Platform Infrastructure', 'Engineering Operations', 'Full-Stack Scalability'],
    verified: true,
  },
]
