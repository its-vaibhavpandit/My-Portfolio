"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills, skillCategories } from "@/data/skills";
import {
  FileCode2, FileCode, Coffee, Code, Terminal, Cpu,
  Atom, Globe, Palette, FileText, Brush, Sparkles,
  Server, Route, Plug, Leaf, Database, HardDrive,
  GitBranch, Github, MonitorSmartphone, Container,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileCode2, FileCode, Coffee, Code, Terminal, Cpu,
  Atom, Globe, Palette, FileText, Brush, Sparkles,
  Server, Route, Plug, Leaf, Database, HardDrive,
  GitBranch, Github, MonitorSmartphone, Container,
};

const proficiencyValues: Record<string, number> = {
  learning: 45,
  intermediate: 65,
  proficient: 80,
  advanced: 95,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24" aria-label="Technical Skills Dashboard">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="03 — Toolkit"
            title="Skills & Technologies"
            subtitle="My structured stack mapped by proficiency percentages."
          />
        </RevealOnScroll>

        {/* Category selector menu tabs */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12" role="tablist">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-xs font-mono-code uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === "all"
                  ? "border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/5"
                  : "border-white/5 text-[var(--color-text-tertiary)] hover:border-white/10 hover:text-white"
              }`}
            >
              All Stack
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-xs font-mono-code uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/5"
                    : "border-white/5 text-[var(--color-text-tertiary)] hover:border-white/10 hover:text-white"
              }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Dynamic Tilt Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code;
            const percentage = proficiencyValues[skill.proficiency];
            
            return (
              <RevealOnScroll key={skill.name} delay={index * 0.02}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="card-premium p-6 hover:border-[var(--color-accent-purple)] group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-[var(--color-accent-purple)] transition-colors">
                      <Icon
                        size={18}
                        className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent-purple)] transition-colors"
                      />
                    </div>
                    <span className="text-[10px] font-mono-code text-[var(--color-text-muted)] group-hover:text-white transition-colors">
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-sm font-medium text-white group-hover:text-[var(--color-accent-cyan)] transition-colors mb-4">
                    {skill.name}
                  </h3>

                  {/* Percentage Counter and Loader */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-[9px] font-mono-code text-[var(--color-text-muted)] uppercase">
                        Confidence
                      </span>
                      <span className="text-xs font-mono-code text-white">
                        {percentage}%
                      </span>
                    </div>

                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.02 }}
                        className="h-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)]"
                      />
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
