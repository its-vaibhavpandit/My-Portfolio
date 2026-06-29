"use client";

import { useEffect, useState } from "react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, Trophy, Target, Flame } from "lucide-react";

interface Stats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
}

function DonutSegment({
  percentage,
  color,
  offset,
  radius = 45,
}: {
  percentage: number;
  color: string;
  offset: number;
  radius?: number;
}) {
  const circumference = 2 * Math.PI * radius;

  return (
    <circle
      cx="50"
      cy="50"
      r={radius}
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeDasharray={`${(percentage / 100) * circumference} ${circumference}`}
      strokeDashoffset={`-${(offset / 100) * circumference}`}
      strokeLinecap="round"
      className="transition-all duration-1000 ease-out"
    />
  );
}

export default function LeetCodeDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(
          "https://alfa-leetcode-api.onrender.com/VaibhavPandit08/solved"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStats({
          totalSolved: data.solvedProblem || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          totalEasy: data.totalEasy || 0,
          totalMedium: data.totalMedium || 0,
          totalHard: data.totalHard || 0,
          ranking: data.ranking || 0,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (error) {
    return (
      <section id="leetcode" className="py-24" aria-label="LeetCode Dashboard">
        <div className="section-container">
          <RevealOnScroll>
            <SectionHeading
              label="07 — LeetCode"
              title="Problem Solving"
              subtitle="Data structure and algorithm practice indicators."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="card-premium p-8 text-center">
              <p className="text-xs text-[var(--color-text-secondary)] mb-6">
                LeetCode stats are temporarily offline.
              </p>
              <a
                href="https://leetcode.com/u/VaibhavPandit08/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium text-[10px] tracking-wider py-2.5 px-6 inline-flex mx-auto"
              >
                Open LeetCode Profile
                <ExternalLink size={11} />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    );
  }

  const totalPercentage = stats
    ? Math.round((stats.totalSolved / (stats.totalEasy + stats.totalMedium + stats.totalHard)) * 100)
    : 0;

  const easyPct = stats && stats.totalEasy ? (stats.easySolved / stats.totalEasy) * 100 : 0;
  const medPct = stats && stats.totalMedium ? (stats.mediumSolved / stats.totalMedium) * 100 : 0;
  const hardPct = stats && stats.totalHard ? (stats.hardSolved / stats.totalHard) * 100 : 0;

  return (
    <section id="leetcode" className="py-24" aria-label="LeetCode Dashboard Dashboard">
      <div className="section-container">
        <RevealOnScroll>
          <SectionHeading
            label="07 — LeetCode"
            title="Problem Solving"
            subtitle="Live competitive coding milestones fetched from LeetCode."
          />
        </RevealOnScroll>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="card-premium p-8 animate-pulse h-48" />
            ))}
          </div>
        ) : stats ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Visual Donut Chart loader */}
            <RevealOnScroll delay={0.1}>
              <div className="card-premium p-8 flex flex-col items-center justify-center">
                <div className="relative w-44 h-44 mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                    <DonutSegment percentage={easyPct * 0.33} color="#4ADE80" offset={0} />
                    <DonutSegment percentage={medPct * 0.33} color="#FBBF24" offset={easyPct * 0.33} />
                    <DonutSegment percentage={hardPct * 0.33} color="#F87171" offset={easyPct * 0.33 + medPct * 0.33} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-heading-hero text-white">
                      {stats.totalSolved}
                    </span>
                    <span className="text-[9px] text-[var(--color-text-muted)] font-mono-code uppercase tracking-wider">
                      Solved
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 w-full pt-4 border-t border-white/5">
                  {[
                    { label: "Easy", solved: stats.easySolved, total: stats.totalEasy, color: "#4ADE80" },
                    { label: "Medium", solved: stats.mediumSolved, total: stats.totalMedium, color: "#FBBF24" },
                    { label: "Hard", solved: stats.hardSolved, total: stats.totalHard, color: "#F87171" },
                  ].map((d) => (
                    <div key={d.label} className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }} />
                        <span className="text-[10px] text-[var(--color-text-tertiary)]">{d.label}</span>
                      </div>
                      <p className="text-base font-mono-code text-white">
                        {d.solved}
                        <span className="text-xs text-[var(--color-text-muted)]">/{d.total}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Metrics layout indicators */}
            <div className="space-y-4">
              <RevealOnScroll delay={0.2}>
                <div className="card-premium p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    <Trophy size={20} className="text-[var(--color-accent-cyan)]" />
                  </div>
                  <div>
                    <p className="text-[9px] text-[var(--color-text-muted)] font-mono-code uppercase tracking-wider">
                      Global Ranking
                    </p>
                    <p className="text-xl font-heading-section text-white mt-0.5">
                      #{stats.ranking.toLocaleString()}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.25}>
                <div className="card-premium p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    <Target size={20} className="text-[var(--color-accent-purple)]" />
                  </div>
                  <div>
                    <p className="text-[9px] text-[var(--color-text-muted)] font-mono-code uppercase tracking-wider">
                      Completion Rate
                    </p>
                    <p className="text-xl font-heading-section text-white mt-0.5">
                      {totalPercentage}%
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className="card-premium p-5 flex items-center gap-4">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    <Flame size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] text-[var(--color-text-muted)] font-mono-code uppercase tracking-wider">
                      Challenges Solved
                    </p>
                    <p className="text-xl font-heading-section text-white mt-0.5">
                      {stats.totalSolved}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.35}>
                <a
                  href="https://leetcode.com/u/VaibhavPandit08/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium w-full justify-center text-[10px] tracking-wider py-3"
                >
                  Open LeetCode Profile
                  <ExternalLink size={11} />
                </a>
              </RevealOnScroll>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
