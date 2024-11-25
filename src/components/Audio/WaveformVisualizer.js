import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import WaveSurfer from 'wavesurfer.js';

const WaveformVisualizer = ({
  audioUrl,
  onReady,
  onTimeUpdate,
  isPlaying,
}) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'var(--text-color-light)',
      progressColor: 'var(--primary-color)',
      cursorColor: 'var(--accent-color)',
      barWidth: 2,
      barRadius: 3,
      cursorWidth: 1,
      height: 80,
      barGap: 2,
      responsive: true,
      normalize: true,
      backend: 'MediaElement',
      mediaControls: false,
      interact: false,
    });

    // Find the existing audio element
    const audioElement = document.querySelector(`audio[src="${audioUrl}"]`);
    if (audioElement) {
      wavesurfer.current.loadMediaElement(audioElement, audioUrl);
    } else {
      // Fallback to normal loading if audio element not found
      wavesurfer.current.load(audioUrl);
    }

    wavesurfer.current.on('ready', () => {
      if (onReady) {
        onReady(wavesurfer.current);
      }
    });

    wavesurfer.current.on('audioprocess', () => {
      if (onTimeUpdate) {
        onTimeUpdate(wavesurfer.current.getCurrentTime());
      }
    });

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [audioUrl]);

  useEffect(() => {
    if (wavesurfer.current) {
      if (isPlaying) {
        wavesurfer.current.play();
      } else {
        wavesurfer.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div
      ref={waveformRef}
      className="waveform-visualizer"
      role="img"
      aria-label="Audio waveform visualization"
    />
  );
};

WaveformVisualizer.propTypes = {
  audioUrl: PropTypes.string.isRequired,
  onReady: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  isPlaying: PropTypes.bool,
};

WaveformVisualizer.defaultProps = {
  onReady: null,
  onTimeUpdate: null,
  isPlaying: false,
};

export default WaveformVisualizer;
