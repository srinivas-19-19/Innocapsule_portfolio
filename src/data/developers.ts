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
    signatureName: 'Manikanta Reddy',
    role: 'Computer Science Engineering Student | Full-Stack Developer | AI Enthusiast',
    avatar: `${cleanBase}team/co-founder-3d.jpg`,
    fallbackAvatar: `${cleanBase}team/co-founder.jpg`,
    badgeText: 'Manikanta Reddy Kuruva',
    bio: 'Computer Science Engineering student with a Diploma in Computer Engineering (92.17%) and hands-on experience in full-stack web development, AI-driven applications, database systems, and real-world software projects. Passionate about software engineering, Machine Learning, Generative AI, and AI Agents.',
    quote: 'Exploring opportunities in Computer Science to build efficient, innovative projects',
    availability: 'Available for opportunities',
    resumeUrl: `${cleanBase}Manikanta_Reddy_Resume.pdf`,
    stats: {
      experience: '2+',
      experienceLabel: 'YEARS DEV & PROJECTS',
      projects: '6+',
      projectsLabel: 'PLATFORMS BUILT',
      drive: '92.2%',
      driveLabel: 'DIPLOMA SCORE',
      satisfaction: '100%',
      satisfactionLabel: 'COMMITMENT TO CODE',
    },
    socials: {
      github: 'https://github.com/mani-reddy-02',
      linkedin: 'https://linkedin.com/in/manikanta-reddy-926b2837b',
      twitter: 'https://twitter.com',
      website: 'https://innocapsule.com',
    },
    about: {
      bio: 'Experienced in developing web platforms using React.js, Node.js, Express.js, PHP, MySQL, PostgreSQL, and modern dev tools. Built healthcare (MediQuee), room booking, logistics (dParcels), career-tech (EmpowerPath), and biometric ATM security platforms with hands-on experience in frontend engineering, backend integration, and AI Agents.',
      location: 'Adoni, Kurnool, Andhra Pradesh, India',
      email: 'manikanta79977@gmail.com',
      languages: 'English, Telugu, Kannada, Hindi',
    },
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'PHP',
      'Python',
      'JavaScript',
      'Core Java',
      'C / C++',
      'MySQL',
      'PostgreSQL',
      'Supabase',
      'Firebase',
      'Machine Learning',
      'Generative AI',
      'AI Agents',
      'Docker',
      'Tailwind CSS',
      'Bootstrap',
      'REST APIs',
      'Git & GitHub',
    ],
    services: [
      'Full-Stack Web Development',
      'AI & Machine Learning Solutions',
      'Database Architecture & APIs',
      'Responsive Frontend Engineering',
    ],
    projects: [
      {
        id: 'mediquee',
        title: 'MediQuee — Healthcare Platform',
        description:
          'Comprehensive healthcare platform connecting patients with hospitals, doctors, and laboratories. Features OP appointments, video consultations, and MediQuee AI chatbot.',
        tags: ['React.js', 'Supabase', 'PostgreSQL', 'AI Chatbot'],
        image: `${cleanBase}projects/mediquee.jpg`,
      },
      {
        id: 'mantralayam-rooms',
        title: 'Mantralayam Rooms Booking',
        description:
          'Web-based accommodation booking platform for discovering and booking rooms. Features real-time room availability, date validation, and admin workflows.',
        tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
        image: `${cleanBase}projects/hotel-reservation.jpg`,
      },
      {
        id: 'dparcels',
        title: 'dParcels — Real-Time Parcel Delivery',
        description:
          'Real-time parcel delivery platform designed for logistics operations, integrating AI Agent support and an intelligent customer assistance chatbot.',
        tags: ['Web Technologies', 'AI Agents', 'Chatbot', 'Git/GitHub'],
        image: `${cleanBase}projects/smart-attendance.jpg`,
      },
      {
        id: 'empowerpath',
        title: 'EmpowerPath — AI Career Ecosystem',
        description:
          'AI-driven platform for students, job seekers, and aspiring entrepreneurs with career guidance, resume feedback, mock interviews, and opportunity matching.',
        tags: ['Python', 'Generative AI', 'AI Agents', 'Machine Learning'],
        image: `${cleanBase}projects/edusync-ai.jpg`,
      },
      {
        id: 'atm-facial-rec',
        title: 'Banking ATM Facial Recognition',
        description:
          'Biometric ATM security system using facial and iris recognition for identity verification as an advanced security layer. Led a 6-member team.',
        tags: ['Java', 'XML', 'MySQL', 'Android Studio'],
        image: `${cleanBase}projects/cyber-firewall.jpg`,
      },
    ],
    experience: [
      {
        period: '2025 – 2028',
        role: 'B.Tech — Computer Science Engineering',
        company: 'Madanapalle Institute of Technology & Science (MITS)',
      },
      {
        period: '6 Months',
        role: 'Web Development Support Trainee',
        company: 'Groww India Solutions',
      },
      {
        period: '2022 – 2025',
        role: 'Diploma in Computer Engineering (92.17%)',
        company: 'Bheema Institute of Technology and Science, Adoni',
      },
      {
        period: 'Academic Project',
        role: 'Team Leader — ATM Biometric Security',
        company: 'Bheema Institute of Tech & Science (6-Member Team)',
      },
    ],
  },
}
