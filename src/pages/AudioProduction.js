import React from 'react';
import { motion } from 'framer-motion';
import Main from '../layouts/Main';
import AudioPlayer from '../components/Audio/AudioPlayer';
import PluginShowcase from '../components/Audio/PluginShowcase';
import StudioShowcase from '../components/Audio/StudioShowcase';
import '../static/css/components/_audioproduction.scss';
import '../static/css/components/_audioplayer.scss';
import '../static/css/components/_studioshowcase.scss';

const AudioProduction = () => {
  const tracks = [
    {
      id: 'home-remix',
      title: 'Home (Remix)',
      artist: 'C-Cell (Producer)',
      url: '/audio/home-remix.mp3',
      description: 'A fusion of synthwave, hip-hop, and R&B elements with ambient textures',
      genre: 'Hip-Hop/R&B',
      year: '2024',
    },
    {
      id: 'home',
      title: 'Home',
      artist: 'C-Cell (Producer)',
      url: '/audio/home.mp3',
      description: 'A fusion of synthwave, hip-hop, and R&B elements with ambient textures',
      genre: 'Hip-Hop/R&B',
      year: '2024',
    },
    {
      id: 'do-it-again.mp3',
      title: 'Do It Again',
      artist: 'C-Cell (Producer), Ghost Music (Vocalist)',
      url: '/audio/do-it-again.mp3',
      description: 'Combination of pop, hip-hop, and R&B elements',
      genre: 'Hip-Hop/Pop',
      year: '2024',
    },
    {
      id: 'blossom',
      title: 'Blossom',
      artist: 'C-Cell (Producer), PAZ (Vocalist)',
      url: '/audio/blossom.mp3',
      description: '',
      genre: 'Hip-Hop, Boom Bap, and R&B',
      year: '2024',
    },
    {
      id: 'bollywood-drill',
      title: 'Bollywood Drill',
      artist: 'C-Cell (Producer), PAZ (Vocalist)',
      url: '/audio/bollywood-drill.mp3',
      description: '',
      genre: 'Hip-Hop, Drill',
      year: '2024',
    },
    {
      id: 'boom-bap-classics',
      title: 'Boom Bap Classics',
      artist: 'C-Cell (Producer)',
      url: '/audio/boom-bap-classics.mp3',
      description: '',
      genre: 'Hip-Hop, Boom Bap',
      year: '2024',
    },
    {
      id: 'clouds',
      title: 'Clouds',
      artist: 'C-Cell (Producer), PAZ (Vocalist)',
      url: '/audio/clouds.mp3',
      description: '',
      genre: 'Hip-Hop, Boom Bap',
      year: '2024',
    },
    {
      id: 'hidden-efforts',
      title: 'Hidden Efforts',
      artist: 'C-Cell (Producer)',
      url: '/audio/hidden-efforts.mp3',
      description: '',
      genre: 'Hip-Hop',
      year: '2024',
    },
    {
      id: 'johnny-quest-3023',
      title: 'Johnny Quest 3023',
      artist: 'C-Cell (Producer), PAZ (Vocalist)',
      url: '/audio/johnny-quest-3023.mp3',
      description: '',
      genre: 'Hip-Hop',
      year: '2024',
    },
    {
      id: 'syncope',
      title: 'Scyncope',
      artist: 'C-Cell (Producer)',
      url: '/audio/syncope.mp3',
      description: '',
      genre: 'Hip-Hop',
      year: '2024',
    },
    {
      id: 'trap-type-beat',
      title: 'Trap Type Beat',
      artist: 'C-Cell (Producer)',
      url: '/audio/trap-type-beat.mp3',
      description: '',
      genre: 'Hip-Hop',
      year: '2024',
    },
    // Add more tracks here
    // {
    //   id: '',
    //   title: '',
    //   artist: 'C-Cell (Producer)',
    //   url: '/audio/',
    //   description: '',
    //   genre: ''
    //   year: '',
    // },
  ];

  const studioEquipment = [
    {
      id: 'interface',
      name: 'Universal Audio Volt 2',
      category: 'hardware',
      description: 'Professional audio interface with UAD processing capabilities',
      image: '/images/equipment/apollo-twin.jpg',
      specs: [
        '24-bit/192 kHz audio conversion',
        'Unison preamp technology',
        'Built-in UAD-2 processing',
        'Thunderbolt 3 connectivity',
      ],
    },
    {
      id: 'interface',
      name: 'Scarlett 2i2',
      category: 'hardware',
      description: 'Professional audio interface with UAD processing capabilities',
      image: '/images/equipment/apollo-twin.jpg',
      specs: [
        '24-bit/192 kHz audio conversion',
        'Unison preamp technology',
        'Built-in UAD-2 processing',
        'Thunderbolt 3 connectivity',
      ],
    },
    {
      id: 'monitors',
      name: 'KRK Rokit 5',
      category: 'hardware',
      description: 'Professional studio monitors',
      image: '/images/equipment/adam-a7x.jpg',
      specs: [
        '7" woofer',
        'X-ART accelerated ribbon tweeter',
        'Frequency response: 42 Hz - 50 kHz',
        'Max SPL: 114 dB',
      ],
    },
    {
      id: 'daw',
      name: 'Logic Pro X',
      category: 'software',
      description: 'First step in the production process, used for recording and editing.',
      image: '/images/plugins/logic-pro-x.webp',
      specs: [
        'Complete sound library',
        'Max for Live integration',
        'Advanced MIDI editing',
        'Professional mixing tools',
      ],
    },
    {
      id: 'daw',
      name: 'Abelton Live 12',
      category: 'software',
      description: 'Backup DAW used for recording and editing.',
      image: '/images/plugins/abelton.png',
      specs: [
        'Complete sound library',
        'Max for Live integration',
        'Advanced MIDI editing',
        'Professional mixing tools',
      ],
    },
    {
      id: 'daw',
      name: 'Avid Pro Tools',
      category: 'software',
      description: 'Last step in the production process, used for mixing and mastering.',
      image: '/images/plugins/pro-tools.jpg',
      specs: [
        'Complete sound library',
        'Max for Live integration',
        'Advanced MIDI editing',
        'Professional mixing tools',
      ],
    },
    // {
    //   id: 'pro-q',
    //   name: 'FabFilter Pro-Q 3',
    //   category: 'plugins',
    //   description: 'High-end equalizer plugin with dynamic EQ capabilities',
    //   image: '/images/equipment/fabfilter-proq.jpg',
    //   specs: [
    //     'Dynamic EQ processing',
    //     'Linear phase operation',
    //     'Up to 24 bands',
    //     'Spectrum analyzer',
    //   ],
    // },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const reverbDesc = 'A modern algorithmic reverb with an emphasis on creating wide, '
    + 'immersive spaces. Includes unique modulation options and a visualizer.';

  const plugins = [
    {
      id: 'lfo-synth',
      name: 'LFO Synth',
      description: reverbDesc,
      features: [
        'Analog-modeled compression algorithm',
        'Variable attack (0.1ms - 300ms)',
        'Variable release (50ms - 1200ms)',
        'Reverb gain control',
      ],
      image: '/images/plugins/lfo-synth.png',
      demoVideo: 'https://youtube.com/shorts/_kpwV3C5CYY?si=2ImPnRRTUWCX-GgC',
      status: 'Beta',
      technology: 'HISE Framework, C++',
    },
    // {
    //   id: 'spatial-reverb',
    //   name: 'Spatial Reverb',
    //   description: reverbDesc,
    //   features: [
    //     'Custom reverb algorithm',
    //     'Multiple room models',
    //     'Modulation section',
    //     'Pre-delay control',
    //     'Width control',
    //     'Real-time spectrum analyzer',
    //   ],
    //   image: '/images/plugins/spatial-reverb.png',
    //   demoVideo: 'https://youtube.com/',
    //   status: 'Beta',
    //   technology: 'HISE Framework, C++',
    // },
  ];

  return (
    <Main
      title="Audio Production"
      description="Explore my music production work, featuring original tracks and audio plugins."
    >
      <motion.article
        className="audio-production"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.header variants={item}>
          <h2 className="title">Audio Production</h2>
          <p className="subtitle">
            Explore my latest music productions and audio processing tools.
          </p>
        </motion.header>

        <motion.section className="tracks-section" variants={item}>
          <h3>Featured Tracks</h3>
          <div className="tracks-container">
            {tracks.map((track) => (
              <motion.div
                key={track.id}
                className="track-card"
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AudioPlayer track={track} />
                <div className="track-details">
                  <p className="description">{track.description}</p>
                  <div className="metadata">
                    <span className="genre">{track.genre}</span>
                    <span className="year">{track.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="plugins-section" variants={item}>
          <h3>Audio Plugins</h3>
          <p className="section-intro">
            Discover my collection of custom audio plugins designed for modern music production.
          </p>
          <PluginShowcase plugins={plugins} />
        </motion.section>

        <motion.section className="studio-section" variants={item}>
          <h3>Studio Equipment</h3>
          <p className="section-intro">
            Take a look at the professional gear I use for music production and audio engineering.
          </p>
          <StudioShowcase equipment={studioEquipment} />
        </motion.section>
      </motion.article>
    </Main>
  );
};

export default AudioProduction;
