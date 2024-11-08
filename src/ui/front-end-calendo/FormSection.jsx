import React from 'react';
import styled from 'styled-components';
import BentoForm from '../../ui/front-end-calendo/BentoForm';

const FormSectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const FormSectionContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  gap: 4rem;
  height: 100%;
  align-items: center;

  @media (max-width: 790px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 790px) {
    width: 100%;
    gap: 2rem;
  }
`;

const RightContainer = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: -5%;

  img {
    width: 120%;
    height: auto;
    object-fit: contain;
    transform: translateX(10%);
  }

  @media (max-width: 790px) {
    display: none;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: -2rem; 
  margin-bottom: -2rem; 

  img {
    width: 100%; 
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 790px) {
    justify-content: center;
    margin-bottom: 0;

    img {
      width: 100%; /
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 100%; 
    }
  }
`;

const FormSection = ({ operation }) => {
  const isUView = window.location.pathname.includes('hu-') || window.location.pathname.includes('su-');

  if (operation?.type.toLowerCase() === 'x') return null;

  return (
    <FormSectionWrapper id="form-section">
      {' '}
      <FormSectionContent>
        <LeftContainer>
          <TitleContainer>
            <img src={`/${isUView ? 'U' : 'LEC'}/CDL-${isUView ? 'U' : 'L'}24.png`} alt="Calendrier de l'avent" />
          </TitleContainer>
          <BentoForm />
        </LeftContainer>
        <RightContainer>
          <img src={operation.mediaBlock2} alt="Lot à gagner" />
        </RightContainer>
      </FormSectionContent>
    </FormSectionWrapper>
  );
};

export default FormSection;
