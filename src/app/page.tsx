'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Terminal,
  Briefcase,
  BookOpen,
  Globe,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import { PORTFOLIO_CONTENT } from "@/constants/portfolio";
import type { Contribution } from "@/constants/portfolio";
import BentoCard from "@/components/BentoCard";
import ProjectCard from "@/components/ProjectCard";
import ContributionItem from "@/components/ContributionItem";
import LiveClock from "@/components/LiveClock";
import Hero from "@/components/Hero";

// Animated icons
import { GithubIcon, type GithubIconHandle } from "@/components/ui/github";
import { LinkedinIcon, type LinkedinIconHandle } from "@/components/ui/linkedin";
import { SendIcon, type SendIconHandle } from "@/components/ui/send";
import GitHubCalendarComponent from "@/components/GitHubCalendarComponent";
import { MapPinIcon, type MapPinIconHandle } from "@/components/ui/map-pin";

type GroupedContribution = {
  repoName: string;
  owner: string;
  contributions: Contribution[];
  prCount: number;
};

type TechLogo = {
  src: string;
  alt: string;
};

const TECH_STACK_LOGOS: Record<string, TechLogo> = {
  "Next.js": { src: "https://cdn.simpleicons.org/nextdotjs", alt: "Next.js logo" },
  React: { src: "https://cdn.simpleicons.org/react", alt: "React logo" },
  TypeScript: { src: "https://cdn.simpleicons.org/typescript", alt: "TypeScript logo" },
  JavaScript: { src: "https://cdn.simpleicons.org/javascript", alt: "JavaScript logo" },
  "Node.js": { src: "https://cdn.simpleicons.org/nodedotjs", alt: "Node.js logo" },
  "Prisma ORM": { src: "https://cdn.simpleicons.org/prisma", alt: "Prisma logo" },
  "Drizzle ORM": { src: "https://cdn.simpleicons.org/drizzle", alt: "Drizzle ORM logo" },
  "SQLAlchemy": { src: "https://cdn.simpleicons.org/sqlalchemy", alt: "SQLAlchemy logo" },
  Python: { src: "https://cdn.simpleicons.org/python", alt: "Python logo" },
  FastAPI: { src: "https://cdn.simpleicons.org/fastapi", alt: "FastAPI logo" },
  langChain: { src: "https://cdn.simpleicons.org/langchain", alt: "LangChain logo" },
  langGraph: { src: "https://cdn.simpleicons.org/langgraph", alt: "LangGraph logo" },
  LangGraph: { src: "https://cdn.simpleicons.org/langchain", alt: "LangGraph logo" },
  Qdrant: { src: "https://cdn.simpleicons.org/qdrant", alt: "Qdrant logo" },
  Redis: { src: "https://cdn.simpleicons.org/redis", alt: "Redis logo" },
  Docker: { src: "https://cdn.simpleicons.org/docker", alt: "Docker logo" },
  Git: { src: "https://cdn.simpleicons.org/git", alt: "Git logo" },
  Linux: { src: "https://cdn.simpleicons.org/linux", alt: "Linux logo" },
  GCP: { src: "https://cdn.simpleicons.org/googlecloud", alt: "Google Cloud logo" },
  PostgreSQL: { src: "https://cdn.simpleicons.org/postgresql", alt: "PostgreSQL logo" },
  MongoDB: { src: "https://cdn.simpleicons.org/mongodb", alt: "MongoDB logo" },
  "Claude Code": { src: "https://cdn.simpleicons.org/claude", alt: "Anthropic logo" },
  Codex: { src: "https://cdn.simpleicons.org/openai", alt: "OpenAI logo" },
};

