export interface Application {
  id: string;
  title: string;
  description: string;
  icon: string;
  languages: string[];
  color: string;
  stats: string;
}

export const applications: Application[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Build modern, responsive websites and web applications that scale to millions of users.",
    icon: "🌐",
    languages: ["JavaScript", "TypeScript", "Python", "Ruby", "Go"],
    color: "199 89% 48%",
    stats: "75% of developers"
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Create native and cross-platform mobile apps for iOS and Android devices.",
    icon: "📱",
    languages: ["Swift", "Kotlin", "JavaScript", "TypeScript"],
    color: "280 100% 65%",
    stats: "45% of developers"
  },
  {
    id: "artificial-intelligence",
    title: "AI & Machine Learning",
    description: "Develop intelligent systems that learn, adapt, and make decisions autonomously.",
    icon: "🤖",
    languages: ["Python", "C++", "Java", "JavaScript"],
    color: "170 100% 45%",
    stats: "35% of developers"
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Analyze complex datasets to extract insights and drive business decisions.",
    icon: "📊",
    languages: ["Python", "R", "SQL", "Scala"],
    color: "45 93% 58%",
    stats: "30% of developers"
  },
  {
    id: "game-development",
    title: "Game Development",
    description: "Create immersive gaming experiences for consoles, PC, and mobile platforms.",
    icon: "🎮",
    languages: ["C++", "C#", "JavaScript", "Lua"],
    color: "340 80% 55%",
    stats: "20% of developers"
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Build and manage scalable cloud infrastructure and deployment pipelines.",
    icon: "☁️",
    languages: ["Go", "Python", "JavaScript", "Bash"],
    color: "210 100% 56%",
    stats: "40% of developers"
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Develop decentralized applications and smart contracts for Web3.",
    icon: "🔗",
    languages: ["Rust", "Solidity", "JavaScript", "Go"],
    color: "25 100% 55%",
    stats: "15% of developers"
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    description: "Program microcontrollers and IoT devices for real-world applications.",
    icon: "🔌",
    languages: ["C", "C++", "Rust", "Python"],
    color: "120 60% 45%",
    stats: "18% of developers"
  }
];
