"use client";

import { useEffect, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { GitBranch, Star, ExternalLink, Github } from "lucide-react";
import { getLanguageColor } from "@/lib/utils";
import { motion } from "framer-motion";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

interface UserStats {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubDashboard() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch("https://api.github.com/users/its-vaibhavpandit/repos?sort=updated&per_page=6"),
          fetch("https://api.github.com/users/its-vaibhavpandit"),
        ]);
        if (reposRes.ok) setRepos(await reposRes.json());
        if (userRes.ok) setUserStats(await userRes.json());
      } catch {
        /* fail silently */
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const languageCounts: Record<string, number> = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  });
  const topLanguages = Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
  const totalLangCount = topLanguages.reduce((sum, [, count]) => sum + count, 0);

  return (
    <section id="github" className="py-24" aria-label="GitHub Open Source Activity">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="06 — GitHub"
            title="Open Source Projects"
            subtitle="Live status indicators fetched from my GitHub developer profile."
          />
        </RevealOnScroll>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-premium p-6 animate-pulse h-32" />
            ))}
          </div>
        ) : (
          <>
            {userStats && (
              <RevealOnScroll delay={0.1}>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { value: userStats.public_repos, label: "Repositories" },
                    { value: userStats.followers, label: "Followers" },
                    { value: userStats.following, label: "Following" },
                  ].map((stat) => (
                    <div key={stat.label} className="card-premium p-6 text-center">
                      <p className="text-3xl font-heading-hero text-[var(--color-accent-cyan)]">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-[var(--color-text-muted)] mt-1 font-mono-code uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Repo grid lists */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-mono-code text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                  Active Repositories
                </h3>
                {repos.map((repo, i) => (
                  <RevealOnScroll key={repo.name} delay={i * 0.05}>
                    <motion.a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.01 }}
                      className="card-premium p-5 flex items-start justify-between gap-4 group block hover:border-[var(--color-accent-cyan)]"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white group-hover:text-[var(--color-accent-cyan)] transition-colors truncate">
                          {repo.name}
                        </h4>
                        {repo.description && (
                          <p className="text-xs text-[var(--color-text-tertiary)] mt-1.5 line-clamp-1 leading-relaxed">
                            {repo.description}
                          </p>
                        )}
                        <div className="flex items-center gap-4 mt-3">
                          {repo.language && (
                            <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
                              <span
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: getLanguageColor(repo.language) }}
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                            <Star size={11} />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                            <GitBranch size={11} />
                            {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      <ExternalLink
                        size={12}
                        className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] transition-colors shrink-0 mt-1"
                      />
                    </motion.a>
                  </RevealOnScroll>
                ))}
              </div>

              {/* Top languages bar sidebar */}
              <div>
                <h3 className="font-mono-code text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
                  Language Distribution
                </h3>
                <RevealOnScroll delay={0.2} direction="left">
                  <div className="card-premium p-6">
                    {/* Visual Segment bars */}
                    <div className="flex rounded-full overflow-hidden h-2.5 mb-6 bg-white/5">
                      {topLanguages.map(([lang, count]) => (
                        <div
                          key={lang}
                          style={{
                            width: `${(count / totalLangCount) * 100}%`,
                            backgroundColor: getLanguageColor(lang),
                          }}
                        />
                      ))}
                    </div>

                    <div className="space-y-4">
                      {topLanguages.map(([lang, count]) => (
                        <div key={lang} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: getLanguageColor(lang) }}
                            />
                            <span className="text-xs text-[var(--color-text-secondary)]">{lang}</span>
                          </div>
                          <span className="text-xs text-[var(--color-text-muted)] font-mono-code">
                            {Math.round((count / totalLangCount) * 100)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Profile actions CTA */}
                <RevealOnScroll delay={0.3}>
                  <a
                    href="https://github.com/its-vaibhavpandit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium w-full justify-center mt-4 text-[10px] tracking-wider py-2.5"
                  >
                    <Github size={12} />
                    Open Profile Page
                  </a>
                </RevealOnScroll>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
