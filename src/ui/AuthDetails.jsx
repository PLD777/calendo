import { HiOutlineLogout } from 'react-icons/hi';
import styled from 'styled-components';

const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
`;

function AuthDetails() {
  return (
    <StyledAuth>
      <span>Logout </span>
      <HiOutlineLogout />
    </StyledAuth>
  );
}

export default AuthDetails;
