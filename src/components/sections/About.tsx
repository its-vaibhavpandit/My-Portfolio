"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { User, GraduationCap, Award, BrainCircuit, Github } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24" aria-label="About Krishan Murari Pandey">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="01 — Overview"
            title="Design. Code. Deploy."
            subtitle="I build efficient, high-performance backends and clean full-stack systems."
          />
        </RevealOnScroll>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Narrative Card — Spans 2 cols on md/lg */}
          <div className="md:col-span-2">
            <RevealOnScroll delay={0.1}>
              <div className="card-premium p-8 lg:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <User size={18} className="text-[var(--color-accent-cyan)]" />
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--color-text-muted)]">
                      Profile Narrative
                    </span>
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl font-heading-section text-white mb-6"
                  >
                    I build stable architectures at the intersection of engineering rigor and clean design.
                  </h3>
                  <div className="space-y-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    <p>
                      I am <strong className="text-white">Krishan Murari Pandey</strong>, an MCA student at Lovely Professional University. I design backend components, database models, and API interfaces with strict maintainability standards.
                    </p>
                    <p>
                      From structuring <strong className="text-[var(--color-accent-cyan)]">complex database tables</strong> for Web platforms to creating crop protection software with <strong className="text-[var(--color-accent-purple)]">Java Swing and Hugging Face API</strong>, I focus on optimizing performance and loading times.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                  <a
                    href="https://github.com/its-vaibhavpandit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium text-[10px] tracking-wider py-2 px-5"
                  >
                    <Github size={12} />
                    View active repositories
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Academic Degrees Bento Card */}
          <div className="md:col-span-1">
            <RevealOnScroll delay={0.2} direction="left">
              <div className="card-premium p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap size={18} className="text-[var(--color-accent-purple)]" />
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--color-text-muted)]">
                      Active Education
                    </span>
                  </div>
                  <h3 className="text-xl font-heading-section text-white mb-4">
                    Master of Computer Applications
                  </h3>
                  <p className="text-xs text-[var(--color-text-tertiary)] mb-2 font-mono-code uppercase">
                    Lovely Professional University
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    Focused on Advanced Algorithms, Database Systems, and Enterprise Application Architectures.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-baseline">
                  <span className="text-[10px] uppercase font-mono-code text-[var(--color-text-muted)]">Current Score</span>
                  <span className="text-2xl font-heading-section text-[var(--color-accent-purple)]">6.5 CGPA</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Metric Stats bento cell 1 */}
          <div className="md:col-span-1">
            <RevealOnScroll delay={0.25}>
              <div className="card-premium p-6 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--color-text-muted)]">
                    Projects Complete
                  </span>
                  <Award size={16} className="text-[var(--color-accent-cyan)]" />
                </div>
                <div>
                  <span className="text-4xl font-heading-hero text-white block">
                    4+
                  </span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] mt-1 block">
                    Deployments across PHP, MERN, and Java.
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Metric Stats bento cell 2 */}
          <div className="md:col-span-1">
            <RevealOnScroll delay={0.3}>
              <div className="card-premium p-6 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--color-text-muted)]">
                    Problem Solving
                  </span>
                  <BrainCircuit size={16} className="text-[var(--color-accent-purple)]" />
                </div>
                <div>
                  <span className="text-4xl font-heading-hero text-white block">
                    100+
                  </span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] mt-1 block">
                    Algorithmic challenge solutions.
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Technical Stack bento cell 3 */}
          <div className="md:col-span-1">
            <RevealOnScroll delay={0.35} direction="left">
              <div className="card-premium p-6 flex flex-col justify-between h-44">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[var(--color-text-muted)]">
                    Top Stack focus
                  </span>
                  <span className="text-[10px] font-mono-code text-[var(--color-accent-cyan)]">
                    [CONFIG]
                  </span>
                </div>
                <div>
                  <span className="text-lg font-heading-section text-white block">
                    Node.js & PHP
                  </span>
                  <span className="text-[11px] text-[var(--color-text-tertiary)] mt-1 block">
                    MySQL / MongoDB integration.
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
