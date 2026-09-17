export interface Capability {
  id: string
  number: string
  title: string
  shortDescription: string
  fullDescription: string
  domains: string[]
  type: 'ai' | 'web' | 'mobile' | 'engineering' | 'automation' | 'experiences'
}

export const capabilities: Capability[] = [
  {
    id: 'ai-systems',
    number: '01',
    title: 'AI & Intelligent Systems',
    shortDescription: 'AI-powered products, intelligent workflows, and autonomous system architectures.',
    fullDescription:
      'We design and deploy neural interfaces, autonomous agent workflows, and intelligent reasoning pipelines that turn probabilistic models into reliable, production-ready software systems.',
    domains: ['Autonomous Agents', 'LLM Infrastructure', 'Cognitive Workflows', 'Computer Vision'],
    type: 'ai',
  },
  {
    id: 'web-platforms',
    number: '02',
    title: 'Web Platforms',
    shortDescription: 'Modern, responsive, ultra-scalable web applications with resilient architectures.',
    fullDescription:
      'Engineered for speed, durability, and global distribution. We build distributed web platforms using modern component paradigms, real-time sync engines, and edge infrastructure.',
    domains: ['Distributed Systems', 'Real-time Sync', 'Edge Rendering', 'Micro-frontends'],
    type: 'web',
  },
  {
    id: 'mobile-experiences',
    number: '03',
    title: 'Mobile Experiences',
    shortDescription: 'High-performance mobile products focused on ergonomic usability and native feel.',
    fullDescription:
      'Crafting cross-platform and native mobile software with fluid 60fps gestural interactions, offline-first local databases, and uncompromising attention to tactile feedback.',
    domains: ['Offline First', 'Haptic Interactions', 'Cross-Platform', 'Native Performance'],
    type: 'mobile',
  },
  {
    id: 'product-engineering',
    number: '04',
    title: 'Product Engineering',
    shortDescription: 'Translating concepts and complex requirements into production-ready software.',
    fullDescription:
      'Full lifecycle engineering from initial technical discovery and distributed systems design to continuous deployment, security hardening, and resilient observability.',
    domains: ['System Architecture', 'CI/CD Pipelines', 'Fault Tolerance', 'Security Engineering'],
    type: 'engineering',
  },
  {
    id: 'automation',
    number: '05',
    title: 'Automation',
    shortDescription: 'Intelligent automation for repetitive and operational workflows.',
    fullDescription:
      'Eliminating manual friction across enterprise and product operations through programmatic event buses, automated data verification, and autonomous reconciliation jobs.',
    domains: ['Event-Driven Tasks', 'Data Pipelines', 'Operational Systems', 'API Orchestration'],
    type: 'automation',
  },
  {
    id: 'digital-experiences',
    number: '06',
    title: 'Interactive Digital Experiences',
    shortDescription: 'Immersive interfaces, creative technology, and interactive spatial software.',
    fullDescription:
      'Pushing the boundary of digital presentation with procedural WebGL shaders, spatial UI components, and expressive micro-interactions that leave a permanent impression.',
    domains: ['WebGL / Spatial UI', 'Creative Coding', 'Micro-Interactions', 'Motion Choreography'],
    type: 'experiences',
  },
]
