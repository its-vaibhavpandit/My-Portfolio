import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#09090B]" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-lg font-bold tracking-tight bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-hero)" }}
            >
              Krishan Murari Pandey
            </h3>
            <p className="text-xs text-[var(--color-text-muted)] mt-1 max-w-xs">
              MCA Student & Backend Developer building scalable tech products.
            </p>
          </div>

          {/* Connected Handles */}
          <div className="flex items-center gap-6" style={{ fontFamily: "var(--font-nav)" }}>
            <a
              href="https://github.com/its-vaibhavpandit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-cyan)] transition-all duration-300 flex items-center gap-1"
            >
              <Github size={12} />
              GitHub
              <ArrowUpRight size={10} />
            </a>
            <a
              href="https://leetcode.com/u/VaibhavPandit08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-purple)] transition-all duration-300 flex items-center gap-1"
            >
              <ExternalLink size={12} />
              LeetCode
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>

        {/* Bottom Credits block */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-[var(--color-text-muted)] font-mono-code uppercase tracking-wider">
          <p>© {currentYear} Krishan Murari Pandey. Crafted with precision.</p>
          <p>Built with Next.js, TS & Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}
