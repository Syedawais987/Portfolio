export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  challenges: string[]
  solutions: string[]
  image: string
  images: string[]
  githubUrl?: string
  liveUrl?: string
  category: 'web' | 'shopify' | 'mobile' | 'saas'
  startDate: string
  endDate: string
  company: string
  status?: 'completed' | 'in-progress'
  role?: string
}

export const projects: Project[] = [
  // 1. Where Works
  {
    id: 'where-works',
    title: 'Where Works - Cloud Tracking Platform',
    description: 'Cloud-based tracking solution providing affordable monitoring capabilities for businesses across various industries.',
    longDescription: 'Contributed to building Where Works, a comprehensive cloud-based tracking platform that provides affordable tracking solutions for businesses. Features include real-time monitoring, industry-specific solutions, and comprehensive analytics.',
    technologies: ['WordPress', 'PHP', 'WooCommerce', 'JavaScript', 'MySQL', 'REST API', 'CSS Grid'],
    features: [
      'Cloud-based tracking infrastructure',
      'Industry-specific solution modules',
      'Component-based modular architecture',
      'Business analytics and reporting',
      'Mobile-responsive design',
      'WooCommerce integration',
      'Contact and inquiry forms',
      'GDPR compliance tools'
    ],
    challenges: [
      'Building modular architecture for different industries',
      'Integrating with various tracking hardware',
      'Performance optimization for real-time data',
      'Creating intuitive user dashboards'
    ],
    solutions: [
      'Plugin-based architecture for flexibility',
      'Abstraction layer for hardware integration',
      'Caching and optimized database queries',
      'Custom dashboard widgets with live updates'
    ],
    image: '/images/projects/where-works.png',
    images: [
      '/images/projects/where-works-home.png',
      '/images/projects/where-works-features.png'
    ],
    liveUrl: 'https://app.where.works/',
    category: 'web',
    startDate: '2022-10',
    endDate: '2023-02',
    company: 'Syntecx Solutions',
    status: 'completed'
  },
  // 2. VoiceForge
  {
    id: 'voiceforge-stt',
    title: 'VoiceForge - Speech Recognition Platform',
    description: 'Advanced speech-to-text platform with real-time WebSocket streaming, speaker diarization, and language detection. A Deepgram alternative.',
    longDescription: 'Built a comprehensive speech recognition platform as a Deepgram alternative using OpenAI Whisper. Features real-time WebSocket streaming with sub-500ms latency, speaker diarization for multi-speaker conversations, and automatic language detection.',
    technologies: ['Python', 'FastAPI', 'WebSocket', 'PostgreSQL', 'OpenAI Whisper', 'JWT', 'Google OAuth', 'Docker', 'TensorFlow'],
    features: [
      'Real-time speech recognition with sub-500ms latency',
      'WebSocket streaming for live transcription',
      'Speaker diarization (up to 10 speakers)',
      'Language auto-detection across 5+ languages',
      'Advanced noise reduction pipeline',
      'Interactive playground with drag-and-drop',
      'Google OAuth authentication',
      'Developer portal with API key management',
      '99%+ accuracy across 100+ languages'
    ],
    challenges: [
      'Achieving sub-500ms latency for real-time streaming',
      'Accurate speaker diarization in noisy environments',
      'Scaling WebSocket connections efficiently',
      'Building intuitive developer experience'
    ],
    solutions: [
      'Optimized audio chunking and parallel processing',
      'Voice characteristic analysis with K-means clustering',
      'Connection pooling and load balancing',
      'Interactive documentation with live examples'
    ],
    image: '/images/projects/voiceforge.png',
    images: [
      '/images/projects/voiceforge-landing.png',
      '/images/projects/voiceforge-playground.png',
      '/images/projects/voiceforge-portal.png'
    ],
    category: 'saas',
    startDate: '2023-06',
    endDate: '2023-10',
    company: 'PinkSurfing',
    status: 'completed',
    role: 'Backend Developer'
  },
  // 3. BrightLink Quote Management
  {
    id: 'brightlink-quote-management',
    title: 'BrightLink Quote Management',
    description: 'Private Shopify App for comprehensive quote creation and approval workflow system for BrightLink AV.',
    longDescription: 'Developed a complete private Shopify app for BrightLink AV that streamlines their quote management process. Features include customer management, space/project management, multi-tier payment processing, PDF generation, and email integration.',
    technologies: ['Remix.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma ORM', 'Shopify Polaris', 'Node.js', 'Express', 'Puppeteer', 'Nodemailer'],
    features: [
      'Complete quote creation and approval workflow',
      'Customer and space/project management',
      'Role-based permissions (Salesperson, Admin, Customer)',
      'Analytics dashboard with performance metrics',
      'PDF quote generation with Puppeteer',
      'Email integration with OAuth2 authentication',
      'Shopify product catalog integration',
      'Multi-tier payment processing with Stripe',
      'Real-time quote status tracking'
    ],
    challenges: [
      'Complex multi-step quote approval workflow',
      'PDF generation matching brand requirements',
      'Integration with existing Shopify ecosystem',
      'Handling large product catalogs efficiently'
    ],
    solutions: [
      'Built state machine for workflow management',
      'Custom Puppeteer templates for branded PDFs',
      'GraphQL for efficient product queries',
      'Implemented pagination and caching strategies'
    ],
    image: '/images/projects/brightlink-quote.png',
    images: [
      '/images/projects/brightlink-dashboard.png',
      '/images/projects/brightlink-quote-create.png',
      '/images/projects/brightlink-analytics.png'
    ],
    liveUrl: 'https://brightlinkav.com/',
    category: 'shopify',
    startDate: '2024-03',
    endDate: '2024-08',
    company: 'MUSCLED Inc',
    status: 'completed'
  },
  // 4. StyleUP - Conversion Booster
  {
    id: 'styleup-conversion-booster',
    title: 'StyleUP - Conversion Booster',
    description: 'Shopify Public App with 20+ conversion-boosting app blocks and theme sections. Clone of Sternify with enhanced features.',
    longDescription: 'Currently building a powerful Shopify app that helps merchants increase conversions through customizable app blocks. Features social proof elements, trust builders, inventory alerts, and promotional tools with multi-language support.',
    technologies: ['Remix 2.14', 'Express', 'Prisma 6', 'PostgreSQL', 'Shopify Polaris 13', 'TailwindCSS', 'i18next', 'TypeScript', 'Shopify App Bridge'],
    features: [
      '20+ conversion-boosting app blocks',
      'Social proof elements (star ratings, customer reviews)',
      'Trust builders (payment icons, guarantees, benefits)',
      'Inventory alerts and availability indicators',
      'Promotional elements (coupon codes, banners)',
      'Theme sections (headers, footers, FAQ)',
      'One-click block installation via deep linking',
      'Multi-theme support and customization',
      'Subscription billing with free trial',
      'Internationalization (German/English)'
    ],
    challenges: [
      'Creating universal blocks compatible with all themes',
      'Managing subscription billing edge cases',
      'Performance optimization for multiple blocks',
      'Deep linking integration with theme editor'
    ],
    solutions: [
      'Built adaptive CSS with theme detection',
      'Implemented Shopify billing API with webhooks',
      'Lazy loading and code splitting for blocks',
      'Custom deep link generation for each block'
    ],
    image: '/images/projects/styleup.png',
    images: [
      '/images/projects/styleup-dashboard.png',
      '/images/projects/styleup-blocks.png',
      '/images/projects/styleup-theme.png'
    ],
    category: 'shopify',
    startDate: '2024-10',
    endDate: 'Present',
    company: 'MUSCLED Inc',
    status: 'in-progress'
  },
  // 5. Muscled Sektions
  {
    id: 'muscled-sektions',
    title: 'Muscled Sektions',
    description: 'Shopify Public App - Auto-import section marketplace with enhanced modules. A comprehensive clone of Sections Store with additional features.',
    longDescription: 'Built a complete Shopify Public App that enables merchants to easily import pre-built sections into their stores. Features auto-import from GitHub repository via webhooks, admin approval workflow, and a marketplace for both free and paid sections.',
    technologies: ['React', 'Node.js', 'Shopify API', 'Liquid', 'GitHub Webhooks', 'Google Cloud Storage', 'PostgreSQL', 'Express.js'],
    features: [
      'Auto-import sections from GitHub repository via webhooks',
      'Real-time webhook-triggered section syncing',
      'Admin approval workflow with status management',
      'Section metadata validation and error handling',
      'Preview and thumbnail image support',
      'Category-based organization with 30+ categories',
      'Paid/Free section support with discount pricing',
      'Asset management for CSS, JS, and Liquid snippets',
      'Multi-tenant architecture for scalability'
    ],
    challenges: [
      'Building reliable webhook handling for GitHub events',
      'Managing large file uploads to cloud storage',
      'Creating flexible section validation system',
      'Ensuring Liquid template compatibility across themes'
    ],
    solutions: [
      'Implemented robust webhook verification and retry logic',
      'Used Google Cloud Storage with chunked uploads',
      'Built comprehensive JSON schema validation',
      'Created universal theme adapter with fallbacks'
    ],
    image: '/images/projects/muscled-sektions.png',
    images: [
      '/images/projects/muscled-sektions-dashboard.png',
      '/images/projects/muscled-sektions-sections.png',
      '/images/projects/muscled-sektions-admin.png'
    ],
    category: 'shopify',
    startDate: '2024-06',
    endDate: '2024-12',
    company: 'MUSCLED Inc',
    status: 'completed'
  },
  // 6. 11Pay
  {
    id: '11pay-team-finance',
    title: '11Pay - Team Finance App',
    description: 'Mobile app for managing sports team finances with smart automatic payment allocation. Available on iOS App Store.',
    longDescription: 'Worked on the backend of a React Native mobile app for managing sports team finances. Features a unique smart auto-payment system that automatically allocates deposits to outstanding fines, with role-based permissions and real-time balance tracking.',
    technologies: ['React Native', 'Expo SDK 53', 'TypeScript', 'Supabase', 'PostgreSQL', 'Node.js'],
    features: [
      'Smart auto-payment allocation system (USP)',
      'Team creation with unique invite codes',
      'Role-based permissions (Admin, Treasurer, Player)',
      'Real-time balance calculations',
      'Transaction history with audit trail',
      'German language support',
      'Row Level Security (RLS) policies',
      'Offline support and caching',
      'Push notifications for transactions'
    ],
    challenges: [
      'Designing smart payment allocation algorithm',
      'Implementing robust offline-first architecture',
      'Complex RLS policies for team data isolation',
      'Real-time sync across team members'
    ],
    solutions: [
      'Priority-based allocation with configurable rules',
      'Supabase realtime subscriptions with conflict resolution',
      'Comprehensive RLS with team-based policies',
      'Optimistic updates with rollback handling'
    ],
    image: '/images/projects/11pay.png',
    images: [
      '/images/projects/11pay-home.png',
      '/images/projects/11pay-team.png',
      '/images/projects/11pay-transactions.png'
    ],
    liveUrl: 'https://apps.apple.com/de/app/11pay-mannschaftskasse/id6755011188',
    category: 'mobile',
    startDate: '2024-11',
    endDate: '2025-01',
    company: 'Fiverr Freelance',
    status: 'completed',
    role: 'Backend Developer'
  },
  // 7. AK K9 Security Services
  {
    id: 'akk9-security',
    title: 'AK K9 Security Services',
    description: 'Professional website for London-based security firm offering K9 units, man guarding, CCTV monitoring, and event security services.',
    longDescription: 'Built a professional website for AK K9 Security Services Ltd, a London-based security company. The site showcases their comprehensive security offerings including K9 units, manned guarding, CCTV monitoring, and event security with a focus on credibility and trust.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'Service showcase pages (K9, Guarding, CCTV, Events)',
      'Service area coverage display with map',
      'Client testimonials and reviews section',
      'Contact forms with validation',
      'Mobile-responsive design',
      'SEO optimized pages',
      'Fast loading with image optimization',
      'Professional modern design'
    ],
    challenges: [
      'Conveying trust and professionalism visually',
      'Optimizing for local SEO',
      'Creating intuitive service navigation',
      'Mobile-first responsive design'
    ],
    solutions: [
      'Clean design with trust indicators and certifications',
      'Local schema markup and optimized meta tags',
      'Clear service categorization with CTAs',
      'Tailwind responsive utilities throughout'
    ],
    image: '/images/projects/akk9-security.png',
    images: [
      '/images/projects/akk9-home.png',
      '/images/projects/akk9-services.png'
    ],
    liveUrl: 'https://www.akk9securityservices.co.uk/',
    category: 'web',
    startDate: '2024-08',
    endDate: '2024-09',
    company: 'Freelance',
    status: 'completed'
  },
  // 8. Zenith Med Care
  {
    id: 'zenith-medcare',
    title: 'Zenith Med Care',
    description: 'Medical billing and revenue cycle management company website showcasing healthcare financial services.',
    longDescription: 'Developed a professional website for Zenith Med Care, a medical billing and RCM company. The site effectively communicates their services including medical billing, credentialing, and AR management with a focus on trust and compliance.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'Service pages (Medical Billing, RCM, Credentialing)',
      'Performance metrics display (98% first-pass rate)',
      'Multi-step onboarding process showcase',
      'Client testimonials section',
      'HIPAA compliance information',
      'Contact and consultation forms',
      'Mobile-responsive design',
      'Professional healthcare design'
    ],
    challenges: [
      'Communicating complex healthcare services simply',
      'Building trust in sensitive industry',
      'Highlighting key performance metrics',
      'HIPAA-conscious design approach'
    ],
    solutions: [
      'Clear service breakdowns with visual aids',
      'Trust indicators and compliance badges',
      'Animated counters for statistics',
      'Secure form handling and privacy notices'
    ],
    image: '/images/projects/zenith-medcare.png',
    images: [
      '/images/projects/zenith-home.png',
      '/images/projects/zenith-services.png'
    ],
    liveUrl: 'https://zenithmedcare.com/',
    category: 'web',
    startDate: '2024-09',
    endDate: '2024-10',
    company: 'Freelance',
    status: 'completed'
  }
  ,
  // 9. Shopify Subscription App
  {
    id: 'shopify-subscription-app',
    title: 'Shopify Subscription App',
    description:
      'Full-featured Shopify subscription management app with Subscribe & Save, volume pricing tiers, customer portal, analytics, and in-app billing.',
    longDescription:
      'Built a comprehensive Shopify subscription management app using Remix, Express, Prisma, and Polaris. The app supports Subscribe & Save plans, tiered volume pricing, subscription contract management, a customer self-service portal (Customer Account UI Extension), analytics dashboards, dunning management, and Shopify Billing API integration.',
    technologies: [
      'Remix',
      'Express.js',
      'Prisma',
      'PostgreSQL',
      'Shopify Polaris',
      'TypeScript',
      'Shopify Billing API',
      'Shopify Functions',
      'Webhooks'
    ],
    features: [
      'Subscribe & Save plans with frequency tiers and discounts',
      'Tier-based volume pricing synced via metafields',
      'Subscription contract management (pause, cancel, skip, swap)',
      'Customer portal for self-service subscription changes',
      'Analytics dashboards for subscriptions & discounts',
      'Dunning management for failed payments',
      'Plan gating and in-app billing with trials',
      'Webhook-driven billing status synchronization'
    ],
    challenges: [
      'Designing flexible subscription & pricing rules across products',
      'Ensuring reliable sync between app state and Shopify',
      'Building responsive admin UX in Polaris for complex workflows',
      'Tracking analytics accurately across changing configurations'
    ],
    solutions: [
      'Metafield-backed data model with clear versioning strategy',
      'Webhook verification, retries, and idempotent handlers',
      'Polaris-driven UI patterns with guided multi-step flows',
      'Event-driven metrics pipeline and consistent identifiers'
    ],
    image: '/images/projects/shopify-subscription-app.png',
    images: [
      '/images/projects/shopify-subscription-app-dashboard.png',
      '/images/projects/shopify-subscription-app-portal.png'
    ],
    category: 'shopify',
    startDate: '2025-01',
    endDate: 'Present',
    company: 'Freelance',
    status: 'in-progress'
  },
  // 10. Aurora Wellness Health
  {
    id: 'aurora-wellness-health',
    title: 'Aurora Wellness Health',
    description: 'Marketing website for a wellness/health brand with clear service messaging and modern responsive UI.',
    longDescription:
      'Designed and built a modern, responsive marketing website focused on clarity, trust, and conversion. Optimized layout, typography, and CTAs to help users quickly understand offerings and take action.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'Mobile-first responsive layout',
      'SEO-friendly page structure',
      'Conversion-focused CTAs and sections',
      'Fast performance with modern frontend stack'
    ],
    challenges: [
      'Balancing design aesthetics with fast performance',
      'Structuring content for clarity and conversion'
    ],
    solutions: [
      'Component-based layout with consistent spacing and hierarchy',
      'Performance-focused assets and clean, semantic structure'
    ],
    image: '/images/projects/aurora-wellness-health.png',
    images: ['/images/projects/aurora-wellness-health-home.png'],
    liveUrl: 'https://aurorawellnesshealth.org/',
    category: 'web',
    startDate: '2025-02',
    endDate: '2025-03',
    company: 'Freelance',
    status: 'completed'
  },
  // 11. Xero Consultancy
  {
    id: 'xero-consultancy',
    title: 'Xero Consultancy',
    description: 'Consultancy website with modern UI, clear service sections, and fast loading pages.',
    longDescription:
      'Built a clean consultancy website with a focus on credibility, clear positioning, and responsive design. Implemented a structured layout for services and a smooth user journey across key pages.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    features: [
      'Responsive pages and sections',
      'Clear service and value proposition layout',
      'Optimized UX for quick navigation',
      'Deployed on Vercel'
    ],
    challenges: ['Presenting complex services simply', 'Maintaining consistent design system across pages'],
    solutions: ['Reusable section components and consistent typography scale', 'Iterative UI refinements based on content hierarchy'],
    image: '/images/projects/xero-consultancy.png',
    images: ['/images/projects/xero-consultancy-home.png'],
    liveUrl: 'https://xero-consultancy-4a6a.vercel.app/',
    category: 'web',
    startDate: '2025-03',
    endDate: '2025-03',
    company: 'Freelance',
    status: 'completed'
  }
]

