// Lozenge.js
import React from 'react';
import styled from 'styled-components';

const LosengeButton = styled.a`
cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background-color: #54C5C0;
  color: white;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #789BB6;
  }
`;

// const losenge = ({ label, anchorLink }) => (
    
//   <LosengeButton href={anchorLink}>
//     {label}
//   </LosengeButton>
// );


const Losenge = ({ label, anchorLink }) => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(anchorLink);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <LosengeButton href={anchorLink} onClick={handleClick}>
        {label}
      </LosengeButton>
    );
  };

export default Losenge;
