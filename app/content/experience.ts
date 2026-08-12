export type ExperienceContributionIcon =
  | "automation"
  | "collaboration"
  | "reliability"
  | "database"
  | "pipeline"
  | "release";

export interface ExperienceContribution {
  icon: ExperienceContributionIcon;
  text: string;
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
  contributions: ExperienceContribution[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "merck-software-developer-intern",
    role: "Software Developer Intern",
    company: "Merck",
    startDate: "2025-09-17",
    displayDates: "September 17, 2025 — Present",
    summary:
      "Built and shipped an internal automation tool that cut manual provisioning time by 97 percent, while supporting SAP BTP platform operations across CI/CD, releases, and governance.",
    contributions: [
      {
        icon: "automation",
        text: "Built an automated bulk-provisioning tool with Node.js, Express, and the SAP SCIM API.",
      },
      {
        icon: "collaboration",
        text: "Coordinated across multiple teams to unify fragmented, per-subaccount credential access.",
      },
      {
        icon: "reliability",
        text: "Fixed intermittent SCIM rate-limit failures with concurrent retry logic.",
      },
      {
        icon: "database",
        text: "Designed the SAP HANA schema powering full audit-trail logging.",
      },
      {
        icon: "pipeline",
        text: "Built CI/CD pipelines for multiple enterprise applications.",
      },
      {
        icon: "release",
        text: "Executed transports across the release lifecycle: development, staging, and production.",
      },
    ],
  },
];
