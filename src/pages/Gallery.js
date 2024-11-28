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
    url: '/images/gallery/commutator-1.jpg',
    title: 'Commutator',
    description: '',
    category: 'Electrical',
  },
  {
    id: '3',
    url: '/images/gallery/commutator-2.jpg',
    title: 'Commutator',
    description: '',
    category: 'Electrical',
  },
  {
    id: '4',
    url: '/images/gallery/wiring-1.jpg',
    title: 'Commutator',
    description: '',
    category: 'Wiring',
  },
  {
    id: '5',
    url: '/images/gallery/.jpg',
    title: '',
    description: '',
    category: '',
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
