export type Project = {
  name: string;
  description: string;
  repo?: string;
  live?: string;
  accent: string;
  tags: string[];
  status?: string;
  proof: string;
};

export type Writing = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  visual: string;
};

export type ContributionGroup = {
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

export const stackGroups = [
  {
    label: "AI & Systems",
    items: ["RAG", "Document AI", "LangGraph", "Vector Search", "Knowledge Graphs", "Agent State"],
  },
  {
    label: "Infrastructure & Tools",
    items: ["Python", "PostgreSQL", "Docker", "Git", "Linux"],
  },
];

export const contactLinks = [
  ["GitHub", "https://github.com/42amps", "GH"],
  ["LinkedIn", "https://www.linkedin.com/in/amankhanchandani/", "IN"],
  ["Resume", "/Resume.pdf", "CV"],
  ["Email", "mailto:khanchandani.aman2605@gmail.com", "EM"],
];

export const rotatingRoles = [
  "AI Engineer",
  "Product Management",
  "Backend Systems",
  "RAG & Document AI",
  "Applied AI Builder",
];

export const proofSignals = [
  ["Vision-RAG", "PDF pages as visual inputs; layout-heavy tables, diagrams, and mixed-script docs."],
  ["Hybrid Retrieval", "FAISS vector search, Neo4j graph traversal, and probabilistic pre-filtering."],
  ["Payment Correctness", "Idempotency, append-only ledgers, row locks, payout states, and refund flows."],
  ["Agent State", "Current truth, change history, retries, failures, and next actions as inspectable files."],
] as const;

export const projects: Project[] = [
  {
    name: "Stateframe",
    repo: "https://github.com/42amps/stateframe",
    accent: "Agent Infrastructure",
    description:
      "File-first task-state ledger for long-running AI workflows, recovery, retries, and inspectable handoff packets.",
    tags: ["Agents", "State", "CLI", "Schema"],
    status: "Main proof",
    proof: "Durable state files, recovery-oriented handoffs, and inspectable transitions for longer-running AI work.",
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
    proof: "Models duplicate requests, row locks, state transitions, and refund flows without claiming real money movement.",
  },
  {
    name: "BidMyTime",
    live: "https://bid-my-time.vercel.app",
    accent: "Live Product",
    description:
      "Deposit-first booking platform where professionals create paid booking links, collect commitment fees, and reduce no-show risk for high-value calls.",
    tags: ["Next.js", "Supabase", "Razorpay", "RLS"],
    status: "Live",
    proof: "A live product surface showing deposit-first scheduling, payments context, and user-facing workflow thinking.",
  },
  {
    name: "AI Systems Notes",
    repo: "https://github.com/42amps/ai-systems-notes",
    accent: "Technical Writing",
    description:
      "Notes on agent state, RAG evaluation, payout correctness, Vision-RAG, graph retrieval, and contribution planning.",
    tags: ["RAG", "Agents", "Docs", "Systems"],
    status: "Writing",
    proof: "Public technical notes that explain the same systems vocabulary used across the project repos.",
  },
  {
    name: "CodeGraph",
    accent: "In Progress",
    description:
      "Repository graph concept combining AST structure, data-flow relationships, and semantic code embeddings for Python/JavaScript codebase navigation.",
    tags: ["Python", "PyTorch", "AST", "GNN"],
    status: "CV-backed",
    proof: "Exploratory direction for codebase understanding, graph structure, and retrieval over software artifacts.",
  },
  {
    name: "Portfolio",
    repo: "https://github.com/42amps/portfolio",
    accent: "Public Funnel",
    description:
      "Recruiter-facing surface connecting projects, writing, technical interests, resume claims, and external contribution trail.",
    tags: ["React", "TypeScript", "Design", "Proof"],
    status: "Public",
    proof: "The current public funnel, kept honest by separating skills, stacks used, writing, and OSS activity.",
  },
];

export const contributionGroups: ContributionGroup[] = [
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

export const writings: Writing[] = [
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
