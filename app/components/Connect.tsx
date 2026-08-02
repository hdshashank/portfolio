import { Footer } from "./Footer";

const emailHref =
  "mailto:hdshashankgowda@gmail.com?subject=Software%20Engineering%20Opportunity";

export function Connect() {
  return (
    <>
      <section className="connect-section" id="connect" aria-labelledby="connect-title">
        <div className="connect-overview">
          <div className="connect-social-column">
            <h2 className="connect-label" id="connect-title">Connect</h2>
            <nav className="connect-socials" aria-label="Social links">
              <a href="https://github.com/hdshashank" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/hdshashank/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={emailHref}>Email</a>
            </nav>
          </div>

          <div className="connect-direct">
            <a className="connect-hire" href={emailHref}>Hire me!</a>
            <p>Open to software engineering opportunities.</p>
          </div>
        </div>

        <p className="connect-wordmark" aria-label="Shashank H D">
          Shashank <span>H D</span>
        </p>
      </section>

      <Footer />
    </>
  );
}
