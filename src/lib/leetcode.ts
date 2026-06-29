// LeetCode API fetcher — uses alfa-leetcode-api (free, no auth)

export interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

const LEETCODE_USERNAME = "VaibhavPandit08";
const API_BASE = "https://alfa-leetcode-api.onrender.com";

export async function fetchLeetCodeStats(): Promise<LeetCodeStats | null> {
  try {
    const res = await fetch(`${API_BASE}/${LEETCODE_USERNAME}/solved`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      totalSolved: data.solvedProblem || 0,
      totalQuestions: data.totalQuestions || 0,
      easySolved: data.easySolved || 0,
      totalEasy: data.totalEasy || 0,
      mediumSolved: data.mediumSolved || 0,
      totalMedium: data.totalMedium || 0,
      hardSolved: data.hardSolved || 0,
      totalHard: data.totalHard || 0,
      acceptanceRate: data.acceptanceRate || 0,
      ranking: data.ranking || 0,
    };
  } catch {
    return null;
  }
}

export interface LeetCodeContest {
  contestRating: number;
  contestGlobalRanking: number;
  contestAttend: number;
  totalParticipants: number;
}

export async function fetchLeetCodeContest(): Promise<LeetCodeContest | null> {
  try {
    const res = await fetch(`${API_BASE}/${LEETCODE_USERNAME}/contest`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      contestRating: Math.round(data.contestRating || 0),
      contestGlobalRanking: data.contestGlobalRanking || 0,
      contestAttend: data.contestAttend || 0,
      totalParticipants: data.totalParticipants || 0,
    };
  } catch {
    return null;
  }
}
