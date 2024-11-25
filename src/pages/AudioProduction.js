import React from 'react';
import Main from '../layouts/Main';
import AudioPlayer from '../components/Audio/AudioPlayer';
import PluginShowcase from '../components/Audio/PluginShowcase';
import './AudioProduction.scss';

const AudioProduction = () => {
  const tracks = [
    {
      id: 'electronic-fusion-01',
      title: 'Home',
      artist: 'C-Cell',
      url: '/audio/Home.mp3',
      description: 'A fusion of synthwave, hip-hop, and R&B elements with ambient textures',
      genre: 'Hip-Hop/R&B',
      year: '2024',
    },
  ];

  const reverbDesc = 'A modern algorithmic reverb with an emphasis on creating wide, '
    + 'immersive spaces. Includes unique modulation options and a visualizer.';

  const plugins = [
    {
      id: 'spatial-reverb',
      name: 'Reverb',
      description: reverbDesc,
      features: [
        'Analog-modeled compression algorithm',
        'Variable attack (0.1ms - 300ms)',
        'Variable release (50ms - 1200ms)',
        'Ratio control (1:1 to 20:1)',
        'Input/Output gain control',
        'Vintage-style VU meter',
      ],
      image: '/images/plugins/reverb.png',
      demoVideo: 'https://youtube.com',
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
      description="Audio engineering and music production portfolio"
    >
      <article className="post" id="audio">
        <header>
          <div className="title">
            <h1>Audio Production</h1>
            <p className="subtitle" role="doc-subtitle">
              A collection of my audio engineering and music production work.
            </p>
          </div>
        </header>

        <div className="audio-portfolio">
          <section className="tracks-section">
            <h2>Music</h2>
            <div className="tracks-container">
              {tracks.map((track) => (
                <AudioPlayer key={track.id} track={track} />
              ))}
            </div>
          </section>

          <section className="plugins-section">
            <h2>Audio Plugins</h2>
            <p className="section-intro">
              Custom plugins developed using modern DSP techniques and the HISE framework.
            </p>
            <div className="plugins-container">
              {plugins.map((plugin) => (
                <PluginShowcase key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </section>
        </div>
      </article>
    </Main>
  );
};

export default AudioProduction;
