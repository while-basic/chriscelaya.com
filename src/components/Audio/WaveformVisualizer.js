import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import WaveSurfer from 'wavesurfer.js';

const WaveformVisualizer = ({
  audioUrl,
  isPlaying,
  onPlayPause,
}) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#646464',
      progressColor: '#2e59ba',
      cursorColor: '#2e59ba',
      barWidth: 2,
      barRadius: 3,
      cursorWidth: 1,
      height: 80,
      barGap: 2,
      responsive: true,
      normalize: true,
    });

    wavesurfer.current.load(audioUrl);

    // Add click handler for play/pause
    wavesurfer.current.on('interaction', () => {
      onPlayPause();
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
  isPlaying: PropTypes.bool,
  onPlayPause: PropTypes.func.isRequired,
};

WaveformVisualizer.defaultProps = {
  isPlaying: false,
};

export default WaveformVisualizer;
