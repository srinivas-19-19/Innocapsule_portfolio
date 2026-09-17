export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  category: string
  technologies: string[]
  accentColor: string
  year: string
  status: 'In Production' | 'Active Development' | 'Technical Preview'
  url?: string
  featured: boolean
  visualType: 'grid' | 'nodes' | 'network'
}

export const projects: Project[] = [
  {
    id: 'mediquee',
    title: 'MediQuee',
    shortDescription: 'Intelligent clinical workflow & healthcare data orchestration platform.',
    description:
      'MediQuee is an intelligent clinical systems platform engineered to streamline patient diagnostic pipelines, synthesize medical record streams, and provide healthcare professionals with high-reliability diagnostic assistance.',
    category: 'Intelligent Health Systems',
    technologies: ['React 19', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Secure Enclaves'],
    accentColor: '#00F0FF',
    year: '2025 – 2026',
    status: 'Active Development',
    url: '#',
    featured: true,
    visualType: 'network',
  },
  {
    id: 'boardverse-ai',
    title: 'BoardVerse AI',
    shortDescription: 'Collaborative spatial intelligence and dynamic planning canvas.',
    description:
      'A spatial canvas application integrating generative context graphs and continuous collaborative synchronization. Built for distributed technical teams to visualize multi-dimensional architecture decisions and cognitive maps.',
    category: 'Spatial Intelligence',
    technologies: ['TypeScript', 'WebGL', 'CRDTs', 'WebSockets', 'Tailwind CSS', 'Vector Stores'],
    accentColor: '#38BDF8',
    year: '2025',
    status: 'In Production',
    url: '#',
    featured: true,
    visualType: 'grid',
  },
  {
    id: 'dparcels',
    title: 'DParcels',
    shortDescription: 'Autonomous routing & distributed logistics infrastructure.',
    description:
      'A high-throughput logistics intelligence platform designed to calculate real-time fleet dispatch matrices, optimize multi-hop parcel transit paths, and monitor supply-chain nodes with minimal operational latency.',
    category: 'Logistics Infrastructure',
    technologies: ['Go', 'Python', 'React', 'MapLibre GL', 'Redis', 'Docker'],
    accentColor: '#818CF8',
    year: '2024 – 2025',
    status: 'In Production',
    url: '#',
    featured: true,
    visualType: 'nodes',
  },
]
