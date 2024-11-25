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
          {isPlaying ? '⏸' : '▶️'}
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
