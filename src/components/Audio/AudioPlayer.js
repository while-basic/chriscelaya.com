import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import WaveformVisualizer from './WaveformVisualizer';

const AudioPlayer = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const updateProgress = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('loadedmetadata', () => setDuration(audio.duration));
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
    audioRef.current.currentTime = pos * duration;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleProgressClick(e);
    }
  };

  return (
    <motion.div
      className="audio-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <audio
        ref={audioRef}
        src={track.url}
        aria-label={`Audio track: ${track.title} by ${track.artist}`}
      >
        <track
          kind="captions"
          src=""
          label="English captions"
          srcLang="en"
          default
        />
      </audio>

      <div className="track-info">
        <motion.h3
          whileHover={{ scale: 1.05 }}
          className="track-title"
        >
          {track.title}
        </motion.h3>
        <p className="track-artist">{track.artist}</p>
      </div>

      <div className="waveform-container">
        <WaveformVisualizer
          audioUrl={track.url}
          isPlaying={isPlaying}
          onPlayPause={togglePlay}
        />
      </div>

      <div className="controls">
        <motion.button
          type="button"
          whileTap={{ scale: 0.95 }}
          className="play-button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </motion.button>

        <div className="progress-container">
          <div
            ref={progressBarRef}
            className="progress-bar"
            onClick={handleProgressClick}
            onKeyPress={handleKeyPress}
            role="slider"
            tabIndex={0}
            aria-label="Audio progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round((currentTime / duration) * 100) || 0}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
          >
            <div
              className="progress"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          <div className="time-display">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="volume-controls">
          <button
            type="button"
            className="mute-button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            aria-label="Volume control"
          />
        </div>
      </div>
    </motion.div>
  );
};

AudioPlayer.propTypes = {
  track: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  }).isRequired,
};

export default AudioPlayer;
