"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section highlighters
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = (section as HTMLElement).offsetTop;
          const height = (section as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 w-full max-w-5xl ${
            isScrolled
              ? "bg-[#09090B]/60 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo initials */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight hover:text-[var(--color-accent-cyan)] transition-colors flex items-center gap-2"
            style={{ fontFamily: "var(--font-hero)" }}
            aria-label="Krishan Murari Pandey — Home"
          >
            <span className="bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] bg-clip-text text-transparent">
              KP
            </span>
            <span className="text-[var(--color-text-muted)] text-[10px] font-mono-code font-normal hidden sm:inline tracking-wider">
              [DEV.PORTFOLIO]
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul
            className="hidden lg:flex items-center gap-6"
            role="navigation"
            aria-label="Primary Web Navigation"
            style={{ fontFamily: "var(--font-nav)" }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative py-1">
                  <a
                    href={link.href}
                    className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-accent-cyan)] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Connect Action CTA */}
          <a
            href="https://github.com/its-vaibhavpandit"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-premium text-[10px] tracking-wider py-1.5 px-4"
          >
            GitHub
          </a>

          {/* Mobile menu triggers */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            aria-label={isMobileOpen ? "Close selection menu" : "Open selection menu"}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </div>

      {/* Full screen blurred mobile dropdown menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#09090B]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation stack">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xl font-light uppercase tracking-wider text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://github.com/its-vaibhavpandit"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="btn-premium mt-6 text-xs"
              >
                GitHub Profile
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
