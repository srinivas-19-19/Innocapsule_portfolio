const baseUrl = import.meta.env.BASE_URL || '/'
const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`

export interface DeveloperProfile {
  id: 'founder' | 'co-founder'
  label: string
  name: string
  signatureName: string
  role: string
  avatar: string
  fallbackAvatar: string
  badgeText: string
  bio: string
  quote: string
  availability: string
  stats: {
    experience: string
    experienceLabel: string
    projects: string
    projectsLabel: string
    drive: string
    driveLabel: string
    satisfaction: string
    satisfactionLabel: string
  }
  socials: {
    github: string
    linkedin: string
    twitter: string
    website: string
  }
  about: {
    bio: string
    location: string
    email: string
    languages: string
  }
  skills: string[]
  services: string[]
  projects: Array<{
    id: string
    title: string
    description: string
    tags: string[]
    image: string
    href?: string
  }>
  experience: Array<{
    period: string
    role: string
    company: string
  }>
}

export const developersData: Record<'founder' | 'co-founder', DeveloperProfile> = {
  founder: {
    id: 'founder',
    label: 'Me (Nand Kishore)',
    name: 'Nand Kishore',
    signatureName: 'Nand Kishore',
    role: 'Full Stack Developer',
    avatar: `${cleanBase}team/founder-3d.jpg`,
    fallbackAvatar: `${cleanBase}team/founder.png`,
    badgeText: 'Nand Kishore',
    bio: "Hi, I'm Nand Kishore Soni. I bridge the gap between engineering and art to design immersive, high-performance web experiences.",
    quote: 'Turning ideas into digital reality',
    availability: 'Available for freelance',
    stats: {
      experience: '3+',
      experienceLabel: 'YEARS EXPERIENCE',
      projects: '30+',
      projectsLabel: 'PROJECTS DONE',
      drive: '100%',
      driveLabel: 'CREATIVE DRIVE',
      satisfaction: '5★',
      satisfactionLabel: 'CLIENT SATISFACTION',
    },
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      website: 'https://innocapsule.com',
    },
    about: {
      bio: "I'm a passionate Full Stack Developer who loves creating modern, user-centric web applications. I combine clean code with creative design to build meaningful digital experiences.",
      location: 'India',
      email: 'nandkishore@example.com',
      languages: 'English, Hindi, Telugu',
    },
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python',
      'Tailwind CSS',
      'Framer Motion',
      'MongoDB',
      'PostgreSQL',
      'Firebase',
      'Docker',
      'AWS',
    ],
    services: [
      'Web Development',
      'API Development',
      'UI/UX Design',
      'Performance Optimization',
    ],
    projects: [
      {
        id: 'mediquee',
        title: 'MediQuee',
        description: 'Modern healthcare appointment platform',
        tags: ['React', 'Supabase', 'Tailwind'],
        image: `${cleanBase}projects/mediquee.jpg`,
      },
      {
        id: 'cyber-firewall',
        title: 'Cyber Firewall',
        description: 'Personal security and network monitoring tool',
        tags: ['Python', 'AI/ML', 'Security'],
        image: `${cleanBase}projects/cyber-firewall.jpg`,
      },
    ],
    experience: [
      {
        period: '2023 – Present',
        role: 'Full Stack Developer',
        company: 'InnoCapsule',
      },
      {
        period: '2022 – 2023',
        role: 'Frontend Developer',
        company: 'Freelance',
      },
      {
        period: '2021 – 2022',
        role: 'Junior Developer',
        company: 'Learning & Projects',
      },
    ],
  },
  'co-founder': {
    id: 'co-founder',
    label: 'My Friend (Co-Founder)',
    name: 'Srinivas Soni',
    signatureName: 'Srinivas Soni',
    role: 'Platform & Operations Lead',
    avatar: `${cleanBase}team/co-founder-3d.jpg`,
    fallbackAvatar: `${cleanBase}team/co-founder.jpg`,
    badgeText: 'Co-Founder',
    bio: 'Directing operational scale, technical infrastructure, and engineering execution across product portfolios.',
    quote: 'Architecting systems built to endure and scale',
    availability: 'Available for scale-ups',
    stats: {
      experience: '3+',
      experienceLabel: 'YEARS EXPERIENCE',
      projects: '25+',
      projectsLabel: 'SYSTEMS DEPLOYED',
      drive: '99.9%',
      driveLabel: 'INFRA UPTIME',
      satisfaction: '5★',
      satisfactionLabel: 'CLIENT SATISFACTION',
    },
    socials: {
      github: 'https://github.com/srinivas-19-19',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      website: 'https://innocapsule.com',
    },
    about: {
      bio: 'Leading backend scalability, infrastructure orchestration, and operational security to deliver high-throughput fault-tolerant digital applications.',
      location: 'India',
      email: 'operations@innocapsule.com',
      languages: 'English, Hindi, Telugu',
    },
    skills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'Python',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'CI/CD',
      'Linux',
      'TypeScript',
      'Terraform',
      'GraphQL',
    ],
    services: [
      'Cloud Infrastructure',
      'DevOps & CI/CD',
      'Backend Architecture',
      'System Scaling',
    ],
    projects: [
      {
        id: 'aether-cloud',
        title: 'Aether Cloud Mesh',
        description: 'Multi-region Kubernetes cluster orchestrator',
        tags: ['AWS', 'Kubernetes', 'Docker'],
        image: `${cleanBase}projects/cyber-firewall.jpg`,
      },
      {
        id: 'neural-pipeline',
        title: 'Neural Stream Pipeline',
        description: 'Real-time telemetry and streaming engine',
        tags: ['Python', 'Kafka', 'Redis'],
        image: `${cleanBase}projects/mediquee.jpg`,
      },
    ],
    experience: [
      {
        period: '2023 – Present',
        role: 'Operations & Platform Lead',
        company: 'InnoCapsule',
      },
      {
        period: '2022 – 2023',
        role: 'Backend & Cloud Engineer',
        company: 'Cloud Systems',
      },
      {
        period: '2021 – 2022',
        role: 'Systems Engineer',
        company: 'Learning & Projects',
      },
    ],
  },
}
