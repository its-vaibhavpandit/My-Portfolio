import { clsx, type ClassValue } from "clsx";

// Simple clsx replacement (no external dep needed)
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Java: "#ED8B00",
    PHP: "#777BB4",
    Python: "#3776AB",
    HTML: "#E34F26",
    CSS: "#1572B6",
    "C++": "#00599C",
  };
  return colors[language] || "#A1A1A1";
}
