import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from "styled-components";
import ApplyButton from "../components/buttons/ApplyButton"
import { H2, MediumText } from "../components/styles/TextStyles";
import { themes } from "../components/styles/ColorStyles";
import jobs from '../data/jobs';
import Layout from '../components/layout/layout';

const JobListings = () => {
  return (
    <Layout>
    <Wrapper>
      <ContentWrapper>
      <TextWrapper>
          <Title>Ready to get your hands dirty?</Title>
          <Body>
            Join our product-led team at one of Australia's fastest growing trade and construction startups 👍
          </Body>
      </TextWrapper>
      <JobList>
      {jobs.map((job) => (
          <JobTile key={job.id}>
            <InnerContainer>
              <img src={job.icon} />
              <InnerHeader>
                <h3>{job.title}</h3>
                <span>{job.location}</span>
              </InnerHeader>
            </InnerContainer>
           <p>{job.description}</p>
           <ButtonWrapper>
            <a href={`mailto:sajith@gotradie.com.au?subject=${encodeURIComponent(job.title)}`} target="_blank" rel="noreferrer">
              <ApplyButton title="Apply now" />
            </a>
            <TextLink>
              <Link to={`/careers/${job.id}`}>View Details</Link>
            </TextLink>
           </ButtonWrapper>
         </JobTile>
      ))}
      </JobList>
      </ContentWrapper>
    </Wrapper>
    </Layout>
  );
};

export default JobListings;

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

  @media (max-width: 1354px) {
    max-width: 640px;
    margin: 0 auto;
    padding: 54px 0px 120px 0px;
    display: block;
    gap: 48px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 0 auto;
    padding: 32px 24px;
    display: block;
    gap: 48px;
  }
`
const TextWrapper = styled.div`
  max-width: 960px;
  display: grid;
  padding-top: 60px;
  padding-bottom: 48px;
  gap: 32px;
  margin: auto;

  @media (max-width: 1354px) {
    padding-top: 0px;
    max-width: 588px;
  }

  @media (max-width: 480px) {
    margin-top: 0px;
    max-width: 345px;
    justify-content: center;
    text-align: center;
    padding: 0 8px;
  }

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0.s;
    }
  }
`

const Title = styled(H2)`
  color: ${themes.dark.text1};
  line-height: 45px;
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
const JobList = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: block;
  gap: 32px;

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
    :nth-child(4) {
      animation-delay: 0.6s;
    }
  }

  @media (max-width: 1354px) {
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    margin-top: 24px;
  }

`

const JobTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  width: 100%;
  padding: 48px;
  border-radius: 16px;
  border: 1px solid var(--slate, #789BB6);
  background: var(--blue-collar, #153549);
  margin-bottom: 32px;

img {
  width: 45px;
  height: 45px;
  border-radius: 8px;
}

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
  padding: 32px;

  h3 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  h3 {
    font-size: 18px;
    line-height: 22px;
  }
  img {
    margin-top: 4px;
  }
}
`
const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  @media (max-width: 480px) {
    align-items: flex-start;
  }
`
const InnerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
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

const PrimaryButton = styled.div`
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9px;
  border-radius: 8px;
  background: var(--hi-vis, #54C5C0);
`

const SecondaryButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const TextLink = styled.div`
  display: flex;
  justify-content: center;
`