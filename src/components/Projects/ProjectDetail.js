import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Main from '../../layouts/Main';
import projects from '../../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Main>
        <div className="project-detail">
          <h2>Project not found</h2>
          <Link to="/projects">Back to Projects</Link>
        </div>
      </Main>
    );
  }

  return (
    <Main
      title={project.title}
      description={project.desc}
    >
      <article className="project-detail">
        <header>
          <div className="title">
            <h2>{project.title}</h2>
            <p className="subtitle">{project.subtitle}</p>
          </div>
        </header>

        <div className="project-content">
          <img src={project.image} alt={project.title} className="project-image" />

          <section className="project-section">
            <h3>Introduction</h3>
            <p>{project.introduction}</p>
          </section>

          <section className="project-section">
            <h3>Background</h3>
            <p>{project.background}</p>
          </section>

          <section className="project-section">
            <h3>Use Case</h3>
            <p>{project.useCase}</p>
          </section>

          <section className="project-section">
            <h3>Inspiration</h3>
            <p>{project.inspiration}</p>
          </section>

          <section className="project-section">
            <h3>Project Details</h3>
            <p>{project.details}</p>
          </section>

          <section className="project-section">
            <h3>Technology Stack</h3>
            <ul>
              {project.techStack.map((tech) => (
                <li key={`tech-${tech}`}>{tech}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h3>Development Process</h3>
            <p>{project.developmentProcess}</p>
          </section>

          <section className="project-section">
            <h3>Features</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={`feature-${feature}`}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h3>Benefits</h3>
            <ul>
              {project.benefits.map((benefit) => (
                <li key={`benefit-${benefit}`}>{benefit}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h3>Challenges</h3>
            <ul>
              {project.challenges.map((challenge) => (
                <li key={`challenge-${challenge}`}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h3>Future Plans</h3>
            <ul>
              {project.futurePlans.map((plan) => (
                <li key={`plan-${plan}`}>{plan}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h3>Conclusion</h3>
            <p>{project.conclusion}</p>
          </section>

          <section className="project-section cta">
            <h3>Try it out</h3>
            <p>{project.callToAction}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">
                View Project
              </a>
            )}
          </section>
        </div>

        <div className="back-to-projects">
          <Link to="/projects">← Back to Projects</Link>
        </div>
      </article>
    </Main>
  );
};

ProjectDetail.defaultProps = {
  data: [],
};

export default ProjectDetail;
