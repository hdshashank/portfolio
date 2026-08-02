import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { ProjectRows } from "../components/ProjectRows";
import { allProjects } from "../content/projects";

export const metadata: Metadata = {
  title: "Projects — Shashank H D",
  description: "A complete archive of software projects by Shashank H D.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="projects-page">
      <header className="projects-archive-intro">
        <p className="section-kicker">All projects · Complete archive</p>
        <p className="projects-archive-count">
          {String(allProjects.length).padStart(2, "0")} builds
        </p>
        <h1>Work shaped by curiosity, constraints, and the need to make things useful.</h1>
        <p className="projects-archive-copy">
          An expanding record of what I built, why each problem mattered, and how I worked through it.
        </p>
      </header>

      <section className="projects-archive" aria-labelledby="projects-archive-title">
        <h2 id="projects-archive-title" className="visually-hidden">Project archive</h2>
        <ProjectRows projects={allProjects} />
      </section>
      <Footer />
    </main>
  );
}
