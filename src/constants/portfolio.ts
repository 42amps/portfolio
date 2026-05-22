import { GithubIcon } from "@/components/ui/github";
import { LinkedinIcon } from "@/components/ui/linkedin";
import { SendIcon } from "@/components/ui/send";
import { FileText } from "lucide-react";
import type { ComponentType } from "react";

export type Contribution = {
  prUrl: string;
  private?: boolean;
  title?: string;
  url?: string;
  status?: "open" | "closed" | "merged";
};

export interface Personal {
  name: string;
  surname: string;
  roles?: string[];
  location: string;
  timezone: string;
  bio: string;
  email: string;
  availability: string;
  avatar: string;
}

export interface Social {
  icon: ComponentType<{ size?: number; className?: string }>;
  href: string;
  label: string;
}

export interface Experience {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  startDate: string;
  description: string;
  points?: string[];
  linkedin: string;
}

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  href: string;
  github?: string;
  className: string;
  collaborative?: boolean;
  featured?: boolean;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Writing {
  title: string;
  desc: string;
  href: string;
  tags: string[];
}

export const PORTFOLIO_CONTENT: {
  personal: Personal;
  socials: Social[];
  skillCategories: SkillCategory[];
  learning: string[];
  experience: Experience[];
  projects: Project[];
  contributions: Contribution[];
  writings: Writing[];
} = {
  personal: {
    name: "Hi, I'm Aman -",
    surname: "Applied AI + Product Engineer.",
    roles: ["AI Engineer.", "Product Management.", "Backend Systems.", "RAG & Document AI."],
    location: "Pune, India",
    timezone: "Asia/Kolkata",
    bio: "I build applied AI and product systems for messy information workflows: RAG, document intelligence, payout correctness, retrieval evaluation, and backend systems that stay inspectable beyond the demo.",
    email: "khanchandani.aman2605@gmail.com",
    availability: "Open to internships",
    avatar: "/github-avatar.png",
  },
  socials: [
    {
      icon: GithubIcon,
      href: "https://github.com/42amps",
      label: "GitHub",
    },
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/amankhanchandani/",
      label: "LinkedIn",
    },
    {
      icon: FileText,
      href: "/Resume.pdf",
      label: "Resume",
    },
    {
      icon: SendIcon,
      href: "mailto:khanchandani.aman2605@gmail.com",
      label: "Email",
    },
  ],
  skillCategories: [
    {
      label: "AI & Systems",
      skills: [
        "RAG",
        "Document AI",
        "Vision-RAG",
        "LangGraph",
        "Vector Search",
        "Knowledge Graphs",
        "RAG Evaluation",
        "Agent State",
        "System Design",
      ],
    },
    {
      label: "Infrastructure & Tools",
      skills: ["Python", "PostgreSQL", "Docker", "Git", "Linux"],
    },
  ],
  learning: ["TypeScript", "Next.js", "Django"],
  experience: [
    {
      company: "Carnot Research Pvt Ltd @ IIT Delhi",
      companyUrl: "https://www.carnotresearch.com/",
      role: "AI Engineer Intern",
      period: "May 2025 - Sep 2025",
      startDate: "2025-05-01",
      description: "Worked on document intelligence and retrieval workflows for layout-heavy PDFs, knowledge graph extraction, and practical RAG evaluation.",
      points: [
        "Explored Vision-RAG and page-level retrieval patterns for documents where OCR-first pipelines lose layout and visual context.",
        "Built LangGraph-based knowledge graph extraction workflows for turning unstructured documents into inspectable retrieval structures.",
        "Studied hybrid retrieval using vector search, graph traversal, and probabilistic filtering for document AI systems.",
        "Authored technical deep-dives on OCR benchmarking, Vision Transformers, and RAG evaluation.",
      ],
      linkedin: "https://www.linkedin.com/company/carnot-research/",
    },
  ],
  projects: [
    {
      title: "Stateframe",
      desc: "File-first task-state ledger for long-horizon agent workflows. Preserves current truth, change history, failures, retries, and handoff packets as inspectable state files.",
      tags: ["Agent State", "CLI", "JSON Schema", "Developer Tools"],
      href: "https://github.com/42amps/stateframe",
      github: "https://github.com/42amps/stateframe",
      className: "md:col-span-1",
      featured: true,
    },
    {
      title: "PayRail",
      desc: "Real-time payout engine demo for banking-payment correctness. Models append-only ledger accounting, idempotency keys, row-level locking, state transitions, and double-spend prevention.",
      tags: ["Django", "PostgreSQL", "Docker", "Ledger", "Concurrency"],
      href: "https://playto-pay-engine.onrender.com",
      github: "https://github.com/42amps/playto-pay-engine",
      className: "md:col-span-1",
      featured: true,
    },
    {
      title: "BidMyTime",
      desc: "Live product surface for time-based bidding and product workflow exploration. Included as a presentable product proof while the deeper technical docs mature.",
      tags: ["Product", "Supabase", "Workflow", "Payments"],
      href: "https://bidmytime.app/",
      className: "md:col-span-1",
    },
    {
      title: "AI Systems Notes",
      desc: "Technical notes on agent state, RAG systems, payout correctness, document AI, retrieval evaluation, hybrid search, and open-source contribution planning.",
      tags: ["RAG", "Document AI", "System Design", "Technical Writing"],
      href: "https://github.com/42amps/ai-systems-notes",
      github: "https://github.com/42amps/ai-systems-notes",
      className: "md:col-span-1",
    },
    {
      title: "Portfolio",
      desc: "A public proof-of-work surface connecting profile, projects, technical notes, GitHub activity, and contribution trail into one recruiter-facing funnel.",
      tags: ["Next.js", "TypeScript", "Portfolio", "Vercel"],
      href: "https://portfolio-42amps-projects.vercel.app",
      github: "https://github.com/42amps/portfolio",
      className: "md:col-span-1",
    },
  ],
  contributions: [
    {
      prUrl: "https://github.com/Aristocles/klebb/pull/269",
      title: "docs: fix RECIPES count in README",
      status: "open",
    },
  ],
  writings: [
    {
      title: "Agent State vs Memory",
      desc: "A note on why long-horizon agents need durable state in addition to memory, traces, and orchestration.",
      href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/agent-state-vs-memory.md",
      tags: ["Agents", "State", "Workflow"],
    },
    {
      title: "Payout System Correctness",
      desc: "PayRail as a concrete model for idempotency, append-only ledger accounting, row locks, retries, and double-spend prevention.",
      href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/payout-system-correctness.md",
      tags: ["Fintech", "Ledger", "Backend"],
    },
    {
      title: "Vision-RAG Notes",
      desc: "Where OCR-first RAG breaks down, why page-level retrieval matters, and how visual retrieval changes document AI workflows.",
      href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/vision-rag-notes.md",
      tags: ["RAG", "Document AI", "Retrieval"],
    },
    {
      title: "RAG Evaluation Notes",
      desc: "A practical frame for separating retrieval quality, generation quality, groundedness, latency, cost, and failure analysis.",
      href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/rag-evaluation-notes.md",
      tags: ["Evaluation", "RAG", "Metrics"],
    },
    {
      title: "Knowledge Graphs for Retrieval",
      desc: "When graph traversal helps RAG, how it complements vector search, and where hybrid retrieval becomes useful.",
      href: "https://github.com/42amps/ai-systems-notes/blob/main/docs/knowledge-graphs-for-retrieval.md",
      tags: ["Graphs", "Search", "RAG"],
    },
  ],
};
