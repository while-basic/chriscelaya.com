import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Music = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/music.md')
      .then((res) => {
        fetch(res.default)
          .then((r) => r.text())
          .then(setMarkdown);
      });
  });

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="Music Production"
      description="Chris's Music Production"
    >
      <article className="post markdown" id="music">
        <header>
          <div className="title">
            <h2><Link to="/about">Music Production (Work in progress)</Link></h2>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
      <p>(in about {count} words)</p>
    </Main>
  );
};

export default Music;
