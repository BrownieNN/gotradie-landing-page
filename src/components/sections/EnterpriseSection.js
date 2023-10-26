import React from 'react';
import styled from 'styled-components';
import GetStarted from "../buttons/GetStarted"

const ContactSalesBanner = ({ onClick }) => (
  <Container>
    <InnerContainer>
    <Heading>More than 20+ team members?</Heading>
    <Text>
      Transparent, flexible, based on active price per seat.
      Get in touch with our sales team who'll be happy to help you out.
    </Text>
    </InnerContainer>
    <GetStarted title="Contact sales" url="https://calendly.com/adamfazzani_gotradie/30min" />
  </Container>
);

export default ContactSalesBanner;

const Container = styled.div`
    max-width: 1024px;
    margin: 32px auto;
  padding: 48px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 150px;
  background-color: #FFFFFF;
  align-items: center;

  @media (max-width: 1354px) {
    max-width: 1024px;
    display: block;
    gap: 24px;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin: 0px auto;
    display: block;
    max-width: 345px;
    padding: 32px 24px;
  }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

const Heading = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
`;

const Text = styled.p`
  text-align: left;
  font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;

@media (max-width: 1354px) {
    text-align: center;
    padding-bottom: 16px;
}

@media (max-width: 480px) {
    text-align: center;
    padding-bottom: 16px;
  }
`;

const Button = styled.button`
width: 100%;
  padding: 16px 24px;
  background-color: #54C5C0;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #54C5C0;
  }
`;

// Usage example:
// <ContactSalesBanner onClick={() => window.location.href = 'https://example.com/contact-sales'} />
