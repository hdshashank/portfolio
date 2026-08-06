"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "../content/projects";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="size-[17px] fill-none stroke-current [stroke-width:1.4] transition-transform duration-[160ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
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
      <div
        className="relative grid size-full min-h-[418px] place-content-center gap-4 border border-rule bg-paper bg-[repeating-linear-gradient(-45deg,transparent_0_14px,var(--grid)_14px_15px)] text-center font-mono text-[9px]/none font-bold tracking-[.12em] text-muted uppercase before:absolute before:top-3 before:left-3 before:size-7 before:border-t before:border-l before:border-signal before:content-[''] after:absolute after:right-3 after:bottom-3 after:size-7 after:border-r after:border-b after:border-signal after:content-[''] max-[880px]:min-h-[348px] max-[560px]:min-h-[248px]"
        role="img"
        aria-label={`${project.title} video coming soon`}
      >
        <span className="mx-auto grid size-12 place-items-center border border-blue text-[13px] text-blue" aria-hidden="true">▶</span>
        <span>Video coming soon</span>
      </div>
    );
  }

  return (
    <video
      className="block size-full min-h-[418px] border border-rule bg-paper object-cover max-[880px]:min-h-[348px] max-[560px]:min-h-[248px]"
      ref={videoRef}
      controls
      preload={active ? "metadata" : "none"}
      poster={project.video.poster}
    >
      <source src={project.video.src} />
      <track kind="captions" src={project.video.captions} srcLang="en" label="English" default />
    </video>
  );
}

