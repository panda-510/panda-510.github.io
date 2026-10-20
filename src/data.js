export const data = {
  personal: {
    name: 'Aditya Panda',
    title: 'Software Engineer',
    subtitle: 'Generative AI Applications & Payment Infrastructure',
    email: 'aditya.panda.510@gmail.com',
    phone: '+91-9699924623',
    location: 'Mumbai, India',
    locationKicker: 'MUMBAI, INDIA',
    headlineLead: 'Building intelligent systems and resilient',
    headlineAccent: 'payment infrastructure.',
    heroBio:
      "I'm a Software Engineer at NTT DATA Payment Services, working on payment integrations, scalable backend systems, and AI-powered applications. I enjoy building products that solve real-world problems.",
    linkedin: 'https://linkedin.com/in/aditya-panda',
    linkedinDisplay: 'linkedin.com/in/aditya-panda',
    github: 'https://github.com/panda-510',
    githubDisplay: 'github.com/panda-510',
    website: 'https://panda-510.github.io',
    websiteDisplay: 'panda-510.github.io',
    resume: `${import.meta.env.BASE_URL}Aditya_Panda_Resume.pdf`,
    summary:
      'Full-Stack Software Engineer specializing in Generative AI application development — LLM integration, RAG pipelines, prompt engineering, AI-powered form generation, and LangChain-based agentic systems — alongside payment infrastructure and backend systems. Delivered 40–60% efficiency gains through AI/ML automation and API tooling across 10+ enterprise clients.',
    taglines: [
      'Generative AI & LLM application development',
      'RAG pipelines & LangChain agentic systems',
      'Payment gateway SDKs & secure infrastructure',
      'AI-powered form generation',
    ],
  },

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
    languages: ['Python', 'JavaScript', 'Dart'],
    frontend: ['Flutter', 'React.js', 'Formik', 'Android SDK', 'Cross-platform Development'],
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
      name: 'AI Form Builder (Prompt-to-Form)',
      organization: 'NTT DATA',
      period: '2025 – Present',
      category: 'Generative AI',
      status: 'Active Product',
      description:
        'Extended the form builder into an AI-powered form generator: a single prompt (e.g., “create a donation form”) makes an LLM fetch relevant fields and assemble a ready-to-use payment form.',
      stack: ['React.js', 'Node.js', 'LLM APIs', 'Prompt Engineering'],
      bullets: [
        'Extended the form builder into an AI-powered form generator: a single prompt (e.g., “create a donation form”) makes an LLM fetch relevant fields and assemble a ready-to-use payment form.',
        'Added 4 customization controls: theme and color, add/delete fields, receipt parameters, and receipt header styling, so non-technical users need zero developer effort.',
      ],
    },
    {
      name: 'RAG-Based LLM Chatbot (Nisa)',
      organization: 'NTT DATA',
      period: '2024 – Present',
      category: 'RAG & AI Product',
      status: 'Production',
      description:
        'Architected a Retrieval-Augmented Generation (RAG) pipeline with LangChain, indexing API documentation as embeddings in a ChromaDB vector store for NLP responses via OpenAI LLM APIs.',
      stack: ['LangChain', 'ChromaDB', 'OpenAI', 'FastAPI', 'Python'],
      bullets: [
        'Architected a Retrieval-Augmented Generation (RAG) pipeline with LangChain, indexing API documentation as embeddings in a ChromaDB vector store for NLP responses via OpenAI LLM APIs.',
        'Automated query resolution end-to-end, driving a 30% reduction in ticket volume and shortening new-hire ramp-up time.',
      ],
    },
    {
      name: 'Configurable Generic Form Builder',
      organization: 'NTT DATA',
      period: '2024 – Present',
      category: 'Internal Tool & Platform',
      status: 'Production',
      description:
        'Assessed merchant signup patterns to build a reusable drag-and-drop form builder with field-level configuration, transaction status API hooks, Excel bulk upload, and customizable receipt generation.',
      stack: ['React.js', 'Node.js', 'REST APIs', 'Excel'],
      bullets: [
        'Assessed merchant signup patterns to build a reusable drag-and-drop form builder with field-level configuration, transaction status API hooks, Excel bulk upload, and customizable receipt generation.',
        'Eliminated per-merchant custom form work, cutting build effort by 60% and go-live time by 50% across 10+ deployments; now NTT DATA’s standard internal tool.',
      ],
    },
    {
      name: 'Lucrente',
      organization: 'Freelance Software Developer',
      period: 'Jan 2024 – May 2024',
      category: 'Mobile Application',
      status: 'Shipped',
      description:
        'Shipped Lucrente, a cross-platform Flutter rental app with a 2-sided landlord/tenant marketplace, property listings, booking workflows, and Razorpay payment integration.',
      stack: ['Flutter', 'Dart', 'Razorpay', 'Cross-platform'],
      bullets: [
        'Shipped Lucrente, a cross-platform Flutter rental app with a 2-sided landlord/tenant marketplace, property listings, booking workflows, and Razorpay payment integration.',
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

  nav: ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Resume', 'Contact'],
}
