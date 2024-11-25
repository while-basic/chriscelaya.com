import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Main from '../layouts/Main';
import SEO from '../components/Template/SEO';

const Index = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Load Play.ai script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@play-ai/web-embed';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Play.ai after script loads
      window.PlayAI?.open('h8VIK7geyGQM1QQp5fiS4');
    };

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  const handleCardHover = (index) => {
    setActiveCard(index);
  };

  const expertiseItems = [
    {
      title: 'Systems Integration',
      description: `Specializing in connecting integrated systems, from industrial machinery to modern 
        software platforms, ensuring seamless operation and optimal performance.`,
      link: '',
      icon: '🔄',
      ariaLabel: 'Systems Integration expertise - View projects',
    },
    {
      title: 'Software Development',
      description: `Self-taught programmer in C, Python, and JavaScript, creating 
        efficient solutions that solve real-world problems.`,
      link: '',
      icon: '💻',
      ariaLabel: 'Software Development expertise - View resume',
    },
    {
      title: 'Industrial Technology',
      description: `Experienced in maintaining and optimizing pneumatic, hydraulic, water, and 
        electrical systems, bringing reliability to complex industrial operations.`,
      link: '',
      icon: '⚙️',
      ariaLabel: 'Industrial Technology expertise - Learn more',
    },
    {
      title: 'Audio Engineering & Music Production',
      description: `Passionate about crafting high-quality sound experiences through recording, mixing, 
        and music production, combining technical expertise with creative vision.`,
      link: '/audio-production',
      icon: '🎧',
      ariaLabel: 'Audio Engineering and Music Production expertise - View portfolio',
    },
  ];

  return (
    <Main
      description="Christopher Celaya - Systems Integrator and Software Developer based in El Paso, TX"
    >
      <SEO />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Christopher Celaya',
            jobTitle: ['Systems Integrator', 'Software Developer'],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'El Paso',
              addressRegion: 'TX',
              addressCountry: 'US',
            },
            alumniOf: {
              '@type': 'Organization',
              name: 'T5 Data Centers',
            },
            knowsAbout: ['Systems Integration', 'Software Development', 'Industrial Technology', 'Python', 'JavaScript', 'C'],
            url: 'https://chriscelaya.xyz',
          })}
        </script>
      </Helmet>

      <article className="post" id="index">
        <header className="major">
          <div className="title">
            <h1>
              Hi, I&apos;m Christopher Celaya
            </h1>
            <div className="subtitle" role="doc-subtitle">
              <span className="visually-hidden">Professional roles: </span>
              Systems Integrator | Software Developer | Tech Enthusiast
            </div>
          </div>
        </header>

        <section className="intro-section" aria-label="Introduction">
          <h2>Welcome to My Digital Space</h2>
          <p>
            I&apos;m a mechatronics technician, software
            developer and audio engineer with a passion for bridging the gap
            between industrial technology and modern software solutions.
          </p>
          <p>
            My expertise spans across computer science, audio production, and
            mechatronics, allowing me to create innovative solutions for complex technical
            challenges.
          </p>
        </section>

        <section className="expertise-section" aria-label="Areas of Expertise">
          <h2>What I Do</h2>
          <div className="expertise-grid" role="list">
            {expertiseItems.map((item, index) => (
              <Link
                to={item.link}
                key={item.title}
                className={`expertise-item ${activeCard === index ? 'active' : ''}`}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardHover(null)}
                role="listitem"
                aria-label={item.ariaLabel}
              >
                <span className="expertise-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="learn-more" aria-hidden="true">Learn More →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="background-section" aria-label="Professional Background">
          <h2>Professional Journey</h2>
          <p>
            My path in technology has been driven by curiosity and a desire to
            understand how things work. From my role as a Data Center Technician
            at T5 Data Centers to working as a Mechatronics Technician at CN
            Wire, I&apos;ve consistently pushed the boundaries of what&apos;s
            possible in industrial technology and software integration.
          </p>
          <Link to="/resume" className="read-more" aria-label="View my full professional background">
            View Full Background →
          </Link>
        </section>

        <section className="cta-section" aria-label="Contact Information">
          <h2>Let&apos;s Connect</h2>
          <p>
            I&apos;m always excited to take on new challenges and contribute to
            innovative projects. Whether you&apos;re interested in my work or
            looking to collaborate, I&apos;d love to hear from you.
          </p>
          <div className="cta-buttons" role="group" aria-label="Call to action">
            <Link to="/resume" className="button primary" aria-label="View my detailed resume">
              View My Resume
            </Link>
            <Link to="/contact" className="button secondary" aria-label="Contact me">
              Get in Touch
            </Link>
          </div>
        </section>
      </article>
    </Main>
  );
};

export default Index;
