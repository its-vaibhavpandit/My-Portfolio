// GitHub API fetcher — public API, no auth needed (60 req/hr)

export interface GitHubRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  license: { name: string } | null;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  bio: string | null;
}

const GITHUB_USERNAME = "its-vaibhavpandit";
const API_BASE = "https://api.github.com";

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`${API_BASE}/users/${GITHUB_USERNAME}`, {
      next: { revalidate: 3600 }, // cache for 1 hour
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `${API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchRepoLanguages(
  repoName: string
): Promise<Record<string, number>> {
  try {
    const res = await fetch(
      `${API_BASE}/repos/${GITHUB_USERNAME}/${repoName}/languages`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return {};
    return res.json();
  } catch {
    return {};
  }
}
