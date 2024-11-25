import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.scss';

const Gallery = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(12);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const filteredImages = images.filter((image) => (
    filter === 'all' ? true : image.category === filter
  ));

  const loadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 12, filteredImages.length));
  };

  const openModal = useCallback((image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;

    switch (e.key) {
      case 'Escape': {
        closeModal();
        break;
      }
      case 'ArrowLeft': {
        const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
        if (currentIndex > 0) {
          setSelectedImage(filteredImages[currentIndex - 1]);
        }
        break;
      }
      case 'ArrowRight': {
        const nextIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
        if (nextIndex < filteredImages.length - 1) {
          setSelectedImage(filteredImages[nextIndex + 1]);
        }
        break;
      }
      default:
        break;
    }
  }, [selectedImage, filteredImages, closeModal]);

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus();
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
    return undefined;
  }, [selectedImage, handleKeyDown]);

  const categories = ['all', ...new Set(images.map((img) => img.category))];

  const handleModalClick = (e) => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-filters" role="toolbar" aria-label="Image filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => {
              setFilter(category);
              setVisibleImages(12);
            }}
            aria-pressed={filter === category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredImages.slice(0, visibleImages).map((image, index) => (
          <motion.div
            key={image.id}
            className="gallery-item"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              type="button"
              className="image-button"
              onClick={() => openModal(image)}
              aria-label={`View ${image.title}`}
            >
              <div className="image-wrapper">
                <img
                  src={image.url}
                  alt={image.title}
                  className="gallery-image"
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
                <div className="image-overlay">
                  <h3 className="image-title">{image.title}</h3>
                  <p className="image-category">{image.category}</p>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </motion.div>

      {visibleImages < filteredImages.length && (
        <motion.div
          className="load-more"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            type="button"
            onClick={loadMore}
            className="load-more-button"
            aria-label={`Load ${Math.min(12, filteredImages.length - visibleImages)} more images`}
          >
            Load More
          </button>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            ref={modalRef}
            className="gallery-modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleModalClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              type="button"
              className="modal-overlay"
              onClick={closeModal}
              aria-label="Close image overlay"
            />
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="close-button"
                onClick={closeModal}
                aria-label="Close image modal"
              >
                ×
              </button>
              <div className="modal-image-container">
                <img src={selectedImage.url} alt={selectedImage.title} />
              </div>
              <div className="modal-info">
                <h3 id="modal-title">{selectedImage.title}</h3>
                <p className="image-category">{selectedImage.category}</p>
                <p className="image-description">{selectedImage.description}</p>
                {selectedImage.link && (
                  <a
                    href={selectedImage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
              <div className="modal-navigation" role="navigation">
                <button
                  type="button"
                  className="nav-button prev"
                  onClick={() => {
                    const currentIndex = filteredImages.findIndex(
                      (img) => img.id === selectedImage.id,
                    );
                    if (currentIndex > 0) {
                      setSelectedImage(filteredImages[currentIndex - 1]);
                    }
                  }}
                  disabled={
                    filteredImages.findIndex(
                      (img) => img.id === selectedImage.id,
                    ) === 0
                  }
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="nav-button next"
                  onClick={() => {
                    const currentIndex = filteredImages.findIndex(
                      (img) => img.id === selectedImage.id,
                    );
                    if (currentIndex < filteredImages.length - 1) {
                      setSelectedImage(filteredImages[currentIndex + 1]);
                    }
                  }}
                  disabled={
                    filteredImages.findIndex(
                      (img) => img.id === selectedImage.id,
                    ) === filteredImages.length - 1
                  }
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
      category: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default Gallery;
