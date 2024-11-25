import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WaveformVisualizer from './WaveformVisualizer';
import './AudioPlayer.scss';

const AudioPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player">
      <div className="track-info">
        <h4>{track.title}</h4>
        <p className="artist">{track.artist}</p>
        <p className="description">{track.description}</p>
        <div className="metadata">
          <span className="genre">{track.genre}</span>
          <span className="year">{track.year}</span>
        </div>
      </div>

      <div className="waveform-container">
        <WaveformVisualizer
          audioUrl={track.url}
          isPlaying={isPlaying}
          onPlayPause={togglePlay}
        />
      </div>

      <div className="player-controls">
        <button
          type="button"
          className={`play-button ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
              <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

export default AudioPlayer;
