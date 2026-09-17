export interface EngineeringPrinciple {
  number: string
  title: string
  statement: string
  detail: string
  focusTag: string
}

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: '01',
    title: 'BUILD WITH PURPOSE',
    statement: 'Every technical decision should serve a real product or user need.',
    detail:
      'We reject novelty for novelty’s sake. Architectures, libraries, and design patterns are chosen because they deliver tangible user value and maintainable simplicity, not because they are trending.',
    focusTag: 'UTILITY FIRST',
  },
  {
    number: '02',
    title: 'ENGINEER FOR SCALE',
    statement: 'Build foundations that can evolve as the product grows.',
    detail:
      'From schema definitions to component boundaries, we engineer systems that absorb growth without requiring complete rewrites. Modularity, decoupling, and clean interfaces ensure long-term resilience.',
    focusTag: 'RESILIENT ARCHITECTURE',
  },
  {
    number: '03',
    title: 'INTELLIGENCE WITH USABILITY',
    statement: 'Intelligent systems should remain useful, understandable, and human-centered.',
    detail:
      'AI and automated reasoning are only as valuable as their legibility to humans. We design interfaces where models explain their outputs, errors degrade gracefully, and the user stays firmly in control.',
    focusTag: 'HUMAN-CENTERED AI',
  },
  {
    number: '04',
    title: 'DESIGN + ENGINEERING',
    statement: 'Great digital products emerge when design and engineering work together.',
    detail:
      'We eliminate the traditional chasm between creative interaction designers and deep systems engineers. Spatial fluidity, micro-interactions, and algorithmic speed are treated as unified dimensions.',
    focusTag: 'UNIFIED CRAFT',
  },
]