export const skills = [
  {
    category: 'Frontend Development',
    technologies: [
      { name: 'React', proficiency: 92, experience: '3+ years' },
      { name: 'Next.js', proficiency: 90, experience: '2+ years' },
      { name: 'TypeScript', proficiency: 90, experience: '3+ years' },
      { name: 'JavaScript (ES6+)', proficiency: 94, experience: '4+ years' },
      { name: 'Tailwind CSS', proficiency: 88, experience: '2+ years' },
      { name: 'Remix', proficiency: 85, experience: '1+ years' },
      { name: 'Shopify Polaris', proficiency: 87, experience: '2+ years' },
      { name: 'Framer Motion', proficiency: 80, experience: '1+ years' }
    ]
  },
  {
    category: 'Backend Development',
    technologies: [
      { name: 'Node.js', proficiency: 93, experience: '3+ years' },
      { name: 'Express.js', proficiency: 91, experience: '3+ years' },
      { name: 'PostgreSQL', proficiency: 88, experience: '3+ years' },
      { name: 'Supabase', proficiency: 85, experience: '1+ years' },
      { name: 'MongoDB', proficiency: 85, experience: '2+ years' },
      { name: 'Prisma ORM', proficiency: 87, experience: '2+ years' },
      { name: 'RESTful APIs', proficiency: 94, experience: '3+ years' },
      { name: 'GraphQL', proficiency: 80, experience: '2+ years' }
    ]
  },
  {
    category: 'Cloud',
    technologies: [
      { name: 'Google Cloud (GCP)', proficiency: 82, experience: '2+ years' },
      { name: 'Vercel', proficiency: 88, experience: '2+ years' },
      { name: 'AWS', proficiency: 78, experience: '2+ years' },
      { name: 'Firebase', proficiency: 80, experience: '2+ years' },
      { name: 'Git/GitHub', proficiency: 92, experience: '4+ years' }
    ]
  },
  {
    category: 'Shopify & Specialized',
    technologies: [
      { name: 'Shopify App Development', proficiency: 92, experience: '2+ years' },
      { name: 'Shopify APIs (REST/GraphQL)', proficiency: 90, experience: '2+ years' },
      { name: 'Liquid Templating', proficiency: 88, experience: '2+ years' },
      { name: 'Shopify App Bridge', proficiency: 85, experience: '2+ years' },
      { name: 'Python/FastAPI', proficiency: 78, experience: '1+ years' },
      { name: 'WebSocket', proficiency: 82, experience: '1+ years' },
      { name: 'Stripe Integration', proficiency: 85, experience: '2+ years' }
    ]
  }
]

