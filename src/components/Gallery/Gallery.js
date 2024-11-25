import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Gallery.scss';

const Gallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(9);
  const [selectedImage, setSelectedImage] = useState(null);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 9);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.slice(0, visibleImages).map((image) => (
          <div key={image.id} className="gallery-item">
            <button
              type="button"
              className="image-button"
              onClick={() => openModal(image)}
              aria-label={`View ${image.title}`}
            >
              <img src={image.url} alt={image.title} className="gallery-image" />
              <div className="image-overlay">
                <h3 className="image-title">{image.title}</h3>
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal-container" role="dialog" aria-modal="true" aria-label="Image details">
          <button
            type="button"
            className="modal-overlay"
            onClick={closeModal}
            aria-label="Close image overlay"
          />
          <div className="modal-content">
            <button
              type="button"
              className="close-button"
              onClick={closeModal}
              aria-label="Close image modal"
            >
              ×
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="image-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {visibleImages < images.length && (
        <div className="load-more">
          <button type="button" onClick={loadMore} className="load-more-button">
            Load More Images
          </button>
        </div>
      )}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
