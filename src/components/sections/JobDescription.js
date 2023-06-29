import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout/layout'
import styled, { keyframes } from "styled-components";
import ApplyButton from "../buttons/ApplyButton"
import { H2, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";

const JobDescription = ({ pageContext }) => {
  const { id, icon, title, location, description, subtitleOne, headingOne, bulletListOne, headingTwo, bulletListTwo, headingThree, bulletListThree, conclusion } = pageContext;

  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
         <HeaderWrapper>
          <BackLink to={`/careers`}>
              {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
              Back to listings
            </BackLink>
          <h3>{title}</h3>
          <span>{location}</span>
          <a href={`mailto:sajith@gotradie.com.au?subject=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer">
              <ApplyButton title="Apply now" />
          </a>
         </HeaderWrapper>
         <JobBody>
          <AboutSection>
            <h2>{subtitleOne}</h2>
            <p>{description}</p>
          </AboutSection>
          <BulletSection>
            <h4>{headingOne}</h4>
            <Highlights dangerouslySetInnerHTML={{ __html: bulletListOne }} />
          </BulletSection>
          <BulletSection>
            <h4>{headingTwo}</h4>
            <Highlights dangerouslySetInnerHTML={{ __html: bulletListTwo }} />
          </BulletSection> 
          <BulletSection>
            <h4>{headingThree}</h4>
            <Highlights dangerouslySetInnerHTML={{ __html: bulletListThree }} />
          </BulletSection> 
          <ConclusionSection>
            <p>{conclusion}</p>
          </ConclusionSection>
          <ButtonWrapper>
          <a href={`mailto:sajith@gotradie.com.au?subject=${encodeURIComponent(title)}`} target="_blank" rel="noreferrer">
              <ApplyButton title="Apply now" />
          </a>
          <TextLink>
          <Link to={`/careers`}>Back</Link>
          </TextLink>
           </ButtonWrapper>
          </JobBody>   
            
        </ContentWrapper>
      </Wrapper>
    </Layout>
   
  );
};

export default JobDescription;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  //80% { opacity: 0.5; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  //background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: visible;
`
const ContentWrapper = styled.div`
max-width: 960px;
margin: 0 auto;
padding: 120px 0px 340px 0px;
display: block;
gap: 48px;

> * {
  opacity: 0;
  animation: ${animation} 1s forwards;

  :nth-child(1) {
    animation-delay: 0.s;
  }
}

@media (max-width: 1354px) {
  max-width: 640px;
  margin: 0 auto;
  padding: 120px 0px 340px 0px;
  display: block;
  gap: 48px;
}

@media (max-width: 480px) {
  max-width: 345px;
  margin: 0 auto;
  padding: 120px 0px 340px 0px;
  display: block;
  gap: 48px;
}
`

const Highlights = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  ul {
    list-style-type: disc; /* Set the list-style-type property to display disc bullets */
    padding-left: 24px;
    color: var(--concrete, #E1E9EF);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 161%;
  }

  li {
    margin-bottom: 0.5rem; /* Add some vertical spacing between the list items */
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  padding: 0px 54px 32px 54px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;

  h3 {
    color: var(--white, #FFF);
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.48px;
  }
  
  p{
    color: var(--white, #FFF);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 140%;
  }
  span{
    color: var(--white, #789BB6);
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 13px;
  }

  @media (max-width: 1354px) {
    width: 100%;
    padding: 0px;
    margin-top: 60px;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 0px;
    margin-top: 60px;
  }
`

const JobBody = styled.div`
    display: flex;
    width: 960px;
    padding: 54px;
    flex-direction: column;
    border-radius: 16px;
    background: var(--blue-collar, #153549);

    @media (max-width: 1354px) {
      width: 100%;
      padding: 32px;
    }
    
    @media (max-width: 480px) {
      width: 100%;
      padding: 24px;
    }
`

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 32px 0px;
  flex: 1 0 0;

  h2{
    color: var(--white, #FFF);
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.48px;
  }
  p{
    color: var(--white, #FFF);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 140%;
  }
`

const BulletSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 0px 0px 32px 0px;
    flex: 1 0 0;

    h4{
      color: var(--white, #FFF);
      font-size: 15px;
      font-family: Montserrat;
      font-weight: 600;
    }
`
const ConclusionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 32px 0px;
  flex: 1 0 0;

  h2{
    color: var(--white, #FFF);
    font-size: 24px;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: -0.48px;
  }
  p{
    color: var(--white, #FFF);
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 140%;
  }
`

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
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-top: 8px;

  @media (max-width: 1354px) {
    padding: 0px;
    display: block;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    padding: 0px;
    display: block;
    width: 100%;
  }
  
`

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #E8B247;

  svg {
    margin-right: 0.5rem;
  }
`

const TextLink = styled.div`
  display: flex;
  justify-content: center;
`

