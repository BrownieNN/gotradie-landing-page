import React, { useState, useEffect, useRef } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "../../data/testimonialData";

const TestimonialCarousel = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility for the fade-in effect
  const sectionRef = useRef(null); // Ref for the section to observe

  const handleVideoPlay = (index) => {
    setActiveSlide(index); // Set the currently active video index
  };
  
  const [activeSlide, setActiveSlide] = useState(0); // state to keep track of the active slide index

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    afterChange: current => setActiveSlide(current), // update active slide index after change
  };

  // Set up the intersection observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Only one entry is observed: the sectionRef current element.
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility state to true when the section is intersecting the viewport
          // If you only want the animation to occur once, disconnect the observer after this
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger the callback when the section is at least 10% visible in the viewport
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  return (
    <Section ref={sectionRef} isVisible={isVisible}>
    <CarouselWrapper>
      <CarouselSlider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <CarouselSlide key={index} >
            <QuoteContainer>
            <Quote dangerouslySetInnerHTML={{ __html: testimonial.quote }} />
              <MetaWrapper>
                <Avatar><img src={testimonial.avatar} alt={testimonial.business} /></Avatar>
                <Business>{testimonial.business}</Business>
                <Trade>{testimonial.trade}</Trade>
              </MetaWrapper>
            </QuoteContainer>
            <VideoWrapper>
            <Video isActive={index === activeSlide}>
               {/* Assign a key using the activeSlide state to force remount when slide changes */}
               <video
                key={activeSlide === index ? 'playing' : 'paused'} // toggle key based on activeSlide
                controls
                poster={testimonial.thumbnail}
              >
                <source src={testimonial.videoUrl} type="video/mp4" />
              </video>
            </Video>
            </VideoWrapper>
          </CarouselSlide>
        ))}
      </CarouselSlider>
    </CarouselWrapper>
    </Section>
  );
};

export default TestimonialCarousel;

// Styled component for the section
const Section = styled.section`
transition: opacity 0.6s ease-out, transform 0.6s ease-out;
opacity: 0;
transform: translateY(20px);
visibility: hidden;

// When isVisible is true, apply the styles for the visible state
${({ isVisible }) =>
  isVisible &&
  css`
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;
  `}
`;

const CarouselWrapper = styled.div`
  max-width: 1234px;
  margin: 0px auto;
  padding: 100px 0px;

  @media (max-width: 768px) {
    max-width: 345px;
    height: auto;
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
  
`;

const CarouselSlide = styled.div`
  display: flex !important;
  align-items: center;
  padding: 0px 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0px 0px;
    height: auto;
  }
`;

const QuoteContainer = styled.div`
  flex: 1;
`

const Quote = styled.div`
  text-align: left;
  margin-right: 64px;
  margin-bottom: 24px;
  font-size: 45px;
  font-weight: 600;
  line-height: 50px;
  color: #FFFFFF;
  word-wrap: break-word; /* To handle long lines of text */

  .highlight {
    background: linear-gradient(90deg, #54C5C0 0%, #789BB6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
    margin: 24px 0px;
    text-align: center;
  }
  
`;

const MetaWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  line-height: 21px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    display: grid;
    gap: 4px;
    justify-content: center;
    text-align: center;

  }
`

const Avatar = styled.div`
  display: block;

  img{
    width: 30px;
    height: 30px;
    margin: auto
  }
`

const Business = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: #FFFFFF;
`

const Trade = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: #FFFFFF;
`

const Video = styled.div`
  flex: 1;
  max-width: 280px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  opacity: ${({ isActive }) => isActive ? 1 : 0};
  visibility: ${({ isActive }) => isActive ? 'visible' : 'hidden'};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 74%;
    margin-top: 16px;
  }
`;

const VideoWrapper = styled.div`
  width: 280px;
  height: 497px;
  
  @media (max-width: 768px) {
    width: 320px;
    height: 450px;
  }
}
`;

const CarouselSlider = styled(Slider)`
  @media (min-width: 769px) { // This makes Slider only effective on mobile
    // display: none;
  }

  .slick-slide {
    padding: 0 0px; // Add padding to handle slick slider's "edge" effect if needed
  }
  .slick-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding-top: 32px;
    margin: 0;
    z-index: 0;
    li {
      margin: 0 4px; /* Adjust the spacing between dots */
      button {
        width: 12px; /* Adjust the dot size */
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5); /* Dot color */
        &::before {
          display: none; /* Hide the inner dot */
        }
        &:hover {
          background: rgba(255, 255, 255, 0.8); /* Hover color */
        }
      }
      &.slick-active {
        button {
          background: #54C5C0; /* Active dot color */
          width: 14px; /* Active dot size */
          height: 14px;
        }
      }
    }
  }
`;