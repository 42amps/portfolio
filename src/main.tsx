import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: Array<{ label: string; href: string }>;
};

const featuredProjects: Project[] = [
  {
    title: "Stateframe - File-First State Ledger for Agent Workflows",
    description:
      "File-first task-state ledger for long-horizon agent workflows. Preserves current truth, change history, failures, retries, and next actions as inspectable state files.",
    tags: ["Agent Workflows", "State Management", "CLI", "JSON Schema", "Developer Tools"],
    links: [{ label: "Repo", href: "https://github.com/42amps/stateframe" }],
  },
  {
    title: "PayRail - Real-Time Payout Engine",
    description:
      "Real-time payout engine demo for banking-payment correctness. Models append-only ledger accounting, idempotency keys, row-level locking, payout state transitions, and double-spend prevention.",
    tags: ["Django", "PostgreSQL", "Idempotency", "Ledger", "Concurrency", "React", "Docker"],
    links: [
      { label: "Demo", href: "https://playto-pay-engine.onrender.com" },
      { label: "Repo", href: "https://github.com/42amps/playto-pay-engine" },
    ],
  },
  {
    title: "AI Systems Notes",
    description:
      "Technical notes on agent state, RAG systems, payout correctness, document AI, retrieval evaluation, and hybrid search.",
    tags: ["RAG", "Agents", "System Design", "Document AI", "Backend Correctness"],
    links: [{ label: "Repo", href: "https://github.com/42amps/ai-systems-notes" }],
  },
];

const notes = [
  ["Agent State vs Memory", "https://github.com/42amps/ai-systems-notes/blob/main/docs/agent-state-vs-memory.md"],
  ["Payout System Correctness", "https://github.com/42amps/ai-systems-notes/blob/main/docs/payout-system-correctness.md"],
  ["Vision-RAG Notes", "https://github.com/42amps/ai-systems-notes/blob/main/docs/vision-rag-notes.md"],
  ["RAG Evaluation Notes", "https://github.com/42amps/ai-systems-notes/blob/main/docs/rag-evaluation-notes.md"],
  [
    "Knowledge Graphs for Retrieval",
    "https://github.com/42amps/ai-systems-notes/blob/main/docs/knowledge-graphs-for-retrieval.md",
  ],
];

function App() {
  return (
    <main>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Open to AI/Product Engineering internships</p>
            <h1>Aman R Khanchandani</h1>
            <p className="role">Applied AI + Product Engineer</p>
            <p className="hero-copy">
              I build applied AI and product systems for messy information workflows: RAG, document
              intelligence, agent workflow state, payout correctness, and full-stack product infrastructure.
            </p>
            <div className="actions" aria-label="Primary links">
              <a href="https://github.com/42amps">GitHub</a>
              <a href="https://www.linkedin.com/in/amankhanchandani/">LinkedIn</a>
              <a href="mailto:khanchandani.aman2605@gmail.com">Email</a>
            </div>
          </div>
          <aside className="focus-panel" aria-label="Current focus">
            <span>Current focus</span>
            <ul>
              <li>RAG and document intelligence</li>
              <li>Long-horizon agent state</li>
              <li>Backend correctness</li>
              <li>Inspectable product systems</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">About</p>
            <h2>Systems that are inspectable, recoverable, and useful beyond demos.</h2>
          </div>
          <p>
            I am a Cyber Physical Systems student at Manipal Institute of Technology, interested in
            RAG, document AI, long-horizon agents, backend correctness, and product engineering. I
            focus on systems that make messy workflows easier to inspect, recover, and ship.
          </p>
        </div>
      </section>

      <section className="section subtle">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Strongest public proof-of-work</h2>
          </div>
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>AI Engineer Intern - Carnot Research Pvt Ltd @ IIT Delhi</h2>
            <p className="muted">May 2025 - Sep 2025</p>
          </div>
          <ul className="bullets">
            <li>Worked on Vision-RAG and document retrieval pipelines for layout-heavy PDFs.</li>
            <li>Built LangGraph-based knowledge graph extraction workflows.</li>
            <li>Explored hybrid retrieval using vector search, graph traversal, and probabilistic filtering.</li>
            <li>Authored technical deep-dives on OCR benchmarking, Vision Transformers, and RAG evaluation.</li>
          </ul>
        </div>
      </section>

      <section className="section subtle">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">Writing</p>
            <h2>Technical notes</h2>
          </div>
          <div className="note-list">
            {notes.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">Open source</p>
            <h2>Contribution trail in progress</h2>
          </div>
          <p>
            Currently building a contribution trail across AI, devtools, and documentation-heavy
            projects. I focus on docs, examples, reproducibility improvements, and small fixes that
            make projects easier to use.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <span>Contact</span>
          <div>
            <a href="https://github.com/42amps">GitHub</a>
            <a href="https://www.linkedin.com/in/amankhanchandani/">LinkedIn</a>
            <a href="mailto:khanchandani.aman2605@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
