import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Main from '../layouts/Main';
import blog from '../data/blog';

const BlogPreview = ({ post }) => (
  <div className="blog-preview">
    <h3>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </h3>
    <div className="blog-meta">
      <span className="date">{new Date(post.date).toLocaleDateString()}</span>
      <span className="category">{post.category}</span>
    </div>
    <p className="description">{post.description}</p>
    <div className="tags">
      {post.tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
    <Link to={`/blog/${post.slug}`} className="read-more">
      Read More →
    </Link>
  </div>
);

BlogPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Blog = () => (
  <Main
    title="Blog - Christopher Celaya"
    description="Insights on systems integration, software development, and technology."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h1>Blog</h1>
          <p className="subtitle">
            Sharing insights about systems integration, software development, and industrial
            technology.
          </p>
        </div>
      </header>

      <div className="blog-grid">
        {blog.map((post) => (
          <BlogPreview key={post.slug} post={post} />
        ))}
      </div>
    </article>
  </Main>
);

export default Blog;