function DetailGroup({ label, points }: { label: string; points: string[] }) {
  return (
    <div className="grid grid-cols-[68px_1fr] gap-[18px] border-b border-dashed border-rule py-4 max-[560px]:grid-cols-[54px_1fr] max-[560px]:gap-2.5">
      <h4 className="mt-0.5 mb-0 font-mono text-[9px]/[1.3] font-bold tracking-[.11em] text-signal uppercase">
        {label}
      </h4>
      <ul className="m-0 grid list-none gap-[7px] p-0 text-muted">
        {points.map((point) => (
          <li className="relative pl-4 text-sm/[1.5] before:absolute before:left-0 before:text-blue before:content-['—']" key={point}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectRows({ projects }: { projects: Project[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) setSelectedId(null);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, []);

  return (
    <div
      ref={listRef}
      className="border-t border-rule"
      onKeyDown={(event) => {
        if (event.key === "Escape") setSelectedId(null);
      }}
    >
      {projects.map((project, index) => {
        const isActive = project.id === selectedId;
        const panelId = `${project.id}-details`;

        return (
          <article
            className={cn(
              "group relative border-b border-rule bg-paper transition-colors duration-[180ms] before:absolute before:inset-y-0 before:left-0 before:z-[1] before:w-[5px] before:origin-top before:scale-y-0 before:bg-blue before:transition-transform before:duration-[220ms] hover:bg-raised hover:before:scale-y-100 has-[:focus-visible]:bg-raised has-[:focus-visible]:before:scale-y-100",
              isActive && "bg-raised before:scale-y-100",
            )}
            key={project.id}
          >
            <button
              className="grid min-h-[clamp(112px,11vw,150px)] w-full cursor-pointer grid-cols-[48px_minmax(240px,1fr)_minmax(190px,auto)_34px] items-center gap-5 border-0 bg-transparent pt-6 pr-6 pb-6 pl-7 text-left text-inherit max-[880px]:grid-cols-[42px_minmax(0,1fr)_34px] max-[560px]:min-h-28 max-[560px]:grid-cols-[28px_minmax(0,1fr)_32px] max-[560px]:gap-2.5 max-[560px]:px-2 max-[560px]:py-5"
              type="button"
              aria-expanded={isActive}
              aria-controls={panelId}
              onClick={() => setSelectedId(isActive ? null : project.id)}
            >
              <span className="self-start pt-[7px] font-mono text-[9px]/none font-bold tracking-[.09em] text-signal max-[560px]:text-[8px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "[font-family:var(--font-display)] text-[length:var(--heading-content-size)] leading-[.9] font-black tracking-[-.03em] uppercase transition-[color,transform] duration-[220ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5 group-hover:text-blue group-has-[:focus-visible]:translate-x-0.5 group-has-[:focus-visible]:text-blue motion-reduce:transform-none",
                  isActive && "translate-x-0.5 text-blue",
                )}
              >
                {project.title}
              </span>
              <span className="text-right font-mono text-[10px]/[1.6] font-extrabold tracking-[.08em] text-muted uppercase max-[880px]:col-start-2 max-[880px]:row-start-2 max-[880px]:text-left max-[560px]:text-[8px]">
                {project.stack.join(" · ")}
              </span>
              <span
                className={cn(
                  "grid size-[34px] place-items-center border border-rule [font-family:Arial,sans-serif] text-[23px]/none font-light text-blue transition-colors duration-[220ms] max-[880px]:col-start-3 max-[880px]:row-span-2 max-[880px]:row-start-1 max-[560px]:size-8",
                  isActive && "border-signal bg-signal text-paper",
                )}
                aria-hidden="true"
              >
                {isActive ? "−" : "+"}
              </span>
            </button>

            <div
              className={cn(
                "grid invisible grid-rows-[0fr] [transition:grid-template-rows_380ms_cubic-bezier(.22,1,.36,1),visibility_0s_linear_380ms] motion-reduce:transition-none",
                isActive && "visible grid-rows-[1fr] [transition:grid-template-rows_420ms_cubic-bezier(.22,1,.36,1),visibility_0s_linear_0s]",
              )}
              id={panelId}
              aria-hidden={!isActive}
              inert={!isActive ? true : undefined}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={cn(
                    "grid min-h-0 translate-y-2.5 grid-cols-[minmax(0,1.05fr)_minmax(320px,.95fr)] gap-[clamp(30px,4vw,58px)] pt-0 pr-[clamp(24px,3vw,42px)] pb-[clamp(34px,4vw,52px)] pl-[76px] opacity-0 transition-[opacity,transform] duration-[260ms] [transition-timing-function:cubic-bezier(.22,1,.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none max-[880px]:grid-cols-1 max-[880px]:pl-[70px] max-[560px]:gap-6 max-[560px]:pt-0 max-[560px]:pr-2 max-[560px]:pb-[34px] max-[560px]:pl-7",
                    isActive && "translate-y-0 opacity-100 delay-90",
                  )}
                >
                  <div className="flex min-h-[430px] flex-col max-[880px]:min-h-0">
                    <p className="mt-0 mb-[30px] max-w-[690px] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(18px,1.7vw,22px)]/[1.5] text-ink max-[560px]:text-[17px]">
                      {project.summary}
                    </p>
                    <div className="grid gap-0 border-t border-dashed border-rule">
                      <DetailGroup label="What" points={project.what} />
                      <DetailGroup label="Why" points={project.why} />
                      <DetailGroup label="How" points={project.how} />
                    </div>
                    <div className="mt-auto flex flex-wrap gap-[9px] pt-[30px]">
                      <a
                        className="group inline-flex min-h-12 items-center justify-between gap-6 border border-blue-solid bg-blue-solid px-[15px] py-[13px] font-mono text-[9px]/none font-bold tracking-[.09em] text-white uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-[160ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue hover:bg-transparent hover:text-ink hover:shadow-[4px_4px_0_var(--rule)]"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>View on GitHub</span><ArrowIcon />
                      </a>
                      {project.liveUrl && (
                        <a
                          className="group inline-flex min-h-12 items-center justify-between gap-6 border border-rule px-[15px] py-[13px] font-mono text-[9px]/none font-bold tracking-[.09em] text-ink uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-[160ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue hover:bg-transparent hover:text-ink hover:shadow-[4px_4px_0_var(--rule)]"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Live preview</span><ArrowIcon />
                        </a>
                      )}
                      {!project.liveUrl && project.liveUrlPending && (
                        <button
                          className="inline-flex min-h-12 cursor-not-allowed items-center justify-between gap-6 border border-dashed border-rule bg-transparent px-[15px] py-[13px] font-mono text-[9px]/none font-bold tracking-[.09em] text-muted uppercase"
                          type="button"
                          disabled
                        >
                          <span>Live preview</span><span className="text-[8px] text-signal">Coming soon</span>
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="min-h-[430px] pt-3 max-[880px]:min-h-[360px] max-[560px]:min-h-[260px]">
                    <ProjectVideo project={project} active={isActive} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
