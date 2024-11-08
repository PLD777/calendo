// Footer.jsx
import styled from 'styled-components';

const StyledFooter = styled.footer`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  text-align: center;
  color: white;
  padding: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
