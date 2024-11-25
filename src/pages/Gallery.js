import React from 'react';
import Main from '../layouts/Main';
import Gallery from '../components/Gallery/Gallery';

const images = [
  {
    id: '1',
    url: '/images/gallery/image1.jpg',
    title: 'Electrical Wiring',
    description: '480 VAC wiring installation, highlighting the importance of safe and efficient electrical systems.',
    category: 'wiring',
  },
  {
    id: '2',
    url: '/images/gallery/image2.jpg',
    title: 'Mountain Vista',
    description: 'Breathtaking view of the mountains during sunrise, with morning mist rolling through the valleys below.',
    category: 'landscape',
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
