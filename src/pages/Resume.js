import React from 'react';
import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import AudioPlayer from '../components/Audio/AudioPlayer';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import resumeAudio from '../data/resume/audio';
import coverLetterAudio from '../data/resume/coverLetterAudio';

import '../static/css/components/_resume.scss';

// Define section components outside of the render function
const sections = {
  Experience: <Experience data={work} />,
  Education: <Education data={degrees} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Christopher Celaya's professional resume - Full Stack Developer, Audio Engineer, and Data Center Technician"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            Resume
          </h2>
          <div className="download-container">
            <a
              className="download-button"
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ⬇️ Download Resume
            </a>
          </div>
        </div>
      </header>

      <div className="audio-section">
        <div className="audio-grid">
          <div className="audio-item">
            <AudioPlayer track={coverLetterAudio} />
          </div>
          <div className="audio-item">
            <AudioPlayer track={resumeAudio} />
          </div>
        </div>
      </div>

      <div className="resume-content">
        <div className="quick-info">
          <h3>Quick Info</h3>
          <ul>
            <li><strong>Location:</strong> El Paso, Texas</li>
            <li><strong>Email:</strong> chris@chriscelaya.xyz</li>
            <li>
              <strong>Looking for:</strong> Full Stack Developer, Audio Engineer, Manufacturing
              Technician, or Data Center Infrastructure positions
            </li>
          </ul>
        </div>

        <nav className="section-nav">
          {Object.keys(sections).map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              className="section-link"
            >
              {sec}
            </a>
          ))}
        </nav>

        <div className="sections">
          {Object.entries(sections).map(([name, Section]) => (
            <section key={name} id={name.toLowerCase()} className="resume-section">
              <h3 className="section-title">{name}</h3>
              {Section}
            </section>
          ))}
        </div>
      </div>
    </article>
  </Main>
);

export default Resume;
