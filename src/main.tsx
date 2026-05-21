import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const stack = [
  "TypeScript",
  "React",
  "Python",
  "Django",
  "PostgreSQL",
  "RAG",
  "LangGraph",
  "Document AI",
  "Docker",
  "GitHub Actions",
];

const links = [
  ["GitHub", "https://github.com/42amps"],
  ["LinkedIn", "https://www.linkedin.com/in/amankhanchandani/"],
  ["Email", "mailto:khanchandani.aman2605@gmail.com"],
];

const projects = [
  {
    name: "Stateframe",
    href: "https://github.com/42amps/stateframe",
    description:
      "File-first state ledger for long-horizon agent workflows: current truth, change history, failures, retries, and handoff packets.",
    tags: ["Agents", "State", "CLI", "JSON Schema"],
  },
  {
    name: "PayRail",
    href: "https://github.com/42amps/PayRail",
    demo: "https://playto-pay-engine.onrender.com",
    description:
      "Payout engine demo focused on idempotency, append-only ledger accounting, row-level locking, payout states, and double-spend prevention.",
    tags: ["Django", "PostgreSQL", "Ledger", "Concurrency"],
  },
  {
    name: "AI Systems Notes",
    href: "https://github.com/42amps/ai-systems-notes",
    description:
      "Technical notes on agent state, RAG evaluation, payout correctness, Vision-RAG, graph retrieval, and contribution planning.",
    tags: ["RAG", "Document AI", "Systems", "Writing"],
  },
];

const writings = [
  ["Agent State vs Memory", "https://github.com/42amps/ai-systems-notes/blob/main/docs/agent-state-vs-memory.md"],
  ["Payout System Correctness", "https://github.com/42amps/ai-systems-notes/blob/main/docs/payout-system-correctness.md"],
  ["Vision-RAG Notes", "https://github.com/42amps/ai-systems-notes/blob/main/docs/vision-rag-notes.md"],
  ["RAG Evaluation Notes", "https://github.com/42amps/ai-systems-notes/blob/main/docs/rag-evaluation-notes.md"],
];

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const time = useMemo(
    () =>
      new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date()),
    [],
  );

  return (
    <main className="site" data-theme={theme}>
      <header className="hero">
        <h1>
          Hi, I&apos;m Aman - <span>Applied AI + Product Engineer.</span>
        </h1>

        <div className="status-row" aria-label="Availability and theme">
          <span className="availability">
            <span aria-hidden="true" />
            Open to AI/Product Engineering internships
          </span>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <section className="about-card" aria-labelledby="about-heading">
        <div className="avatar-card" aria-hidden="true">
          <div className="avatar-glow" />
          <strong>AK</strong>
        </div>

        <div className="about-copy">
          <p className="eyebrow">About me.</p>
          <h2 id="about-heading">I build inspectable AI and product systems for messy workflows.</h2>
          <p>
            I work across RAG, document intelligence, long-horizon agent state, payout correctness,
            and full-stack product infrastructure. The throughline is simple: systems should expose
            their state, evidence, recovery path, and failure modes.
          </p>

          <div className="inline-stack" aria-label="Core stack">
            {stack.slice(0, 7).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <a className="connect-button" href="mailto:khanchandani.aman2605@gmail.com">
            Let&apos;s Connect
          </a>
        </div>
      </section>

      <section className="info-grid" aria-label="Profile details and links">
        <article className="mini-card">
          <span>India</span>
          <strong>{time} (Asia/Kolkata)</strong>
        </article>
        <article className="mini-card">
          <span>Studying</span>
          <strong>Cyber Physical Systems - MIT Manipal</strong>
        </article>
        <article className="mini-card link-card">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>Skills & Stack</span>
          <h2>Tools I use to ship the work.</h2>
        </div>
        <div className="skill-grid">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>Experience</span>
          <h2>AI Engineer Intern</h2>
        </div>
        <article className="experience-card">
          <div>
            <h3>Carnot Research Pvt Ltd @ IIT Delhi</h3>
            <p>May 2025 - Sep 2025</p>
          </div>
          <p>
            Worked on Vision-RAG and document retrieval pipelines for layout-heavy PDFs, built
            LangGraph-based knowledge graph extraction workflows, and explored hybrid retrieval using
            vector search, graph traversal, and probabilistic filtering.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>Featured Projects</span>
          <h2>Strongest public proof-of-work.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <a href={project.href}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </a>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.href}>Repo</a>
                {project.demo ? <a href={project.demo}>Demo</a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-col">
        <div className="section-heading">
          <span>Open Source</span>
          <h2>Contribution trail in progress.</h2>
          <p>
            I am building a 30-day external PR trail across AI, devtools, and documentation-heavy
            projects with small, reviewable fixes.
          </p>
        </div>
        <div className="writing-list">
          {writings.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>2026 - Aman R Khanchandani</span>
        <nav aria-label="Footer links">
          {links.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
