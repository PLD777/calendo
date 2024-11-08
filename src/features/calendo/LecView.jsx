import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyledMain, { ContentWrapper, SectionWrapper, CalendarWrapper } from '../../ui/front-end-calendo/StyledMain';
import FloatingLogo from '../../ui/front-end-calendo/FloatingLogo';
import LoadingScreen from '../../ui/front-end-calendo/LoadingScreen';
import HeaderSection from '../../ui/front-end-calendo/HeaderSection';
import CalendarSection from '../../ui/front-end-calendo/CalendarSection';
import FormSection from '../../ui/front-end-calendo/FormSection';
import Footer from '../../ui/front-end-calendo/Footer';

const StyledHeaderDesktop = styled(HeaderSection).attrs({ variant: 'desktop' })``;
const StyledHeaderTablet = styled(HeaderSection).attrs({ variant: 'tablet' })``;
const StyledHeaderMobile = styled(HeaderSection).attrs({ variant: 'mobile' })``;

const LecView = ({ store, operation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [calendarPics, setCalendarPics] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const pics = [];
    Object.keys(operation).forEach((key) => {
      if (key.startsWith('mediaLoot')) {
        pics.push(operation[key]);
      }
    });
    setCalendarPics(pics);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [operation]);

  const handleCardFlip = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} store={store} logoUrl="/LEC/LEC-LOGO.png" />
      <StyledMain>
        <FloatingLogo store={store} operation={operation} isLoading={isLoading} />
        <HeaderSection operation={operation} />

        <ContentWrapper>
          <CalendarWrapper>
            <CalendarSection calendarPics={calendarPics} flippedCards={flippedCards} onCardFlip={handleCardFlip} operation={operation} />
          </CalendarWrapper>

          <SectionWrapper>
            <FormSection operation={operation} store={store} />
          </SectionWrapper>
          <Footer />
        </ContentWrapper>
      </StyledMain>
    </>
  );
};

export default LecView;
