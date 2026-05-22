import { ExternalLink, GitPullRequest } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
  onActivate: (name: string) => void;
};

export function ProjectCard({ project, onActivate }: ProjectCardProps) {
  return (
    <article
      className="project-card"
      onMouseEnter={() => onActivate(project.name)}
      onFocus={() => onActivate(project.name)}
    >
      <div className="project-card-glow" aria-hidden="true" />
      <div className="project-topline">
        <span>{project.accent}</span>
        <div className="project-actions" aria-label={`${project.name} links`}>
          {project.live ? (
            <a href={project.live} aria-label={`Open ${project.name} live product`} title="Live product">
              <ExternalLink size={15} strokeWidth={2.4} />
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} aria-label={`Open ${project.name} GitHub repository`} title="GitHub repo">
              <GitPullRequest size={15} strokeWidth={2.4} />
            </a>
          ) : null}
        </div>
      </div>

      <div className="project-mark" aria-hidden="true">
        {project.name.slice(0, 2)}
      </div>

      <em>{project.status}</em>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="project-proof">
        <span>Proof signal</span>
        <strong>{project.proof}</strong>
      </div>

      <div className="tag-row">
        <small>Stack used</small>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
