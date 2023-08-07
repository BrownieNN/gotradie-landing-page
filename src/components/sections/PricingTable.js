import React, { useState } from "react";
import styled, { keyframes } from "styled-components"
import { H2, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import { priceData } from "../../data/pricingData";
import PricingColumn from "../layout/PricingColumn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PricingTable() {
  const desktopColumns = 4;
  const mobileColumns = 1;

  // Add the state and toggle function
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prevValue) => !prevValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: desktopColumns,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 2, // Show 2 slides at a time for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: mobileColumns, // Show 1 slide at a time for even smaller screens
          arrows: false,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <TextWrapper>
      <Title>A fair go <span>for all businesses</span></Title>
          <Body>
            No nonense pricing, start for free no credit card needed 
          </Body>
          <ToggleWrapper>
        <ToggleLabel onClick={handleToggle} isActive={!isYearly}>
          Monthly
        </ToggleLabel>
        <ToggleLabel onClick={handleToggle} isActive={isYearly}>
          Yearly
        </ToggleLabel>
      </ToggleWrapper>
      </TextWrapper>
      <Slider {...settings}>
        {priceData.map((item, index) => (
          <PricingColumn
            item={{ ...item, isYearly }}
            key={index}
            isYearly={isYearly} // Pass the isYearly state to PricingColumn
            isFirstColumn={index === 0} // Check if it's the first column
            isLastColumn={index === priceData.length - 1} // Check if it's the last column
            url={item.url} // Pass the URL as a prop
            highlight={index === 1} // Highlight the third column (index 2)
            
          />
        ))}
      </Slider>
    </Wrapper>
  );
}

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  display: block;
  max-width: 1234px;
  margin: auto;

  @media (max-width: 1354px) {
  }

  @media (max-width: 480px) {
    width: 345px;
    padding: 24px 0px 45px 0px;
  }
  .slick-list{
    overflow: visible;
  }
`;

const TextWrapper = styled.div`
  max-width: 954px;
  display: grid;
  padding-top: 60px;
  gap: 24px;
  margin: auto;
  margin-bottom: 24px;

  @media (max-width: 1354px) {
    max-width: 588px;
  }

  @media (max-width: 480px) {
    max-width: 345px;
    justify-content: center;
    text-align: center;
    padding: 0 8px;
  }

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const ToggleLabel = styled.div`
  background: ${(props) => (props.isActive ? "#54C5C0" : "rgba(255, 255, 255, 0.05)")};
  border: ${(props) => (props.isActive ? "1px solid #54C5C0" : "1px solid #FFFFFF)")};
  padding: 8px 16px;
  width: 150px;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  color: #FFFFFF;
`;

const Title = styled(H2)`
  color: ${themes.dark.text1};
  text-align: center;
  span {
    background: linear-gradient(90deg, #54C5C0 0%, #789BB6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 40px;
    text-align: center;
  }
`
const Body = styled(MediumText)`
  text-align: center;
  color: ${themes.dark.text1};
  max-width: 780px;
  margin: auto;
`
