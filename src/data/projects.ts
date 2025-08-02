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
}

export const projects: Project[] = [
  {
    id: 'ecommerce-saas-platform',
    title: 'E-commerce SaaS Platform',
    description: 'Full-featured SaaS platform for multi-vendor e-commerce with real-time analytics, payment processing, and AI-powered recommendations.',
    longDescription: 'Built a comprehensive SaaS platform using MERN stack that serves multiple e-commerce businesses. Features include multi-tenant architecture, real-time analytics dashboard, AI-powered product recommendations, automated inventory management, and integrated payment processing with Stripe and PayPal.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Redis', 'Socket.io', 'Stripe API', 'AWS S3', 'JWT'],
    features: [
      'Multi-tenant SaaS architecture with subdomain routing',
      'Real-time analytics dashboard with Chart.js',
      'AI-powered product recommendation engine',
      'Automated inventory management and alerts',
      'Multi-payment gateway integration (Stripe, PayPal)',
      'Real-time order tracking with Socket.io',
      'Advanced user role management',
      'Automated email marketing campaigns',
      'Mobile-responsive Progressive Web App'
    ],
    challenges: [
      'Implementing scalable multi-tenant architecture',
      'Real-time data synchronization across multiple stores',
      'Complex payment processing with multiple gateways',
      'Performance optimization for large datasets'
    ],
    solutions: [
      'Designed database schemas with tenant isolation using Mongoose',
      'Implemented Redis caching and Socket.io for real-time features',
      'Created unified payment abstraction layer',
      'Used database indexing and query optimization techniques'
    ],
    image: '/images/projects/ecommerce-saas-main.jpg',
    images: [
      '/images/projects/ecommerce-saas-dashboard.jpg',
      '/images/projects/ecommerce-saas-analytics.jpg',
      '/images/projects/ecommerce-saas-mobile.jpg'
    ],
    category: 'saas',
    startDate: '2024-01',
    endDate: '2024-06',
    company: 'MUSCLED Inc'
  },
  {
    id: 'smart-inventory-system',
    title: 'Smart Inventory Management System',
    description: 'AI-powered inventory management system with predictive analytics, automated reordering, and real-time tracking using MEAN stack.',
    longDescription: 'Developed an intelligent inventory management system that uses machine learning for demand forecasting and automated reordering. Built with Angular frontend and Node.js backend, featuring real-time inventory tracking, barcode scanning, supplier management, and comprehensive reporting.',
    technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'TypeScript', 'Socket.io', 'TensorFlow.js', 'Chart.js'],
    features: [
      'AI-powered demand forecasting and automated reordering',
      'Real-time inventory tracking with barcode scanning',
      'Comprehensive supplier and vendor management',
      'Advanced analytics and reporting dashboard',
      'Multi-location warehouse management',
      'Low stock alerts and notifications',
      'Batch and expiry date tracking',
      'Integration with accounting software',
      'Mobile app for warehouse staff'
    ],
    challenges: [
      'Implementing accurate demand forecasting algorithms',
      'Real-time inventory synchronization across locations',
      'Complex business logic for automated reordering',
      'Performance optimization for large inventory datasets'
    ],
    solutions: [
      'Integrated TensorFlow.js for client-side ML predictions',
      'Used MongoDB change streams for real-time updates',
      'Implemented configurable business rules engine',
      'Applied database sharding and optimized queries'
    ],
    image: '/images/projects/inventory-system-main.jpg',
    images: [
      '/images/projects/inventory-dashboard.jpg',
      '/images/projects/inventory-analytics.jpg',
      '/images/projects/inventory-mobile.jpg'
    ],
    category: 'web',
    startDate: '2023-08',
    endDate: '2023-12',
    company: 'PinkSurfing'
  },
  {
    id: 'advanced-shopify-app-suite',
    title: 'Advanced Shopify App Suite',
    description: 'Comprehensive Shopify app ecosystem with theme customization, analytics, marketing automation, and customer engagement tools.',
    longDescription: 'Created a suite of interconnected Shopify apps that enhance store functionality. Includes theme section builder, advanced analytics dashboard, email marketing automation, customer loyalty program, and inventory management. Built using Node.js backend with React admin panels.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Shopify API', 'GraphQL', 'Liquid', 'Stripe', 'Twilio', 'AWS'],
    features: [
      'Drag-and-drop theme section builder',
      'Advanced store analytics and reporting',
      'Automated email marketing campaigns',
      'Customer loyalty and rewards program',
      'Real-time inventory sync across platforms',
      'Social media integration and automation',
      'A/B testing for product pages',
      'Multi-currency support',
      'Advanced SEO optimization tools'
    ],
    challenges: [
      'Complex Shopify API rate limiting and optimization',
      'Real-time synchronization between multiple apps',
      'Theme compatibility across different Shopify themes',
      'Scalable architecture for multiple store installations'
    ],
    solutions: [
      'Implemented intelligent API request queuing and caching',
      'Used webhooks and GraphQL subscriptions for real-time sync',
      'Created universal theme adapter with fallback mechanisms',
      'Designed microservices architecture with Docker containers'
    ],
    image: '/images/projects/shopify-suite-main.jpg',
    images: [
      '/images/projects/shopify-theme-builder.jpg',
      '/images/projects/shopify-analytics.jpg',
      '/images/projects/shopify-marketing.jpg'
    ],
    category: 'shopify',
    startDate: '2023-04',
    endDate: '2023-10',
    company: 'PinkSurfing'
  },
  {
    id: 'social-media-analytics-platform',
    title: 'Social Media Analytics Platform',
    description: 'Comprehensive social media management platform with AI-powered content scheduling, analytics, and engagement tracking.',
    longDescription: 'Built a powerful social media management platform that aggregates data from multiple social networks. Features AI-powered content scheduling, sentiment analysis, competitor tracking, and comprehensive analytics. Supports Instagram, Twitter, Facebook, and LinkedIn APIs.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Python', 'TensorFlow', 'Chart.js', 'Socket.io', 'AWS'],
    features: [
      'Multi-platform social media management',
      'AI-powered content scheduling and optimization',
      'Real-time sentiment analysis and monitoring',
      'Competitor tracking and benchmarking',
      'Advanced analytics and reporting',
      'Team collaboration and approval workflows',
      'Automated hashtag suggestions',
      'Engagement tracking and ROI analysis',
      'Custom dashboard creation'
    ],
    challenges: [
      'Integrating multiple social media APIs with different rate limits',
      'Real-time sentiment analysis on large data volumes',
      'Complex data aggregation and visualization',
      'Scalable architecture for enterprise clients'
    ],
    solutions: [
      'Built unified API abstraction layer with intelligent rate limiting',
      'Implemented microservices for ML processing with Python',
      'Used materialized views and caching for complex queries',
      'Deployed on AWS with auto-scaling and load balancing'
    ],
    image: '/images/projects/social-analytics-main.jpg',
    images: [
      '/images/projects/social-dashboard.jpg',
      '/images/projects/social-scheduler.jpg',
      '/images/projects/social-analytics.jpg'
    ],
    category: 'saas',
    startDate: '2022-10',
    endDate: '2023-03',
    company: 'Syntecx Solution'
  },
  {
    id: 'blockchain-supply-chain',
    title: 'Blockchain Supply Chain Tracker',
    description: 'Decentralized supply chain management system using blockchain technology for transparency and traceability.',
    longDescription: 'Developed a blockchain-based supply chain tracking system that provides end-to-end visibility of products from manufacturer to consumer. Uses smart contracts for automated verification, IPFS for document storage, and React for the user interface.',
    technologies: ['React', 'Node.js', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'MongoDB', 'Express.js'],
    features: [
      'End-to-end product traceability',
      'Smart contract automation for verification',
      'Decentralized document storage with IPFS',
      'QR code scanning for consumers',
      'Real-time supply chain visibility',
      'Automated compliance checking',
      'Multi-party collaboration tools',
      'Fraud detection and prevention'
    ],
    challenges: [
      'Complex smart contract development and testing',
      'Integration between blockchain and traditional databases',
      'User experience design for non-technical users',
      'Gas fee optimization for transactions'
    ],
    solutions: [
      'Developed comprehensive smart contract test suite',
      'Created hybrid architecture balancing blockchain and database storage',
      'Designed intuitive UI with guided workflows',
      'Implemented batch processing and gas price optimization'
    ],
    image: '/images/projects/blockchain-supply-main.jpg',
    images: [
      '/images/projects/blockchain-tracking.jpg',
      '/images/projects/blockchain-smart-contracts.jpg'
    ],
    category: 'web',
    startDate: '2023-01',
    endDate: '2023-05',
    company: 'Freelance'
  },
  {
    id: 'ai-powered-chatbot-platform',
    title: 'AI-Powered Customer Service Platform',
    description: 'Intelligent customer service platform with AI chatbots, ticket management, and real-time customer support.',
    longDescription: 'Built a comprehensive customer service platform featuring AI-powered chatbots with natural language processing, intelligent ticket routing, real-time chat support, and analytics dashboard. Integrates with multiple communication channels and CRM systems.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'OpenAI API', 'TensorFlow.js', 'Redis', 'AWS'],
    features: [
      'AI chatbot with natural language understanding',
      'Intelligent ticket routing and prioritization',
      'Real-time customer chat support',
      'Multi-channel communication (email, chat, social)',
      'Customer satisfaction surveys and analytics',
      'Knowledge base with smart search',
      'Agent performance monitoring',
      'CRM system integrations',
      'Automated escalation workflows'
    ],
    challenges: [
      'Training AI models for domain-specific conversations',
      'Real-time message processing at scale',
      'Complex workflow automation',
      'Integration with multiple third-party services'
    ],
    solutions: [
      'Fine-tuned OpenAI models with custom training data',
      'Implemented message queuing with Redis and Socket.io',
      'Built flexible workflow engine with visual designer',
      'Created unified API gateway for external integrations'
    ],
    image: '/images/projects/ai-chatbot-main.jpg',
    images: [
      '/images/projects/chatbot-interface.jpg',
      '/images/projects/ticket-management.jpg',
      '/images/projects/analytics-dashboard.jpg'
    ],
    category: 'saas',
    startDate: '2023-06',
    endDate: '2023-11',
    company: 'MUSCLED Inc'
  }
]

