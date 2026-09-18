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
  resumeUrl?: string
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
    label: 'Srinivas Gorkal',
    name: 'Srinivas Gorkal',
    signatureName: 'Srinivas Gorkal',
    role: 'Computer Science Engineering Student & Developer',
    avatar: `${cleanBase}team/founder-3d.jpg`,
    fallbackAvatar: `${cleanBase}team/founder.png`,
    badgeText: 'Srinivas Gorkal',
    bio: 'Enthusiastic and self-motivated Computer Science Engineering student with a strong foundation in software development, web technologies, mobile apps, and programming. Passionate about building innovative, scalable, and user-centric applications.',
    quote: 'Passionate about building innovative, scalable applications',
    availability: 'Available for opportunities',
    resumeUrl: `${cleanBase}Srinivas_Gorkal_Resume.pdf`,
    stats: {
      experience: '89%',
      experienceLabel: 'DIPLOMA SCORE',
      projects: '4+',
      projectsLabel: 'KEY PROJECTS',
      drive: 'B.Tech',
      driveLabel: 'CSE (LATERAL)',
      satisfaction: '10+',
      satisfactionLabel: 'TECH SKILLS',
    },
    socials: {
      github: 'https://github.com/srinivas-19-19',
      linkedin: 'https://linkedin.com/in/gorkal-srinivasulu',
      twitter: 'https://twitter.com',
      website: `${cleanBase}Srinivas_Gorkal_Resume.pdf`,
    },
    about: {
      bio: 'Computer Science Engineering student at SV College of Engineering with an 89% distinction diploma from Bheema Institute of Technology. Experienced in developing full-stack web platforms, deep learning emotion detection systems, and mobile applications with Flutter and Firebase.',
      location: 'Ramachandranagar, Mantralayam, Andhra Pradesh',
      email: 'gorkalsreenu10@gmail.com',
      languages: 'English, Telugu, Kannada',
    },
    skills: [
      'Python',
      'C',
      'C++',
      'Java',
      'PHP',
      'JavaScript',
      'HTML5',
      'CSS3',
      'MySQL',
      'Firebase',
      'Flutter',
      'Dart',
      'Git',
      'GitHub',
      'Visual Studio Code',
      'WordPress',
    ],
    services: [
      'Web Application Development',
      'Mobile App Development (Flutter)',
      'Backend & Database Systems',
      'Machine Learning & CNN',
      'API & Cloud Integration',
    ],
    projects: [
      {
        id: 'emotion-detection',
        title: 'Human Emotion Detection (CNN)',
        description: 'Deep learning model to recognize human facial emotions from images using CNN, OpenCV, and TensorFlow with preprocessing.',
        tags: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
        image: `${cleanBase}projects/emotion-detection.jpg`,
      },
      {
        id: 'hotel-reservation',
        title: 'Multi-Property Hotel Reservation System',
        description: 'Comprehensive web-based platform for managing multiple accommodation providers, secure user authentication, and bookings.',
        tags: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
        image: `${cleanBase}projects/hotel-reservation.jpg`,
      },
      {
        id: 'smart-attendance',
        title: 'Smart Attendance Management Application',
        description: 'Cross-platform mobile application with Flutter and Cloud Firestore for real-time digital attendance tracking and authentication.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
        image: `${cleanBase}projects/smart-attendance.jpg`,
      },
      {
        id: 'edusync-ai',
        title: 'EduSyncAI – AI-Powered Chrome Extension',
        description: 'AI-powered Chrome extension to improve student learning, academic productivity, and provide intelligent learning support.',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'AI APIs'],
        image: `${cleanBase}projects/edusync-ai.jpg`,
      },
    ],
    experience: [
      {
        period: '2025 – Present',
        role: 'B.Tech in Computer Science Engineering (Lateral Entry)',
        company: 'SV College of Engineering, Tirupati',
      },
      {
        period: '2022 – 2025',
        role: 'Diploma in Computer Science Engineering – 89%',
        company: 'Bheema Institute of Technology and Science, Adoni',
      },
      {
        period: '2021 – 2022',
        role: 'Secondary School Certificate (SSC) – 86%',
        company: 'Zilla Parishad High School, Mantralayam',
      },
      {
        period: 'August 2025',
        role: 'Participant, Institutional Start-Up Competition Hackathon',
        company: 'Dept. of CSE (Data Science), SV College of Engineering',
      },
    ],
  },
  'co-founder': {
    id: 'co-founder',
    label: 'Manikanta Reddy Kuruva',
    name: 'Manikanta Reddy Kuruva',
    signatureName: 'Manikanta Reddy Kuruva',
    role: 'Co-Founder & Spatial Lead',
    avatar: `${cleanBase}team/co-founder-3d.jpg`,
    fallbackAvatar: `${cleanBase}team/co-founder.jpg`,
    badgeText: 'Manikanta Reddy Kuruva',
    bio: 'I focus on spatial intelligence, distributed systems, and modern web infrastructure. Directing operational scale, technical infrastructure, and engineering execution.',
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
