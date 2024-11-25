import React from 'react';
import { Helmet } from 'react-helmet-async';
import Main from '../layouts/Main';
import AudioPlayer from '../components/Audio/AudioPlayer';

const AudioProduction = () => {
  const tracks = [
    {
      title: 'Track 1',
      artist: 'Christopher Celaya',
      url: '/audio/track1.mp3', // You'll need to add actual audio files
      description: 'A blend of electronic and acoustic elements',
      genre: 'Electronic/Ambient',
      year: '2023',
      id: '1',
    },
    // Add more tracks as needed
  ];

  return (
    <Main
      title="Audio Production"
      description="Audio engineering and music production portfolio showcasing my work in sound design, mixing, and production."
    >
      <Helmet>
        <title>Audio Production | Christopher Celaya</title>
      </Helmet>

      <article className="post" id="audio">
        <header>
          <div className="title">
            <h2>Audio Production</h2>
            <p className="subtitle">A collection of my audio engineering and music production work</p>
          </div>
        </header>

        <div className="audio-portfolio">
          <section className="introduction">
            <p>
              Welcome to my audio portfolio. Here you&apos;ll find a selection of my work in audio
              engineering, music production, and sound design. Each track demonstrates different
              aspects of my expertise, from recording and mixing to final production.
            </p>
          </section>

          <section className="track-list">
            {tracks.map((track) => (
              <AudioPlayer
                key={track.id}
                track={track}
              />
            ))}
          </section>

          <section className="equipment">
            <h3>Equipment & Software</h3>
            <ul>
              <li>Digital Audio Workstation: Ableton Live</li>
              <li>Audio Interface: Focusrite Scarlett</li>
              <li>Monitoring: KRK Rokit 5</li>
              {/* Add your actual equipment */}
            </ul>
          </section>
        </div>
      </article>
    </Main>
  );
};

export default AudioProduction;
