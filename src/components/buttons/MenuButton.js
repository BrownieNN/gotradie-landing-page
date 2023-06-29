import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

export default function MenuButton(props) {
  const { item, onClick } = props;

  const handleItemClick = (event) => {
    if (item.link.startsWith("mailto:")) {
      window.location.href = item.link;
    } else {
      onClick(event);
    }
    event.preventDefault(); 
  };

  return (
    <LinkWrapper to={item.link} onClick={handleItemClick}>
      <MenuItem title={item.title} showBackground={item.showInHeader}>
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)`
  transition: 0.5s ease-out;
  border-radius: 10px;
  /* Apply hover styles to the Link component */
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.4);
  }
`

const MenuItem = styled.div`
  color: rgba(255, 255, 255);
  display: flex;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 16px 24px;
  border-radius: 10px;

  /* Apply background color only if showBackground is true */
  ${props =>
    props.showBackground &&
    css`
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    `}

  img {
    display: none;
  }

  @media (max-width: 768px) {
    box-shadow: none;
    background: none;
    padding: 10px;
    img {
      display: block;
    }
  }
}`
