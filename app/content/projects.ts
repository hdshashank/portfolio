export type ContentStatus = "ready" | "placeholder";

export interface ProjectVideo {
  src?: string;
  poster?: string;
  captions?: string;
}

export interface Project {
  id: string;
  title: string;
  completedAt?: string;
  fallbackOrder: number;
  summary: string;
  what: string[];
  why: string[];
  how: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  liveUrlPending?: boolean;
  video: ProjectVideo;
  status: ContentStatus;
}

export const projects: Project[] = [
  {
    id: "fitrack",
    title: "Fitrack",
    fallbackOrder: 1,
    summary:
      "A full-stack fitness and nutrition platform that brings tracking and AI-assisted recommendations into one experience.",
    what: ["AI-generated workout & nutrition plans, powered by Gemini API", "Real-time form correction using MediaPipe/OpenCV pose detection"],
    why: ["Kept AI plans reliable even for edge cases: injuries, allergies, unusual goals", "Tuned pose detection for accuracy across body types & camera angles"],
    how: ["Built as a team project for Smart India Hackathon 2024", "Ranked top 6 of 500+ teams on the problem statement"],
    stack: ["Full-stack", "Top 1% SIH 24'", "Generative AI"],
    githubUrl: "https://github.com/hdshashank/fitrack",
    liveUrlPending: false,
    video: {},
    status: "placeholder",
  },
  {
    id: "placeholder-data-generator",
    title: "Placeholder Data Generator",
    fallbackOrder: 2,
    summary:
      "A fake-data REST API designed around controlled access, request limits, and persistent usage tracking.",
    what: ["Generates placeholder data through a REST API", "Protects requests with bearer-token API keys"],
    why: ["Give developers predictable sample data while building and testing", "Keep public API usage accountable and bounded"],
    how: ["Applies per-key rate limits with timed resets", "Persists API usage so limits survive individual requests"],
    stack: ["REST API", "Bearer auth", "Rate limiting"],
    githubUrl: "https://github.com/hdshashank/Placeholder-Data-Generator",
    video: {},
    status: "placeholder",
  },
  {
    id: "cli-password-generator",
    title: "CLI Password Generator",
    fallbackOrder: 3,
    summary:
      "A focused command-line utility for generating passwords with deliberate control over length and character sets.",
    what: ["Generates passwords directly from the terminal", "Supports configurable length, digits, and symbols"],
    why: ["Make repeatable password generation quick for terminal users", "Practice designing a clear command-line interface"],
    how: ["Uses Python's argparse for explicit command options", "Keeps generation rules configurable instead of hard-coded"],
    stack: ["Python", "argparse", "CLI"],
    githubUrl: "https://github.com/hdshashank/CLI_Password_Generator",
    video: {},
    status: "placeholder",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    fallbackOrder: 4,
    summary:
      "A server-rendered URL management application for creating shorter links and tracking how often they are used.",
    what: ["Creates and manages shortened URLs", "Tracks visits for each saved link"],
    why: ["Understand the request-to-database flow behind redirect services", "Practice building a complete CRUD application around a focused problem"],
    how: ["Uses Express.js for routing and backend behavior", "Renders the management interface with EJS"],
    stack: ["Express.js", "EJS", "CRUD"],
    githubUrl: "https://github.com/hdshashank/urlShortener",
    video: {},
    status: "placeholder",
  },
];

export const allProjects = [...projects].sort((a, b) => {
  if (a.completedAt && b.completedAt) return b.completedAt.localeCompare(a.completedAt);
  if (a.completedAt) return -1;
  if (b.completedAt) return 1;
  return a.fallbackOrder - b.fallbackOrder;
});

export const featuredProjectIds = [
  "fitrack",
  "placeholder-data-generator",
  "cli-password-generator",
] as const;

export const featuredProjects = featuredProjectIds.map((id) => {
  const project = projects.find((entry) => entry.id === id);
  if (!project) throw new Error(`Missing featured project: ${id}`);
  return project;
});
