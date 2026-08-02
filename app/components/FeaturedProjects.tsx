"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { featuredProjects, type Project } from "../content/projects";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="project-action-icon">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

function ProjectVideo({ project, active }: { project: Project; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active || !videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [active]);

  if (!project.video.src || !project.video.captions) {
    return (
      <div className="project-video-placeholder" role="img" aria-label={`${project.title} video coming soon`}>
        <span className="project-video-mark" aria-hidden="true">▶</span>
        <span>Video coming soon</span>
      </div>
    );
  }

  return (
    <video ref={videoRef} controls preload={active ? "metadata" : "none"} poster={project.video.poster}>
      <source src={project.video.src} />
      <track kind="captions" src={project.video.captions} srcLang="en" label="English" default />
    </video>
  );
}

function DetailGroup({ label, points }: { label: string; points: string[] }) {
  return (
    <div className="project-detail-group">
      <h4>{label}</h4>
      <ul>
        {points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </div>
  );
}

export function FeaturedProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [previewId, setPreviewId] = useState<string | null>(null);
  const hoverExitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeId = previewId ?? selectedId;

  useEffect(() => () => {
    if (hoverExitTimer.current) clearTimeout(hoverExitTimer.current);
  }, []);

  const previewProject = (id: string) => {
    if (hoverExitTimer.current) clearTimeout(hoverExitTimer.current);
    setPreviewId(id);
  };

  const endPreview = () => {
    if (hoverExitTimer.current) clearTimeout(hoverExitTimer.current);
    hoverExitTimer.current = setTimeout(() => setPreviewId(null), 90);
  };

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setSelectedId(null);
          setPreviewId(null);
        }
      }}
    >
      <header className="projects-section-heading">
        <p className="section-kicker">Featured projects · Selected builds</p>
        <h2 id="projects-title">Built to understand the problem, not just the tools.</h2>
        <p>Three projects that show how I approach product thinking, delivery, and learning through the build.</p>
      </header>

      <div className="project-list">
        {featuredProjects.map((project, index) => {
          const isActive = project.id === activeId;
          const isSelected = project.id === selectedId;
          const panelId = `${project.id}-details`;

          return (
            <article
              className={`project-row${isActive ? " project-row--active" : ""}`}
              key={project.id}
              onMouseEnter={() => previewProject(project.id)}
              onMouseLeave={endPreview}
              onFocus={() => setPreviewId(project.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setPreviewId(null);
              }}
            >
              <button
                className="project-trigger"
                type="button"
                aria-expanded={isActive}
                aria-controls={panelId}
                onClick={() => {
                  setSelectedId(isSelected ? null : project.id);
                  setPreviewId(null);
                }}
              >
                <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-trigger-title">{project.title}</span>
                <span className="project-stack">{project.stack.join(" · ")}</span>
                <span className="project-toggle" aria-hidden="true">{isActive ? "−" : "+"}</span>
              </button>

              <div
                className="project-panel"
                id={panelId}
                aria-hidden={!isActive}
                inert={!isActive ? true : undefined}
              >
                <div className="project-panel-clip">
                  <div className="project-panel-inner">
                    <div className="project-copy">
                      <p className="project-summary">{project.summary}</p>
                      <div className="project-detail-groups">
                        <DetailGroup label="What" points={project.what} />
                        <DetailGroup label="Why" points={project.why} />
                        <DetailGroup label="How" points={project.how} />
                      </div>
                      <div className="project-actions">
                        <a className="project-action project-action--primary" href={project.githubUrl} target="_blank" rel="noreferrer">
                          <span>View on GitHub</span><ArrowIcon />
                        </a>
                        {project.liveUrl && (
                          <a className="project-action" href={project.liveUrl} target="_blank" rel="noreferrer">
                            <span>Live preview</span><ArrowIcon />
                          </a>
                        )}
                        {!project.liveUrl && project.liveUrlPending && (
                          <button className="project-action project-action--pending" type="button" disabled>
                            <span>Live preview</span><span>Coming soon</span>
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="project-media">
                      <ProjectVideo project={project} active={isActive} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <Link className="projects-view-all" href="/projects">
        <span>View all projects</span><ArrowIcon />
      </Link>
    </section>
  );
}
