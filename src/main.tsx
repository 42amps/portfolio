import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Django",
  "PostgreSQL",
  "Docker",
  "Supabase",
  "RAG",
  "Document AI",
  "LangGraph",
  "Vector Search",
  "System Design",
  "CLI Tools",
  "GitHub Actions",
  "Codex",
];

const projects = [
  {
    name: "Stateframe",
    href: "https://github.com/42amps/stateframe",
    description:
      "File-first task-state ledger for long-horizon agent workflows. Preserves current truth, change history, failures, retries, and next actions as inspectable state files.",
    tags: ["Agent Workflows", "State Management", "CLI", "JSON Schema"],
  },
  {
    name: "PayRail",
    href: "https://github.com/42amps/playto-pay-engine",
    demo: "https://playto-pay-engine.onrender.com",
    description:
      "Real-time payout engine demo for banking-payment correctness: append-only ledger accounting, idempotency keys, row-level locking, payout states, and double-spend prevention.",
    tags: ["Django", "PostgreSQL", "Ledger", "Concurrency", "React"],
  },
  {
    name: "AI Systems Notes",
    href: "https://github.com/42amps/ai-systems-notes",
    description:
      "Technical notes on agent state, RAG systems, payout correctness, document AI, retrieval evaluation, graph retrieval, and open-source contribution planning.",
    tags: ["RAG", "Agents", "Document AI", "Evaluation", "Writing"],
  },
  {
    name: "Portfolio",
    href: "https://github.com/42amps/portfolio",
    description:
      "Recruiter-facing public surface that connects the strongest repos, writing, technical focus, and contribution trail.",
    tags: ["React", "TypeScript", "Tailwind", "Portfolio"],
  },
];

const writings = [
  ["Agent State vs Memory", "https://github.com/42amps/ai-systems-notes/blob/main/docs/agent-state-vs-memory.md"],
  ["Payout System Correctness", "https://github.com/42amps/ai-systems-notes/blob/main/docs/payout-system-correctness.md"],
  ["Vision-RAG Notes", "https://github.com/42amps/ai-systems-notes/blob/main/docs/vision-rag-notes.md"],
  ["RAG Evaluation Notes", "https://github.com/42amps/ai-systems-notes/blob/main/docs/rag-evaluation-notes.md"],
  [
    "Knowledge Graphs for Retrieval",
    "https://github.com/42amps/ai-systems-notes/blob/main/docs/knowledge-graphs-for-retrieval.md",
  ],
];

const contributionTargets = [
  "Docs improvements",
  "Setup/repro fixes",
  "Example cleanup",
  "Small tests",
  "Type fixes",
];

function App() {
  return (
    <main className="page-shell">
      <section className="intro-grid">
        <div className="hero-card">
          <div className="availability">Available for AI/Product Engineering internships</div>
          <h1>Hi, I&apos;m Aman - Applied AI + Product Engineer.</h1>
          <p>
            I build applied AI and product systems for messy information workflows: RAG, document
            intelligence, agent workflow state, payout correctness, and full-stack product infrastructure.
          </p>
          <nav className="link-row" aria-label="Primary links">
            <a href="https://github.com/42amps">GitHub</a>
            <a href="https://www.linkedin.com/in/amankhanchandani/">LinkedIn</a>
            <a href="mailto:khanchandani.aman2605@gmail.com">Email</a>
          </nav>
        </div>

        <aside className="profile-card" aria-label="Profile summary">
          <div className="avatar-mark">AK</div>
          <div>
            <span className="label">India</span>
            <strong>Asia/Kolkata</strong>
          </div>
          <div>
            <span className="label">Studying</span>
            <strong>Cyber Physical Systems, MIT Manipal</strong>
          </div>
          <div>
            <span className="label">Focus</span>
            <strong>RAG, agents, document AI, backend correctness</strong>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-title">
          <span>About me.</span>
          <h2>Systems that survive handoff, retries, and inspection.</h2>
        </div>
        <p className="wide-copy">
          I care about product systems where the hard part is not the demo, but the state, evidence,
          recovery path, and correctness model behind it. My strongest current work is Stateframe,
          PayRail, AI Systems Notes, and this portfolio.
        </p>
      </section>

      <section className="section">
        <div className="section-title">
          <span>Skills & Stack</span>
          <h2>Tools I use to build.</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="quote-strip">
        <p>&quot;The best AI systems make their state, evidence, and failure modes legible.&quot;</p>
        <span>- working principle</span>
      </section>

      <section className="section">
        <div className="section-title">
          <span>Experience</span>
          <h2>AI Engineer Intern</h2>
        </div>
        <div className="experience-card">
          <div>
            <h3>Carnot Research Pvt Ltd @ IIT Delhi</h3>
            <p>May 2025 - Sep 2025</p>
          </div>
          <ul>
            <li>Worked on Vision-RAG and document retrieval pipelines for layout-heavy PDFs.</li>
            <li>Built LangGraph-based knowledge graph extraction workflows.</li>
            <li>Explored hybrid retrieval with vector search, graph traversal, and probabilistic filtering.</li>
            <li>Authored technical deep-dives on OCR benchmarking, Vision Transformers, and RAG evaluation.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span>Featured Projects</span>
          <h2>Strongest public proof-of-work.</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.name}>
              <a className="project-main" href={project.href}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </a>
              <div className="project-actions">
                <a href={project.href}>Repo</a>
                {project.demo ? <a href={project.demo}>Demo</a> : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <div className="section-title">
            <span>Open Source Contributions</span>
            <h2>Contribution trail in progress.</h2>
          </div>
          <p className="wide-copy">
            I am building a 30-day external PR trail across AI, devtools, and documentation-heavy projects.
            I am prioritizing small PRs that improve reproducibility, examples, tests, and docs.
          </p>
        </div>
        <div className="target-card">
          {contributionTargets.map((target) => (
            <span key={target}>{target}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span>Latest Writings</span>
          <h2>Technical notes.</h2>
        </div>
        <div className="writing-list">
          {writings.map(([title, href]) => (
            <a href={href} key={href}>
              {title}
            </a>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 Aman R Khanchandani</span>
        <nav className="link-row" aria-label="Footer links">
          <a href="https://github.com/42amps">GitHub</a>
          <a href="https://www.linkedin.com/in/amankhanchandani/">LinkedIn</a>
          <a href="mailto:khanchandani.aman2605@gmail.com">Email</a>
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