export const skills = [
  {
    category: 'Frontend Development',
    technologies: [
      { name: 'React', proficiency: 92, experience: '3+ years' },
      { name: 'Angular', proficiency: 88, experience: '3+ years' },
      { name: 'TypeScript', proficiency: 90, experience: '3+ years' },
      { name: 'JavaScript (ES6+)', proficiency: 94, experience: '4+ years' },
      { name: 'HTML5/CSS3', proficiency: 90, experience: '4+ years' },
      { name: 'Tailwind CSS', proficiency: 85, experience: '2+ years' },
      { name: 'Next.js', proficiency: 87, experience: '2+ years' },
      { name: 'Redux', proficiency: 83, experience: '2+ years' }
    ]
  },
  {
    category: 'Backend Development',
    technologies: [
      { name: 'Node.js', proficiency: 93, experience: '3+ years' },
      { name: 'Express.js', proficiency: 91, experience: '3+ years' },
      { name: 'MongoDB', proficiency: 89, experience: '3+ years' },
      { name: 'Mongoose', proficiency: 87, experience: '3+ years' },
      { name: 'PostgreSQL', proficiency: 85, experience: '3+ years' },
      { name: 'RESTful APIs', proficiency: 94, experience: '3+ years' },
      { name: 'GraphQL', proficiency: 78, experience: '2+ years' },
      { name: 'Socket.io', proficiency: 82, experience: '2+ years' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'AWS', proficiency: 82, experience: '2+ years' },
      { name: 'Google Cloud', proficiency: 78, experience: '2+ years' },
      { name: 'Heroku', proficiency: 85, experience: '2+ years' },
      { name: 'Firebase', proficiency: 80, experience: '2+ years' },
      { name: 'Docker', proficiency: 75, experience: '1+ years' },
      { name: 'Redis', proficiency: 80, experience: '2+ years' },
      { name: 'Nginx', proficiency: 70, experience: '1+ years' }
    ]
  },
  {
    category: 'Specialized Technologies',
    technologies: [
      { name: 'Shopify APIs', proficiency: 90, experience: '2+ years' },
      { name: 'Stripe Integration', proficiency: 88, experience: '2+ years' },
      { name: 'Twilio', proficiency: 82, experience: '2+ years' },
      { name: 'OpenAI API', proficiency: 85, experience: '1+ years' },
      { name: 'TensorFlow.js', proficiency: 75, experience: '1+ years' },
      { name: 'Blockchain/Web3', proficiency: 70, experience: '1+ years' },
      { name: 'IPFS', proficiency: 68, experience: '1+ years' }
    ]
  }
]

