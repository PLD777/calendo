import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

const progressAnimation = keyframes`
  0% {
    stroke-dasharray: 0, 502;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 502, 502;
    stroke-dashoffset: 0;
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
                0 0 60px rgba(255, 255, 255, 0.4),
                inset 0 0 30px rgba(255, 255, 255, 0.4);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const snowAnimation = keyframes`
  0% {
    background-position: 0px 0px, 0px 0px, 0px 0px;
  }
  100% {
    background-position: 500px 1000px, 400px 400px, 300px 300px;
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.isUView
      ? 'linear-gradient(155deg, #4a0001 0%, #800000 15%, #ed1a19 30%, #ff6565 50%, #ed1a19 70%, #800000 85%, #4a0001 100%)'
      : 'linear-gradient(155deg, #09237d 0%, #1a4399 15%, #38abff 30%, #2cf2ff 50%, #38abff 70%, #1a4399 85%, #09237d 100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 1;
  visibility: visible;
  transition: opacity 1s ease, visibility 1s ease;
  gap: 4rem;

  ${(props) =>
    !props.isLoading &&
    `
    opacity: 0;
    visibility: hidden;
  `}

  @media (max-width: 1024px) {
    background: ${(props) =>
      props.isUView
        ? 'linear-gradient(155deg, #4a0001 0%, #800000 10%, #ed1a19 25%, #ff6565 50%, #ed1a19 75%, #800000 90%, #4a0001 100%)'
        : 'linear-gradient(155deg, #09237d 0%, #1a4399 10%, #38abff 25%, #2cf2ff 50%, #38abff 75%, #1a4399 90%, #09237d 100%)'};
    background-attachment: fixed;
  }
`;

const SnowOverlay = styled.div`
  position: absolute;
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
  animation: ${snowAnimation} 10s linear infinite;
`;

const LoaderWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: visible;
  padding: 2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ProgressCircle = styled.svg`
  position: absolute;
  width: 170px;
  height: 170px;
  transform: rotate(-90deg);
  overflow: visible;
`;

const Circle = styled.circle`
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-linecap: round;
  animation: ${progressAnimation} 2s linear forwards;
  filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.6));
`;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
  animation: ${glowAnimation} 2s forwards;
  backdrop-filter: blur(5px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
`;

const shineAnimation = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

const StoreInfo = styled.div`
  position: relative;
  font-size: 2.2rem;
  color: white;
  font-weight: 500;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  letter-spacing: 0.5px;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 25px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
  animation: ${glowAnimation} 2s forwards;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${shineAnimation} 3s linear infinite;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0.8rem 1.6rem;
  }
`;

const LoadingScreen = ({ isLoading, setIsLoading, store, logoUrl }) => {
  const isUView = window.location.pathname.includes('hu-') || window.location.pathname.includes('su-');

  const handleAnimationEnd = useCallback(
    (e) => {
      if (e.animationName.includes('progressAnimation')) {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    },
    [setIsLoading]
  );

  const renderStoreInfo = () => {
    if (!store?.city) return null;

    if (isUView) {
      return (
        <StoreInfo>
          {store.type} {store.city}
        </StoreInfo>
      );
    }

    return <StoreInfo>{store.city}</StoreInfo>;
  };

  return (
    <LoadingContainer isLoading={isLoading} isUView={isUView}>
      <SnowOverlay />
      <LoaderWrapper>
        <ProgressCircle viewBox="0 0 170 170">
          <Circle cx="85" cy="85" r="80" onAnimationEnd={handleAnimationEnd} />
        </ProgressCircle>
        <LogoContainer>
          <Logo src={logoUrl} alt="Logo" />
        </LogoContainer>
      </LoaderWrapper>
      {renderStoreInfo()}
    </LoadingContainer>
  );
};

export default LoadingScreen;
