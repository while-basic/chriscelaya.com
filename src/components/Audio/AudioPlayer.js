import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveformVisualizer from './WaveformVisualizer';
import './AudioPlayer.scss';

const AudioPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef(null);
  const waveformRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (time) => {
    setCurrentTime(time);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = e.target.value;
    if (waveformRef.current) {
      waveformRef.current.seekTo(time / duration);
    }
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleWaveformReady = (wavesurfer) => {
    waveformRef.current = wavesurfer;
    setDuration(wavesurfer.getDuration());
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    audioRef.current.playbackRate = newRate;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: track.title,
        text: `Check out "${track.title}" by ${track.artist}`,
        url: window.location.href,
      });
    } catch (error) {
      // Silently handle sharing errors
    }
  };

  const getVolumeIcon = (muteState, volumeLevel) => {
    if (muteState) {
      return '🔇';
    }
    if (volumeLevel > 0.5) {
      return '🔊';
    }
    if (volumeLevel > 0) {
      return '🔉';
    }
    return '🔈';
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
          onReady={handleWaveformReady}
          onTimeUpdate={handleTimeUpdate}
          isPlaying={isPlaying}
        />
      </div>

      <div className="player-controls">
        <audio
          ref={audioRef}
          src={track.url}
          onTimeUpdate={() => handleTimeUpdate(audioRef.current.currentTime)}
          onLoadedMetadata={handleLoadedMetadata}
        >
          <track kind="captions" src={track.captionsUrl} />
        </audio>

        <div className="primary-controls">
          <button
            type="button"
            className={`play-button ${isPlaying ? 'playing' : ''}`}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸' : '▶️'}
          </button>

          <div className="volume-control">
            <button
              type="button"
              onClick={toggleMute}
              className="mute-button"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {getVolumeIcon(isMuted, volume)}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
              aria-label="Volume"
            />
          </div>

          <div className="playback-rate">
            <select
              value={playbackRate}
              onChange={handlePlaybackRateChange}
              className="playback-rate-select"
              aria-label="Playback Speed"
            >
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleShare}
            className="share-button"
            aria-label="Share"
          >
            📤
          </button>
        </div>

        <div className="progress-bar">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="seek-slider"
            aria-label="Seek"
          />
          <div className="time-display">
            <span className="current-time">{formatTime(currentTime)}</span>
            <span className="duration">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    captionsUrl: PropTypes.string,
    description: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

export default AudioPlayer;
