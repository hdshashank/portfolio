"use client";

import { useState } from "react";
import { experienceEntries, type ExperienceEntry } from "../content/experience";

function ExperienceDetail({ entry }: { entry: ExperienceEntry }) {
  return (
    <article
      className="flex min-w-0 flex-col p-[clamp(28px,4vw,54px)] max-[560px]:px-5 max-[560px]:pt-[27px] max-[560px]:pb-5"
      aria-label={`${entry.role} at ${entry.company}`}
      aria-live="polite"
    >
      <div className="flex justify-between gap-7 max-[560px]:items-baseline max-[560px]:gap-4">
        <div className="max-[560px]:hidden">
          <p className="m-0 mb-[11px] font-mono text-[10px]/none font-bold tracking-[.12em] text-signal uppercase">
            {entry.company}
          </p>
          <h3 className="m-0 [font-family:var(--font-display)] text-[length:var(--heading-content-size)] leading-[.9] font-black tracking-[-.03em] uppercase">
            {entry.role}
          </h3>
        </div>
        <p className="m-0 hidden font-mono text-[9px]/[1.3] font-bold tracking-[.11em] text-blue uppercase max-[560px]:block">
          Role overview
        </p>
        <p className="mt-[3px] mb-0 font-mono text-[10px]/[1.4] font-extrabold tracking-[.07em] text-muted uppercase max-[560px]:text-left min-[561px]:text-right">
          <time dateTime={entry.startDate}>{entry.displayDates}</time>
        </p>
      </div>

      <p className="mt-[clamp(28px,4vw,42px)] mb-[clamp(36px,5vw,56px)] max-w-[680px] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(17px,1.6vw,21px)] leading-[1.55] text-muted max-[560px]:mt-[27px] max-[560px]:mb-[34px]">
        {entry.summary}
      </p>

      <div
        className="mt-auto grid grid-cols-3 border border-dashed border-rule max-[560px]:grid-cols-1"
        aria-label={`${entry.role} details`}
      >
        {entry.detailGroups.map((group) => (
          <section
            className="min-h-[126px] border-r border-dashed border-rule p-[18px] last:border-r-0 max-[560px]:min-h-[100px] max-[560px]:border-r-0 max-[560px]:border-b max-[560px]:last:border-b-0"
            key={group.label}
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[9px]/[1.2] font-bold tracking-[.1em] text-ink uppercase">
              <span>{group.label}</span>
              {group.status === "placeholder" && (
                <span className="size-1.5 shrink-0 bg-signal" />
              )}
            </div>
            {group.status === "placeholder" ? (
              <p className="mt-[30px] mb-0 [font-family:Georgia,'Times_New_Roman',serif] text-sm/[1.4] italic text-muted max-[560px]:mt-[21px]">
                Details coming soon
              </p>
            ) : (
              <ul className="mt-5 mb-0 pl-[18px] text-sm/[1.5] text-muted">
                {group.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
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
      className="mx-[var(--page-gutter)] w-auto border-x border-b border-rule bg-paper px-[clamp(24px,5.8vw,74px)] pt-[clamp(76px,9vw,124px)] pb-[clamp(82px,10vw,138px)] max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[70px] max-[560px]:pb-[76px]"
      id="experience"
      aria-labelledby="experience-title"
    >
      <header className="mb-[clamp(42px,5vw,62px)] grid grid-cols-[minmax(0,1fr)_minmax(250px,390px)] items-end gap-x-[42px] max-[880px]:grid-cols-1 max-[560px]:mb-10">
        <p className="col-span-full m-0 mb-[22px] font-mono text-[10px]/[1.3] font-bold tracking-[.13em] text-blue uppercase max-[560px]:mb-[17px] max-[560px]:text-[9px]">
          Experience · Current chapter
        </p>
        <h2
          id="experience-title"
          className="m-0 max-w-[760px] [font-family:var(--font-display)] text-[length:var(--heading-section-size)] leading-[.9] font-black tracking-[-.03em] uppercase"
        >
          The work, decisions, and growth behind each role.
        </h2>
        <p className="m-0 border-l-[6px] border-signal pl-5 [font-family:Georgia,'Times_New_Roman',serif] text-[17px]/[1.55] text-muted max-[880px]:mt-7 max-[880px]:max-w-[500px] max-[560px]:border-l-[5px] max-[560px]:pl-[14px] max-[560px]:text-base">
          Explore each role through its responsibilities, contributions, and outcomes.
        </p>
      </header>

      <div className="grid min-h-[470px] grid-cols-[minmax(250px,.72fr)_minmax(0,1.65fr)] border border-rule bg-[color-mix(in_srgb,var(--raised)_48%,transparent)] max-[880px]:grid-cols-1">
        <div
          className="border-r border-rule max-[880px]:border-r-0 max-[880px]:border-b"
          role="group"
          aria-label="Experience roles"
        >
          {experienceEntries.map((entry, index) => {
            const isSelected = entry.id === selectedId;
            return (
              <button
                className="relative grid min-h-[116px] w-full cursor-pointer grid-cols-[34px_1fr_20px] items-center gap-3 border-0 border-b border-rule bg-transparent p-5 text-left text-muted transition-colors duration-[160ms] before:absolute before:inset-y-0 before:left-0 before:w-1 before:origin-bottom before:scale-y-0 before:bg-blue before:transition-transform before:duration-[180ms] hover:bg-raised hover:text-ink hover:before:scale-y-100 focus-visible:bg-raised focus-visible:text-ink focus-visible:before:scale-y-100 aria-pressed:bg-raised aria-pressed:text-ink aria-pressed:before:scale-y-100 max-[880px]:min-h-[92px]"
                key={entry.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(entry.id)}
                onMouseEnter={() => setPreviewId(entry.id)}
                onMouseLeave={() => setPreviewId(null)}
                onFocus={() => setPreviewId(entry.id)}
                onBlur={() => setPreviewId(null)}
              >
                <span className="self-start pt-[3px] font-mono text-[9px]/none font-bold tracking-[.08em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid gap-2">
                  <strong className="[font-family:Arial_Narrow,Roboto_Condensed,Arial,sans-serif] text-[19px]/[1.05] tracking-[-.02em] uppercase">
                    {entry.role}
                  </strong>
                  <span className="font-mono text-[10px]/none font-semibold tracking-[.1em] text-muted uppercase">
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
