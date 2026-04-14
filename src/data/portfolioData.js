import { 
  Code2, 
  Database, 
  Layout, 
  Terminal, 
  Server, 
  Globe,
  Settings,
  Shield,
  Cpu
} from "lucide-react";

export const personalDetails = {
  name: "Punam Patil",
  tagline: [
    "Building AI-powered solutions to simplify real-world problems",
    "Full Stack MERN Developer",
    "AI Enthusiast",
    "Cloud & Data Analytics Learner"
  ],
  phone: "+91 8149558071",
  email: "punampatilpp310@gmail.com",
  github: "https://github.com/punam-dev03",
  linkedin: "https://linkedin.com/in/punam-dev03",
  aboutRaw: "Committed to exploring the depths of modern web technologies, AI integration, and cloud architecture. With a strong academic background and hands-on experience, I thrive in environments that challenge me to solve real-world problems and build scalable solutions.",
};

export const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Engineering",
    institution: "G.H. Raisoni College of Engineering and Management, Pune",
    duration: "2024 – 2027",
    score: "CGPA: 9.11",
    description: "Focusing on advanced computing concepts, software engineering, and artificial intelligence.",
  },
  {
    id: 2,
    degree: "Diploma in Information Technology",
    institution: "NDMVP Polytechnic Nashik",
    duration: "2021 – 2024",
    score: "Percentage: 89.19%",
    description: "Built strong foundations in IT, programming fundamentals, and system analysis.",
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Java Developer Intern",
    company: "ShadowFox",
    duration: "Jan 2026",
    achievements: [
      "Built Java-based applications and solved real-world problems.",
      "Strengthened core Java and development practices.",
      "Worked in a structured, fast-paced development environment."
    ],
    icon: Code2
  },
  {
    id: 2,
    role: "AWS Cloud Computing Intern",
    company: "Jeet Square",
    duration: "June 2023 – July 2023",
    achievements: [
      "Worked extensively with AWS services: EC2, S3, RDS, IAM, Lambda.",
      "Deployed and managed scalable cloud infrastructure.",
      "Focused on security, auto-scaling architectures, and cost optimization."
    ],
    icon: Server
  }
];

export const projectsData = [
  {
    id: 1,
    title: "AI Contract Intelligence 2.0",
    description: "AI-powered contract analysis platform that detects risky clauses and provides risk and fairness scores using MERN stack and OpenAI API.",
    problem: "Legal document analysis is manual, error-prone, and time-consuming.",
    solution: "An intelligent platform that automatically parses contracts to flag risks and highlight fairness.",
    keyFeatures: [
      "AI-driven risk assessment",
      "Real-time clause detection",
      "Intuitive fairness scoring dashboard"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    githubUrl: "https://github.com/punam-dev03/ai-contract-intelligence",
    liveUrl: "https://ai-contract-intelligence.vercel.app",
  },
  {
    id: 2,
    title: "India General Election Analysis 2024",
    description: "Interactive data visualization dashboard analyzing vote share, seat distribution, and party performance using Power BI.",
    problem: "Election data is dense and hard to interpret for the general public.",
    solution: "A dynamic and visual dashboard breaking down key metrics for easy comprehension.",
    keyFeatures: [
      "Interactive data visualizations",
      "Comprehensive vote share breakdowns",
      "Real-time performance analytics"
    ],
    techStack: ["Power BI", "Data Analytics"],
    githubUrl: "https://github.com/punam-dev03/India_Election_Analysis_PowerBI",
    liveUrl: "", 
  }
];

export const skillsData = {
  frontend: [
    { name: "HTML5/CSS3", icon: Layout, level: 90 },
    { name: "JavaScript (ES6+)", icon: Terminal, level: 85 },
    { name: "React.js", icon: Code2, level: 85 },
    { name: "Tailwind CSS", icon: Layout, level: 90 },
  ],
  backend: [
    { name: "Node.js", icon: Server, level: 80 },
    { name: "Express.js", icon: Globe, level: 80 },
    { name: "Java", icon: Code2, level: 75 },
    { name: "Python", icon: Terminal, level: 75 },
    { name: "C++", icon: Cpu, level: 80 }
  ],
  database: [
    { name: "MongoDB", icon: Database, level: 85 },
    { name: "SQL", icon: Database, level: 80 },
  ],
  tools: [
    { name: "Git & GitHub", icon: Code2, level: 85 },
    { name: "Power BI", icon: Layout, level: 80 },
    { name: "AWS Cloud", icon: Server, level: 70 },
    { name: "VS Code", icon: Settings, level: 95 }
  ]
};

export const certificationsData = [
  {
    id: 1,
    title: "SQL Micro Course",
    issuer: "Online Platform",
    description: "Advanced querying, database structuring, and optimization."
  },
  {
    id: 2,
    title: "NPTEL Effective Writing",
    issuer: "NPTEL",
    description: "Professional and technical writing methodologies."
  },
  {
    id: 3,
    title: "Research Paper Publication",
    issuer: "IJSRD Journal",
    description: "Published 'NFC-Based Hospital Management System'."
  }
];
