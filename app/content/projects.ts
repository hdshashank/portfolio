export type ContentStatus = "ready" | "placeholder";

export interface ProjectVideo {
  src?: string;
  poster?: string;
  captions?: string;
}

export interface Project {
  id: string;
  title: string;
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
    summary:
      "A full-stack fitness and nutrition platform that brings tracking and AI-assisted recommendations into one experience.",
    what: ["Unified nutrition and workout tracking", "AI-assisted fitness recommendations"],
    why: ["Reduce the friction of using disconnected fitness tools", "Turn day-to-day activity into useful guidance"],
    how: ["Built as a team project for Smart India Hackathon 2024", "Delivered as a finalist among the top 6 of 500+ teams on the problem statement"],
    stack: ["Full-stack", "REST APIs", "Generative AI"],
    githubUrl: "https://github.com/hdshashank/fitrack",
    liveUrlPending: true,
    video: {},
    status: "placeholder",
  },
  {
    id: "placeholder-data-generator",
    title: "Placeholder Data Generator",
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
];

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
