import Link from "next/link";
import { featuredProjects } from "../content/projects";
import { ProjectRows } from "./ProjectRows";

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

export function FeaturedProjects() {
  return (
    <section
      className="mx-[var(--page-gutter)] w-auto border-x border-b border-rule bg-paper px-[clamp(24px,5.8vw,74px)] pt-[clamp(82px,10vw,138px)] pb-[clamp(76px,9vw,124px)] max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[76px] max-[560px]:pb-[70px]"
      id="projects"
      aria-labelledby="projects-title"
    >
      <header className="mb-[clamp(44px,5vw,66px)] grid grid-cols-[minmax(0,1fr)_minmax(250px,390px)] items-end gap-x-[42px] max-[880px]:grid-cols-1 max-[560px]:mb-[38px]">
        <div>
          <p className="m-0 mb-[22px] font-mono text-[10px]/[1.3] font-bold tracking-[.13em] text-blue uppercase max-[560px]:mb-[17px] max-[560px]:text-[9px]">
            Featured projects · Selected builds
          </p>
          <h2
            className="m-0 max-w-[780px] [font-family:var(--font-display)] text-[length:var(--heading-section-size)] leading-[.9] font-black tracking-[-.03em] uppercase"
            id="projects-title"
          >
            Built to understand the problem, not just the tools.
          </h2>
        </div>
        <p className="m-0 border-l-[6px] border-signal pl-5 [font-family:Georgia,'Times_New_Roman',serif] text-[17px]/[1.55] text-muted max-[880px]:mt-7 max-[880px]:max-w-[520px] max-[560px]:border-l-[5px] max-[560px]:pl-[14px] max-[560px]:text-base">
          Three projects that show how I approach product thinking, delivery, and learning through the build.
        </p>
      </header>
      <ProjectRows projects={featuredProjects} />
      <Link
        className="group mt-7 ml-auto inline-flex min-h-12 w-fit min-w-[210px] items-center justify-between gap-6 border border-rule px-[15px] py-[13px] font-mono text-[9px]/none font-bold tracking-[.09em] text-ink uppercase transition-[color,background-color,border-color,box-shadow,transform] duration-[160ms] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-blue hover:bg-transparent hover:text-ink hover:shadow-[4px_4px_0_var(--rule)] max-[560px]:w-full"
        href="/projects"
      >
        <span>View all projects</span><ArrowIcon />
      </Link>
    </section>
  );
}
