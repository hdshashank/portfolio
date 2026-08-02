"use client";

import { useState } from "react";
import { experienceEntries, type ExperienceEntry } from "../content/experience";

function ExperienceDetail({ entry }: { entry: ExperienceEntry }) {
  return (
    <article className="experience-detail" aria-live="polite">
      <div className="experience-detail-heading">
        <div>
          <p className="experience-company">{entry.company}</p>
          <h3>{entry.role}</h3>
        </div>
        <p className="experience-date">
          <time dateTime={entry.startDate}>{entry.displayDates}</time>
        </p>
      </div>

      <p className="experience-summary">{entry.summary}</p>

      <div className="experience-groups" aria-label={`${entry.role} details`}>
        {entry.detailGroups.map((group) => (
          <section className="experience-group" key={group.label}>
            <div className="experience-group-label">
              <span>{group.label}</span>
              {group.status === "placeholder" && <span className="experience-pending-dot" />}
            </div>
            {group.status === "placeholder" ? (
              <p className="experience-coming-soon">Details coming soon</p>
            ) : (
              <ul>
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
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <header className="experience-section-heading">
        <p className="section-kicker">Experience · Current chapter</p>
        <h2 id="experience-title">The work, decisions, and growth behind each role.</h2>
        <p>Explore each role through its responsibilities, contributions, and outcomes.</p>
      </header>

      <div className="experience-layout">
        <div className="experience-list" role="group" aria-label="Experience roles">
          {experienceEntries.map((entry, index) => {
            const isSelected = entry.id === selectedId;
            return (
              <button
                className="experience-list-item"
                key={entry.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(entry.id)}
                onMouseEnter={() => setPreviewId(entry.id)}
                onMouseLeave={() => setPreviewId(null)}
                onFocus={() => setPreviewId(entry.id)}
                onBlur={() => setPreviewId(null)}
              >
                <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="experience-list-copy">
                  <strong>{entry.role}</strong>
                  <span>{entry.company}</span>
                </span>
                <span className="experience-list-marker" aria-hidden="true">↗</span>
              </button>
            );
          })}
        </div>

        <ExperienceDetail entry={activeEntry} />
      </div>
    </section>
  );
}
