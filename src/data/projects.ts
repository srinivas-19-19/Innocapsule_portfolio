export interface Project {
  id: string
  title: string
  timeline: string
  category: string
  shortDescription: string
  description: string
  keyDetails: string[]
  technologies: string[]
  accentColor: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'mantralayam-stays',
    title: 'Mantralayam Stays',
    timeline: '2025',
    category: 'Hospitality & Booking Engine',
    shortDescription: 'Localized accommodation and digital booking ecosystem for seamless room discovery and real-time reservation handling.',
    description:
      'A localized accommodation and digital booking ecosystem engineered for seamless room discovery, management, and real-time reservation handling for spiritual tourism.',
    keyDetails: [
      'Custom high-performance booking engine',
      'Fast multi-parameter room filtering & search',
      'Real-time availability and inventory tracking',
      'Responsive mobile-first guest booking layout',
      'Structured reservation records with PostgreSQL',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
    accentColor: '#FF4500',
    featured: true,
  },
  {
    id: 'mediquee',
    title: 'MediQuee',
    timeline: '2026 – Present',
    category: 'Healthcare Intelligence',
    shortDescription: 'Intelligent clinical workflow & healthcare data orchestration platform.',
    description:
      'Intelligent clinical workflow & healthcare data orchestration platform engineered to streamline diagnostic pipelines, synthesize medical record streams, and provide high-reliability diagnostic assistance.',
    keyDetails: [
      'Automated clinical workflow orchestration',
      'High-reliability medical data synthesis pipelines',
      'Modern asynchronous API backend with FastAPI',
      'Type-safe enterprise interface with React 19',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'FastAPI'],
    accentColor: '#FF5500',
    featured: true,
  },
  {
    id: 'boardverse-ai',
    title: 'BoardVerse AI',
    timeline: '2025',
    category: 'Spatial Intelligence',
    shortDescription: 'Spatial canvas application integrating generative context graphs and dynamic planning tools.',
    description:
      'A spatial canvas application integrating generative context graphs and dynamic planning tools. Built for distributed teams to visualize multi-dimensional architecture decisions and cognitive maps.',
    keyDetails: [
      'Hardware-accelerated WebGL spatial canvas',
      'Generative context graphs for technical planning',
      'Sub-millisecond collaborative state sync via CRDTs',
      'Persistent real-time bi-directional WebSockets',
    ],
    technologies: ['TypeScript', 'WebGL', 'CRDTs', 'WebSockets'],
    accentColor: '#FF6A00',
    featured: true,
  },
  {
    id: 'dparcels',
    title: 'DParcels',
    timeline: '2024 – 2025',
    category: 'Logistics Intelligence',
    shortDescription: 'High-throughput logistics intelligence platform designed to calculate real-time autonomous routing.',
    description:
      'High-throughput logistics intelligence platform designed to calculate real-time autonomous routing and distributed logistics infrastructure with minimal operational latency.',
    keyDetails: [
      'Real-time autonomous routing calculations',
      'Distributed logistics telemetry and dispatch tracking',
      'High-throughput relational schema with MySQL',
      'Lightweight resilient service architecture',
    ],
    technologies: ['HTML', 'CSS', 'JS', 'PHP', 'MYSQL'],
    accentColor: '#FF8C00',
    featured: true,
  },
]

