import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = (({ data, categories }) => {
  const { category, competency, title } = data;

  const getColor = () => {
    const categoryColors = categories
      .filter((cat) => category.includes(cat.name))
      .map((cat) => cat.color);
    return categoryColors[0] || '#666';
  };

  const barStyle = {
    width: `${String(Math.min(100, Math.max((competency / 5.0) * 100.0, 0)))}%`,
    background: getColor(),
  };

  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-title">{title}</span>
        <span className="skill-level">{competency}/5</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar-fill" style={barStyle} />
      </div>
      <div className="skill-categories">
        {category.map((cat) => (
          <span
            key={cat}
            className="skill-category"
            style={{ background: categories.find((c) => c.name === cat)?.color }}
          >
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
});

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
