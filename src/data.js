export const data = {
  personal: {
    name: 'Aditya Panda',
    rolePill: 'Aditya Panda • Software Engineer • Mumbai, India',
    headlinePrefix: 'Building products\nat the intersection of',
    headlineHighlight: 'payments and AI.',
    heroBio:
      "I'm Aditya Panda, a Software Engineer at NTT DATA Payment Services, building scalable payment integrations, internal platforms and AI-powered tools. I enjoy turning complex problems into simple, elegant solutions.",
    email: 'aditya.panda.510@gmail.com',
    phone: '+91-9699924623',
    location: 'Mumbai, India',
    linkedin: 'https://www.linkedin.com/in/aditya-panda-520841215/',
    linkedinDisplay: 'in/aditya-panda-520841215',
    github: 'https://github.com/panda-510',
    githubDisplay: 'github.com/panda-510',
    website: 'https://panda-510.github.io',
    websiteDisplay: 'panda-510.github.io',
    resume: `${import.meta.env.BASE_URL}Aditya_Panda_Resume.pdf`,
    summary:
      'Software Engineer at NTT DATA Payment Services working on payment SDKs, internal platforms, and GenAI automation tools. Delivered 40–60% efficiency gains across 10+ enterprise clients.',
  },

  heroTechStack: [
    { name: 'React.js', icon: 'react' },
    { name: 'Node.js', icon: 'node' },
    { name: 'Python', icon: 'python' },
    { name: 'Go', icon: 'go' },
    { name: 'Flutter', icon: 'flutter' },
    { name: 'FastAPI', icon: 'fastapi' },
  ],

  stats: [
    { value: '40–60%', label: 'Efficiency gains via AI/ML', icon: 'zap' },
    { value: '10+', label: 'Enterprise clients served', icon: 'users' },
    { value: '30%', label: 'Reduction in ticket volume', icon: 'chart' },
    { value: '60%', label: 'Lower build overhead', icon: 'box' },
  ],

  skills: {
    genai: [
      'LLM Application Development',
      'Prompt Engineering',
      'AI Form Generation',
      'RAG Pipelines (Retrieval-Augmented Generation)',
      'LangChain',
      'OpenAI API',
      'Vector Databases & Embeddings',
      'Semantic Search',
      'Chatbot Architecture',
      'Agentic Workflows',
      'LLMs',
      'NLP',
      'ChromaDB',
    ],
    languages: ['Python', 'JavaScript', 'Dart', 'Go'],
    frontend: ['Flutter', 'React.js', 'Next.js', 'Formik', 'Android SDK', 'Cross-platform Development'],
    backend: ['Node.js', 'FastAPI', 'REST API Development'],
    databases: ['ChromaDB', 'Firebase', 'MongoDB', 'SQL', 'NoSQL'],
    tools: ['Git', 'Postman', 'Jira', 'API Integration', 'Agile/Scrum'],
    softSkills: ['Technical Communication', 'Team Collaboration', 'Stakeholder Management'],
  },

  experience: [
    {
      company: 'NTT DATA Payment Services',
      role: 'Software Engineer',
      period: 'Nov 2024 – Present',
      location: 'Mumbai, India',
      type: 'Full-time',
      badge: 'Best Rookie Award (2024)',
      highlights: [
        'Working on SDK development and payment gateway integrations across multiple platforms.',
        'Engineered 3 SDK kits in Node.js, Flutter, and Go for payment gateway APIs, cutting onboarding time by 40% and support tickets by 20%.',
        'Partnered with 10+ organizations across education, NGO, and government sectors to translate requirements into secure checkout solutions.',
        'Delivered 3 products — a LangChain + RAG LLM chatbot, Configurable Form Builder, and AI Form Builder — via GenAI automation, cutting developer queries by 30% and build overhead by 60%.',
        'Collaborated in bi-weekly Agile/Scrum sprints: code reviews, conveying AI/ML technical decisions to stakeholders, and owning 3 workstreams (LLM, SDK, form builder).',
      ],
    },
    {
      company: 'Freelance Software Developer',
      role: 'Full-Stack Mobile Developer',
      period: 'Jan 2024 – May 2024',
      location: 'Remote',
      type: 'Freelance',
      highlights: [
        'Shipped Lucrente, a cross-platform Flutter rental app with a 2-sided landlord/tenant marketplace, property listings, booking workflows, and Razorpay payment integration.',
      ],
    },
  ],

  projects: [
    {
      id: '01',
      name: 'AI Form Builder',
      shortName: 'AI Form Builder',
      organization: 'NTT DATA',
      period: '2025 – Present',
      category: 'Generative AI',
      status: 'Active Product',
      description:
        'Generates ready-to-use payment forms from a single text prompt with custom theme and field controls.',
      stack: ['React.js', 'Node.js', 'LLM APIs', 'Prompt Engineering'],
      type: 'form',
      bullets: [
        'Extended the form builder into an AI-powered form generator: a single prompt makes an LLM assemble ready-to-use payment forms.',
        'Added 4 customization controls: theme and color, add/delete fields, receipt parameters, and receipt header styling, so non-technical users need zero developer effort.',
      ],
    },
    {
      id: '02',
      name: 'Generic Form Builder',
      shortName: 'Generic Form Builder',
      organization: 'NTT DATA',
      period: '2024 – Present',
      category: 'Internal Tool & Platform',
      status: 'Production',
      description:
        'Drag-and-drop form builder with conditional logic, versioning, transaction status hooks, and Excel upload.',
      stack: ['React.js', 'Node.js', 'REST APIs', 'Excel'],
      type: 'builder',
      bullets: [
        'Assessed merchant signup patterns to build a reusable drag-and-drop form builder with field-level configuration and transaction status API hooks.',
        'Eliminated per-merchant custom form work, cutting build effort by 60% and go-live time by 50% across 10+ deployments; now standard internal tool.',
      ],
    },
    {
      id: '03',
      name: 'Payment SDKs',
      shortName: 'Payment SDKs',
      organization: 'NTT DATA',
      period: '2024 – Present',
      category: 'Developer Tooling & Infrastructure',
      status: 'Production',
      description:
        'Payment gateway SDK kits in Node.js, Flutter, and Go, cutting merchant onboarding time by 40%.',
      stack: ['Node.js', 'Flutter', 'Go', 'Python'],
      type: 'code',
      bullets: [
        'Engineered 3 SDK kits in Node.js, Flutter, and Go for payment gateway APIs, cutting onboarding time by 40% and support tickets by 20%.',
        'Partnered with 10+ organizations across education, NGO, and government sectors to translate requirements into secure checkout solutions.',
      ],
    },
    {
      id: '04',
      name: 'RAG-Based LLM Chatbot (Nisa)',
      shortName: 'NISA RAG Chatbot',
      organization: 'NTT DATA',
      period: '2024 – Present',
      category: 'RAG & AI Product',
      status: 'Production',
      description:
        'LangChain and ChromaDB RAG pipeline indexing API docs to answer developer queries via OpenAI.',
      stack: ['LangChain', 'ChromaDB', 'OpenAI', 'FastAPI', 'Python'],
      type: 'chat',
      bullets: [
        'Architected a Retrieval-Augmented Generation (RAG) pipeline with LangChain, indexing API documentation as embeddings in ChromaDB.',
        'Automated query resolution end-to-end, driving a 30% reduction in ticket volume and shortening new-hire ramp-up time.',
      ],
    },
    {
      id: '05',
      name: 'Lucrente',
      shortName: 'Lucrente Rental App',
      organization: 'Freelance Software Developer',
      period: 'Jan 2024 – May 2024',
      category: 'Mobile Application',
      status: 'Shipped',
      description:
        'Cross-platform Flutter rental marketplace app with property listings and Razorpay payment integration.',
      stack: ['Flutter', 'Dart', 'Razorpay', 'Cross-platform'],
      type: 'mobile',
      bullets: [
        'Shipped Lucrente, a cross-platform Flutter rental app with a 2-sided landlord/tenant marketplace, property listings, and Razorpay payment integration.',
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Engineering in Cyber Security',
    university: 'Mumbai University',
    year: 'Jun 2024',
    cgpa: '8.5 / 10',
  },

  achievements: [
    {
      title: 'Best Rookie Award',
      org: 'NTT DATA Payment Services',
      year: '2024',
      description:
        'Fast ramp-up and consistent delivery across multiple projects in the first quarter.',
    },
  ],

  nav: ['About', 'Experience', 'Projects', 'Skills', 'Education'],
}
