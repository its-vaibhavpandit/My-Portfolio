"use client";

import { useState, FormEvent } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { Send, Github, Linkedin, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus("sending");

    try {
      // Simulate submission network delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24" aria-label="Contact Section">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="08 — Contact"
            title="Let's connect"
            subtitle="Send a direct message or connect through my social channels."
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={0.1}>
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-6" noValidate>
                {/* Honeypot anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 h-0 w-0 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-[9px] font-mono-code text-[var(--color-text-muted)] uppercase tracking-widest mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#09090B]/50 border border-white/5 focus:border-[var(--color-accent-cyan)] rounded-xl text-sm text-white px-4 py-3 outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:shadow-[0_0_15px_rgba(0,229,255,0.05)]"
                      placeholder="Krishan M. Pandey"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[9px] font-mono-code text-[var(--color-text-muted)] uppercase tracking-widest mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#09090B]/50 border border-white/5 focus:border-[var(--color-accent-cyan)] rounded-xl text-sm text-white px-4 py-3 outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:shadow-[0_0_15px_rgba(0,229,255,0.05)]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[9px] font-mono-code text-[var(--color-text-muted)] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#09090B]/50 border border-white/5 focus:border-[var(--color-accent-cyan)] rounded-xl text-sm text-white px-4 py-3 outline-none transition-colors resize-none placeholder:text-[var(--color-text-muted)] focus:shadow-[0_0_15px_rgba(0,229,255,0.05)]"
                    placeholder="Describe your project, internship, or query..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-premium btn-premium-accent w-full justify-center text-xs tracking-wider py-3"
                >
                  {status === "sending" ? (
                    "Sending message..."
                  ) : (
                    <>
                      Send Message
                      <Send size={12} />
                    </>
                  )}
                </button>

                {/* Status panels */}
                {status === "success" && (
                  <div className="flex items-center gap-2 text-green-400 text-xs font-mono-code mt-4">
                    <CheckCircle size={14} />
                    Message sent successfully! I will respond shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs font-mono-code mt-4">
                    <AlertCircle size={14} />
                    Submit error. Please email directly.
                  </div>
                )}
              </form>
            </RevealOnScroll>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-5 space-y-4">
            <RevealOnScroll delay={0.2} direction="left">
              <div className="space-y-4">
                <a
                  href="https://github.com/its-vaibhavpandit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-5 flex items-center justify-between group hover:border-[var(--color-accent-cyan)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                      <Github size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-mono-code text-[var(--color-text-muted)] group-hover:text-white transition-colors">
                        GitHub Profile
                      </h4>
                      <p className="text-sm text-white font-medium mt-0.5">
                        its-vaibhavpandit
                      </p>
                    </div>
                  </div>
                  <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    →
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/krishan-murari-pandey-06587536a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium p-5 flex items-center justify-between group hover:border-[var(--color-accent-cyan)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                      <Linkedin size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-mono-code text-[var(--color-text-muted)] group-hover:text-white transition-colors">
                        LinkedIn
                      </h4>
                      <p className="text-sm text-white font-medium mt-0.5">
                        krishan-murari-pandey
                      </p>
                    </div>
                  </div>
                  <span className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] transition-colors">
                    →
                  </span>
                </a>

                <div className="card-premium p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono-code text-[var(--color-text-muted)]">
                      Email Address
                    </h4>
                    <p className="text-sm text-white font-medium mt-0.5">
                      krishanmuraripandey7371@gmail.com
                    </p>
                  </div>
                </div>

                <div className="card-premium p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-mono-code text-[var(--color-text-muted)]">
                      Current Location
                    </h4>
                    <p className="text-sm text-white font-medium mt-0.5">
                      Ghazipur, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
