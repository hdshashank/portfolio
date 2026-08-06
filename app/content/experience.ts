export type ContentStatus = "ready" | "placeholder";

export interface ExperienceDetailGroup {
  label: string;
  points: string[];
  status: ContentStatus;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  displayDates: string;
  summary: string;
  detailGroups: ExperienceDetailGroup[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "merck-software-developer-intern",
    role: "Software Developer Intern",
    company: "Merck",
    startDate: "2025-09-17",
    displayDates: "September 17, 2025 — Present",
    summary:
      "Developing practical knowledge of SAP Business Technology Platform administration and the foundations that support enterprise cloud environments.",
    detailGroups: [
      { label: "Platform work", points: [], status: "placeholder" },
      { label: "Responsibilities", points: [], status: "placeholder" },
      { label: "Outcomes", points: [], status: "placeholder" },
    ],
  },
];
