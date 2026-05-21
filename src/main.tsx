import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Project = {
  name: string;
  description: string;
  repo?: string;
  live?: string;
  accent: string;
  tags: string[];
};

type Writing = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  visual: string;
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
    label: "AI & Agents",
    items: ["RAG", "Document AI", "LangGraph", "Vector Search", "Agent State"],
  },
];

const contactLinks = [
  ["GitHub", "https://github.com/42amps", "GH"],
  ["LinkedIn", "https://www.linkedin.com/in/amankhanchandani/", "IN"],
  ["Portfolio", "https://github.com/42amps/portfolio", "PF"],
  ["Email", "mailto:khanchandani.aman2605@gmail.com", "EM"],
];

const projects: Project[] = [
  {
    name: "Stateframe",
    repo: "https://github.com/42amps/stateframe",
    accent: "Agent Infrastructure",
    description:
      "File-first task-state ledger for long-horizon agent workflows, recovery, retries, and inspectable handoff packets.",
    tags: ["Agents", "State", "CLI", "Schema"],
  },
  {
    name: "PayRail",
    repo: "https://github.com/42amps/PayRail",
    live: "https://playto-pay-engine.onrender.com",
    accent: "Payout Correctness",
    description:
      "Payout engine demo with append-only ledger accounting, idempotency keys, row-level locking, and explicit payout states.",
    tags: ["Django", "Postgres", "Ledger", "Locks"],
  },
  {
    name: "BidMyTime",
    live: "https://bid-my-time.vercel.app",
    accent: "Live Product",
    description:
      "High-value scheduling product for presenting availability, booking time slots, and turning personal time into a product surface.",
    tags: ["Scheduling", "Product", "React", "Live"],
  },
  {
    name: "AI Systems Notes",
    repo: "https://github.com/42amps/ai-systems-notes",
    accent: "Technical Writing",
    description:
      "Notes on agent state, RAG evaluation, payout correctness, Vision-RAG, graph retrieval, and contribution planning.",
    tags: ["RAG", "Agents", "Docs", "Systems"],
  },
  {
    name: "Portfolio",
    repo: "https://github.com/42amps/portfolio",
    accent: "Public Funnel",
    description:
      "Recruiter-facing surface connecting projects, writing, technical interests, and an external contribution trail.",
    tags: ["React", "TypeScript", "Design", "Proof"],
  },
  {
    name: "VRAG Lab",
    repo: "https://github.com/42amps/VRAG",
    accent: "Exploratory Lab",
    description:
      "Exploratory Vision-RAG document retrieval lab for OCR-free page retrieval and multimodal PDF understanding.",
    tags: ["Vision-RAG", "PDF", "Retrieval", "OCR"],
  },
];

const contributionTargets = [
  ["ritshover/ritshover", "Docs / setup improvements", "Scout"],
  ["fastapi/fastapi", "Examples and reproduction notes", "Watch"],
  ["langchain-ai/langgraph", "Agent workflow docs", "Scout"],
  ["run-llama/llama_index", "RAG examples and docs", "Watch"],
];

