import styled from 'styled-components';
import Heading from '../ui/Heading';

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-grey-500);
  }
`;

function EmergencyBreakdown() {
  return (
    <StyledErrorFallback>
      <Box>
        <Heading as="h1">Site actuellement en maintenance</Heading>
        <p>Nous vous invitons à réessayer d&apos;ici peu 🙂</p>
      </Box>
    </StyledErrorFallback>
  );
}

export default EmergencyBreakdown;
