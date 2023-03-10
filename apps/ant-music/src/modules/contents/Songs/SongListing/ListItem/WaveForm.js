import React, { useState, useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import PropTypes, { func } from 'prop-types';
import { Button, Spin, Skeleton, Row, Col } from 'antd';
import { FaPlay, FaPause, FaInfo } from 'react-icons/fa';
import {
  StyledSongItemDuration,
  StyledSongItemPlayback,
  StyledSongItemWaveForm,
} from './index.styled';
import { convertSecondsToTime } from '@ant-music/helpers';

const WaveForm = ({
  song,
  waveHeight,
  waveColor,
  waveProgressColor,
  responsive,
  fillParent,
  waveCursorColor,
  waveCursorWidth,
  barWidth,
  idCurrentSong,
  handleChangeCurrentSong,
}) => {
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const wavesurferId = `wavesurfer--${song.id}`;
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: `#${wavesurferId}`,
      waveColor: waveColor,
      progressColor: waveProgressColor,
      height: waveHeight,
      cursorWidth: waveCursorWidth,
      cursorColor: waveCursorColor,
      barWidth: barWidth,
      normalize: true,
      responsive: true,
      fillParent: fillParent,
    });

    const wav = song.mp3_url;

    wavesurfer.current.load(wav);

    wavesurfer.current.on('ready', () => {
      setDuration(wavesurfer.current.getDuration());
      setIsPlayerReady(true);
    });

    wavesurfer.current.on('loading', () => {
      setIsPlayerReady(false);
    });

    const handleResize = wavesurfer.current.util.debounce(() => {
      wavesurfer.current.empty();
      wavesurfer.current.drawBuffer();
    }, 150);

    wavesurfer.current.on('play', handleOnPlay);
    wavesurfer.current.on('pause', handleOnPause);
    window.addEventListener('resize', handleResize, false);
    return () => wavesurfer?.current?.destroy();
  }, []);

  function handleOnPlay() {
    setIsPlaying(true);
    handleChangeCurrentSong(song.id);
  }

  function handleOnPause() {
    setIsPlaying(false);
  }

  const togglePlayback = () => {
    if (!isPlaying) {
      wavesurfer.current.play();
    } else {
      wavesurfer.current.pause();
    }
  };

  useEffect(() => {
    if (idCurrentSong !== song.id) {
      wavesurfer.current.pause();
    }
  }, [idCurrentSong]);

  return (
    <StyledSongItemWaveForm>
      {/* <Skeleton loading={!isPlayerReady}></Skeleton> */}
      <Row
        align='middle'
        gutter={20}
        style={{ visibility: isPlayerReady ? 'visible' : 'hidden' }}
      >
        <Col flex='100px'>
          <StyledSongItemPlayback
            onClick={togglePlayback}
            icon={isPlaying ? <FaPause /> : <FaPlay />}
          />
        </Col>
        <Col flex='auto'>
          <div ref={wavesurfer} id={wavesurferId} />
        </Col>
        <Col flex='80px'>
          <StyledSongItemDuration>
            {convertSecondsToTime(duration)}
          </StyledSongItemDuration>
        </Col>
      </Row>
    </StyledSongItemWaveForm>
  );
};

export default WaveForm;

WaveForm.propTypes = {
  song: PropTypes.object,
  waveHeight: PropTypes.number,
  waveColor: PropTypes.string,
  waveProgressColor: PropTypes.string,
  responsive: PropTypes.bool,
  fillParent: PropTypes.bool,
  waveCursorColor: PropTypes.string,
  waveCursorWidth: PropTypes.number,
  barWidth: PropTypes.number,
};

WaveForm.defaultProps = {
  song: {},
  waveHeight: 40,
  waveColor: '#c7c7c9',
  waveProgressColor: 'tomato',
  responsive: true,
  fillParent: true,
  waveCursorColor: 'lightgray',
  waveCursorWidth: 1,
  barWidth: 0,
};
