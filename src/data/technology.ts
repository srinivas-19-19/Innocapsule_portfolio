export interface TechnologyCategory {
  id: string
  number: string
  title: string
  description: string
  technologies: string[]
  metrics?: { label: string; value: string }
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence & Agents',
    description:
      'Autonomous reasoning agents, specialized LLM orchestration pipelines, vector indexing, and embedding workflows designed for domain-specific production software.',
    technologies: [
      'Autonomous Agents',
      'LLM Orchestration',
      'Vector Stores',
      'Embeddings',
      'FastAPI',
      'PyTorch',
    ],
    metrics: { label: 'Pipeline Runtime', value: 'Streaming & Deterministic' },
  },
  {
    id: 'web',
    number: '02',
    title: 'Web Platforms',
    description:
      'Modern, highly scalable web applications engineered for performance, clean state topologies, accessible interfaces, and smooth frame-rate interactions.',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Next.js',
      'Tailwind CSS',
      'Web APIs',
    ],
    metrics: { label: 'Target Frame Budget', value: '< 16.6ms (60 FPS)' },
  },
  {
    id: 'mobile',
    number: '03',
    title: 'Mobile Systems',
    description:
      'Cross-platform mobile applications with native platform bindings, offline data synchronization, and tactile touch interactions tailored for iOS and Android.',
    technologies: [
      'React Native',
      'TypeScript',
      'Native Modules',
      'Offline SQLite',
      'Tailwind Mobile',
      'State Enclaves',
    ],
    metrics: { label: 'Platform Parity', value: 'Unified Cross-Device' },
  },
  {
    id: 'backend',
    number: '04',
    title: 'Backend & Infrastructure',
    description:
      'Resilient backend services, micro-services, and edge deployment architectures configured for zero-downtime rollouts and low-latency response cycles.',
    technologies: [
      'Node.js',
      'Python',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Edge Runtimes',
    ],
    metrics: { label: 'Concurrency Model', value: 'Asynchronous Event-Driven' },
  },
  {
    id: 'data',
    number: '05',
    title: 'Data Architecture & APIs',
    description:
      'Strict schema validation, type-safe API contracts, high-throughput event queues, and relational data layers engineered for auditability and integrity.',
    technologies: [
      'RESTful APIs',
      'GraphQL',
      'JSON Schema',
      'WebSockets',
      'Prisma ORM',
      'Data Pipelines',
    ],
    metrics: { label: 'Type Safety', value: 'End-to-End Contracted' },
  },
  {
    id: 'interactive',
    number: '06',
    title: 'Interactive & Creative Tech',
    description:
      'Spatial interfaces, procedural 3D elements, hardware-accelerated shaders, and physics-driven micro-interactions that elevate software into memorable experiences.',
    technologies: [
      'Three.js',
      'WebGL',
      'React Three Fiber',
      'Framer Motion',
      'GLSL Shaders',
      'Vector Graphics',
    ],
    metrics: { label: 'Graphics Pipeline', value: 'Hardware Accelerated' },
  },
]
