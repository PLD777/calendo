import styled from 'styled-components';

const StyledLogo = styled.div`
  padding-left: 1rem;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const imageSource = '/PEL-APP.png';

function Logo() {
  return (
    <StyledLogo>
      <Img src={imageSource} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
