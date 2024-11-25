import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import Main from '../layouts/Main';
import AudioPlayer from '../components/Audio/AudioPlayer';

const AudioProduction = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const tracks = [
    {
      id: '80s-hip-hop-r&b-01',
      title: 'Hip-Hop, R&B',
      artist: 'C-Cell',
      url: '/audio/Home.mp3',
      // captionsUrl: '/audio/captions/electronic-fusion.vtt',
      description: 'A fusion of synthwave, hip-hop, and R&B elements with ambient textures',
      genre: 'Hip-Hop/R&B',
      year: '2024',
    },
    // {
    //   id: '80s-hip-hop-r&b-01',
    //   title: 'Hip-Hop, R&B',
    //   artist: 'C-Cell',
    //   url: '/audio/Home.mp3',
    //   // captionsUrl: '/audio/captions/electronic-fusion.vtt',
    //   description: 'A fusion of synthwave, hip-hop, and R&B elements with ambient textures',
    //   genre: 'Hip-Hop/R&B',
    //   year: '2024',
    // },
  ];

  const genres = useMemo(() => {
    const uniqueGenres = new Set(tracks.map((track) => track.genre));
    return ['all', ...Array.from(uniqueGenres)];
  }, []);

  const filteredTracks = useMemo(() => tracks.filter((track) => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase())
      || track.description.toLowerCase().includes(searchTerm.toLowerCase())
      || track.genre.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesGenre = selectedGenre === 'all' || track.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  }), [searchTerm, selectedGenre, tracks]);

  return (
    <Main
      title="Audio Production"
      description="Audio engineering and music production portfolio showcasing my work in sound design, mixing, and production."
    >
      <Helmet>
        <title>Audio Production | C-Cell</title>
        <meta name="description" content="Audio engineering and music production portfolio" />
      </Helmet>

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
          <section className="introduction" aria-label="Portfolio introduction">
            <p>
              Welcome to my audio portfolio. Here you&apos;ll find a selection of my work in audio
              engineering, music production, and sound design. Each track demonstrates different
              aspects of my expertise, from recording and mixing to final production.
            </p>
          </section>

          <section className="track-filters" aria-label="Track filters">
            <div className="search-container">
              <label htmlFor="track-search" className="sr-only">
                Search tracks
                <input
                  id="track-search"
                  type="search"
                  placeholder="Search tracks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  aria-label="Search through tracks"
                />
              </label>
            </div>

            <div className="genre-filter">
              <label htmlFor="genre-select" className="sr-only">
                Filter by genre
                <select
                  id="genre-select"
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="genre-select"
                  aria-label="Filter tracks by genre"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre === 'all' ? 'All Genres' : genre}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section className="track-list" aria-label="Audio tracks">
            {filteredTracks.length > 0 ? (
              filteredTracks.map((track) => (
                <AudioPlayer
                  key={track.id}
                  track={track}
                />
              ))
            ) : (
              <p className="no-results">No tracks found matching your criteria.</p>
            )}
          </section>

          <section className="equipment" aria-label="Equipment and software">
            <h2>Equipment & Software</h2>
            <div className="equipment-list">
              <div>
                <h3>Digital Audio Workstations</h3>
                <ul>
                  <li>Ableton Live 12 Suite</li>
                  <li>Logic Pro X</li>
                  <li>Pro Tools</li>
                </ul>
              </div>
              <div>
                <h3>Audio Interfaces</h3>
                <ul>
                  <li>Universal Audio Volt 2</li>
                  <li>Focusrite Scarlett 2i2</li>
                </ul>
              </div>
              <div>
                <h3>Monitoring</h3>
                <ul>
                  <li>KRK Rokit 5</li>
                  <li>Beyerdynamic DT 990 Pro</li>
                </ul>
              </div>
              <div>
                <h3>Plugins & Virtual Instruments</h3>
                <ul>
                  <li>Fabfilter Pro Bundle</li>
                  <li>Waves Plugin Bundle</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Main>
  );
};

export default AudioProduction;
