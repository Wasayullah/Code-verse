export interface Language {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  color: string;
  icon: string;
  useCases: string[];
  features: string[];
  yearCreated: number;
  creator: string;
  popularity: number;
}

export const languages: Language[] = [
  {
    id: "python",
    name: "Python",
    description: "A versatile, beginner-friendly language known for its clean syntax and vast ecosystem.",
    longDescription: "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms and has a comprehensive standard library. Python is widely used in web development, data science, artificial intelligence, and automation.",
    color: "207 89% 54%",
    icon: "🐍",
    useCases: ["AI/ML", "Data Science", "Web Dev", "Automation", "Scripting"],
    features: ["Easy to Learn", "Large Community", "Rich Libraries", "Cross-Platform"],
    yearCreated: 1991,
    creator: "Guido van Rossum",
    popularity: 95
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "The language of the web, powering interactive experiences across browsers worldwide.",
    longDescription: "JavaScript is a dynamic, interpreted language that runs in web browsers and on servers via Node.js. It's essential for front-end development and increasingly popular for full-stack applications. JavaScript supports event-driven, functional, and object-oriented programming styles.",
    color: "45 93% 58%",
    icon: "⚡",
    useCases: ["Web Apps", "Mobile Apps", "Server-side", "Desktop Apps", "Games"],
    features: ["Universal Platform", "Async Programming", "NPM Ecosystem", "Versatile"],
    yearCreated: 1995,
    creator: "Brendan Eich",
    popularity: 98
  },
  {
    id: "typescript",
    name: "TypeScript",
    description: "JavaScript with superpowers - adding static typing for enterprise-grade applications.",
    longDescription: "TypeScript is a strongly-typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and interfaces, making it ideal for large-scale applications. TypeScript enhances developer productivity with better tooling and error detection.",
    color: "211 60% 48%",
    icon: "📘",
    useCases: ["Enterprise Apps", "React/Angular", "Node.js", "APIs", "Libraries"],
    features: ["Type Safety", "Better IDE Support", "Object-Oriented", "Scalable"],
    yearCreated: 2012,
    creator: "Microsoft",
    popularity: 85
  },
  {
    id: "rust",
    name: "Rust",
    description: "Memory-safe systems programming without garbage collection. Blazingly fast.",
    longDescription: "Rust is a systems programming language focused on safety, concurrency, and performance. Its ownership model guarantees memory safety without a garbage collector. Rust is ideal for building reliable and efficient software, from operating systems to web browsers.",
    color: "25 100% 55%",
    icon: "🦀",
    useCases: ["Systems", "WebAssembly", "CLI Tools", "Embedded", "Blockchain"],
    features: ["Memory Safety", "Zero-Cost Abstractions", "Concurrency", "Performance"],
    yearCreated: 2010,
    creator: "Mozilla",
    popularity: 78
  },
  {
    id: "go",
    name: "Go",
    description: "Simple, fast, and reliable. Built by Google for scalable cloud infrastructure.",
    longDescription: "Go (or Golang) is a statically-typed, compiled language designed for simplicity and efficiency. Created at Google, it excels at building scalable network services and cloud infrastructure. Go's goroutines make concurrent programming accessible and powerful.",
    color: "189 100% 42%",
    icon: "🔵",
    useCases: ["Cloud/Infra", "DevOps", "APIs", "Microservices", "CLI"],
    features: ["Fast Compilation", "Goroutines", "Simple Syntax", "Built-in Testing"],
    yearCreated: 2009,
    creator: "Google",
    popularity: 82
  },
  {
    id: "cpp",
    name: "C++",
    description: "High-performance computing with fine-grained control over system resources.",
    longDescription: "C++ is a powerful, general-purpose programming language that extends C with object-oriented features. It provides low-level memory manipulation while supporting high-level abstractions. C++ is essential for game development, operating systems, and performance-critical applications.",
    color: "210 100% 56%",
    icon: "⚙️",
    useCases: ["Game Dev", "Systems", "Embedded", "Finance", "Graphics"],
    features: ["High Performance", "OOP Support", "STL Library", "Direct Memory Access"],
    yearCreated: 1983,
    creator: "Bjarne Stroustrup",
    popularity: 75
  },
  {
    id: "java",
    name: "Java",
    description: "Write once, run anywhere. Enterprise-grade reliability at massive scale.",
    longDescription: "Java is a class-based, object-oriented language designed for portability across platforms. Its 'write once, run anywhere' philosophy makes it ideal for enterprise applications. Java powers Android development, enterprise systems, and big data technologies.",
    color: "200 80% 50%",
    icon: "☕",
    useCases: ["Enterprise", "Android", "Big Data", "Banking", "E-commerce"],
    features: ["Platform Independent", "Strong Typing", "JVM Ecosystem", "Mature"],
    yearCreated: 1995,
    creator: "Sun Microsystems",
    popularity: 88
  },
  {
    id: "swift",
    name: "Swift",
    description: "Apple's modern language for iOS, macOS, and beyond. Safe, fast, expressive.",
    longDescription: "Swift is Apple's powerful and intuitive programming language for iOS, macOS, watchOS, and beyond. It combines the performance of compiled languages with the interactivity of scripting languages. Swift emphasizes safety, speed, and expressiveness.",
    color: "15 100% 55%",
    icon: "🍎",
    useCases: ["iOS Apps", "macOS Apps", "watchOS", "Server-Side", "ML"],
    features: ["Type Safety", "Modern Syntax", "ARC Memory", "Protocol-Oriented"],
    yearCreated: 2014,
    creator: "Apple",
    popularity: 72
  },
  {
    id: "kotlin",
    name: "Kotlin",
    description: "Modern Android development made elegant. Full Java interoperability.",
    longDescription: "Kotlin is a modern, concise, and safe programming language that runs on the JVM. It's officially supported for Android development and offers full interoperability with Java. Kotlin reduces boilerplate code while maintaining type safety and null safety.",
    color: "280 90% 60%",
    icon: "🔮",
    useCases: ["Android", "Server-Side", "Multiplatform", "Web Frontend", "Data Science"],
    features: ["Null Safety", "Coroutines", "Concise", "Java Interop"],
    yearCreated: 2011,
    creator: "JetBrains",
    popularity: 68
  },
  {
    id: "ruby",
    name: "Ruby",
    description: "Developer happiness first. Beautiful syntax for rapid web development.",
    longDescription: "Ruby is a dynamic, object-oriented language focused on simplicity and productivity. Its elegant syntax is natural to read and easy to write. Ruby, especially with Rails, revolutionized web development with its emphasis on convention over configuration.",
    color: "0 90% 58%",
    icon: "💎",
    useCases: ["Web Apps", "DevOps", "Scripting", "Prototyping", "APIs"],
    features: ["Elegant Syntax", "Metaprogramming", "Rails Framework", "Developer Joy"],
    yearCreated: 1995,
    creator: "Yukihiro Matsumoto",
    popularity: 65
  }
];

export const getLanguageById = (id: string): Language | undefined => {
  return languages.find(lang => lang.id === id);
};
