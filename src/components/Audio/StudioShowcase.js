import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StudioShowcase = ({ equipment }) => {
  const categories = {
    hardware: equipment.filter((item) => item.category === 'hardware'),
    software: equipment.filter((item) => item.category === 'software'),
    plugins: equipment.filter((item) => item.category === 'plugins'),
    instruments: equipment.filter((item) => item.category === 'instruments'),
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="studio-showcase">
      {Object.entries(categories).map(([category, items]) => (
        items.length > 0 && (
          <motion.div
            key={category}
            className="equipment-category"
            variants={item}
          >
            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div className="equipment-grid">
              {items.map((equipmentItem) => (
                <motion.div
                  key={equipmentItem.id}
                  className="equipment-card"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {equipmentItem.image && (
                    <div className="equipment-image">
                      <img src={equipmentItem.image} alt={equipmentItem.name} />
                    </div>
                  )}
                  <div className="equipment-details">
                    <h5>{equipmentItem.name}</h5>
                    {equipmentItem.description && <p>{equipmentItem.description}</p>}
                    {equipmentItem.specs && (
                      <ul className="specs-list">
                        {equipmentItem.specs.map((spec) => (
                          <li key={`${equipmentItem.id}-${spec}`}>{spec}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      ))}
    </div>
  );
};

StudioShowcase.propTypes = {
  equipment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.oneOf(['hardware', 'software', 'plugins', 'instruments']).isRequired,
      description: PropTypes.string,
      image: PropTypes.string,
      specs: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default StudioShowcase;
