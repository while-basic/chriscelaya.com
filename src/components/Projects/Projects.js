import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import './Projects.css';

const Cell = ({ data }) => (
  <div className="project-cell">
    <article className="project-card">
      <Link to={`/projects/${data.slug}`} className="project-link">
        <div className="project-image-container">
          <img src={data.image} alt={data.title} />
          <div className="project-overlay">
            <h3>{data.title}</h3>
            <p className="project-date">{dayjs(data.date).format('MMMM, YYYY')}</p>
            <p className="project-desc">{data.desc}</p>
          </div>
        </div>
      </Link>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = ({ data }) => (
  <div className="projects-container">
    <div className="projects-grid">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </div>
  </div>
);

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default Projects;
