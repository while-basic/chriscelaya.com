import React from 'react';
import Main from '../layouts/Main';
import Gallery from '../components/Gallery/Gallery';

const images = [
  {
    id: '1',
    url: '/images/gallery/fire-risers.jpg',
    title: 'Fire Suppression Systems',
    description: 'Experienced in maintaining and inspecting fire risers and suppression systems to ensure optimal performance and compliance with safety standards.',
    category: 'Mechanical',
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
