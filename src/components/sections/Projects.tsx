"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { Github, CodeXml } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-24" aria-label="Selected Projects Portfolio">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="04 — Portfolio"
            title="Selected Projects"
            subtitle="Premium web and desktop client applications built with attention to design and scale."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const imagePath = `/images/projects/${project.slug.replace(/-/g, "_")}.png`;

            return (
              <RevealOnScroll key={project.slug} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card-premium overflow-hidden h-full flex flex-col justify-between group"
                >
                  {/* Visual Premium Mockup Wrapper */}
                  <div className="h-48 md:h-56 relative w-full overflow-hidden flex items-center justify-center border-b border-white/5 bg-[#09090B]">
                    {/* Mockup Preview Image */}
                    <Image
                      src={imagePath}
                      alt={`${project.name} Product Interface Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                    />

                    {/* Subtle ambient gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-90 z-10" />

                    {/* Centered Code Symbol Mockup (smaller overlay) */}
                    <div className="relative z-20 flex flex-col items-center gap-2">
                      <div className="p-3 rounded-full border border-white/10 bg-[#09090B]/90 backdrop-blur-md shadow-lg shadow-black/50">
                        <CodeXml size={24} className="text-[var(--color-accent-cyan)] group-hover:rotate-12 transition-transform duration-500" />
                      </div>
                      <span className="text-[9px] font-mono-code text-white/80 uppercase tracking-widest bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                        {project.language} Module
                      </span>
                    </div>

                    {/* Shimmer overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-15" />
                  </div>

                {/* Content description details block */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Headings Category info */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono-code text-[var(--color-text-muted)]">
                        {`${String(index + 1).padStart(2, "0")} //`}
                      </span>
                      <span className="text-[9px] font-mono-code text-[var(--color-accent-cyan)] uppercase tracking-widest border border-[var(--color-accent-cyan)]/20 rounded-full px-3 py-0.5 bg-[var(--color-accent-cyan)]/5">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-[var(--color-text-muted)] font-mono-code ml-auto">
                        {project.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl md:text-2xl font-heading-section text-white group-hover:text-[var(--color-accent-cyan)] transition-colors mb-3"
                    >
                      {project.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono-code text-[var(--color-text-tertiary)] border border-white/5 bg-white/[0.01] rounded-md px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions CTAs */}
                  <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-premium text-[10px] tracking-wider py-2 px-5 bg-white/5 border-white/10 hover:bg-white/10"
                    >
                      Read Case Study
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium text-[10px] tracking-wider py-2 px-5"
                    >
                      <Github size={12} />
                      View Source
                    </a>
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
