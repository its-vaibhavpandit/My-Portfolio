// Project data — sourced from the user's CV and real GitHub repositories

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  techStack: string[];
  language: string;
  githubUrl: string;
  createdAt: string;
  duration: string;
  features: string[];
  challenges: string[];
  futureScope: string[];
  category: "fullstack" | "backend" | "ml" | "frontend";
}

export const projects: Project[] = [
  {
    slug: "career-compass",
    name: "Career Compass",
    tagline: "Career guidance platform built with PHP and XAMPP",
    description:
      "A web-based career guidance application that helps users navigate career paths and make informed professional decisions. Built with PHP and MySQL on XAMPP, it provides structured career exploration tools and an interactive UI for career suggestions.",
    problem:
      "Students and early-career professionals often lack structured guidance for career planning. Career Compass provides a centralized, database-driven platform for exploring career paths and matching preferences.",
    techStack: ["PHP", "MySQL", "XAMPP", "HTML5", "CSS3", "JavaScript"],
    language: "PHP",
    githubUrl: "https://github.com/its-vaibhavpandit/Career-Compass-1.0",
    createdAt: "2026-05-05",
    duration: "Jan 2026 - May 2026",
    features: [
      "Built database with 10+ relational tables",
      "Implemented a secure user authentication system (login/signup)",
      "Designed interactive UI for career suggestions and guidance",
      "Dynamic career matching based on user inputs",
    ],
    challenges: [
      "Designing complex relational database schemas for career data",
      "Implementing clean PHP session management and secure authentication",
      "Creating responsive user interfaces for tabular career paths",
    ],
    futureScope: [
      "AI-powered career suggestions and skill alignment tools",
      "Integration with direct professional mentor networks",
      "Resume parsing and automated job profile matching",
    ],
    category: "fullstack",
  },
  {
    slug: "agro-shield",
    name: "Agro Shield",
    tagline: "AI-based crop disease detection system and weather monitor",
    description:
      "An agricultural technology solution designed to protect and monitor crops. Built with Java (Swing GUI), Hugging Face APIs, and integrated soil and weather monitoring tools to assist farmers.",
    problem:
      "Farmers face significant challenges in identifying crop diseases early and understanding real-time soil/weather parameters to mitigate crop damage.",
    techStack: ["Java", "Swing", "Hugging Face APIs", "MySQL", "Spring Framework"],
    language: "Java",
    githubUrl: "https://github.com/its-vaibhavpandit/Agro-Shield",
    createdAt: "2026-05-10",
    duration: "Feb 2026 - May 2026",
    features: [
      "Reduced application/page load time by 35%",
      "Built Java Swing GUI for seamless image upload and disease detection workflows",
      "Added weather forecasting and soil monitoring related functionalities",
      "Focused on improving usability for farmers through simple, clean interface design",
    ],
    challenges: [
      "Integrating AI model endpoints efficiently in a desktop Java environment",
      "Optimizing response times for real-time weather and crop classification APIs",
      "Designing a user experience friendly for rural non-technical audiences",
    ],
    futureScope: [
      "On-device lightweight ML inference for offline diagnostics",
      "IoT sensor array connection for real-time soil pH and moisture feeds",
      "Localization to multiple regional languages",
    ],
    category: "backend",
  },
  {
    slug: "fast-food-delivery",
    name: "Fast Food Delivery",
    tagline: "Modern food ordering platform built with MERN stack",
    description:
      "A complete food ordering application designed to streamline the fast food ordering experience. Built with a responsive web interface, React, Node.js, Express, and MongoDB, featuring a robust backend checkout flow.",
    problem:
      "Traditional ordering interfaces can be slow and poorly optimized for mobile devices, lacking real-time cart feedback and secure checkout.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCSS", "JavaScript"],
    language: "JavaScript",
    githubUrl: "https://github.com/its-vaibhavpandit/Fast-Food-Buddy",
    createdAt: "2026-06-28",
    duration: "Jul 2024 - Jan 2025",
    features: [
      "Designed a modern food ordering platform with dynamic cart functionality",
      "Integrated MongoDB and Node.js/Express for smooth backend operations and database handling",
      "Implemented secure JWT authentication, order tracking, and checkout management system",
    ],
    challenges: [
      "Creating a smooth, client-side dynamic cart sync with React context and Node.js backend",
      "Ensuring transactional integrity for payment simulation and order logging",
      "Building responsive layouts matching modern mobile application feels",
    ],
    futureScope: [
      "Payment gateway integration (Stripe/Razorpay)",
      "Real-time kitchen order processing console",
      "Location-based delivery distance mapping",
    ],
    category: "fullstack",
  },
  {
    slug: "wedding-planner",
    name: "Wedding Planner",
    tagline: "Full-stack wedding planning platform built with MERN",
    description:
      "A full-stack web application designed to simplify wedding event coordination, vendor bookings, and budget tracking. Built using MongoDB, Express, React, and Node.js.",
    problem:
      "Wedding organization involves coordinating dozens of variables, vendors, and guest lists, which are often scattered and unorganized.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "TailwindCSS"],
    language: "JavaScript",
    githubUrl: "https://github.com/its-vaibhavpandit",
    createdAt: "2023-03-01",
    duration: "Jan 2023 - Mar 2023",
    features: [
      "Built a full-stack wedding planner platform using MERN Stack technologies",
      "Optimized workflow management with clean UI and structured backend system",
      "Developed responsive modules for vendor booking and event management",
      "Implemented backend features for scheduling, authentication, and user handling",
    ],
    challenges: [
      "Designing complex nested state for scheduling and vendor timeline overlaps",
      "Managing file uploads for invitations and design themes cleanly with storage",
      "Securing user roles and multi-tier authentication (hosts vs. vendors)",
    ],
    futureScope: [
      "Real-time chat system between hosts and booked vendors",
      "Dynamic cost calculator and budget visualizer",
      "Integrated virtual RSVP invitations and guest dashboard",
    ],
    category: "fullstack",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};