const groupContributionsByRepo = (
  contributions: Contribution[]
): GroupedContribution[] => {
  const grouped: { [key: string]: GroupedContribution } = {};

  contributions.forEach((contribution) => {
    try {
      const urlObj = new URL(contribution.prUrl);
      const parts = urlObj.pathname.split("/");
      const owner = parts[1];
      const repoName = parts[2];
      const fullRepoName = `${owner}/${repoName}`;

      if (!grouped[fullRepoName]) {
        grouped[fullRepoName] = {
          repoName: fullRepoName,
          owner: owner,
          contributions: [],
          prCount: 0,
        };
      }
      grouped[fullRepoName].contributions.push(contribution);
      grouped[fullRepoName].prCount++;
    } catch (error) {
      console.error("Invalid prUrl in contribution:", contribution.prUrl, error);
    }
  });

  return Object.values(grouped);
};

// Socials Card Component with animated icons
function SocialsCard({ colSpan, rowSpan }: { colSpan?: string; rowSpan?: string }) {
  const githubRef = useRef<GithubIconHandle>(null);
  const linkedinRef = useRef<LinkedinIconHandle>(null);
  const emailRef = useRef<SendIconHandle>(null);

  const iconRefs = {
    "GitHub": githubRef,
    "LinkedIn": linkedinRef,
    "Email": emailRef,
  };

  const handleMouseEnter = (label: string) => {
    const ref = iconRefs[label as keyof typeof iconRefs];
    ref?.current?.startAnimation();
  };

  const handleMouseLeave = (label: string) => {
    const ref = iconRefs[label as keyof typeof iconRefs];
    ref?.current?.stopAnimation();
  };

  const getIcon = (social: typeof PORTFOLIO_CONTENT.socials[0]) => {
    const className = "text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white mb-2";

    switch (social.label) {
      case "GitHub":
        return <GithubIcon ref={githubRef} size={20} className={className} />;
      case "LinkedIn":
        return <LinkedinIcon ref={linkedinRef} size={20} className={className} />;
      case "Email":
        return <SendIcon ref={emailRef} size={20} className={className} />;
      default:
        return <social.icon size={20} className={className} />;
    }
  };

  return (
    <BentoCard colSpan={colSpan} rowSpan={rowSpan} delay={0.2}>
      <div className="flex flex-col justify-center h-full">
        <div className="grid grid-cols-2 gap-3">
          {PORTFOLIO_CONTENT.socials.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={() => handleMouseLeave(link.label)}
            >
              {getIcon(link)}
              <span className="text-[10px] text-neutral-600 dark:text-neutral-500">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

// Location Card Component with animated MapPin icon
function LocationCard({ colSpan, rowSpan }: { colSpan?: string; rowSpan?: string }) {
  const mapPinRef = useRef<MapPinIconHandle>(null);

  return (
    <BentoCard colSpan={colSpan} rowSpan={rowSpan} delay={0.1}>
      <div
        className="flex flex-col items-center justify-center text-center space-y-3 h-full"
        onMouseEnter={() => mapPinRef.current?.startAnimation()}
        onMouseLeave={() => mapPinRef.current?.stopAnimation()}
      >
        <div className="relative w-full px-5 h-24 bg-neutral-200 dark:bg-neutral-800 rounded-xl overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(#a3a3a3_1px,transparent_1px)] dark:bg-[radial-gradient(#404040_1px,transparent_1px)] bg-size-[8px_8px] opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500 rounded-full animate-ping" />
              <MapPinIcon
                ref={mapPinRef}
                size={24}
                className="text-blue-500 dark:text-blue-400 relative z-10"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-neutral-900 dark:text-white font-semibold pt-2">
            {PORTFOLIO_CONTENT.personal.location}
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-500">
            <LiveClock timezone={PORTFOLIO_CONTENT.personal.timezone ?? "Asia/Kolkata"} />
            {" "}({PORTFOLIO_CONTENT.personal.timezone})
          </p>
        </div>
      </div>
    </BentoCard>
  );
}

export default function Home() {
  const heroSendRef = useRef<SendIconHandle>(null);

  const groupedContributions = groupContributionsByRepo(
    PORTFOLIO_CONTENT.contributions
  );

  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(
    new Set(groupedContributions.map(group => group.repoName))
  );
  const toggleCollapse = (repoName: string) => {
    setCollapsedGroups((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(repoName)) {
        newSet.delete(repoName);
      } else {
        newSet.add(repoName);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#f7fbff] dark:bg-[#02040a] text-neutral-800 dark:text-neutral-200 font-sans selection:bg-blue-600 selection:text-white dark:selection:bg-blue-300 dark:selection:text-neutral-900 transition-colors duration-300">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.12),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(14,165,233,0.08),transparent_24%),linear-gradient(180deg,transparent,rgba(2,6,23,0.08))] dark:bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.2),transparent_26%),radial-gradient(circle_at_82%_8%,rgba(56,189,248,0.09),transparent_20%),linear-gradient(180deg,rgba(2,4,10,0),rgba(2,4,10,0.96))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(96,165,250,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.04)_1px,transparent_1px)] bg-size-[56px_56px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* === HERO SECTION === */}
        <Hero />

        {/* === BENTO GRID LAYOUT === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto md:auto-rows-[240px]">
          {/* 1. Hero / About */}
          <BentoCard colSpan="md:col-span-2 lg:col-span-2" rowSpan="md:row-span-2" delay={0}>
            <div className="flex flex-col justify-between h-full">
              <div className="space-y-6 md:space-y-8">
                {/* Avatar */}
                <Image
                  className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover shadow-sm bg-neutral-100 dark:bg-neutral-800 border border-transparent dark:border-white/5"
                  src={PORTFOLIO_CONTENT.personal.avatar}
                  alt="Avatar"
                  width={144}
                  height={144}
                  priority
                />
                
                {/* Text Content */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white leading-tight">
                    About me.
                  </h2>
                 <p className="text-neutral-700 dark:text-neutral-300 text-[15px] md:text-[17px] leading-loose w-full max-w-none">
                   {PORTFOLIO_CONTENT.personal.bio}
                 </p>
                 <div className="flex flex-wrap gap-2 pt-1">
                   {["RAG", "Document AI", "Backend Correctness", "Inspectable Systems"].map((signal) => (
                     <span
                       key={signal}
                       className="inline-flex items-center rounded-lg border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300"
                     >
                       {signal}
                     </span>
                   ))}
                 </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 md:pt-6 w-full mt-auto">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_CONTENT.personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[15px] font-bold bg-neutral-900 dark:bg-white text-white dark:text-black py-2.5 px-5 rounded-xl hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all gap-2 shadow-sm group/send"
                onMouseEnter={() => heroSendRef.current?.startAnimation()}
                onMouseLeave={() => heroSendRef.current?.stopAnimation()}
              >
                <SendIcon ref={heroSendRef} size={16} />
                Let&apos;s Connect
              </a>
            </div>
          </div>
        </BentoCard>

          {/* 4. Tech Stack (Vertical Sidebar) */}
          <BentoCard colSpan="md:col-span-1 lg:col-span-1" rowSpan="row-span-3" delay={0.3}>
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center gap-2 shrink-0">
                <Terminal size={18} className="text-neutral-600 dark:text-neutral-400" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-600 dark:text-neutral-500">
                  Skills & Stack
                </h3>
              </div>
              <div className="flex-1 relative overflow-y-auto min-h-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="space-y-6 pt-1 pb-4">
                  {PORTFOLIO_CONTENT.skillCategories.map((group, gIdx) => (
                    <div key={group.label} className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 px-1">
                        {group.label}
                      </h4>
                      <div className="flex flex-wrap content-start gap-2">
                        {group.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={false}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 + (gIdx * 0.1) + (i * 0.02) }}
                          >
                            <div className="text-[12px] md:text-[13px] font-medium bg-neutral-100/50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 py-1.5 px-3 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-blue-50/50 dark:hover:bg-blue-500/10 hover:border-blue-500/50 transition-all cursor-pointer flex items-center gap-2 group/skill">
                              <div className="w-4 h-4 flex items-center justify-center shrink-0">
                                {TECH_STACK_LOGOS[skill] ? (
                                  <img
                                    src={TECH_STACK_LOGOS[skill].src}
                                    alt={TECH_STACK_LOGOS[skill].alt}
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 object-contain transition-all duration-300 group-hover/skill:scale-110"
                                  />
                                ) : (
                                  <Terminal size={14} className="text-neutral-500" />
                                )}
                              </div>
                              {skill}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-[12px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      Building hands-on fluency in:
                    </span>{" "}
                    {PORTFOLIO_CONTENT.learning.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 2. Map / Location */}
          <LocationCard colSpan="md:col-span-1 lg:col-span-1" rowSpan="md:row-span-1" />

          {/* 3. Socials */}
          <SocialsCard colSpan="md:col-span-1 lg:col-span-1" rowSpan="md:row-span-1" />
        </div>

        {/* === WORK EXPERIENCE SECTION === */}
        <div className="mt-16 w-full cv-auto">
          <div className="mb-8 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <Briefcase className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Experience</h2>
            </div>
          </div>

          <div className="relative sm:mx-6 md:mx-12 lg:mx-20 border-l border-neutral-200 dark:border-white/10 ml-6 md:ml-12 lg:ml-20">
            {PORTFOLIO_CONTENT.experience.map((role, idx) => {
               const isPresent = idx === 0;
               return (
                 <div key={idx} className={`relative pl-6 sm:pl-8 py-6 group ${isPresent ? '' : 'opacity-90 hover:opacity-100 transition-opacity'}`}>
                   {/* Timeline Node */}
                   <motion.div 
                     initial={false}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                     className={`absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full ring-4 ring-neutral-50 dark:ring-neutral-950 transition-colors z-10 ${isPresent ? 'bg-blue-500 dark:bg-blue-400' : 'bg-neutral-300 dark:bg-neutral-600 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-500'}`} 
                   />
                   
                   {/* Animated Ping for Current Role */}
                   {isPresent && (
                     <motion.div 
                       initial={false}
                       whileInView={{ opacity: 0.75 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ delay: 0.4 }}
                       className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 animate-ping" 
                     />
                   )}
                   
                   <motion.div 
                     initial={false}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.4, delay: 0.2 }}
                     className="flex flex-col gap-1"
                   >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                         <h3 className={`text-xl font-bold ${isPresent ? 'text-neutral-900 dark:text-white' : 'text-neutral-700 dark:text-neutral-300'}`}>{role.role}</h3>
                         <p className={`text-sm font-medium ${isPresent ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-500 dark:text-neutral-400'}`}>{role.period}</p>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className={`text-base font-semibold ${isPresent ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-600 dark:text-neutral-400'}`}>{role.company}</span>
                        
                        {(role.companyUrl || role.linkedin) && (
                          <div className="flex items-center gap-2">
                            {role.companyUrl && (
                              <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                <Globe size={14} />
                              </a>
                            )}
                            {role.linkedin && (
                              <a href={role.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                <Linkedin size={14} />
                              </a>
                            )}
                          </div>
                        )}

                        {isPresent && (
                           <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 uppercase ring-1 ring-blue-500/20">
                             Current
                           </span>
                        )}
                      </div>
                   </motion.div>

                 <motion.div 
                   initial={false}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.4, delay: 0.3 }}
                   className="mt-4"
                 >
                    {role.description && (
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px] mb-4">
                        {role.description}
                      </p>
                    )}
                    
                    {role.points && role.points.length > 0 && (
                      <div className="mt-2 space-y-3">
                         {role.points.map((point, pIdx) => (
                           <motion.div 
                             initial={false}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true, margin: "-50px" }}
                             transition={{ duration: 0.3, delay: 0.4 + (pIdx * 0.1) }}
                             key={pIdx} 
                             className="flex items-start gap-3 group/point"
                           >
                             <div className="w-5 h-5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/point:border-blue-500/30 group-hover/point:bg-blue-50 dark:group-hover/point:bg-blue-500/10 transition-colors shadow-sm">
                               <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 group-hover/point:bg-blue-500 dark:group-hover/point:bg-blue-400 transition-colors" />
                             </div>
                             <span className="text-sm md:text-[15px] text-neutral-600 dark:text-neutral-400 group-hover/point:text-neutral-900 dark:group-hover/point:text-neutral-200 transition-colors block flex-1 leading-relaxed">
                               {point}
                             </span>
                           </motion.div>
                         ))}
                      </div>
                     )}
                 </motion.div>
               </div>
             );
            })}
          </div>
        </div>

        {/* === FEATURED PROJECTS (separate from bento grid for stable ordering) === */}
        <div className="mt-10 w-full pt-5">
          <div className="mb-6 px-1 md:px-2">
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Featured Projects</h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-500 text-sm mt-1">
              Strongest proof-of-work across AI systems, payout correctness, product infrastructure, and technical writing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_CONTENT.projects.map((project, index) => (
              <BentoCard key={project.title} delay={0.7 + index * 0.05}>
                <ProjectCard project={project} />
              </BentoCard>
            ))}
          </div>
        </div>

        {/* === GITHUB CALENDAR SECTION === */}
        <div className="cv-auto">
          <GitHubCalendarComponent />
        </div>

        {/* === OPEN SOURCE SECTION (Outside the fixed-row grid to fix overflow) === */}
        <div className="mt-16 w-full cv-auto">
          <div className="mb-6 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <Github className="text-blue-500" size={24} />
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Open Source Contributions</h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-500 text-sm mt-1 pb-15">Building a contribution trail through small, inspectable PRs.</p>
          </div>

          <div className="flex flex-col mb-12 sm:mx-6 md:mx-12 lg:mx-20 bg-white/40 dark:bg-neutral-900/40 rounded-3xl border border-neutral-200 dark:border-white/5 overflow-hidden">
            {groupedContributions.map((group) => {
              const isCollapsed = collapsedGroups.has(group.repoName);
              return (
                <div key={group.repoName} className="border-b border-neutral-200 dark:border-white/5 last:border-b-0">
                  <button
                    className="flex items-center border-b border-neutral-200 dark:border-white/10 justify-between w-full p-4 bg-neutral-100/50 dark:bg-neutral-800/50 hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
                    onClick={() => toggleCollapse(group.repoName)}
                    aria-expanded={!isCollapsed}
                    aria-controls={`contributions-for-${group.repoName}`}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={`https://github.com/${group.owner}.png`}
                        alt={group.owner}
                        className="w-6 h-6 rounded-full"
                        width={24}
                        height={24}
                        unoptimized
                      />
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{group.repoName}</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-neutral-600 dark:text-neutral-500 text-sm">{group.prCount} PRs</p>
                    <ChevronDown size={20} className={`text-neutral-400 dark:text-neutral-400 transition-transform duration-300 ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} />
                    </div>
                  </button>
                  <div
                    id={`contributions-for-${group.repoName}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}`}
                  >
                    {!isCollapsed && group.contributions.map((contribution, index) => (
                      <ContributionItem key={index} contribution={contribution} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === BLOG SECTION === */}
        <div className="mt-20 w-full mb-20 cv-auto">
          <div className="mb-8 px-4 md:px-6">
            <div className="flex items-center gap-3">
              <BookOpen className="text-emerald-500" size={24} />
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Technical Notes</h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-500 text-sm mt-1">Notes that connect the projects to the systems thinking behind them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_CONTENT.writings.map((note, idx) => (
              <motion.a
                key={note.title}
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-500/10 dark:border-white/10 dark:bg-neutral-900/60 dark:hover:border-blue-400/40"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-300">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                  {note.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {note.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Aman R Khanchandani. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-neutral-400">
            {PORTFOLIO_CONTENT.socials
              .filter((s) => s.label !== "Email")
              .map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
