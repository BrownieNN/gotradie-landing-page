import React from 'react';
import styled from 'styled-components';

const FeaturesSection = () => (
  <Container>
    <Heading>Included across all packages</Heading>
    <FeaturesGrid>
      <Feature>
        <Icon><img src="/images/icons/desktop.svg" title="desktop"/></Icon>
        <FeatureTitle>Web app access</FeatureTitle>
        <FeatureText>
          All your content seamlessly synced across mobile and desktop for the whole team to use
        </FeatureText>
      </Feature>
      <Feature>
        <Icon><img src="/images/icons/lock-fill.svg" title="secure"/></Icon>
        <FeatureTitle>Secure cloud storage</FeatureTitle>
        <FeatureText>
          Never lose content! Photos, videos, documents, messages and more stored in the cloud and not on device
        </FeatureText>
      </Feature>
      <Feature>
        <Icon><img src="/images/icons/search.svg" title="directory"/></Icon>
        <FeatureTitle>Directory listing</FeatureTitle>
        <FeatureText>
          Be found on GoTradie by other businesses on the app and grow your subbie network
        </FeatureText>
      </Feature>
    </FeaturesGrid>
  </Container>
);

export default FeaturesSection;

const Container = styled.div`
max-width: 1024px;
  padding: 24px 0px;
  text-align: center;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1354px) {
    max-width: 1024px;
    display: block;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 48px 0px;
  }
`;

const Heading = styled.h1`
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 39px;
letter-spacing: -0.32px;
  margin-bottom: 48px;
  color: #FFFFFF;

  @media (max-width: 480px) {
    margin-bottom: 24px;
  }
`;



const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media (max-width: 1354px) {
    max-width: 1024px;
    display: block;
  }

  @media (max-width: 480px) {
    margin: 0px auto;
    display: block;
    max-width: 345px;
  }
`;

const Feature = styled.div`

@media (max-width: 480px) {
  padding-bottom: 32px;
}
`;

const FeatureTitle = styled.h2`
text-align: center;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 33.6px;
padding-bottom: 16px;

background: var(--Gradientt-text, linear-gradient(90deg, #54C5C0 0%, #789BB6 100%));
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

const FeatureText = styled.p`
font-size: 14px;
font-style: normal;
font-weight: 500;
text-align: center;
line-height: 21px; /* 150% */
color: white;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  img{
    width: 24px;
    height: 24px;
    display: block;
  }
`;
