export type StackLayerId = 'INTELLIGENCE' | 'APPLICATION' | 'FOUNDATION' | 'DELIVERY'

export interface Capability {
  id: string
  number: string
  title: string
  description: string
  technicalAreas: string[]
  domains: string[] // alias for compatibility
  highlightLayers: StackLayerId[]
}

export const capabilities: Capability[] = [
  {
    id: 'ai-intelligent-systems',
    number: '01',
    title: 'AI & Intelligent Systems',
    description: 'Build intelligent software around real problems—not AI for the sake of AI.',
    technicalAreas: [
      'AI Agents',
      'LLM Applications',
      'RAG Systems',
      'Computer Vision',
      'Intelligent Automation',
    ],
    domains: [
      'AI Agents',
      'LLM Applications',
      'RAG Systems',
      'Computer Vision',
      'Intelligent Automation',
    ],
    highlightLayers: ['INTELLIGENCE'],
  },
  {
    id: 'web-platforms',
    number: '02',
    title: 'Web Platforms',
    description: 'Design and engineer modern web platforms that remain reliable as products and users grow.',
    technicalAreas: [
      'Full-Stack Applications',
      'SaaS Platforms',
      'Real-Time Systems',
      'APIs & Backend Systems',
      'Cloud-Ready Architecture',
    ],
    domains: [
      'Full-Stack Applications',
      'SaaS Platforms',
      'Real-Time Systems',
      'APIs & Backend Systems',
      'Cloud-Ready Architecture',
    ],
    highlightLayers: ['APPLICATION'],
  },
  {
    id: 'mobile-experiences',
    number: '03',
    title: 'Mobile Experiences',
    description: 'Create fast, intuitive mobile products that connect users, data, and services seamlessly.',
    technicalAreas: [
      'Cross-Platform Apps',
      'Flutter',
      'Firebase',
      'Mobile APIs',
      'Real-Time Data',
    ],
    domains: [
      'Cross-Platform Apps',
      'Flutter',
      'Firebase',
      'Mobile APIs',
      'Real-Time Data',
    ],
    highlightLayers: ['APPLICATION'],
  },
  {
    id: 'product-engineering',
    number: '04',
    title: 'Product Engineering',
    description: 'Turn an idea into a complete software product—from architecture and interface to deployment.',
    technicalAreas: [
      'Product Architecture',
      'UI/UX Engineering',
      'Database Systems',
      'Authentication & Security',
      'Deployment & Scaling',
    ],
    domains: [
      'Product Architecture',
      'UI/UX Engineering',
      'Database Systems',
      'Authentication & Security',
      'Deployment & Scaling',
    ],
    highlightLayers: ['FOUNDATION', 'DELIVERY'],
  },
]