const writings: Writing[] = [
  {
    title: "Agent State vs Memory",
    description: "Why memory, traces, orchestration, and durable state solve different problems in long-horizon agents.",
    href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/agent-state-vs-memory.md",
    tags: ["Agents", "State", "Workflow"],
    visual: "state",
  },
  {
    title: "Payout System Correctness",
    description: "A PayRail-backed note on idempotency, append-only ledgers, row locks, retries, and refund flows.",
    href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/payout-system-correctness.md",
    tags: ["Fintech", "Ledger", "Backend"],
    visual: "ledger",
  },
  {
    title: "Vision-RAG Notes",
    description: "Where OCR-first RAG breaks down and why page-level visual retrieval matters for layout-heavy PDFs.",
    href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/vision-rag-notes.md",
    tags: ["Vision-RAG", "PDF", "Retrieval"],
    visual: "vision",
  },
  {
    title: "RAG Evaluation Notes",
    description: "Separating retrieval quality, generation quality, faithfulness, latency, cost, and failure analysis.",
    href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/rag-evaluation-notes.md",
    tags: ["RAG", "Eval", "Quality"],
    visual: "eval",
  },
  {
    title: "Knowledge Graphs for Retrieval",
    description: "When vector search is enough, when graph traversal helps, and how hybrid retrieval can be structured.",
    href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/knowledge-graphs-for-retrieval.md",
    tags: ["Graphs", "Search", "RAG"],
    visual: "graph",
  },
  {
    title: "Open Source Contribution Plan",
    description: "A practical 30-day sprint for useful docs, examples, reproduction notes, tests, and small fixes.",
    href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/open-source-contribution-plan.md",
    tags: ["OSS", "PRs", "Plan"],
    visual: "oss",
  },
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
      <div className="page">
        <header className="hero reveal">
          <h1>
            Hi, I&apos;m Aman <span>-</span>
          </h1>
          <div className="hero-status">
            <span className="availability">
              <span aria-hidden="true" />
              Available for internships
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

        <section className="top-grid" aria-label="Intro and stack">
          <div className="left-stack">
            <article className="panel about-panel reveal delay-1">
              <div className="panel-sheen" />
              <img className="avatar" src="/github-avatar.png" alt="Aman R Khanchandani" />
              <h2>About me.</h2>
              <p>
                I build applied AI and product systems using <span>TypeScript</span>, <span>React</span>,{" "}
                <span>Python</span>, <span>Django</span>, <span>PostgreSQL</span>, and RAG - focused
                on inspectable state, retrieval quality, backend correctness, and real product workflows.
              </p>
              <a className="primary-button" href="mailto:khanchandani.aman2605@gmail.com">
                Let&apos;s Connect
              </a>
            </article>

            <div className="mini-grid">
              <article className="panel location-card reveal delay-2">
                <div className="map-strip">
                  <div className="map-pin" aria-hidden="true" />
                </div>
                <strong>Pune, India</strong>
                <span>{time} (Asia/Kolkata)</span>
              </article>
              <article className="panel contact-card reveal delay-3">
                {contactLinks.map(([label, href, icon]) => (
                  <a href={href} key={href}>
                    <strong>{icon}</strong>
                    <span>{label}</span>
                  </a>
                ))}
              </article>
            </div>
          </div>

          <aside className="panel stack-panel reveal delay-2">
            <div className="section-title compact">
              <span aria-hidden="true">_&gt;</span>
              <h2>Skills & Stack</h2>
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
          </aside>
        </section>

        <section className="section reveal delay-4">
          <div className="section-title">
            <span aria-hidden="true">[]</span>
            <h2>Experience</h2>
          </div>
          <article className="experience-card">
            <div className="timeline-dot" aria-hidden="true" />
            <div>
              <div className="experience-head">
                <h3>AI Engineer Intern</h3>
                <span>May 2025 - Sep 2025</span>
              </div>
              <p className="company">Carnot Research Pvt Ltd @ IIT Delhi</p>
              <ul>
                <li>Worked on Vision-RAG and document retrieval pipelines for layout-heavy PDFs.</li>
                <li>Built LangGraph-based knowledge graph extraction workflows.</li>
                <li>Explored hybrid retrieval with vector search, graph traversal, and probabilistic filtering.</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="section reveal delay-5">
          <div className="section-title">
            <span aria-hidden="true">{"{}"}</span>
            <h2>Featured Projects</h2>
          </div>
          <p className="section-copy">Strongest proof-of-work plus verified live product surfaces.</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span>{project.accent}</span>
                  <div>
                    {project.live ? <a href={project.live}>Live</a> : null}
                    {project.repo ? <a href={project.repo}>Repo</a> : null}
                  </div>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal delay-6">
          <div className="activity-head">
            <div className="section-title">
              <span aria-hidden="true">#</span>
              <h2>GitHub Activity</h2>
            </div>
            <a href="https://github.com/42amps">github.com/42amps</a>
          </div>
          <div className="activity-card">
            <img src="https://ghchart.rshah.org/22c55e/42amps" alt="GitHub contribution chart for 42amps" />
          </div>
        </section>

        <section className="section reveal delay-7">
          <div className="section-title">
            <span aria-hidden="true">PR</span>
            <h2>Open Source Contributions</h2>
          </div>
          <p className="section-copy">Building the contribution trail deliberately, with small inspectable PRs.</p>
          <div className="contribution-list">
            {contributionTargets.map(([repo, focus, status]) => (
              <a href={`https://github.com/${repo}`} key={repo}>
                <strong>{repo}</strong>
                <span>{focus}</span>
                <em>{status}</em>
              </a>
            ))}
          </div>
        </section>

        <section className="section reveal delay-8">
          <div className="section-title">
            <span aria-hidden="true">##</span>
            <h2>Latest Writings</h2>
          </div>
          <p className="section-copy">Technical notes around AI systems, retrieval, backend correctness, and open source.</p>
          <div className="writing-grid">
            {writings.map((writing) => (
              <article className="writing-card" key={writing.href}>
                <a href={writing.href} aria-label={`Read ${writing.title}`} />
                <div className={`writing-visual ${writing.visual}`}>
                  <span>{writing.title}</span>
                </div>
                <h3>{writing.title}</h3>
                <p>{writing.description}</p>
                <div className="tag-row">
                  {writing.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer>
          <span>2026 - Aman R Khanchandani</span>
          <nav aria-label="Footer links">
            <a href="https://github.com/42amps">GitHub</a>
            <a href="https://www.linkedin.com/in/amankhanchandani/">LinkedIn</a>
            <a href="mailto:khanchandani.aman2605@gmail.com">Email</a>
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
