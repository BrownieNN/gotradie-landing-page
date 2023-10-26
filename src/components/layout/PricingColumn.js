import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { SmallText } from "../styles/TextStyles"
import { priceData } from "../../data/pricingData"
import GetStarted from "../buttons/GetStarted"
import Tooltip from "./ToolTips"

export default function PricingColumn(props) {
  const { item, isYearly, isFirstColumn, isLastColumn, url, highlight } = props; // Destructure isFirstColumn, isLastColumn, and url
  const priceInt = item.price === "Contact us" ? "Contact us" : parseInt(item.price.slice(1)); // Remove the "$" sign before parsing
  const discountedPrice = isYearly ? Math.round(priceInt * 0.8) : priceInt; // Calculate the discounted price here
  
  const getStartedText = isFirstColumn ? "Try for Free" : isLastColumn ? "Email us" : "Try for free"; // Define the text for the "Get Started" button

  // Add state and event handlers for the tooltip
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [tooltipContent, setTooltipContent] = useState(null);

  // Event handler for showing/hiding the tooltip
const handleFrequencyClick = (event) => {
  const { top, left, height } = event.target.getBoundingClientRect();
  setIsTooltipVisible((prevState) => !prevState);
  // Calculate the position of the tooltip above the frequency text
  // setTooltipPosition({ top: top - height, left: left });
  // Retrieve the tooltip content from the priceData
  const index = priceData.findIndex((item) => item.frequency === event.target.textContent);
  if (index !== -1) {
    setTooltipContent(priceData[index]);
  }
};


  return (
    <PriceColumn title={item.tile} highlight={highlight} color="#FFFFFF">
      {/* <img src={item.icon} alt={item.title} /> */}
      <TextWrapper>
        {/* <OfferLosenge>{item.offer}</OfferLosenge> */}
        <TradeTitle>{item.title}</TradeTitle>
        <PriceWrapper>
          {item.price === "Contact us" ? (
            <Price>{item.price}</Price>
          ) : (
            <>
              <Price>${discountedPrice}</Price> / 
              <Frequency onClick={handleFrequencyClick}>{item.frequency}</Frequency>
              <InfoIcon><img src="/images/icons/Info.svg"/></InfoIcon>
              {tooltipContent && (
                <Tooltip
                  isVisible={isTooltipVisible}
                  content={
                    <ToolTipWrapper highlight={highlight}>
                      {tooltipContent.tooltipImage && (
                        <img src={tooltipContent.tooltipImage} alt={tooltipContent.tooltipHeadline} />
                      )}
                      <ToolTipText>
                        <h3>{tooltipContent.tooltipHeadline}</h3>
                        <p>{tooltipContent.tooltipText}</p>
                      </ToolTipText>
                    </ToolTipWrapper>
                  }
                  position={tooltipPosition}
                  onClose={() => setIsTooltipVisible(false)} // Close the tooltip when the close icon is clicked
                  highlight={highlight} // Pass the highlight prop to the Tooltip
                />
                )}
            </>
          )}
       </PriceWrapper>
        <Description>{item.description}</Description>       
        <Size>{item.size}</Size>
        <GetStarted title={getStartedText} url={url} />
      </TextWrapper>
      <BreakLine>What's included</BreakLine>
      <BulletList>
        <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon><p>{item.benefitOne}</p></Bullet>
        <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon> <p>{item.benefitTwo}</p></Bullet>
        <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon> <p>{item.benefitThree}</p></Bullet>
        <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon> <p>{item.benefitFour}</p></Bullet>
        <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon> <p>{item.benefitFive}</p></Bullet>
        <BreakLine>Account support</BreakLine>
        <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon> <p>{item.benefitSix}</p></Bullet>
        {item.benefitSeven ? <Bullet><EmojiIcon><img src="/images/icons/verified.svg"/></EmojiIcon><p>{item.benefitSeven}</p></Bullet> : null}
      </BulletList>
    </PriceColumn>
  )
}

