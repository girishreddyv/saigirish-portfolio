import {
  Bot,
  BrainCircuit,
  Braces,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
  Zap
} from "lucide-react";

export const profile = {
  name: "Sai Girish Reddy Vadlathala",
  shortName: "Sai Girish",
  headline: "Software Engineer | AI Systems, RAG, MLOps | .NET Backend | Cloud",
  email: "saigirishvadlathala22@gmail.com",
  phone: "+1 (719) 377-6410",
  location: "United States",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/saigirish-vadlathala-b22434141/",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  resumePath: "/resume/SaiGirish-Resume.pdf",
  summary:
    "Software Engineer with 5+ years of experience building AI-driven and cloud-native applications across RAG pipelines, MLOps workflows, OCR automation, microservices, and production .NET systems. Known for turning ambiguous business workflows into reliable platforms with measurable gains: 10,000+ automated documents, 55% performance improvements, 65% faster deployments, and resilient systems supporting high-volume daily transactions.",
  targetRoles: ["AI Engineer", "MLOps Engineer", "AI Platform Engineer", "Backend AI Systems Engineer"]
};

export const impactStats = [
  { value: "5+", label: "Years building production software" },
  { value: "10K+", label: "Documents automated through OCR workflows" },
  { value: "50K+", label: "Daily transactions handled by .NET services" },
  { value: "45%", label: "Deployment failures reduced through CI/CD" }
];

export const experience = [
  {
    company: "Stine Seed Company",
    location: "West Des Moines, IA",
    role: "Software Development Engineer",
    duration: "Aug 2025 - Present",
    theme: "AI systems, MLOps, real-time platforms",
    technologies: ["Python", ".NET", "LangChain", "MLflow", "Kubeflow", "Airflow", "SignalR", "Azure DevOps", "Hangfire"],
    achievements: [
      "Design and deploy end-to-end AI-driven applications from requirements through production release.",
      "Build and optimize RAG pipelines with LangChain and vector databases to improve response relevance and retrieval quality.",
      "Implement MLOps workflows with MLflow, Kubeflow, and Airflow for training, versioning, orchestration, and scalable deployment.",
      "Automate OCR-based document processing for 10,000+ documents, reducing manual effort and turnaround time.",
      "Built a SignalR notification system for 200+ concurrent users with authentication, resource locking, reconnect flows, and 85% fewer data conflicts.",
      "Built Azure DevOps CI/CD pipelines across DEV, TEST, UAT, and PROD, reducing deployment time by 65% and release failures by 45%.",
      "Built resilient .NET integrations and background workflows handling 50,000+ daily transactions with 99.9% uptime."
    ]
  },
  {
    company: "Kineticloud",
    location: "Remote",
    role: "Software Engineer",
    duration: "Jun 2024 - Jun 2025",
    theme: "Cloud modernization, APIs, platform reliability",
    technologies: [".NET", "Angular", "Microservices", "API Gateway", "Docker", "CI/CD", "Cloud Architecture"],
    achievements: [
      "Led migration of 5 legacy COBOL systems and 100,000+ lines of code to cloud-native .NET and Angular architecture.",
      "Reduced infrastructure costs by 35% while improving performance through modernization and refactoring.",
      "Designed API contracts consumed by 12+ applications, reducing integration defects by 40% and accelerating delivery by 30%.",
      "Improved API response times from 800ms to 350ms and supported a 3x traffic increase.",
      "Standardized CI/CD release practices across environments for faster and more predictable production rollouts."
    ]
  },
  {
    company: "University of Colorado Colorado Springs",
    location: "Colorado Springs, CO",
    role: "Graduate Research & Teaching Assistant",
    duration: "Sep 2023 - May 2024",
    theme: "Algorithms, teaching, research",
    technologies: ["Python", "Algorithms", "Data Processing", "Software Engineering"],
    achievements: [
      "Mentored 30+ students in programming fundamentals and software development concepts.",
      "Conducted research in data processing and algorithm optimization to improve computational efficiency.",
      "Assisted in designing course materials aligned with industry software engineering practices."
    ]
  },
  {
    company: "Clove Technologies",
    location: "India",
    role: "Software Engineer",
    duration: "Jul 2021 - Jul 2023",
    theme: "Backend APIs, Angular, data systems",
    technologies: ["ASP.NET Web API", "Angular", "SQL Server", "MongoDB", "Docker", "Azure DevOps", "REST APIs"],
    achievements: [
      "Developed 15+ RESTful APIs supporting 8,000+ daily requests with 99.5% uptime.",
      "Built Angular interfaces for data visualization and seamless backend interaction.",
      "Designed SQL Server and MongoDB operations for structured and semi-structured workflows.",
      "Improved application performance through API and database query optimization.",
      "Supported CI/CD, testing, debugging, and deployment of microservices-based applications."
    ]
  }
];

