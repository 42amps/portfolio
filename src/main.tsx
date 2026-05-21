import { StrictMode, useMemo, useState, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Project = {
  name: string;
  description: string;
  href: string;
  repo?: string;
  live?: string;
  accent: string;
  tags: string[];
};

const stackGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    label: "AI & Systems",
    items: ["RAG", "Document AI", "LangGraph", "Vector Search", "Agent State"],
  },
];

const contactLinks = [
  ["GitHub", "https://github.com/42amps"],
  ["LinkedIn", "https://www.linkedin.com/in/amankhanchandani/"],
  ["Portfolio Repo", "https://github.com/42amps/portfolio"],
  ["Email", "mailto:khanchandani.aman2605@gmail.com"],
];

const projects: Project[] = [
  {
    name: "Stateframe",
    href: "https://github.com/42amps/stateframe",
    repo: "https://github.com/42amps/stateframe",
    accent: "Agents",
    description:
      "File-first state ledger for long-horizon agent workflows: current truth, change history, failures, retries, and handoff packets.",
    tags: ["Agent Workflows", "State Ledger", "CLI", "JSON Schema"],
  },
  {
    name: "PayRail",
    href: "https://github.com/42amps/PayRail",
    repo: "https://github.com/42amps/PayRail",
    live: "https://playto-pay-engine.onrender.com",
    accent: "Fintech",
    description:
      "Payout engine demo focused on idempotency, append-only ledger accounting, row-level locking, payout states, and double-spend prevention.",
    tags: ["Django", "PostgreSQL", "Ledger", "Concurrency"],
  },
  {
    name: "BidMyTime",
    href: "https://bid-my-time.vercel.app",
    live: "https://bid-my-time.vercel.app",
    accent: "Live Product",
    description:
      "High-value scheduling product for booking time slots, presenting availability, and turning personal time into a clearer product surface.",
    tags: ["Scheduling", "Product", "React", "Live"],
  },
  {
    name: "AI Systems Notes",
    href: "https://github.com/42amps/ai-systems-notes",
    repo: "https://github.com/42amps/ai-systems-notes",
    accent: "Writing",
    description:
      "Technical notes on agent state, RAG evaluation, payout correctness, Vision-RAG, graph retrieval, and open-source contribution planning.",
    tags: ["RAG", "Document AI", "System Design", "Writing"],
  },
  {
    name: "Portfolio",
    href: "https://github.com/42amps/portfolio",
    repo: "https://github.com/42amps/portfolio",
    accent: "Public Surface",
    description:
      "A recruiter-facing project surface connecting the strongest repos, writing, product work, and contribution trail.",
    tags: ["React", "TypeScript", "Design", "Proof-of-Work"],
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
        second: "2-digit",
        hour12: true,
      }).format(new Date()),
    [],
  );

  return (
    <main className="site" data-theme={theme}>
      <div className="page">
        <header className="hero reveal">
          <div>
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
          </div>
        </header>

        <section className="panel about-panel reveal delay-1" aria-labelledby="about-heading">
          <div className="panel-glow" />
          <div className="avatar-tile" aria-hidden="true">
            <span>AK</span>
          </div>
          <p className="eyebrow">About me.</p>
          <h2 id="about-heading">I build inspectable AI and product systems for messy workflows.</h2>
          <p className="lead">
            I work across RAG, document intelligence, long-horizon agent state, payout correctness,
            and full-stack product infrastructure using{" "}
            <span className="inline-pill">TypeScript</span>, <span className="inline-pill">React</span>,{" "}
            <span className="inline-pill">Python</span>, <span className="inline-pill">Django</span>, and{" "}
            <span className="inline-pill">PostgreSQL</span>.
          </p>
          <a className="primary-button" href="mailto:khanchandani.aman2605@gmail.com">
            Let&apos;s Connect
          </a>
        </section>

        <section className="panel stack-panel reveal delay-2" aria-labelledby="stack-heading">
          <div className="panel-glow" />
          <div className="section-title">
            <span aria-hidden="true">_&gt;</span>
            <h2 id="stack-heading">Skills & Stack</h2>
          </div>
          {stackGroups.map((group) => (
            <div className="stack-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="skill-row">
                {group.items.map((item) => (
                  <span className="skill-pill" key={item}>
                    <span>{item.slice(0, 2)}</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="panel location-panel reveal delay-3" aria-label="Location">
          <div className="map-strip">
            <div className="map-pin" aria-hidden="true" />
          </div>
          <h2>Pune, India</h2>
          <p>{time} (Asia/Kolkata)</p>
        </section>

        <section className="panel contact-panel reveal delay-4" aria-label="Contact links">
          {contactLinks.map(([label, href]) => (
            <a href={href} key={href}>
              <span aria-hidden="true">{label.slice(0, 2)}</span>
              {label}
            </a>
          ))}
        </section>

        <section className="section reveal delay-5">
          <div className="section-title outside">
            <span aria-hidden="true">[]</span>
            <h2>Experience</h2>
          </div>
          <article className="timeline-card">
            <div className="timeline-line" aria-hidden="true" />
            <div>
              <span>May 2025 - Sep 2025</span>
              <h3>AI Engineer Intern - Carnot Research Pvt Ltd @ IIT Delhi</h3>
              <p>
                Worked on Vision-RAG and document retrieval pipelines for layout-heavy PDFs, built
                LangGraph-based knowledge graph extraction workflows, and explored hybrid retrieval
                using vector search, graph traversal, and probabilistic filtering.
              </p>
            </div>
          </article>
        </section>

        <section className="section reveal delay-6">
          <div className="section-title outside">
            <span aria-hidden="true">{"{}"}</span>
            <h2>Featured Projects</h2>
          </div>
          <p className="section-copy">Strongest public proof-of-work, plus one verified live product.</p>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-row" key={project.name} style={{ "--row": index } as CSSProperties}>
                <a className="project-hitbox" href={project.href} aria-label={`Open ${project.name}`} />
                <div className="project-mark" aria-hidden="true">
                  {project.name.slice(0, 2)}
                </div>
                <div className="project-main">
                  <span>{project.accent}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-actions">
                  {project.repo ? <a href={project.repo}>Repo</a> : null}
                  {project.live ? <a href={project.live}>Live</a> : null}
                  <span aria-hidden="true">-&gt;</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal delay-7">
          <div className="section-title outside">
            <span aria-hidden="true">##</span>
            <h2>Writing & Open Source</h2>
          </div>
          <div className="writing-grid">
            {writings.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
          <p className="section-copy">
            Building a contribution trail across AI, devtools, and documentation-heavy projects through
            small, reviewable fixes.
          </p>
        </section>

        <footer>
          <span>2026 - Aman R Khanchandani</span>
          <nav aria-label="Footer links">
            {contactLinks.slice(0, 3).map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
