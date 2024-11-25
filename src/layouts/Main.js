import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    document.body.className = isBlogPage ? 'blog' : '';
    return () => {
      document.body.className = '';
    };
  }, [isBlogPage]);

  return (
    <HelmetProvider>
      <Analytics />
      <ScrollToTop />
      <Helmet titleTemplate="%s | Christopher Celaya" defaultTitle="Christopher Celaya" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
        {!isBlogPage && !props.fullPage && <SideBar />}
      </div>
    </HelmetProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Christopher's personal website.",
};

export default Main;