export const projects = [
  {
    title: "Production RAG Intelligence Layer",
    type: "AI Systems",
    description:
      "Retrieval-augmented generation workflow designed for high-relevance answers, vector search, and production-grade orchestration.",
    highlights: ["LangChain retrieval chains", "Vector database indexing", "Evaluation-driven prompt improvements", "Cloud deployment path"],
    stack: ["Python", "LangChain", "RAG", "Vector DBs", "Azure", "AWS"],
    metric: "Improved retrieval quality for AI-assisted workflows",
    icon: BrainCircuit
  },
  {
    title: "OCR Document Automation Platform",
    type: "AI Workflow Automation",
    description:
      "Automated extraction, validation, and routing pipeline for document-heavy business workflows with resilient backend processing.",
    highlights: ["10,000+ documents automated", "Background retries", "Validation checkpoints", "Operational visibility"],
    stack: ["OCR", ".NET Worker Services", "Hangfire", "SQL Server", "Azure"],
    metric: "10K+ documents processed",
    icon: Bot
  },
  {
    title: "Real-Time Collaboration Notifications",
    type: "Distributed Systems",
    description:
      "SignalR system for authenticated, concurrent user workflows with resource locking, reconnect handling, and conflict reduction.",
    highlights: ["200+ concurrent users", "Automatic reconnect", "Resource lock model", "85% fewer data conflicts"],
    stack: ["SignalR", "ASP.NET Core", "Azure AD", "MSAL", "REST APIs"],
    metric: "85% conflict reduction",
    icon: Network
  },
  {
    title: "Cloud-Native Legacy Modernization",
    type: "Platform Engineering",
    description:
      "Migration of legacy COBOL systems into a modular .NET and Angular platform with API gateway patterns and CI/CD delivery.",
    highlights: ["5 systems migrated", "100K+ LOC modernized", "35% lower infrastructure cost", "3x traffic support"],
    stack: [".NET", "Angular", "Docker", "API Gateway", "CI/CD"],
    metric: "55% performance improvement",
    icon: Layers3
  }
];

export const skillGroups = [
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["RAG", "LLMs", "LangChain", "OCR", "MLflow", "Kubeflow", "Airflow", "Pinecone", "FAISS"]
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["C#", "ASP.NET Core", ".NET", "REST APIs", "Microservices", "Worker Services", "Hangfire", "SignalR"]
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS EC2", "AWS S3", "Lambda", "RDS", "Azure DevOps", "Azure Functions", "Azure Storage", "Azure AD"]
  },
  {
    title: "Frontend",
    icon: Braces,
    skills: ["Angular", "React", "TypeScript", "JavaScript", "Responsive UI", "Component Systems"]
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["GitHub Actions", "Azure Pipelines", "Jenkins", "Docker", "Kubernetes", "CI/CD", "Release Automation"]
  },
  {
    title: "Data",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Data Processing", "Query Optimization", "Distributed Systems"]
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Certified",
    url: "https://www.credly.com/badges/3221342a-3946-4454-aa36-d3cdaa05b1b4/public_url"
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    status: "Certified",
    url: "https://www.credly.com/badges/b5ebedee-86c0-4c48-b6d9-2be9784bcca9"
  },
  {
    title: "Azure Cloud Certifications",
    issuer: "Microsoft Azure",
    status: "Planned",
    url: ""
  }
];

export const architectureFlows = [
  {
    title: "RAG Workflow",
    icon: BrainCircuit,
    accent: "cyan",
    steps: ["Documents", "Chunking", "Embeddings", "Vector Search", "LLM Answer", "Evaluation"]
  },
  {
    title: "OCR Pipeline",
    icon: Cpu,
    accent: "green",
    steps: ["Upload", "OCR Extract", "Validate", "Route", "Retry Queue", "Dashboard"]
  },
  {
    title: "CI/CD Release Flow",
    icon: Workflow,
    accent: "amber",
    steps: ["Commit", "Build", "Test", "Package", "Deploy", "Observe"]
  },
  {
    title: "Secure Cloud API",
    icon: ShieldCheck,
    accent: "rose",
    steps: ["Client", "MSAL", "Gateway", ".NET API", "Worker", "Storage"]
  }
];

export const operatingPrinciples = [
  {
    icon: Zap,
    title: "Production first",
    body: "AI work is framed around uptime, observability, secure data access, and measurable business throughput."
  },
  {
    icon: Mail,
    title: "Workflow aware",
    body: "Strong bias toward automating the hidden handoffs around documents, approvals, notifications, and releases."
  },
  {
    icon: Workflow,
    title: "Delivery minded",
    body: "Comfortable owning the path from requirements to cloud deployment, CI/CD, and production iteration."
  }
];
