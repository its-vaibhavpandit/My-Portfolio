"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Mail, CodeXml, Terminal, Cpu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Problem Solver",
  "MCA Student at LPU",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
      aria-label="Welcome and Introduction Section"
    >
      {/* Dynamic Ambient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] opacity-[0.04] rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="section-container relative z-10 w-full pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left Text details block */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            {/* Greeting Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] mb-6 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-cyan)] animate-ping" />
              <span className="text-[10px] uppercase tracking-widest font-mono-code text-[var(--color-text-tertiary)]">
                Ready to build scalable backends
              </span>
            </motion.div>

            {/* Clash Display Gradient Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading-hero tracking-tight leading-[0.9] mb-6 text-white"
            >
              Krishan Murari
              <br />
              <span className="shimmer-text">Pandey</span>
            </motion.h1>

            {/* Changing Title Role Rotator */}
            <div className="h-8 mb-8 overflow-hidden">
              <motion.p
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm md:text-base font-mono-code text-[var(--color-accent-cyan)] tracking-wider uppercase"
              >
                {roles[currentRole]}
              </motion.p>
            </div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
            >
              Passionate about building scalable products that solve real
              problems. I craft full-stack applications with robust backend systems,
              clean database relations, and fast API layers.
            </motion.p>

            {/* Actions CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn-premium btn-premium-accent text-[11px] tracking-wider py-3 px-8">
                Explore Work
              </a>
              <a href="#contact" className="btn-premium text-[11px] tracking-wider py-3 px-8">
                <Mail size={12} />
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right Parallax Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative transition-transform duration-200 ease-out cursor-pointer"
            >
              {/* Radial glow background ring */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] opacity-20 blur-2xl animate-pulse" />

              {/* Photo Frame Container */}
              <div
                className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 bg-white/[0.02] shadow-2xl shadow-black/80"
                style={{ transform: "translateZ(30px)" }}
              >
                {/* Layered Gradient mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-85 z-10" />

                <Image
                  src="/images/vaibhav.jpg"
                  alt="Krishan Murari Pandey — Creative Backend Developer"
                  fill
                  priority
                  className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 256px, 288px"
                />

                {/* Floating overlay context inside frame */}
                <div
                  className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-xl border border-white/10 bg-[#09090B]/80 backdrop-blur-md"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <p className="text-[10px] text-[var(--color-accent-cyan)] font-mono-code uppercase tracking-wider">
                    current location
                  </p>
                  <p className="text-xs text-white mt-1">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Floating tech icons using absolute layers */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 p-3 rounded-xl border border-white/10 bg-[#09090B]/60 backdrop-blur-md z-30"
                style={{ transform: "translateZ(60px)" }}
              >
                <Terminal size={18} className="text-[var(--color-accent-cyan)]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 p-3 rounded-xl border border-white/10 bg-[#09090B]/60 backdrop-blur-md z-30"
                style={{ transform: "translateZ(60px)" }}
              >
                <Cpu size={18} className="text-[var(--color-accent-purple)]" />
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-1/2 -right-8 p-3 rounded-xl border border-white/10 bg-[#09090B]/60 backdrop-blur-md z-30"
                style={{ transform: "translateZ(65px)" }}
              >
                <CodeXml size={18} className="text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer"
            onClick={() => {
              const el = document.getElementById("about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-[9px] uppercase tracking-widest font-mono-code">scroll</span>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
