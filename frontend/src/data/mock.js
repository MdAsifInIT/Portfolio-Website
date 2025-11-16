// Mock data for portfolio - will be replaced with backend/API calls later

export const personalInfo = {
  name: "Md Asif",
  title: "Full-Stack Developer & Automation Enthusiast",
  bio: "I automate workflows,build fast, scalable applications for businessess. Passionate about clean code, AI tools, and creating delightful user experiences.",
  email: "mdasifinit@gmail.com",
  location: "Bengaluru, IN",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/mdasifinit", icon: "Github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/mdasifinit",
    icon: "Linkedin",
  },
  { name: "Twitter", url: "https://twitter.com/mdasifinit", icon: "Twitter" },
  {
    name: "Instagram",
    url: "https://instagram.com/mdasifinit",
    icon: "Instagram",
  },
  { name: "YouTube", url: "https://youtube.com/@mdasifinit", icon: "Youtube" },
  { name: "Linktree", url: "https://linktr.ee/mdasifinit", icon: "Link" },
];

export const projects = [
  {
    id: 1,
    title: "Packaging Workflow Automation",
    category: "DevOps",
    description:
      "AI-assisted Windows application packaging pipeline that ingests installers, generates PSADT scripts, opens PRs, and verifies installs on ephemeral VMs via Jenkins.",
    techStack: [
      "Jenkins",
      "n8n",
      "PowerShell 7",
      "PSAppDeployToolkit",
      "OpenAI API",
      "JSON Schema",
      "GitHub",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "https://github.com/mdasifinit/Packaging-Workflow-Automation",
    featured: true,
    details: {
      problem:
        "Manual app packaging is slow, inconsistent, and error-prone—silent switches and post-install verification consume significant engineer time.",
      role: "Lead Developer & Architect",
      features: [
        "n8n webhook intake with deterministic installer classification",
        "LLM-generated manifest and silent-install candidates (temperature 0, schema-validated)",
        "PSADT Deploy-Application.ps1 generation with verification ladder",
        "Automated branch/PR creation with labels and audit artifacts",
        "Jenkins pipeline on Windows agents/ephemeral VMs",
        "Layered verification via run-candidate-tests.ps1 (MSI code, paths, shortcuts, smoke)",
      ],
      outcomes:
        "Standardized, auditable packaging with reproducible CI; safe auto-merge gated by schema validation, confidence thresholds, and VM verification.",
    },
  },
  {
    id: 2,
    title: "PackageKit",
    category: "Packaging",
    description:
      "Universal package manager CLI tool supporting NPM, PyPI, and Docker registries with unified commands.",
    techStack: ["Go", "CLI", "Docker", "NPM", "PyPI"],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/mdasifinit",
    featured: true,
    details: {
      problem:
        "Developers need to remember different commands for different package managers.",
      role: "Creator & Maintainer",
      features: [
        "Unified CLI interface",
        "Cross-platform support",
        "Smart dependency resolution",
        "Offline mode",
      ],
      outcomes: "5K+ GitHub stars, 500+ daily active users.",
    },
  },
  {
    id: 3,
    title: "API Forge",
    category: "Tools",
    description:
      "Visual API testing and documentation tool with automated mock server generation.",
    techStack: ["TypeScript", "Electron", "Monaco Editor", "Express"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    liveUrl: "https://apiforge.dev",
    githubUrl: "https://github.com/mdasifinit",
    featured: false,
  },
  {
    id: 4,
    title: "DeployScript",
    category: "Scripts",
    description:
      "Zero-config deployment automation scripts for modern web applications across multiple cloud providers.",
    techStack: ["Bash", "Python", "AWS", "Vercel", "Netlify"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/mdasifinit",
    featured: false,
  },
  {
    id: 5,
    title: "React Dashboard Kit",
    category: "Tools",
    description:
      "Production-ready admin dashboard template with 50+ components and dark mode support.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "https://dashboard-kit-demo.com",
    githubUrl: "https://github.com/mdasifinit",
    featured: true,
  },
  {
    id: 6,
    title: "CloudSync CLI",
    category: "Scripts",
    description:
      "Command-line tool for syncing local files with multiple cloud storage providers simultaneously.",
    techStack: ["Node.js", "CLI", "AWS S3", "Google Cloud", "Azure"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    liveUrl: null,
    githubUrl: "https://github.com/mdasifinit",
    featured: false,
  },
];

export const openSourceRepos = [
  {
    id: 1,
    name: "awesome-dev-tools",
    description:
      "Curated list of awesome developer tools, libraries, and resources for modern web development.",
    language: "Markdown",
    stars: 12500,
    forks: 890,
    topics: ["awesome-list", "developer-tools", "resources"],
    lastUpdated: "2024-01-15",
    url: "https://github.com/mdasifinit",
  },
  {
    id: 2,
    name: "fast-router",
    description:
      "Lightning-fast HTTP router for Node.js with zero dependencies and full TypeScript support.",
    language: "TypeScript",
    stars: 3400,
    forks: 210,
    topics: ["nodejs", "router", "http", "typescript"],
    lastUpdated: "2024-01-20",
    url: "https://github.com/mdasifinit",
  },
  {
    id: 3,
    name: "react-state-machine",
    description:
      "Predictable state management for React using finite state machines with hooks API.",
    language: "JavaScript",
    stars: 2100,
    forks: 145,
    topics: ["react", "state-management", "hooks"],
    lastUpdated: "2024-01-18",
    url: "https://github.com/amdasifinit",
  },
  {
    id: 4,
    name: "docker-compose-templates",
    description:
      "Production-ready Docker Compose templates for popular tech stacks and databases.",
    language: "Shell",
    stars: 1800,
    forks: 320,
    topics: ["docker", "docker-compose", "devops"],
    lastUpdated: "2024-01-12",
    url: "https://github.com/mdasifinit",
  },
  {
    id: 5,
    name: "json-schema-validator",
    description:
      "Blazing fast JSON Schema validator with detailed error messages and custom validators.",
    language: "Go",
    stars: 980,
    forks: 67,
    topics: ["json", "validation", "schema"],
    lastUpdated: "2024-01-10",
    url: "https://github.com/mdasifinit",
  },
];

export const skills = {
  "Packaging & Deployment": [
    "Docker & Kubernetes",
    "CI/CD Pipelines",
    "AWS & Cloud Services",
    "Terraform",
    "NPM Publishing",
    "Container Orchestration",
  ],
  "Scripting & Automation": [
    "Bash & Shell",
    "Python Scripts",
    "Node.js CLI",
    "GitHub Actions",
    "Automation Testing",
    "Build Tools",
  ],
  "Development & Tooling": [
    "React & TypeScript",
    "Node.js & Express",
    "GraphQL & REST APIs",
    "PostgreSQL & MongoDB",
    "Git & Version Control",
    "VSCode Extensions",
  ],
};

export const timeline = [
  {
    year: "2023-Present",
    title: "Senior Full-Stack Developer",
    company: "TechFlow Inc.",
    description:
      "Leading development of cloud-native applications and mentoring junior developers.",
  },
  {
    year: "2021-2023",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    description: "Built scalable microservices architecture serving 1M+ users.",
  },
  {
    year: "2019-2021",
    title: "Software Engineer",
    company: "DevCorp",
    description:
      "Developed internal tools and automation scripts, reducing deployment time by 60%.",
  },
  {
    year: "2015-2019",
    title: "B.S. Computer Science",
    company: "University of Technology",
    description:
      "Focus on software engineering, algorithms, and distributed systems.",
  },
];

export const contributions = [
  {
    date: "2024-01-20",
    repo: "facebook/react",
    type: "PR",
    title: "Fix: Memory leak in useEffect cleanup",
    status: "merged",
  },
  {
    date: "2024-01-15",
    repo: "vercel/next.js",
    type: "Issue",
    title: "Image optimization improvement suggestion",
    status: "open",
  },
  {
    date: "2023-12-10",
    repo: "nodejs/node",
    type: "PR",
    title: "Docs: Update stream API examples",
    status: "merged",
  },
];
