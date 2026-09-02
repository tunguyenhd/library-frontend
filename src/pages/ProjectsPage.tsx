import React from "react";
import { githubProjects } from "../data/githubProjects";

interface ProjectsPageProps {
  onBack: () => void;
}

export default function ProjectsPage({ onBack }: ProjectsPageProps) {
  return (
    <div className="knowledge-page">
      <div className="page-header">
        <a
          href="./"
          className="back-btn"
          onClick={(event) => {
            event.preventDefault();
            onBack();
          }}
        >
          ← Trang chủ
        </a>
        <h1>Dự án Thực tế ({githubProjects.length})</h1>
      </div>
      
      <div className="knowledge-content">
        <div className="projects-grid">
          {githubProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              {project.description && <p className="project-desc">{project.description}</p>}
              
              <div className="project-topics">
                {project.topics.map((topic) => (
                  <span key={topic} className="project-topic">{topic}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-btn demo-btn">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
