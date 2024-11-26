import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './PluginShowcase.scss';

const PluginCard = ({ plugin }) => (
  <motion.div
    className="plugin-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="plugin-header">
      <h3>{plugin.name}</h3>
      {plugin.status && (
        <span className={`status-badge ${plugin.status.toLowerCase()}`}>
          {plugin.status}
        </span>
      )}
    </div>
    {plugin.image && (
      <div className="plugin-image">
        <img src={plugin.image} alt={plugin.name} />
      </div>
    )}
    <div className="description">{plugin.description}</div>
    {plugin.features && (
      <div className="features">
        <h4>Features</h4>
        <ul>
          {plugin.features.map((feature) => (
            <li key={`${plugin.id}-${feature.toLowerCase().replace(/\s+/g, '-')}`}>{feature}</li>
          ))}
        </ul>
      </div>
    )}
  </motion.div>
);

const PluginShowcase = ({ plugins }) => (
  <div className="plugin-showcase">
    <div className="plugins-grid">
      {plugins.map((plugin) => (
        <PluginCard key={plugin.id} plugin={plugin} />
      ))}
    </div>
  </div>
);

PluginCard.propTypes = {
  plugin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

PluginShowcase.propTypes = {
  plugins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string,
    status: PropTypes.string.isRequired,
  })).isRequired,
};

export default PluginShowcase;
