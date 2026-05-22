import { StrictMode, useEffect, useMemo, useState, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Project = {
  name: string;
  description: string;
  repo?: string;
  live?: string;
  accent: string;
  tags: string[];
  status?: string;
};

type Writing = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  visual: string;
};

type ContributionGroup = {
  repo: string;
  owner: string;
  status: string;
  items: {
    title: string;
    href: string;
    type: string;
    state: string;
  }[];
};

const stackGroups = [
  {
    label: "AI & Systems",
    items: ["RAG", "Document AI", "LangGraph", "Vector Search", "Knowledge Graphs", "Agent State"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["Python", "PostgreSQL", "Docker", "Git", "Linux"],
  },
];

const contactLinks = [
  ["GitHub", "https://github.com/42amps", "GH"],
  ["LinkedIn", "https://www.linkedin.com/in/amankhanchandani/", "IN"],
  ["Resume", "/Resume.pdf", "CV"],
  ["Email", "mailto:khanchandani.aman2605@gmail.com", "EM"],
];

const rotatingRoles = [
  "AI Engineer",
  "Product Management",
  "Backend Systems",
  "RAG & Document AI",
  "Applied AI Builder",
];

const proofSignals = [
  ["Vision-RAG", "PDF pages as visual inputs; layout-heavy tables, diagrams, and mixed-script docs."],
  ["Hybrid Retrieval", "FAISS vector search, Neo4j graph traversal, and probabilistic pre-filtering."],
  ["Payment Correctness", "Idempotency, append-only ledgers, row locks, payout states, and refund flows."],
  ["Agent State", "Current truth, change history, retries, failures, and next actions as inspectable files."],
];

const projects: Project[] = [
  {
    name: "Stateframe",
    repo: "https://github.com/42amps/stateframe",
    accent: "Agent Infrastructure",
    description:
      "File-first task-state ledger for long-running AI workflows, recovery, retries, and inspectable handoff packets.",
    tags: ["Agents", "State", "CLI", "Schema"],
    status: "Main proof",
  },
  {
    name: "PayRail",
    repo: "https://github.com/42amps/PayRail",
    live: "https://playto-pay-engine.onrender.com",
    accent: "Payout Correctness",
    description:
      "Payout engine demo with append-only ledger accounting, idempotency keys, row-level locking, and explicit payout states.",
    tags: ["Django", "Postgres", "Ledger", "Locks"],
    status: "Demo",
  },
  {
    name: "BidMyTime",
    live: "https://bid-my-time.vercel.app",
    accent: "Live Product",
    description:
      "Deposit-first booking platform where professionals create paid booking links, collect commitment fees, and reduce no-show risk for high-value calls.",
    tags: ["Next.js", "Supabase", "Razorpay", "RLS"],
    status: "Live",
  },
  {
    name: "AI Systems Notes",
    repo: "https://github.com/42amps/ai-systems-notes",
    accent: "Technical Writing",
    description:
      "Notes on agent state, RAG evaluation, payout correctness, Vision-RAG, graph retrieval, and contribution planning.",
    tags: ["RAG", "Agents", "Docs", "Systems"],
    status: "Writing",
  },
  {
    name: "CodeGraph",
    accent: "In Progress",
    description:
      "Repository graph concept combining AST structure, data-flow relationships, and semantic code embeddings for Python/JavaScript codebase navigation.",
    tags: ["Python", "PyTorch", "AST", "GNN"],
    status: "CV-backed",
  },
  {
    name: "Portfolio",
    repo: "https://github.com/42amps/portfolio",
    accent: "Public Funnel",
    description:
      "Recruiter-facing surface connecting projects, writing, technical interests, resume claims, and external contribution trail.",
    tags: ["React", "TypeScript", "Design", "Proof"],
    status: "Public",
  },
];

const contributionGroups: ContributionGroup[] = [
  {
    repo: "Aristocles/klebb",
    owner: "Aristocles",
    status: "1 PR open",
    items: [
      {
        title: "docs: fix RECIPES count in README",
        href: "https://github.com/Aristocles/klebb/pull/269",
        type: "Docs correctness",
        state: "Open",
      },
    ],
  },
  {
    repo: "run-llama/llama_index",
    owner: "run-llama",
    status: "watching",
    items: [
      {
        title: "RAG examples and documentation candidates",
        href: "https://github.com/run-llama/llama_index/issues",
        type: "Scouting",
        state: "Watch",
      },
    ],
  },
  {
    repo: "langchain-ai/langgraph",
    owner: "langchain-ai",
    status: "watching",
    items: [
      {
        title: "Stateful AI docs and reproducibility issues",
        href: "https://github.com/langchain-ai/langgraph/issues",
        type: "Scouting",
        state: "Watch",
      },
    ],
  },
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
  const [roleIndex, setRoleIndex] = useState(0);
  const [spotlight, setSpotlight] = useState("Stateframe");
  const [openContributionRepo, setOpenContributionRepo] = useState(contributionGroups[0].repo);
  const [pointer, setPointer] = useState({ x: 50, y: 18 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % rotatingRoles.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

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
  const activeProject = projects.find((project) => project.name === spotlight) ?? projects[0];

  return (
    <main
      className="site"
      data-theme={theme}
      style={{ "--mx": `${pointer.x}%`, "--my": `${pointer.y}%` } as CSSProperties}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: Math.round(((event.clientX - rect.left) / rect.width) * 100),
          y: Math.round(((event.clientY - rect.top) / rect.height) * 100),
        });
      }}
    >
      <div className="page">
        <header className="hero reveal">
          <div>
            <h1>
              Hi, I&apos;m Aman <span>-</span>
            </h1>
            <div className="role-ticker" aria-label="Rotating role focus">
              <span>{rotatingRoles[roleIndex]}</span>
            </div>
          </div>
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
            <a className="resume-chip" href="/Resume.pdf">
              Resume
            </a>
          </div>
        </header>

        <section className="top-grid" aria-label="Intro and stack">
          <div className="left-stack">
            <article className="panel about-panel reveal delay-1">
              <div className="panel-sheen" />
              <img className="avatar" src="/github-avatar.png" alt="Aman R Khanchandani" />
              <h2>About me.</h2>
              <p>
                I build applied AI and product systems for messy information workflows:
                retrieval, document intelligence, agent state, payout correctness, and
                inspectable backend behavior that holds up beyond a demo.
              </p>
              <div className="cta-row">
                <a className="primary-button" href="mailto:khanchandani.aman2605@gmail.com">
                  Let&apos;s Connect
                </a>
                <a className="secondary-button" href="/Resume.pdf">
                  View CV
                </a>
              </div>
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
            <p className="fluency-note">
              <strong>Building hands-on fluency in:</strong> TypeScript, Next.js, Django
            </p>
          </aside>
        </section>

        <section className="signal-grid reveal delay-3" aria-label="Proof signals">
          {proofSignals.map(([title, detail], index) => (
            <article className="signal-card" key={title} style={{ "--signal": index } as CSSProperties}>
              <span>{`0${index + 1}`}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
            </article>
          ))}
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
          <article className="research-card">
            <span>Jan 2025 - Mar 2025</span>
            <h3>Undergraduate Researcher, Cryptography - MIT Manipal</h3>
            <p>
              Implemented a hybrid IBE-HABE access-control prototype in Python using Charm for
              decentralized EHR permissioning and explored distributed key generation to reduce key-escrow risk.
            </p>
          </article>
        </section>

        <section className="section reveal delay-5">
          <div className="section-title">
            <span aria-hidden="true">{"{}"}</span>
            <h2>Featured Projects</h2>
          </div>
          <p className="section-copy">Strongest proof-of-work plus verified live product surfaces.</p>
          <div className="project-orbit" aria-label="Project spotlight">
            <div className="orbit-visual" aria-hidden="true">
              <span>{activeProject.name.slice(0, 2)}</span>
            </div>
            <div>
              <span>{activeProject.accent}</span>
              <h3>{activeProject.name}</h3>
              <p>{activeProject.description}</p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.name}
                onMouseEnter={() => setSpotlight(project.name)}
                onFocus={() => setSpotlight(project.name)}
              >
                <div className="project-topline">
                  <span>{project.accent}</span>
                  <div>
                    {project.live ? <a href={project.live}>Live</a> : null}
                    {project.repo ? <a href={project.repo}>Repo</a> : null}
                  </div>
                </div>
                <em>{project.status}</em>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  <small>Stack used</small>
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
            {contributionGroups.map((group) => {
              const isOpen = openContributionRepo === group.repo;

              return (
                <article className="contribution-group" key={group.repo}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenContributionRepo(isOpen ? "" : group.repo)}
                  >
                    <img src={`https://github.com/${group.owner}.png`} alt="" />
                    <strong>{group.repo}</strong>
                    <span>{group.items.length} PR</span>
                    <em>{group.status}</em>
                  </button>
                  {isOpen ? (
                    <div className="contribution-detail">
                      {group.items.map((item) => (
                        <a href={item.href} key={item.href}>
                          <span>{item.type}</span>
                          <strong>{item.title}</strong>
                          <em>{item.state}</em>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
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
