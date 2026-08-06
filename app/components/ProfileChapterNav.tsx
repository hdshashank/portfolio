"use client";

import { useEffect, useState } from "react";
import type { ProfileChapter } from "../content/profile";

export function ProfileChapterNav({ chapters }: { chapters: ProfileChapter[] }) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");

  useEffect(() => {
    const sections = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -58%", threshold: [0, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav
      className="sticky top-[76px] max-h-[calc(100svh-76px)] self-start pt-[clamp(72px,8vw,112px)] pr-[clamp(30px,4vw,58px)] pb-[clamp(72px,8vw,112px)] max-[880px]:top-[76px] max-[880px]:z-10 max-[880px]:max-h-none max-[880px]:overflow-x-auto max-[880px]:border-b max-[880px]:border-rule max-[880px]:bg-header-glass max-[880px]:p-0 max-[880px]:backdrop-blur-[14px] max-[880px]:[scrollbar-width:none] max-[880px]:[&::-webkit-scrollbar]:hidden max-[560px]:top-[68px]"
      aria-label="Profile chapters"
    >
      <p className="mt-0 mb-[26px] font-mono text-[9px]/none font-bold tracking-[.13em] text-muted uppercase max-[880px]:hidden">
        Chapters
      </p>
      <ol className="m-0 list-none p-0 max-[880px]:flex max-[880px]:w-max">
        {chapters.map((chapter, index) => (
          <li className="border-t border-rule last:border-b max-[880px]:border-0 max-[880px]:border-r max-[880px]:last:border-r" key={chapter.id}>
            <a
              className="relative grid min-h-14 grid-cols-[32px_1fr] items-center font-mono text-[10px]/[1.2] font-bold tracking-[.08em] text-muted uppercase transition-[color,padding-left,background-color] duration-[180ms] before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:origin-bottom before:scale-y-0 before:bg-signal before:transition-transform before:duration-[180ms] hover:pl-2.5 hover:text-ink aria-[current=location]:pl-2.5 aria-[current=location]:text-ink aria-[current=location]:before:scale-y-100 max-[880px]:min-h-[54px] max-[880px]:min-w-[150px] max-[880px]:px-[14px] max-[880px]:before:inset-x-0 max-[880px]:before:top-auto max-[880px]:before:bottom-0 max-[880px]:before:h-[3px] max-[880px]:before:w-auto max-[880px]:before:origin-left max-[880px]:before:scale-x-0 max-[880px]:before:scale-y-100 max-[880px]:hover:pl-[14px] max-[880px]:hover:bg-raised max-[880px]:aria-[current=location]:pl-[14px] max-[880px]:aria-[current=location]:bg-raised max-[880px]:aria-[current=location]:before:scale-x-100 max-[560px]:min-w-[138px]"
              href={`#${chapter.id}`}
              aria-current={activeId === chapter.id ? "location" : undefined}
            >
              <span className="text-[8px] text-signal">{String(index + 1).padStart(2, "0")}</span>
              {chapter.navLabel}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
