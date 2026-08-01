import ThemeToggle from "./components/ThemeToggle";

const projects = [
  {
    title: "Fitrack",
    eyebrow: "Full-stack · Hackathon finalist",
    description:
      "A unified fitness platform for nutrition and workout tracking, with AI-assisted personalized recommendations.",
    highlights: [
      "Designed CRUD workflows and REST API integrations for nutrition and workout data.",
      "Integrated a generative AI API and iterated on outputs for more useful recommendations.",
    ],
    stack: ["React", "Node.js", "REST APIs", "Generative AI"],
    href: "https://github.com/hdshashank/fitrack",
  },
  {
    title: "URL Shortener",
    eyebrow: "Backend application",
    description:
      "A server-rendered URL management service focused on reliable backend behavior and a deliberately minimal interface.",
    highlights: [
      "Built URL creation and tracking workflows with Express.js and EJS.",
      "Used dynamic server-rendered content to keep the experience direct and lightweight.",
    ],
    stack: ["Express.js", "EJS", "JavaScript", "CRUD"],
    href: "https://github.com/hdshashank/urlShortener",
  },
  {
    title: "CLI Password Generator",
    eyebrow: "Developer tool",
    description:
      "A configurable command-line utility that creates secure passwords with options for length, digits, and symbols.",
    highlights: [
      "Built a clear command interface with Python and argparse.",
      "Explored argument handling, defaults, validation, and Linux automation workflows.",
    ],
    stack: ["Python", "argparse", "CLI", "Linux"],
    href: "https://github.com/hdshashank/CLI_Password_Generator",
  },
];

const skills = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, C" },
  { label: "Frontend", value: "Next.js, React, React Native, Tailwind CSS, Material UI" },
  { label: "Backend", value: "Express.js, REST APIs, JSON" },
  { label: "Data & tools", value: "PostgreSQL, MongoDB, Git, Linux" },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18">
      <path d="M5 15 15 5M7 5h8v8" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="nav shell">
          <a className="brand" href="#top" aria-label="Return to the top of the page">
            <span className="prompt">~/</span>shashank
          </a>
          <nav aria-label="Primary navigation">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </nav>
          <div className="navActions">
            <ThemeToggle />
            <a className="navCta" href="mailto:hdshashankgowda@gmail.com">Let&apos;s talk</a>
          </div>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="status"><span className="statusDot" /> Open to software engineering roles</div>
        <p className="kicker"><span>01.</span> Hello, I&apos;m Shashank.</p>
        <h1>I turn curiosity into<br /><em>working software.</em></h1>
        <p className="heroCopy">
          Information Science graduate and software engineer interested in building clear,
          useful products—from web applications to the platforms that keep them running.
        </p>
        <div className="heroActions">
          <a className="button primary" href="/resume.pdf" download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
          <a className="button secondary" href="#projects">Explore my work <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="sectionLabel"><span>02.</span><p>Experience</p></div>
        <div className="experienceGrid">
          <div>
            <p className="overline">September 17, 2025 — Present</p>
            <h2>BTP Platform Intern</h2>
            <p className="company">Merck</p>
          </div>
          <div className="experienceBody">
            <p>
              Building practical knowledge of SAP Business Technology Platform administration
              and the fundamentals behind enterprise cloud environments.
            </p>
            <div className="placeholder">
              <span>Work in progress</span>
              Responsibilities and measurable outcomes will be added as the role develops.
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="sectionLabel"><span>03.</span><p>Selected projects</p></div>
        <div className="sectionIntro">
          <h2>Learning by building.</h2>
          <p>Projects where I explored product thinking, backend fundamentals, and practical problem-solving.</p>
        </div>
        <div className="projectList">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="projectNumber">0{index + 1}</div>
              <div className="projectContent">
                <p className="overline">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
              <a className="projectLink" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell about" id="about">
        <div className="sectionLabel"><span>04.</span><p>About & skills</p></div>
        <div className="aboutGrid">
          <div>
            <h2>Grounded in fundamentals.<br /><em>Driven by progress.</em></h2>
            <p>
              I graduated in Information Science and Engineering from New Horizon College of
              Engineering in July 2026. I enjoy understanding how systems work, translating ideas
              into useful software, and learning alongside teams that care about their craft.
            </p>
            <p>
              As a Smart India Hackathon 2024 finalist, I led and collaborated under pressure to
              turn an ambitious fitness and nutrition concept into a structured solution.
            </p>
          </div>
          <div className="skillList">
            {skills.map((skill) => (
              <div className="skill" key={skill.label}>
                <span>{skill.label}</span><p>{skill.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="kicker"><span>05.</span> What&apos;s next?</p>
        <h2>Let&apos;s build something<br /><em>worth using.</em></h2>
        <p>I&apos;m actively looking for software engineering opportunities and would love to hear about your team.</p>
        <a className="button primary" href="mailto:hdshashankgowda@gmail.com">Start a conversation <span aria-hidden="true">→</span></a>
      </section>

      <footer className="footer shell">
        <p>Designed &amp; built by Shashank H D</p>
        <div>
          <a href="https://github.com/hdshashank" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/hdshashank/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:hdshashankgowda@gmail.com">Email</a>
        </div>
        <p className="copyright">© 2026</p>
      </footer>
    </main>
  );
}
