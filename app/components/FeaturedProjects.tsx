import Link from "next/link";
import { featuredProjects } from "../content/projects";
import { ProjectRows } from "./ProjectRows";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="project-action-icon">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

export function FeaturedProjects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <header className="projects-section-heading">
        <div>
          <p className="section-kicker">Featured projects · Selected builds</p>
          <h2 id="projects-title">Built to understand the problem, not just the tools.</h2>
        </div>
        <p>Three projects that show how I approach product thinking, delivery, and learning through the build.</p>
      </header>
      <ProjectRows projects={featuredProjects} />
      <Link className="projects-view-all" href="/projects">
        <span>View all projects</span><ArrowIcon />
      </Link>
    </section>
  );
}
