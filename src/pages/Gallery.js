import React from 'react';
import Main from '../layouts/Main';
import Gallery from '../components/Gallery/Gallery';

const images = [
  {
    id: '1',
    url: '/images/gallery/image1.jpg',
    title: 'Sunset at the Beach',
    description: 'A beautiful sunset captured at the California coastline.',
  },
  {
    id: '2',
    url: '/images/gallery/image2.jpg',
    title: 'Mountain Vista',
    description: 'Breathtaking view of the mountains during sunrise.',
  },
  {
    id: '3',
    url: '/images/gallery/image3.jpg',
    title: 'Urban Architecture',
    description: 'Modern architectural design in downtown San Francisco.',
  },
  // Add more images as needed
];

const GalleryPage = () => (
  <Main
    title="Gallery"
    description="A collection of photographs and memories"
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2>Gallery</h2>
          <p>A collection of moments captured through my lens</p>
        </div>
      </header>
      <Gallery images={images} />
    </article>
  </Main>
);

export default GalleryPage;
