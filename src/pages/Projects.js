import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Projects from '../components/Projects/Projects';
import data from '../data/projects';

const ProjectsPage = () => (
  <Main
    title="Projects"
    description="Learn about Christopher Celaya's projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Projects</Link>
          </h2>
          <p>A selection of projects that I&apos;m not too ashamed of.</p>
        </div>
      </header>
      <Projects data={data} />
    </article>
  </Main>
);

export default ProjectsPage;
