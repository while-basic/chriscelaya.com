import React from 'react';
import Main from '../layouts/Main';
import Gallery from '../components/Gallery/Gallery';

const images = [
  {
    id: '1',
    url: '/images/gallery/image1.jpg',
    title: 'Sunset at the Beach',
    description: 'A beautiful sunset captured at the California coastline, showcasing the vibrant colors of dusk reflecting off the ocean waves.',
    category: 'nature',
  },
  {
    id: '2',
    url: '/images/gallery/image2.jpg',
    title: 'Mountain Vista',
    description: 'Breathtaking view of the mountains during sunrise, with morning mist rolling through the valleys below.',
    category: 'landscape',
  },
  {
    id: '3',
    url: '/images/gallery/image3.jpg',
    title: 'Urban Architecture',
    description: 'Modern architectural design in downtown San Francisco, highlighting the intersection of art and engineering.',
    category: 'architecture',
  },
  {
    id: '4',
    url: '/images/gallery/image4.jpg',
    title: 'Street Photography',
    description: 'Candid moment captured in the bustling streets of the city, showing the dynamic energy of urban life.',
    category: 'street',
  },
  {
    id: '5',
    url: '/images/gallery/image5.jpg',
    title: 'Abstract Patterns',
    description: 'Natural patterns found in everyday surroundings, transformed into abstract compositions.',
    category: 'abstract',
  },
  {
    id: '6',
    url: '/images/gallery/image6.jpg',
    title: 'Portrait Study',
    description: 'Environmental portrait showcasing the connection between subject and surroundings.',
    category: 'portrait',
  },
  // Add more images with categories
];

const GalleryPage = () => (
  <Main
    title="Gallery"
    description="A curated collection of photographs showcasing various moments and perspectives"
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2>Photography Gallery</h2>
          <p>A visual journey through moments captured in time</p>
        </div>
      </header>
      <Gallery images={images} />
    </article>
  </Main>
);

export default GalleryPage;
