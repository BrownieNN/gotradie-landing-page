import React, { useState } from "react";
import styled from "styled-components";
import { tooltipData } from "../../data/menuData";
import MenuButton from "../buttons/MenuButton";
import { Link } from "gatsby";


export default function MenuTooltip(props) {
  const { isOpen } = props;
  const [isSubLinksOpen, setIsSubLinksOpen] = useState(false);

  const handleSubLinksToggle = () => {
    setIsSubLinksOpen(!isSubLinksOpen);
  };

  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) =>
        item.title === "Who's it for" ? (
          <LinkWrapper onClick={handleSubLinksToggle} key={index}>
            <MenuButton item={item} />
            {/* {item.subLinks && item.subLinks.length > 0 && (
                <ArrowIcon>
                  {isSubLinksOpen ? "▲" : "▼"}
                </ArrowIcon>
              )} */}
            {isSubLinksOpen && (
              <SubLinksWrapper>
                {item.subLinks.map((subLink, subIndex) => (
                  <SubLink key={subIndex} to={subLink.link}>
                    <span>{subLink.emoji}</span>
                    <h3>{subLink.title}</h3>
                  </SubLink>
                ))}
              </SubLinksWrapper>
            )}
          </LinkWrapper>
        ) : (
          <MenuButton item={item} key={index} />
        )
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
  inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px); /* Safari */
  -moz-backdrop-filter: blur(40px); /* Firefox */
  -ms-backdrop-filter: blur(40px); /* Edge */
  /* Note: backdrop-filter has minimal browser support */
  width: 280px;
  border-radius: 20px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  z-index: 99999999999;
  display: grid;
  gap: 10px;
  grid-template-columns: 100%;
  transition: 0.3s ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transform: ${props =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`

const LinkWrapper = styled.div`
    display: inline-block;`

const SubLinksWrapper = styled.div`
  display: block;
  margin-top: 10px;
  margin-left: 8px;
`;

const SubLink = styled(Link)`
  display: flex;
  color: white;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 16px;
  transition: color 0.3s ease-in-out;

  h3{
    font-size: 12px;
    font-weight: 500;
  }
  
  span {
    margin-right: 8px;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SubLinksToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  padding: 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ArrowIcon = styled.span`
  font-size: 10px;
  color: #FFFFFF;
]`;

