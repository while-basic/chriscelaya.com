import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Christopher Celaya - Systems Integrator and Software Developer based in El Paso, TX"
  >
    <article className="post" id="index">
      <header className="major">
        <div className="title">
          <h1>
            Hi, I&apos;m Christopher Celaya
          </h1>
          <div className="subtitle">
            Systems Integrator | Software Developer | Tech Enthusiast
          </div>
        </div>
      </header>

      <section className="intro-section">
        <h2>Welcome to My Digital Space</h2>
        <p>
          Based in El Paso, Texas, I&apos;m a systems integrator and software developer with a
          passion for bridging the gap between industrial technology and modern software
          solutions. My expertise spans across computer science, artificial intelligence, and
          mechatronics, allowing me to create innovative solutions for complex technical
          challenges.
        </p>
      </section>

      <section className="expertise-section">
        <h2>What I Do</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <h3>Systems Integration</h3>
            <p>
              Specializing in connecting disparate systems, from industrial machinery to modern
              software platforms, ensuring seamless operation and optimal performance.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Software Development</h3>
            <p>
              Self-taught programmer proficient in C, Python, and JavaScript, creating efficient
              solutions that solve real-world problems.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Industrial Technology</h3>
            <p>
              Experienced in maintaining and optimizing pneumatic, hydraulic, water, and
              electrical systems, bringing reliability to complex industrial operations.
            </p>
          </div>
        </div>
      </section>

      <section className="background-section">
        <h2>Professional Journey</h2>
        <p>
          My path in technology has been driven by curiosity and a desire to understand how
          things work. From my role as a Data Center Technician at T5 Data Centers to working as
          a Mechatronics Technician at CN Wire, I&apos;ve consistently pushed the boundaries of
          what&apos;s possible in industrial technology and software integration.
        </p>
      </section>

      <section className="cta-section">
        <h2>Let&apos;s Connect</h2>
        <p>
          I&apos;m always excited to take on new challenges and contribute to innovative
          projects. Whether you&apos;re interested in my work or looking to collaborate, I&apos;d
          love to hear from you.
        </p>
        <div className="cta-buttons">
          <Link to="/resume" className="button">View My Resume</Link>
          <Link to="/contact" className="button">Get in Touch</Link>
        </div>
      </section>
    </article>
  </Main>
);

export default Index;
