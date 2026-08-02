import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { ProfileChapterNav } from "../components/ProfileChapterNav";
import { profileChapters } from "../content/profile";

export const metadata: Metadata = {
  title: "Profile — Shashank H D",
  description: "How Shashank H D learns, works, and approaches software engineering.",
};

const emailHref =
  "mailto:hdshashankgowda@gmail.com?subject=Software%20Engineering%20Opportunity";

function ActionArrow({ download = false }: { download?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="profile-action-icon">
      {download ? <path d="M9 2.5v9m0 0 3.5-3.5M9 11.5 5.5 8M3 15.5h12" /> : <path d="M4 14 14 4M6 4h8v8" />}
    </svg>
  );
}

export default function ProfilePage() {
  return (
    <main id="main-content" className="profile-page">
      <header className="profile-intro">
        <p className="profile-intro-eyebrow">Profile · The person behind the work</p>
        <p className="profile-intro-index" aria-hidden="true">01—05</p>
        <h1>Learning is how I turn uncertainty into useful work.</h1>
        <p className="profile-intro-copy">
          This is the deeper story behind the projects and roles: where my curiosity comes from,
          how I learn, and the principles I am developing as an engineer. The narrative is being
          authored carefully; each chapter below marks the shape of the final story.
        </p>
      </header>

      <div className="profile-reading-layout">
        <ProfileChapterNav chapters={profileChapters} />

        <div className="profile-chapters">
          {profileChapters.map((chapter, index) => (
            <article className="profile-chapter" id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-title`}>
              <div className="profile-chapter-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{chapter.eyebrow}</span>
                <span className="profile-placeholder-label">Narrative in progress</span>
              </div>
              <h2 id={`${chapter.id}-title`}>{chapter.title}</h2>
              <div className="profile-chapter-copy">
                {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {chapter.quote && <blockquote>{chapter.quote}</blockquote>}
              {chapter.facts && (
                <dl className="profile-facts">
                  {chapter.facts.map((fact) => (
                    <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>
      </div>

      <section className="profile-closing" aria-labelledby="profile-closing-title">
        <p>Next step</p>
        <h2 id="profile-closing-title">Let&apos;s turn the next unfamiliar problem into useful software.</h2>
        <div className="profile-actions">
          <a className="profile-action profile-action--primary" href="/resume.pdf" download>
            Download résumé <ActionArrow download />
          </a>
          <a className="profile-action" href={emailHref}>Hire me <ActionArrow /></a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
