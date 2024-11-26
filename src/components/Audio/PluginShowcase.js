import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './PluginShowcase.scss';

const PluginCard = ({ plugin }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`plugin-card ${isExpanded ? 'expanded' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.01 }}
      layout
    >
      <div className="plugin-header">
        <h3>{plugin.name}</h3>
        <span className={`status-badge ${plugin.status.toLowerCase()}`}>
          {plugin.status}
        </span>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="plugin-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {plugin.image && (
              <div className="plugin-image">
                <img src={plugin.image} alt={`${plugin.name} interface`} />
              </div>
            )}
            <p className="description">{plugin.description}</p>
            <div className="features">
              <h4>Key Features</h4>
              <ul>
                {plugin.features.map((feature) => (
                  <li key={`${plugin.id}-${feature}`}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="tech-info">
              <span className="tech-stack">
                <strong>Technology:</strong> {plugin.technology}
              </span>
            </div>

            {plugin.demoVideo && (
              <a
                href={plugin.demoVideo}
                className="demo-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Watch Demo
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CATEGORIES = [
  'All',
  'Effects',
  'Instruments',
  'Mixing',
  'Mastering',
  'Utility',
];

const PluginShowcase = ({ plugins }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlugins = plugins.filter((plugin) => {
    const matchesCategory = selectedCategory === 'All' || plugin.category === selectedCategory;
    const matchesSearch = plugin.name.toLowerCase().includes(searchQuery.toLowerCase())
      || plugin.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="plugin-showcase">
      <div className="plugin-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search plugins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="category-filters">
          {CATEGORIES.map((category) => (
            <button
              type="button"
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        className="plugins-grid"
        layout
      >
        <AnimatePresence>
          {filteredPlugins.map((plugin) => (
            <PluginCard key={plugin.id} plugin={plugin} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

PluginCard.propTypes = {
  plugin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    demoVideo: PropTypes.string,
    status: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
  }).isRequired,
};

PluginShowcase.propTypes = {
  plugins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    demoVideo: PropTypes.string,
    status: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
  })).isRequired,
};

export default PluginShowcase;
