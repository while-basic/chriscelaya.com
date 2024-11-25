import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Projects = ({ data }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {data.slice(0, visibleProjects).map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{dayjs(project.date).format('MMMM YYYY')}</p>
                <div className="project-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < data.length && (
        <div className="load-more">
          <button type="button" onClick={loadMore} className="load-more-button">
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;
