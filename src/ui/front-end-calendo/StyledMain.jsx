import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 100vh;
  background: ${(props) =>
    props.isUView
      ? 'linear-gradient(155deg, #4a0001 0%, #800000 15%, #ed1a19 30%, #ff6565 50%, #ed1a19 70%, #800000 85%, #4a0001 100%)'
      : 'linear-gradient(155deg, #09237d 0%, #1a4399 15%, #38abff 30%, #2cf2ff 50%, #38abff 70%, #1a4399 85%, #09237d 100%)'};
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media (min-width: 1025px) {
    scroll-snap-type: y mandatory;
    height: 100vh;
  }

  @media (max-width: 1024px) {
    scroll-snap-type: none;
    height: auto;
    background: ${(props) =>
      props.isUView
        ? 'linear-gradient(155deg, #4a0001 0%, #800000 10%, #ed1a19 25%, #ff6565 50%, #ed1a19 75%, #800000 90%, #4a0001 100%)'
        : 'linear-gradient(155deg, #09237d 0%, #1a4399 10%, #38abff 25%, #2cf2ff 50%, #38abff 75%, #1a4399 90%, #09237d 100%)'};
    background-attachment: fixed;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    height: 100%;
  }

  @media (max-width: 1024px) {
    height: auto;
    min-height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 790px) {
    padding: 0 1rem;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  margin-bottom: 4rem;

  @media (min-width: 1025px) {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  margin: 4rem 0;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    margin: 0;
  }

  @media (max-width: 1024px) {
    margin: 2rem 0;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SnowOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  background-image: url('https://library.elementor.com/resources/christmas-snow-effect/s1.png'),
    url('https://library.elementor.com/resources/christmas-snow-effect/s2.png'),
    url('https://library.elementor.com/resources/christmas-snow-effect/s3.png');
  opacity: 0.7;
  animation: snow 10s linear infinite;

  @keyframes snow {
    0% {
      background-position: 0px 0px, 0px 0px, 0px 0px;
    }
    100% {
      background-position: 500px 1000px, 400px 400px, 300px 300px;
    }
  }
`;

const StyledMain = ({ children, isUView }) => {
  return (
    <Main isUView={isUView}>
      <SnowOverlay />
      <MainContent>{children}</MainContent>
    </Main>
  );
};

export default StyledMain;
