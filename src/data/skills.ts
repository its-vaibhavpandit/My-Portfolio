// Skills data — real technologies used across projects

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "languages";
  icon: string; // Lucide icon name
  proficiency: "learning" | "comfortable" | "proficient" | "advanced";
}

export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "languages", icon: "FileCode2", proficiency: "proficient" },
  { name: "JavaScript", category: "languages", icon: "FileCode", proficiency: "advanced" },
  { name: "Java", category: "languages", icon: "Coffee", proficiency: "proficient" },
  { name: "PHP", category: "languages", icon: "Code", proficiency: "comfortable" },
  { name: "Python", category: "languages", icon: "Terminal", proficiency: "comfortable" },
  { name: "C++", category: "languages", icon: "Cpu", proficiency: "comfortable" },

  // Frontend
  { name: "React", category: "frontend", icon: "Atom", proficiency: "advanced" },
  { name: "Next.js", category: "frontend", icon: "Globe", proficiency: "proficient" },
  { name: "TailwindCSS", category: "frontend", icon: "Palette", proficiency: "advanced" },
  { name: "HTML5", category: "frontend", icon: "FileText", proficiency: "advanced" },
  { name: "CSS3", category: "frontend", icon: "Brush", proficiency: "advanced" },
  { name: "Framer Motion", category: "frontend", icon: "Sparkles", proficiency: "comfortable" },

  // Backend
  { name: "Node.js", category: "backend", icon: "Server", proficiency: "proficient" },
  { name: "Express.js", category: "backend", icon: "Route", proficiency: "proficient" },
  { name: "REST APIs", category: "backend", icon: "Plug", proficiency: "proficient" },
  { name: "Spring Boot", category: "backend", icon: "Leaf", proficiency: "comfortable" },

  // Database
  { name: "MySQL", category: "database", icon: "Database", proficiency: "proficient" },
  { name: "MongoDB", category: "database", icon: "HardDrive", proficiency: "comfortable" },
  { name: "PostgreSQL", category: "database", icon: "Database", proficiency: "comfortable" },

  // Tools
  { name: "Git", category: "tools", icon: "GitBranch", proficiency: "advanced" },
  { name: "GitHub", category: "tools", icon: "Github", proficiency: "advanced" },
  { name: "VS Code", category: "tools", icon: "MonitorSmartphone", proficiency: "advanced" },
  { name: "Docker", category: "tools", icon: "Container", proficiency: "learning" },
  { name: "Linux", category: "tools", icon: "Terminal", proficiency: "comfortable" },
];

export const skillCategories = [
  { key: "languages" as const, label: "Languages", description: "Core programming languages" },
  { key: "frontend" as const, label: "Frontend", description: "UI & client-side technologies" },
  { key: "backend" as const, label: "Backend", description: "Server-side & API development" },
  { key: "database" as const, label: "Database", description: "Data storage & management" },
  { key: "tools" as const, label: "Tools", description: "Development environment & workflow" },
];
