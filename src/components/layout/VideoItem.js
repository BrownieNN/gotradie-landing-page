import React, { useRef, useState, useEffect } from 'react';
import Plyr from 'plyr';
import Slider from 'react-slick';
import 'plyr/dist/plyr.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled, { keyframes } from "styled-components"

const VideoItem = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [coverVisible, setCoverVisible] = useState(true);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      controls: ['play', 'progress', 'fullscreen'],
    });

    player.on('play', () => {
      setIsPlaying(true);
      setCoverVisible(false);
    });

    player.on('pause', () => {
      setIsPlaying(false);
    });

    playerRef.current = player;

    return () => {
      player.destroy();
    };
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
  };

  return (
    <VideoWrapper>
      <CoverImage visible={coverVisible} onClick={handleClick}>
        <PlayButton>
          <PlayIcon />
        </PlayButton>
      </CoverImage>
      <video ref={videoRef}>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </VideoWrapper>
  );
};

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 177.77%; /* 9:16 aspect ratio */
`;

const CoverImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/meta/website-meta-builders.png');
  background-size: cover;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 16px 0 16px 26px;
  border-color: transparent transparent transparent #fff;
`;

export default VideoItem;
