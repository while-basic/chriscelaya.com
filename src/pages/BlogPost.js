import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';
import blog from '../data/blog';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blog.find((p) => p.slug === slug);

  if (!post) {
    React.useEffect(() => {
      navigate('/blog');
    }, [navigate]);
    return null;
  }

  return (
    <Main
      title={`${post.title} - Christopher Celaya's Blog`}
      description={post.description}
    >
      <article className="post" id="blog-post">
        <header>
          <div className="title">
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span className="date">{new Date(post.date).toLocaleDateString()}</span>
              <span className="category">{post.category}</span>
            </div>
            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="blog-content">
          <Markdown>{post.content}</Markdown>
        </div>

        <footer>
          <Link to="/blog" className="back-to-blog">
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </Main>
  );
};

export default BlogPost;