const PriceColumn = styled.div`
  position: relative;
  border-radius: 10.315px;
  border: 1.289px solid var(--slate, #789BB6);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 21.918838500976562px 25.7868709564209px -16.76146697998047px rgba(0, 0, 0, 0.00);
  backdrop-filter: blur(3.2233588695526123px);
  display: block;
  height: 620px;
  margin-right: 16px;
  padding: 54px 32px;
  color: #FFFFFF;


  img {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 24px;
    height: 24px;

    svg {
      fill: ${props => props.color || 'currentColor'}; /* Set the SVG fill color from the color prop */
    }
  }

  @media (max-width: 1024px) {
    margin-right: 16px;
    margin-left: 16px;
    margin-top: 24px;
  }

  @media (max-width: 768px) {
    margin-right: 16px;
    margin-left: 16px;
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    margin-right: 16px;
    margin-left: 16px;
    margin-top: 24px;

    ${(props) =>
      props.highlight &&
      `
      transform: translateY(-8px);
  
      .icon {
        transform: translateX(1px);
      }
    `}
  }
  
  /* Add custom styles to highlight the preferred choice */
  ${(props) =>
    props.highlight &&
    `
    border: 2px solid var(--slate, #54C5C0);
    background: rgba(255, 255, 255, 0.10);
    box-shadow: 0px 21.918838500976562px 25.7868709564209px -16.76146697998047px rgba(0, 0, 0, 0.00);
    backdrop-filter: blur(3.2233588695526123px);
    color: #FFFFFF;
    transform: translateY(-16px);

    .icon {
      transform: translateX(1px);
    }
  `}
`

const TextWrapper = styled.div`
  position: relative;
  display: block;
  height: auto;
  margin-bottom: 32px;
`
const OfferLosenge = styled.div`
  background: #789BB6;
  border-radius: 100px;
  display: block;
  padding: 8px 16px 9px 16px;
  text-align: center;
  font-size: 10px;
  width: 132px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
}
`

const TradeTitle = styled(SmallText)`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 145.833% */
  margin-bottom: 8px;
  color #FFFFFF;
`

const EmojiIcon = styled(SmallText)`
  display: block;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 145.833% */
  padding-right: 8px;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`

const Description = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`

const PriceWrapper = styled.div`
 display: flex;
 width: 100%;
 align-items: baseline;
 margin-bottom: 16px;
`

const Price = styled.div`
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  display: inline-block; /* Add this line to ensure the width adjusts */
`

const Frequency = styled.div`
position: relative;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 18px; /* 110% */
cursor: pointer;
text-decoration: underline;
`

const InfoIcon = styled.div`
position: relative;
display block;
width: 10px;
height: 10px;
cursor: pointer;
margin-left: 4px;

img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 10px;
  height: 10px;
}
`
const BulletList = styled.div`
`
const Bullet = styled.div`
position: relative;
display: flex;
align-items: center;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 111.111% */
margin-bottom: 16px;

p{

}

img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 16px;
  height: 16px;
}
`
const Size = styled.div`
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 111.111% */
margin-bottom: 24px;
`
const BreakLine = styled.div`
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 111.111% */
margin-bottom: 16px;
text-transform: uppercase;
letter-spacing: 0.5px;
`

const ToolTipWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 16px;
  border-radius: 8px;
  width: 227px;
  height: 100px;
  background: #FFFFFF;
  border: 1px solid #789BB6;
  background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.4);

  ${(props) =>
    props.highlight &&`
    position: absolute;
    top: 16px;
  `}
  
  img{
    width: 225px !important;
    height: 98px !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    border-radius: 7px !important;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 120px;

    img{
      width: 100% !important;
      height: 118px !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      border-radius: 7px !important;
    }
  }
`

const ToolTipText = styled.div`
  display: block;

  h3{
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 111.111% */
    color: #0F2028;
    margin-bottom: 4px;
  }
  p{
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 111.111% */
    color: #0F2028;
  }
`