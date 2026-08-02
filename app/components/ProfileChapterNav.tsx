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
    <nav className="profile-chapter-nav" aria-label="Profile chapters">
      <p>Chapters</p>
      <ol>
        {chapters.map((chapter, index) => (
          <li key={chapter.id}>
            <a href={`#${chapter.id}`} aria-current={activeId === chapter.id ? "location" : undefined}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {chapter.navLabel}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
