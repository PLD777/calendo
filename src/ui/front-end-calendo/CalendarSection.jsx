import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 790px) {
    padding: 3rem 1rem;
  }

  @media (min-width: 791px) and (max-width: 1024px) {
    padding: 0rem 0rem;
  }

  @media (min-width: 1025px) {
    padding: 4rem 3rem;
  }
`;

const Calendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  opacity: 0;
  animation: fadeInGrid 0.8s ease-out forwards;
  position: relative;

  @keyframes fadeInGrid {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 790px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    padding: 0 2rem;
  }

  @media (min-width: 791px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0rem;
    padding: 0 2rem;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0rem;
    padding: 0 3rem;
  }
`;

const CalendarCard = styled.div`
  perspective: 1000px;
  width: calc(16.66% - 20px);
  padding-bottom: calc(16.66% - 20px);
  border: 1px dashed white;
  border-radius: 15px;
  margin: 10px;
  cursor: pointer;
  position: relative;
  overflow: visible;
  transition: all 0.1s ease-out;

  @media (min-width: 1025px) {
    &:hover {
      z-index: ${(props) => (props.isAvailable ? 5 : 1)};
      transform: ${(props) => (props.isAvailable ? 'scale(1.1)' : 'none')};
      box-shadow: ${(props) => (props.isAvailable ? '0 0 30px rgba(255, 255, 255, 0.2)' : 'none')};
      border-color: ${(props) => (props.isAvailable ? 'transparent' : 'white')};
    }

    ${Calendar}:hover & {
      opacity: ${(props) => (props.isAvailable ? 0.7 : 0.5)};
    }

    ${Calendar}:hover &:hover {
      opacity: ${(props) => (props.isAvailable ? 1 : 0.5)};
    }
  }

  .card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transform: ${(props) => (props.isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
  }

  &:hover .back img {
    @media (min-width: 1025px) {
      transform: scale(2);
    }
    @media (max-width: 1024px) {
      transform: scale(1.5);
    }
  }

  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .front {
    z-index: 1;
    transform: rotateY(0deg);
  }

  .back {
    transform: rotateY(-180deg);
    z-index: 2;
  }

  @media (max-width: 790px) {
    width: calc(100% - 20px);
    padding-bottom: calc(100% - 20px);
    margin: 1rem 0;
    border-radius: 25px;
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: visible;

  &.front {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: transparent;
    }
  }

  &.back {
    transform: rotateY(-180deg);
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: transparent;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

      @media (min-width: 1025px) {
        &:hover {
          transform: scale(2);
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
        }
      }

      @media (max-width: 1024px) {
        &:hover {
          transform: scale(1.5);
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
        }
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 4;

  ${CalendarCard}:hover ~ & {
    opacity: 1;
  }
`;

const CalendarSection = ({ calendarPics, flippedCards, onCardFlip, operation }) => {
  const [dailyAvailableCards, setDailyAvailableCards] = useState(Array(24).fill(false));

  const getViewType = () => {
    const urlIsU = window.location.pathname.includes('hu-') || window.location.pathname.includes('su-');
    return urlIsU ? 'U' : 'LEC';
  };

  const viewType = getViewType();

  const checkCardAvailability = () => {
    if (!operation) return Array(24).fill(false);

    if (operation?.opening === 'full') {
      return Array(24).fill(true);
    } else {
      const now = new Date();
      const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
      const currentYear = parisTime.getFullYear();
      const availability = Array(24).fill(false);

      for (let day = 1; day <= 24; day++) {
        const openingDate = new Date(currentYear, 10, day - 1, 19, 30, 0);
        if (parisTime >= openingDate) {
          availability[day - 1] = true;
        }
      }
      return availability;
    }
  };

  useEffect(() => {
    if (operation) {
      const updateAvailability = () => {
        setDailyAvailableCards(checkCardAvailability());
      };

      updateAvailability();
      const interval = setInterval(updateAvailability, 60000);

      return () => clearInterval(interval);
    }
  }, [operation]);

  const handleMouseEnter = (index) => {
    if (!flippedCards[index] && dailyAvailableCards[index]) {
      onCardFlip(index);
    }
  };

  const getBackImage = (index) => {
    if (dailyAvailableCards[index]) {
      const mediaKey = `mediaLoot${index + 1}`;
      return operation?.[mediaKey] || '/default-img.webp';
    }
    return '/locked-card.webp';
  };

  if (!calendarPics || !flippedCards || !operation) {
    return null;
  }

  return (
    <Section id="calendar-section">
      <Calendar>
        {calendarPics.map((pic, index) => (
          <CalendarCard
            key={index}
            isFlipped={flippedCards[index] && dailyAvailableCards[index]}
            onMouseEnter={() => handleMouseEnter(index)}
            isAvailable={dailyAvailableCards[index]}
            style={{
              opacity: dailyAvailableCards[index] ? 1 : 0.5,
              cursor: dailyAvailableCards[index] ? 'pointer' : 'not-allowed',
            }}
          >
            <div className="card-inner">
              <CardFace className="front">
                <img src={`/${viewType}/GIFT/${index + 1}-${viewType}-GIFT.png`} alt={`Gift ${index + 1}`} />
              </CardFace>
              <CardFace className="back">
                <img src={getBackImage(index)} alt={dailyAvailableCards[index] ? "Image du calendrier de l'avent" : 'Case non disponible'} />
              </CardFace>
            </div>
          </CalendarCard>
        ))}
      </Calendar>
    </Section>
  );
};

export default CalendarSection;
