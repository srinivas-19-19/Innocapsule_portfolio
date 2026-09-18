export interface TeamMember {
  id: 'founder' | 'co-founder'
  name: string
  role: string
  subtitle: string
  badgeText: string
  image: string
  description: string
  verified: boolean
}

const baseUrl = import.meta.env.BASE_URL || '/'
const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

export const teamMembers: TeamMember[] = [
  {
    id: 'founder',
    name: 'Srinivasulu Gorkal',
    role: 'Founder & Lead Engineer',
    subtitle: 'Founder & Lead Engineer',
    badgeText: '// VERIFIED',
    image: `${cleanBase}team/founder.png`,
    description:
      'I engineer high-performance digital products and intelligent architectures from first principles. Passionate about solving complex real-world challenges using clean code, intuitive UX, and scalable full-stack platforms.',
    verified: true,
  },
  {
    id: 'co-founder',
    name: 'Manikanta Reddy Kuruva',
    role: 'Co-Founder & Spatial Lead',
    subtitle: 'Co-Founder & Spatial Lead',
    badgeText: '// VERIFIED',
    image: `${cleanBase}team/co-founder.jpg`,
    description:
      'I focus on spatial intelligence, distributed systems, and modern web infrastructure. Dedicated to transforming ambitious ideas into resilient software experiences with robust architectures built to evolve.',
    verified: true,
  },
]
