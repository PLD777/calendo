import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (min-width: 1025px) {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1025px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

const MobileSection = styled.section`
  display: none;
  width: 100%;
  position: relative;
  opacity: 0;
  animation: fadeInSection 0.8s ease-out forwards;

  min-height: auto;
  overflow: visible;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 2rem;

    scroll-behavior: smooth;
  }

  @keyframes fadeInSection {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SectionContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 2400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  padding: 4rem;
  gap: 4rem;
  opacity: 0;
  animation: fadeInSection 0.8s ease-out forwards;

  @media (min-width: 1025px) {
    max-width: 2800px;
    padding: 6rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (min-width: 1025px) {
    padding-right: 2rem;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0rem;
  margin-top: -10rem;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s forwards;

  img,
  video {
    width: 140%;
    height: auto;
    object-fit: contain;
    transform: translateX(-5%);
    transition: transform 0.3s ease;
  }

  @media (min-width: 1025px) {
    width: 140%;

    img,
    video {
      width: 180% !important;
      transform: translateX(-10%);
    }
  }

  @media (max-width: 1024px) {
    img,
    video {
      width: 180% !important;
      transform: translateX(-10%);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.6s forwards;
  width: 100%;
  max-width: 800px;

  @media (min-width: 1025px) {
    padding-left: 6rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 250%;
    height: auto;
    object-fit: contain;
    transform: translateX(0%);
    transition: transform 0.3s ease;
  }

  @media (min-width: 1025px) {
    img {
      width: 280%;
    }
  }
`;

const Button = styled.button`
  padding: 1.5rem 3rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 50px;
  font-size: 2rem;
  font-weight: 600;
  text-transform: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  max-width: 300px;
  outline: none;

  &:focus {
    outline: none;
    border-color: white;
  }

  &:focus-visible {
    outline: none;
    border-color: white;
  }

  &:active {
    outline: none;
    border-color: white;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: 0.5s;
  }

  &:hover {
    transform: scale(1.05);
    border-color: white;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.2);

    &:before {
      left: 100%;
    }
  }
`;

const MobileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  overflow: visible;
  padding-bottom: 2rem;
`;

const MobileTitleImage = styled.img`
  width: 200%;
  height: auto;
  object-fit: contain;
  padding-top: -2rem;
`;

const MobileBlockImage = styled.img`
  width: 200%;
  height: auto;
  object-fit: contain;
  margin-top: -6rem;
`;

const MobileButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
`;

const MobileButton = styled(Button)`
  max-width: none;
  width: 100%;
`;

const HeaderSection = ({ operation }) => {
  const isUView = window.location.pathname.includes('hu-') || window.location.pathname.includes('su-');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const renderMedia = () => {
    const mediaUrl = `/${isUView ? 'U' : 'LEC'}/CDL-${isUView ? 'U' : 'L'}24`;
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = mediaUrl.split('.').pop().toLowerCase();

    if (videoExtensions.includes(extension)) {
      return (
        <video src={`${mediaUrl}.${extension}`} autoPlay loop muted playsInline alt="Calendrier de l'avent">
          <source src={`${mediaUrl}.${extension}`} type={`video/${extension}`} />
        </video>
      );
    } else {
      return <img src={`${mediaUrl}.png`} alt="Calendrier de l'avent" />;
    }
  };

  return (
    <>
      <Section>
        <SectionContent>
          <HeaderContainer>
            <TitleContainer>{renderMedia()}</TitleContainer>
            <ButtonContainer>
              <Button type="button" onClick={() => scrollToSection('calendar-section')}>
                LES CADEAUX
              </Button>
              {operation?.type === 'z' && (
                <Button type="button" onClick={() => scrollToSection('form-section')}>
                  JEU CONCOURS
                </Button>
              )}
            </ButtonContainer>
          </HeaderContainer>
          <ImageContainer>{operation?.mediaBlock && <img src={operation.mediaBlock} alt="Media de l'opération" />}</ImageContainer>
        </SectionContent>
      </Section>

      <MobileSection>
        <MobileContent>
          <MobileTitleImage src={`/${isUView ? 'U' : 'LEC'}/CDL-${isUView ? 'U' : 'L'}24.png`} alt="Calendrier de l'avent" />
          <MobileBlockImage src={operation?.mediaBlock} alt="Media de l'opération" />
          <MobileButtonContainer>
            <MobileButton type="button" onClick={() => scrollToSection('calendar-section')}>
              LES CADEAUX
            </MobileButton>
            {operation?.type === 'z' && (
              <MobileButton type="button" onClick={() => scrollToSection('form-section')}>
                JEU CONCOURS
              </MobileButton>
            )}
          </MobileButtonContainer>
        </MobileContent>
      </MobileSection>
    </>
  );
};

export default HeaderSection;
