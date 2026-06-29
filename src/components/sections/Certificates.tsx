"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "Full Stack Web Development: Training Program",
    issuer: "GUVI HCL",
    date: "Jan 2026",
    link: "https://www.guvi.in/",
  },
  {
    title: "GFG LPU Chapter",
    issuer: "INFERNOVERSE",
    date: "Nov 2025",
    link: "https://www.geeksforgeeks.org/",
  },
  {
    title: "Scratch Your Brain Code-A-Thon",
    issuer: "Bodh Script Club, LPU",
    date: "Oct 2025",
    link: "https://www.lpu.in/",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24" aria-label="Certificates and Credentials">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="05 — Credentials"
            title="Certifications"
            subtitle="Verified recognition of training programs and coding competitions."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <RevealOnScroll key={cert.title} delay={index * 0.1}>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.01 }}
                className="card-premium p-6 h-full flex flex-col justify-between group cursor-pointer block hover:border-[var(--color-accent-purple)] shadow-lg"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] group-hover:border-[var(--color-accent-purple)] transition-colors">
                      <Award size={18} className="text-[var(--color-accent-purple)] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] text-[var(--color-text-muted)] font-mono-code">
                      <Calendar size={11} />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading-section text-white group-hover:text-[var(--color-accent-cyan)] transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-tertiary)] mb-6">
                    Issued by {cert.issuer}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)] font-mono-code uppercase tracking-widest pt-4 border-t border-white/5 group-hover:text-white transition-colors">
                  <span>Verify Credential</span>
                  <ExternalLink size={11} />
                </div>
              </motion.a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
