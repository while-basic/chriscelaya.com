import React from 'react';
import { motion } from 'framer-motion';
import Main from '../layouts/Main';
import AudioPlayer from '../components/Audio/AudioPlayer';
import PluginShowcase from '../components/Audio/PluginShowcase';
import '../static/css/components/_audioproduction.scss';
import '../static/css/components/_audioplayer.scss';

const AudioProduction = () => {
  const tracks = [
    {
      id: '80s-hip-hop-r&b',
      title: 'Home',
      artist: 'C-Cell',
      url: '/audio/Home.mp3',
      description: 'A fusion of synthwave, hip-hop, and R&B elements with ambient textures',
      genre: 'Hip-Hop/R&B',
      year: '2024',
    },
    // Add more tracks here
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
            Custom plugins developed using modern DSP techniques and the HISE framework.
          </p>
          <div className="plugins-container">
            {plugins.map((plugin) => (
              <PluginShowcase key={plugin.id} plugin={plugin} />
            ))}
          </div>
        </motion.section>
      </motion.article>
    </Main>
  );
};

export default AudioProduction;