export const experience = [
  {
    company: 'MUSCLED Inc',
    position: 'Senior Full-Stack Developer',
    startDate: '2024-03',
    endDate: 'Present',
    location: 'Remote',
    description: 'Leading development of complex SaaS applications using MERN and MEAN stacks. Specialized in building scalable multi-tenant platforms, AI-powered features, and advanced analytics systems.',
    achievements: [
      'Built comprehensive e-commerce SaaS platform serving 500+ businesses',
      'Implemented AI-powered customer service platform reducing support costs by 40%',
      'Designed microservices architecture supporting 10M+ API calls/month',
      'Led team of 5 developers using Agile methodologies',
      'Optimized database performance improving query speeds by 60%'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Mongoose', 'AWS', 'Socket.io', 'OpenAI API']
  },
  {
    company: 'PinkSurfing',
    position: 'Full-Stack Developer',
    startDate: '2023-04',
    endDate: '2023-10',
    location: 'Remote',
    description: 'Focused on Shopify ecosystem development and inventory management systems. Built comprehensive app suites and smart analytics platforms using MEAN stack technologies.',
    achievements: [
      'Developed advanced Shopify app suite with 10,000+ installations',
      'Created smart inventory management system with AI-powered forecasting',
      'Integrated multiple payment gateways and social media APIs',
      'Improved app performance by 50% through optimization techniques',
      'Implemented real-time features using Socket.io and MongoDB change streams'
    ],
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Shopify API', 'TensorFlow.js', 'Redis']
  },
  {
    company: 'Syntecx Solution',
    position: 'Frontend Developer',
    startDate: '2022-09',
    endDate: '2023-03',
    location: 'Karachi, Pakistan',
    description: 'Developed responsive web applications and analytics dashboards. Collaborated with backend teams to deliver full-stack solutions with focus on user experience and performance.',
    achievements: [
      'Built social media analytics platform processing 1M+ posts daily',
      'Implemented responsive designs improving mobile engagement by 45%',
      'Created reusable component library reducing development time by 35%',
      'Mentored junior developers in React and modern frontend practices',
      'Integrated complex data visualization using Chart.js and D3.js'
    ],
    technologies: ['React', 'TypeScript', 'Chart.js', 'PostgreSQL', 'Python', 'AWS']
  }
]