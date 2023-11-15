import React, { useEffect, useRef, useState } from "react"
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { menuTrade } from "../../data/menuTrade";

export default function MenuButton(props) {
  const { item, onClick } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef()
  const dropdownRef = useRef()

  const handleItemClick = (event) => {
    if (item.link.startsWith("mailto:")) {
      window.location.href = item.link;
    } else {
      onClick(event);
    }
    event.preventDefault();
  };

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !dropdownRef.current.contains(event.target)
    ) {
      console.log("Document is clicked")
      setIsDropdownOpen(false)
    }
  }

  const toggleDropdown = () => {
    if (item.title === "Who's it for") {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  return (
    <LinkWrapper to={item.link} onClick={handleItemClick}>
      <MenuItem
        showBackground={item.showBackground}
        onClick={toggleDropdown}
      >
        <img src={item.icon} alt={item.title} />
        {item.title}
      </MenuItem>
      {isDropdownOpen && item.title === "Who's it for" && (
        <div ref={dropdownRef}>
        <Dropdown>
          {menuTrade.map((dropdownItem, index) => (
            <DropdownItem key={index} to={dropdownItem.link}>
              <ItemWrapper>
                <span>{dropdownItem.emoji}</span>
                <h3>{dropdownItem.title}</h3>
              </ItemWrapper>
            </DropdownItem>
          ))}
        </Dropdown>
        </div>
      )}
    </LinkWrapper>
  );
}

const LinkWrapper = styled(Link)`
  transition: 0.5s ease-out;
  border-radius: 10px;
  cursor: pointer;
  /* Apply hover styles to the Link component */
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.4);
  }
`
// Inside MenuButton.js (add at the bottom of the file)

const Dropdown = styled.div`
    position: absolute;
    padding: 20px;
    top: 80px;
    right: 564px;
    background: rgba(15, 14, 71, 0.3);
    box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px); /* Safari */
    -moz-backdrop-filter: blur(40px); /* Firefox */
    -ms-backdrop-filter: blur(40px); /* Edge */
    border-radius: 20px;
    z-index: 10;
    display: grid;
    gap: 10px;
    columns: 3 auto;
    grid-template-columns: repeat(3, auto);
`;

const ItemWrapper = styled.div`
width: 100%;
display: flex;
span {
  margin-right: 8px;
}
`

const DropdownItem = styled(Link)`
  color: white;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
  }
`;


const MenuItem = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255);
  display: flex;
  grid-template-columns: 24px auto;
  gap: ${props => (props.title ? "10px" : "8px")};
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
    width: 16px;
    height: 16px;
  }

  @media (max-width: 1024px) {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    padding: 10px;
    ${props =>
      props.showBackground &&
      css`
        background: none;
        border: none;
        box-shadow: none;
      `}
    img {
      display: block;
    }
  }
}`
