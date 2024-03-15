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

  // const count = markdown.split(/\s+/)
  //   .map((s) => s.replace(/\W/g, ''))
  //   .filter((s) => s.length).length;

  return (
    <Main
      title="Chris's Blog"
      description="Chris's Blog"
    >
      <article className="post markdown" id="blog">
        <header>
          <div className="title">
            <h2><a href="el-paso-tech-blog.vercel.app" target="_blank" rel="noopener noreferrer">Blog</a></h2>
            <h1>This section is under construction 🚧</h1>
            <p><a href="el-paso-tech-blog.vercel.app" target="_blank" rel="noopener noreferrer">View blog</a></p>
          </div>
        </header>
        <Markdown>
          {markdown}
        </Markdown>
      </article>
    </Main>
  );
};

export default Blog;