export const experience = [
  {
    company: 'MUSCLED Inc',
    position: 'Full-Stack Developer',
    startDate: '2024-03',
    endDate: 'Present',
    location: 'Remote',
    description: 'Leading development of Shopify public and private apps using modern technologies. Building scalable solutions for e-commerce merchants including section marketplaces, conversion tools, and custom business applications.',
    achievements: [
      'Built Muscled Sektions - a Shopify public app for section marketplace with auto-import from GitHub',
      'Developed BrightLink Quote Management - private Shopify app with complete quote workflow',
      'Currently building StyleUP - conversion booster app with 20+ app blocks',
      'Implemented Shopify billing integration with subscription management',
      'Designed scalable architecture handling multiple concurrent merchant installations'
    ],
    technologies: ['React', 'Remix', 'Node.js', 'PostgreSQL', 'Shopify APIs', 'Prisma', 'TypeScript', 'GCP']
  },
  {
    company: 'PinkSurfing',
    position: 'Backend Developer',
    startDate: '2023-04',
    endDate: '2023-10',
    location: 'Remote',
    description: 'Focused on backend development for speech recognition and AI-powered applications. Built real-time streaming infrastructure and API services using Python and FastAPI.',
    achievements: [
      'Built VoiceForge - a Deepgram alternative with real-time speech recognition',
      'Implemented WebSocket streaming with sub-500ms latency',
      'Developed speaker diarization system handling up to 10 speakers',
      'Created REST and WebSocket APIs with comprehensive documentation',
      'Integrated Google OAuth and JWT authentication systems'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'WebSocket', 'OpenAI Whisper', 'Docker', 'JWT']
  },
  {
    company: 'Syntecx Solutions',
    position: 'Frontend Developer',
    startDate: '2022-09',
    endDate: '2023-03',
    location: 'Islamabad, Pakistan',
    description: 'Developed responsive web applications and contributed to cloud-based tracking platform. Collaborated with backend teams to deliver full-stack solutions with focus on user experience.',
    achievements: [
      'Contributed to Where Works - cloud-based tracking platform',
      'Built responsive interfaces using modern CSS frameworks',
      'Implemented WooCommerce integrations for e-commerce features',
      'Created reusable component library reducing development time by 35%',
      'Collaborated on industry-specific tracking solutions'
    ],
    technologies: ['React', 'JavaScript', 'WordPress', 'PHP', 'WooCommerce', 'CSS Grid', 'REST APIs']
  }
]
