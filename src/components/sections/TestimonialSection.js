import React from "react";
import styled, { keyframes } from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "../../data/testimonialData";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <CarouselSlide key={index} >
            <QuoteContainer>
            <Quote dangerouslySetInnerHTML={{ __html: testimonial.quote }} />
              <MetaWrapper>
                <Avatar><img src={testimonial.avatar} alt={testimonial.business} /></Avatar>
                <Business>{testimonial.business}</Business> | 
                <Trade>{testimonial.trade}</Trade>
              </MetaWrapper>
            </QuoteContainer>
            <Video>
              <video controls>
                <source src={testimonial.videoUrl} type="video/mp4" />
              </video>
            </Video>
          </CarouselSlide>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;

const CarouselWrapper = styled.div`
  max-width: 1234px;
  margin: 0px auto;
  padding: 100px 0px;
`;

const CarouselSlide = styled.div`
  display: flex !important;
  align-items: center;
  padding: 0px 64px;

  @media (max-width: 768px) {
    flex-direction: column;
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
  
`;

const MetaWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-weight: 500;
  line-height: 21px;
  color: #FFFFFF;
`

const Avatar = styled.div`
  display: block;

  img{
    width: 30px;
    height: 30px;
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

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;
