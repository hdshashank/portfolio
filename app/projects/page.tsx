import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { ProjectRows } from "../components/ProjectRows";
import { allProjects } from "../content/projects";

export const metadata: Metadata = {
  title: "Projects | Shashank H D",
  description: "A complete archive of software projects by Shashank H D.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="bg-transparent">
      <header className="relative mx-[var(--page-gutter)] grid min-h-[min(650px,calc(100svh-76px))] w-auto content-center overflow-hidden border-x border-b border-rule bg-paper px-[clamp(24px,7.4vw,94px)] py-[clamp(76px,9vw,128px)] after:pointer-events-none after:absolute after:right-[-.03em] after:bottom-[-.2em] after:[font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] after:text-[clamp(130px,25vw,360px)]/none after:tracking-[-.045em] after:text-transparent after:content-['WORK'] after:[-webkit-text-stroke:1px_color-mix(in_srgb,var(--blue)_18%,transparent)] max-[560px]:mx-0 max-[560px]:min-h-[calc(100svh-68px)] max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[76px] max-[560px]:pb-16">
        <p className="col-span-full m-0 mb-[22px] font-mono text-[10px]/[1.3] font-bold tracking-[.13em] text-blue uppercase max-[560px]:mb-[17px] max-[560px]:text-[9px]">
          All projects · Complete archive
        </p>
        <p className="absolute top-[clamp(34px,5vw,64px)] right-[clamp(24px,7.4vw,94px)] m-0 font-mono text-[10px]/none font-bold tracking-[.12em] text-signal uppercase max-[560px]:top-6 max-[560px]:right-4">
          {String(allProjects.length).padStart(2, "0")} builds
        </p>
        <h1 className="relative z-[1] m-0 max-w-[1040px] [font-family:var(--font-display)] text-[length:var(--heading-page-size)] leading-[.86] font-black tracking-[-.035em] uppercase">
          Work shaped by curiosity, constraints, and the need to make things useful.
        </h1>
        <p className="relative z-[1] mt-[clamp(34px,4vw,52px)] mr-0 mb-0 ml-[clamp(0px,10vw,150px)] max-w-[650px] border-l-[7px] border-signal pl-[22px] [font-family:Georgia,'Times_New_Roman',serif] text-[clamp(17px,1.7vw,22px)]/[1.55] text-muted max-[560px]:ml-0 max-[560px]:border-l-[5px] max-[560px]:pl-[15px] max-[560px]:text-base">
          An expanding record of what I built, why each problem mattered, and how I worked through it.
        </p>
      </header>

      <section className="mx-[var(--page-gutter)] w-auto border-x border-b border-rule bg-paper px-[clamp(24px,5.8vw,74px)] pt-[clamp(68px,8vw,104px)] pb-[clamp(78px,9vw,120px)] max-[560px]:mx-0 max-[560px]:w-full max-[560px]:border-x-0 max-[560px]:px-4 max-[560px]:pt-[68px] max-[560px]:pb-[76px]" aria-labelledby="projects-archive-title">
        <h2 id="projects-archive-title" className="sr-only">Project archive</h2>
        <ProjectRows projects={allProjects} />
      </section>
      <Footer />
    </main>
  );
}
