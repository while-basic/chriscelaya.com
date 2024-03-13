import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Blog = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/blog.md')
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
      title="Chris's Blog"
      description="Chris's Blog"
    >
      <article className="post markdown" id="blog">
        <header>
          <div className="title">
            <h2><a href="https://chriscelaya-xyz-tailwind-css-starter-blog.vercel.app/" target="_blank" rel="noopener noreferrer">Blog (Work in progress)</a></h2>
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

export default Blog;
