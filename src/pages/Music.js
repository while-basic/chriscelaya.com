import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import Cell from '../components/Music/Cell';
import data from '../data/music';

const Projects = () => (
  <Main
    title="Music"
    description="Music"
  >
    <article className="post" id="music">
      <header>
        <div className="title">
          <h2><Link to="/projects">Music</Link></h2>
          <p>A selection of music that I produced and that I am not too ashamed of.</p>
          <h1>his section is under construction 🚧</h1>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
