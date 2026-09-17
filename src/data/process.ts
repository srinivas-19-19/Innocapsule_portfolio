export interface ProcessStepItem {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  deliverables: string[]
  visualState: 'discover' | 'define' | 'design' | 'engineer' | 'refine'
}

export const processSteps: ProcessStepItem[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    subtitle: 'PROBLEM DECONSTRUCTION & CONSTRAINTS',
    description:
      'We deconstruct the core objective from first principles—analyzing technical constraints, real user workflows, operational bottlenecks, and system viability before writing a single line of code.',
    deliverables: ['System Boundary Mapping', 'Technical Feasibility Analysis', 'Workflow Decomposition'],
    visualState: 'discover',
  },
  {
    id: 'define',
    number: '02',
    title: 'Define',
    subtitle: 'SYSTEM ARCHITECTURE & PRODUCT DIRECTION',
    description:
      'Opportunity is translated into an exact architectural specification: data models, intelligence pipelines, API schemas, and deployment topologies with deterministic predictability.',
    deliverables: ['Architectural Blueprint', 'Schema & Interface Contracts', 'Milestone Roadmaps'],
    visualState: 'define',
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    subtitle: 'INTERACTION SYSTEMS & VISUAL FIDELITY',
    description:
      'Crafting intuitive user interfaces and tactile micro-interactions that make complex intelligent systems legible, responsive, and effortless for humans to operate.',
    deliverables: ['Design Systems & Tokens', 'Interaction State Machines', 'Spatial & Visual Prototypes'],
    visualState: 'design',
  },
  {
    id: 'engineer',
    number: '04',
    title: 'Engineer',
    subtitle: 'PRODUCTION PLATFORM DEVELOPMENT',
    description:
      'Building resilient, high-throughput software platforms using modern full-stack architectures, clean type systems, real-time pipelines, and strict security enclaves.',
    deliverables: ['Type-Safe Codebases', 'Reactive UI & State Engines', 'Secure API & Data Services'],
    visualState: 'engineer',
  },
  {
    id: 'refine',
    number: '05',
    title: 'Refine',
    subtitle: 'VALIDATION, BENCHMARKING & DEPLOYMENT',
    description:
      'Continuous profiling, load testing, latency benchmarking, and end-to-end verification ensure the deployed product operates with deterministic stability and speed.',
    deliverables: ['Performance Profiling', 'Edge Deployment Pipelines', 'Telemetry & Observability'],
    visualState: 'refine',
  },
]
