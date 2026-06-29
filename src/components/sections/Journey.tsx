"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    year: "2025 — 2027",
    title: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University, Punjab",
    description: "Deepening knowledge of computer science, data structures, backend engineering, and databases. Currently holding a 6.5 CGPA.",
    tag: "Education",
  },
  {
    year: "Jan — May 2026",
    title: "Career Compass",
    institution: "Full-Stack Project",
    description: "Created a career path mapping web application. Optimized database schemas with 10+ tables and designed secure login systems.",
    tag: "Full Stack Development",
  },
  {
    year: "Feb — May 2026",
    title: "Agro Shield",
    institution: "AI & Desktop Application",
    description: "Built an image-upload crop protection client system integrating Hugging Face APIs and local weather status checkers.",
    tag: "Java / AI API",
  },
  {
    year: "2022 — 2025",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Technical Education & Research Institute, Ghazipur",
    description: "Graduated with 72.60% overall. Acquired solid foundations in object-oriented programming, data structures, and computer networking.",
    tag: "Education",
  },
  {
    year: "Jul 2024 — Jan 2025",
    title: "Fast Food Delivery",
    institution: "MERN Stack Project",
    description: "Created a web-based food ordering platform using MongoDB, Express, React, and Node.js. Implemented dynamic shopping cart logic and secure order processing.",
    tag: "MERN Stack",
  },
  {
    year: "Jan — Mar 2023",
    title: "Wedding Planner",
    institution: "MERN Stack Project",
    description: "Developed a vendor management and budget coordination dashboard utilizing MongoDB, Express, React, and Node.js.",
    tag: "MERN Stack",
  },
  {
    year: "2020 — 2022",
    title: "Higher Secondary (12th with PCM)",
    institution: "MSVM School, Ghazipur",
    description: "Completed secondary school curriculum majoring in Physics, Chemistry, and Mathematics with a final score of 62%.",
    tag: "Schooling",
  },
  {
    year: "2019 — 2020",
    title: "Secondary (10th)",
    institution: "MSVM School, Ghazipur",
    description: "Graduated secondary education with a final score of 70%.",
    tag: "Schooling",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="py-24 bg-[#09090B]" aria-label="Journey and Milestones">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="02 — Timeline"
            title="The path so far"
            subtitle="My academic education and software engineering projects structured chronologically."
          />
        </RevealOnScroll>

        {/* Timeline wrapper */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical path line indicator */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-[1px]" />
          
          {/* Animated active path line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-accent-cyan)] to-[var(--color-accent-purple)] origin-top md:-translate-x-[1px]"
          />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline center dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#09090B] border-2 border-[var(--color-accent-cyan)] -translate-x-[7px] md:-translate-x-2 z-20 mt-1.5 shadow-[0_0_10px_rgba(0,229,255,0.4)]" />

                {/* Content block card */}
                <div className={`w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <RevealOnScroll delay={0.1} direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="card-premium p-6 hover:border-[var(--color-accent-cyan)] group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono-code text-[var(--color-accent-cyan)]">
                          {milestone.year}
                        </span>
                        <span className="text-[10px] font-mono-code text-[var(--color-text-muted)] border border-white/5 rounded-full px-2.5 py-0.5">
                          {milestone.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-heading-section text-white group-hover:text-[var(--color-accent-cyan)] transition-colors mb-1">
                        {milestone.title}
                      </h3>
                      
                      <p className="text-xs text-[var(--color-text-tertiary)] mb-4 font-mono-code">
                        {milestone.institution}
                      </p>

                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Spacer placeholder */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
