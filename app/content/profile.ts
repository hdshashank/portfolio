export type ProfileChapter = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts?: Array<{ label: string; value: string }>;
  quote?: string;
  status: "placeholder";
};

export const profileChapters: ProfileChapter[] = [
  {
    id: "origin",
    navLabel: "Origin",
    eyebrow: "Where it started",
    title: "Curiosity came before the code.",
    paragraphs: [
      "This chapter will trace the experiences that first turned curiosity into an engineering practice: the early questions, the first things built, and the moments that made software feel like the right medium for solving problems.",
      "The final story will connect those beginnings to the way I approach unfamiliar systems today, without turning this page into a chronological résumé.",
    ],
    facts: [
      { label: "Based in", value: "Bengaluru, India" },
      { label: "Education", value: "Engineering graduate" },
    ],
    status: "placeholder",
  },
  {
    id: "learning",
    navLabel: "How I Learn",
    eyebrow: "Learning loop",
    title: "Start with the fundamentals. Build until the gaps appear.",
    paragraphs: [
      "This chapter will explain my learning loop in practical terms: reduce a new subject to its foundations, test the mental model by building, and use the friction in that process to decide what to study next.",
      "It will include a specific example of entering an unfamiliar technical area, the assumptions that changed, and the useful software that came out of the process.",
    ],
    quote: "The finished chapter will show the learning process through evidence, not a list of claims.",
    status: "placeholder",
  },
  {
    id: "work",
    navLabel: "How I Work",
    eyebrow: "Engineering practice",
    title: "Make the problem clear, then make the solution useful.",
    paragraphs: [
      "This chapter will describe how I move from an ambiguous requirement to a working result: clarify the real constraint, make trade-offs explicit, build the smallest useful slice, and tighten it through feedback.",
      "The final copy will use a project or team example to show how I communicate decisions, respond when an approach fails, and leave the work easier to understand than I found it.",
    ],
    status: "placeholder",
  },
  {
    id: "focus",
    navLabel: "Current Focus",
    eyebrow: "Now and next",
    title: "Building range without losing depth.",
    paragraphs: [
      "This chapter will connect my current platform exposure at Merck with the software engineering foundations I am continuing to deepen across backend systems, full-stack delivery, and developer tooling.",
      "It will stay current and specific: what I am learning now, why it matters, and the kinds of software engineering problems I want to take on next.",
    ],
    facts: [
      { label: "Current", value: "Software Developer Intern · Merck" },
      { label: "Seeking", value: "Software engineering roles" },
    ],
    status: "placeholder",
  },
  {
    id: "beyond-code",
    navLabel: "Beyond Code",
    eyebrow: "Outside the editor",
    title: "The interests that keep the work human.",
    paragraphs: [
      "This chapter is reserved for the interests, habits, and perspectives outside software that shape how I notice problems and collaborate with people.",
      "The final version will be personal and concrete. Until those details are authored, this intentional placeholder avoids inventing a personality for the sake of filling space.",
    ],
    status: "placeholder",
  },
];
