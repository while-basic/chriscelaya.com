import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Christopher Celaya</h2>
        <p><a href="mailto:chris@chriscelaya.xyz">chris@chriscelaya.xyz</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am Chris, a mechatronic technician and human software developer based out of El Paso, TX.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Christopher Celaya <Link to="/">chriscelaya.xyz</Link>.</p>
    </section>
  </section>
);

export default SideBar;
