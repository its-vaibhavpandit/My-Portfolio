import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { getLanguageColor } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Krishan Murari Pandey`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Case Study`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Back Navigation */}
      <div className="section-container pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      {/* Header */}
      <header className="section-container pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono-code text-[var(--color-accent-cyan)] uppercase tracking-widest border border-[var(--color-accent-cyan)]/20 rounded-full px-3 py-1 bg-[var(--color-accent-cyan)]/5">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: getLanguageColor(project.language) }}
            />
            {project.language}
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-heading-section text-white tracking-tight mb-4"
        >
          {project.name}
        </h1>

        <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-3xl mb-8 leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium text-xs"
          >
            <Github size={14} />
            View Source
          </a>
        </div>
      </header>

      <div className="section-divider" />

      {/* Content Grid */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="font-mono-code text-xs text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">
                Overview
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            {/* Problem */}
            <section>
              <h2 className="font-mono-code text-xs text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">
                Problem
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {project.problem}
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-mono-code text-xs text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-cyan)] mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="font-mono-code text-xs text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-hover)] mt-2 shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            {/* Future Scope */}
            <section>
              <h2 className="font-mono-code text-xs text-[var(--color-accent-cyan)] uppercase tracking-widest mb-4">
                Future Scope
              </h2>
              <ul className="space-y-3">
                {project.futureScope.map((scope, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)] mt-2 shrink-0" />
                    {scope}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Tech Stack */}
              <div className="card-premium p-6">
                <h3 className="font-mono-code text-xs text-[var(--color-text-tertiary)] uppercase tracking-widest mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono-code text-[var(--color-text-secondary)] border border-[var(--color-border)] rounded px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="card-premium p-6 space-y-4">
                <h3 className="font-mono-code text-xs text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">
                  Project Info
                </h3>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-tertiary)]">Created</span>
                  <span className="text-[var(--color-text-secondary)]">
                    {new Date(project.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-tertiary)]">Language</span>
                  <span className="flex items-center gap-1.5 text-[var(--color-text-secondary)]">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: getLanguageColor(project.language) }}
                    />
                    {project.language}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-text-tertiary)]">Category</span>
                  <span className="text-[var(--color-text-secondary)] capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Links */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-premium p-5 flex items-center gap-3 group"
              >
                <Github size={18} className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent-cyan)] transition-colors" />
                <span className="text-sm group-hover:text-[var(--color-accent-cyan)] transition-colors flex-1">
                  View on GitHub
                </span>
                <ExternalLink size={14} className="text-[var(--color-text-tertiary)]" />
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Back to projects */}
      <div className="section-container pb-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          <ArrowLeft size={16} />
          Back to all projects
        </Link>
      </div>
    </main>
  );
}
