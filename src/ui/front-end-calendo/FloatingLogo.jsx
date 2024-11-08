import React from 'react';
import styled, { keyframes } from 'styled-components';

const shineAnimation = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

const LogoWrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 100;
  visibility: ${(props) => (props.isLoading ? 'hidden' : 'visible')};
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const LogoCircle = styled.a`
  position: relative;
  width: 70px;
  height: 70px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.2);
  padding: 3px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StoreInfo = styled.div`
  position: relative;
  font-size: 1.1rem;
  color: white;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid white;
  border-radius: 25px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
  white-space: nowrap;
  margin-top: 0rem;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FloatingLogo = ({ store, operation, isLoading = false }) => {
  const isUView = window.location.pathname.includes('hu-') || window.location.pathname.includes('su-');
  const logoSrc = `/${isUView ? 'U' : 'LEC'}/${isUView ? 'U' : 'LEC'}-LOGO.png`;
  const link = store?.retargetingLink || '#';

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
    <LogoWrapper isLoading={isLoading}>
      <LogoCircle href={link} target="_blank" rel="noopener noreferrer">
        <img src={logoSrc} alt="Logo" />
      </LogoCircle>
      {renderStoreInfo()}
    </LogoWrapper>
  );
};

export default FloatingLogo;
