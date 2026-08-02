import Link from "next/link";

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="hero-action-icon">
      <path d="M9 2.5v9m0 0 3.5-3.5M9 11.5 5.5 8M3 15.5h12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="hero-action-icon">
      <path d="M4 14 14 4M6 4h8v8" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="portfolio-hero" aria-labelledby="hero-title">
        <div className="hero-status">
          <span className="hero-status-dot" aria-hidden="true" />
          <span>Available for software engineering roles</span>
        </div>

        <div className="hero-body">
          <p className="hero-role">Software engineer · Bengaluru, India</p>
          <h1 id="hero-title" className="hero-title">
            <span>Curious by nature.</span>
            <span className="hero-title-accent">Engineer by practice.</span>
          </h1>

          <div className="hero-value">
            <p>
              I learn fast, work from fundamentals, and turn unfamiliar problems into useful
              software that creates real value.
            </p>
          </div>

          <div className="hero-actions" aria-label="Profile actions">
            <a className="hero-action hero-action--primary" href="/resume.pdf" download>
              <span>Download résumé</span>
              <DownloadIcon />
            </a>
            <Link className="hero-action" href="/profile">
              <span>Explore my profile</span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
