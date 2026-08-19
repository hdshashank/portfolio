"use client";

import { ArrowRight, Database, GitBranch, RefreshCw, UsersRound, Zap } from "lucide-react";
import { useState } from "react";
import {
  experienceEntries,
  type ExperienceContributionIcon,
  type ExperienceEntry,
} from "../content/experience";

const contributionIcons = {
  automation: Zap,
  collaboration: UsersRound,
  reliability: RefreshCw,
  database: Database,
  pipeline: GitBranch,
  release: ArrowRight,
} satisfies Record<ExperienceContributionIcon, typeof Zap>;

function ExperienceDetail({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className="flex min-w-0 flex-col p-[clamp(28px,4vw,54px)] max-[560px]:px-5 max-[560px]:pt-[27px] max-[560px]:pb-5"
      aria-label={`${entry.role} at ${entry.company}`}
      aria-live="polite"
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="m-0 font-mono text-[11px]/[1.3] font-bold tracking-[.11em] text-blue uppercase">
          Role overview
        </p>
        <p className="mt-[3px] mb-0 text-right font-mono text-[11px]/[1.4] font-extrabold tracking-[.07em] text-muted uppercase">
          <time dateTime={entry.startDate}>{entry.displayDates}</time>
        </p>
      </div>

      <p className="mt-[clamp(28px,4vw,42px)] mb-[clamp(36px,5vw,56px)] max-w-[680px] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(18px,1.6vw,21px)] leading-[1.55] text-muted max-[560px]:mt-[27px] max-[560px]:mb-[34px]">
        {entry.summary}
      </p>

      <ul className="mt-auto m-0 list-none border-t border-rule p-0" aria-label={`${entry.role} contributions`}>
        {entry.contributions.map((contribution) => {
          const Icon = contributionIcons[contribution.icon];

          return (
            <li
              className="grid grid-cols-[18px_1fr] items-start gap-3 border-b border-rule py-[14px] text-[15px]/[1.55] text-ink last:border-b-0 max-[560px]:py-3 max-[560px]:text-sm"
              key={contribution.text}
            >
              <Icon aria-hidden="true" className="mt-[3px] size-4 text-blue" strokeWidth={1.8} />
              <span>{contribution.text}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export function Experience() {
  const [selectedId, setSelectedId] = useState(experienceEntries[0].id);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const activeId = previewId ?? selectedId;
  const activeEntry = experienceEntries.find((entry) => entry.id === activeId) ?? experienceEntries[0];

  return (
    <section
      className="mx-[var(--page-gutter)] min-w-0 w-auto border-x border-b border-rule bg-paper px-[clamp(24px,5.8vw,74px)] pt-[clamp(76px,9vw,124px)] pb-[clamp(82px,10vw,138px)] max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[70px] max-[560px]:pb-[76px]"
      id="experience"
      aria-labelledby="experience-title"
    >
      <header className="mb-[clamp(42px,5vw,62px)] grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(250px,390px)] items-end gap-x-[42px] max-[1101px]:grid-cols-1 max-[560px]:mb-10">
        <p className="col-span-full m-0 mb-[22px] font-mono text-[10px]/[1.3] font-bold tracking-[.13em] text-blue uppercase max-[560px]:mb-[17px] max-[560px]:text-[9px]">
          Experience · Current chapter
        </p>
        <h2
          id="experience-title"
          className="m-0 min-w-0 max-w-[760px] [font-family:var(--font-display)] text-[length:var(--heading-section-size)] leading-[.9] font-black tracking-[-.03em] uppercase [overflow-wrap:anywhere]"
        >
          The work, decisions, and growth behind each role.
        </h2>
        <p className="m-0 min-w-0 border-l-[6px] border-signal pl-5 [font-family:Georgia,'Times_New_Roman',serif] text-[18px]/[1.55] text-muted [overflow-wrap:anywhere] max-[1101px]:mt-7 max-[1101px]:max-w-[500px] max-[560px]:border-l-[5px] max-[560px]:pl-[14px] max-[560px]:text-base">
          Explore each role through its responsibilities, contributions, and outcomes.
        </p>
      </header>

      <div className="grid min-h-[470px] min-w-0 max-w-full grid-cols-[minmax(250px,.72fr)_minmax(0,1.65fr)] border border-rule bg-[color-mix(in_srgb,var(--raised)_48%,transparent)] max-[880px]:grid-cols-1">
        <div
          className="border-r border-rule max-[880px]:border-r-0 max-[880px]:border-b"
          role="group"
          aria-label="Experience roles"
        >
          {experienceEntries.map((entry, index) => {
            const isSelected = entry.id === selectedId;
            return (
              <button
                className="relative  min-h-[116px] w-full cursor-pointer flex items-center border-0 border-b border-rule bg-transparent p-8 text-left text-muted transition-colors duration-[160ms] before:absolute before:inset-y-0 before:left-0 before:w-1 before:origin-bottom before:scale-y-0 before:bg-blue before:transition-transform before:duration-[180ms] hover:bg-raised hover:text-ink hover:before:scale-y-100 focus-visible:bg-raised focus-visible:text-ink focus-visible:before:scale-y-100 aria-pressed:bg-raised aria-pressed:text-ink aria-pressed:before:scale-y-100 max-[880px]:min-h-[92px]"
                key={entry.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(entry.id)}
                onMouseEnter={() => setPreviewId(entry.id)}
                onMouseLeave={() => setPreviewId(null)}
                onFocus={() => setPreviewId(entry.id)}
                onBlur={() => setPreviewId(null)}
              >
                <span className="grid gap-2">
                  <strong className="[font-family:Arial_Narrow,Roboto_Condensed,Arial,sans-serif] text-[19px]/[1.05] tracking-[-.02em] uppercase">
                    {entry.role}
                  </strong>
                  <span className="font-mono text-[11px]/none font-bold tracking-[.1em] text-muted uppercase">
                    {entry.company}
                  </span>
                </span>
                <span className="justify-self-end text-base text-blue" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>

        <ExperienceDetail entry={activeEntry} />
      </div>
    </section>
  );
}
