import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled, { css, keyframes } from 'styled-components';
import '../layout/plyr.css';
import 'plyr/dist/plyr.css';

const VideoSection = () => {
  const videoRef = useRef(null);
  const thumbnailRef = useRef(null);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const initializePlayer = async () => {
      const Plyr = (await import('plyr')).default;
      const player = new Plyr(videoRef.current, {
        controls: ['play', 'progress', 'fullscreen'],
        autoplay: false,
        hideControls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestBranding: 1,
        },
      });

      Array.from(document.querySelectorAll('.js-player')).map(p => new Plyr(p));

      playerRef.current = player;

      player.on('play', () => {
        setShowThumbnail(false);
        setIsVideoPlaying(true);
        setIsBlurred(true);
        handleScrollLock(true);
      });

      player.on('pause', () => {
        setIsVideoPlaying(false);
        handleScrollLock(false);
      });

      return () => {
        if (player) {
          player.destroy();
        }
      };
    };

    initializePlayer();
  }, []);

  const handleScrollLock = useCallback((lock) => {
    if (typeof document !== 'undefined') {
      const body = document.body;
      if (lock) {
        body.classList.add('scroll-lock');
      } else {
        body.classList.remove('scroll-lock');
      }
    }
  }, []);

  const handleThumbnailClick = () => {
    setShowThumbnail(false);
    playerRef.current.play();
  };

  const handleUnblur = () => {
    setIsBlurred(false);
    playerRef.current.pause();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target) && isVideoPlaying) {
        handleUnblur();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isVideoPlaying]);

  const renderPlyrComponent = () => {
    const isSSR = typeof window === 'undefined';
    if (isSSR) return null;

    const Plyr = require('plyr');
    return <VideoWrapper data-plyr-provider="youtube" data-plyr-embed-id="QIA0bh9AA8M" ref={videoRef}></VideoWrapper>;
  };

  return (
    <ContentWrapper isVideoPlaying={isVideoPlaying}>
      {showThumbnail && (
        <ThumbnailWrapper onClick={handleThumbnailClick} ref={thumbnailRef}>
          <img src="/images/Video/promo-thumb.png" alt="Thumbnail" className="thumbnail-image" />
          <Overlay>
            <PlayButton>
              <PlayIcon />
            </PlayButton>
          </Overlay>
        </ThumbnailWrapper>
      )}
      {renderPlyrComponent()}
      {isBlurred && <Overlay onClick={handleUnblur} />}
    </ContentWrapper>
  );
};

export default VideoSection;


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const blurIn = keyframes`
  from {
    backdrop-filter: blur(0);
  }
  to {
    backdrop-filter: blur(10px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9999999999; /* Update z-index to make it appear above the video */
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
  transition: opacity 0.2s ease-in-out;
  z-index: 99999999;

  &:hover {
    opacity: 0.7;
  }
`;

const PlayIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 16px 0 16px 26px;
  border-color: transparent transparent transparent #fff;
  z-index: 99999998;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 99999997;

  img {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1234px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 24px rgba(84, 197, 192, 0.5);

  @media (max-width: 1354px) {
    margin: 0px 24px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    margin: 0px 24px;
    border-radius: 8px;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  ${({ isVideoPlaying }) =>
    isVideoPlaying &&
    css`
      &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.3);
        animation: ${fadeIn} 0.3s forwards;
      }

      &::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        backdrop-filter: blur(8px);
        animation: ${blurIn} 0.3s forwards;
      }
    `}

  .scroll-lock {
    overflow: hidden;
  }

  ${ThumbnailWrapper} {
    z-index: ${({ isVideoPlaying }) => (isVideoPlaying ? 0 : 99999997)};
    width: 100%;
    height: auto;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
  }

  // ${Overlay} {
  //   display: ${({ isVideoPlaying }) => (isVideoPlaying ? 0 : 99999998)};
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: #ffffff;
  // }

  ${PlayButton} {
    z-index: ${({ isVideoPlaying }) => (isVideoPlaying ? 0 : 99999998)};
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
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.7;
  }
  }

  ${PlayIcon} {
    z-index: ${({ isVideoPlaying }) => (isVideoPlaying ? 0 : 99999999)};
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 16px 0 16px 26px;
    border-color: transparent transparent transparent #fff;
  }
`;

const VideoWrapper = styled.div`
  border: 2px; solid #789BB6
`;