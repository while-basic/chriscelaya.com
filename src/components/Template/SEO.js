import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SEO from '../../data/seo';

const SEOComponent = ({ overrideTitle, overrideDescription }) => {
  const location = useLocation();
  const title = overrideTitle || SEO.title;
  const description = overrideDescription || SEO.description;
  const url = `${SEO.og.url}${location.pathname}`;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={SEO.keywords.join(', ')} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={SEO.og.type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SEO.og.url}${SEO.og.image}`} />
      <meta property="og:image:alt" content={SEO.og.imageAlt} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={SEO.twitter.cardType} />
      <meta name="twitter:creator" content={SEO.twitter.handle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SEO.og.url}${SEO.og.image}`} />
      <meta name="twitter:image:alt" content={SEO.og.imageAlt} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(SEO.schema)}
      </script>

      {/* Additional tags for better indexing */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="author" content="Christopher Celaya" />
    </Helmet>
  );
};

SEOComponent.propTypes = {
  overrideTitle: PropTypes.string,
  overrideDescription: PropTypes.string,
};

SEOComponent.defaultProps = {
  overrideTitle: '',
  overrideDescription: '',
};

export default SEOComponent;
