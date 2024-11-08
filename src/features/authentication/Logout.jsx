import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import styled from 'styled-components';
import ButtonIcon from '../../ui/ButtonIcon';
import SpinnerMini from '../../ui/SpinnerMini';
import { useLogout } from './useLogout';

const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;
  color: var(--color-brand-600);
`;

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <ButtonIcon disabled={isPending} onClick={logout}>
      {!isPending ? (
        <StyledAuth>
          <p>Logout</p>
          <HiArrowRightOnRectangle />
        </StyledAuth>
      ) : (
        <SpinnerMini />
      )}
    </ButtonIcon>
  );
}

export default Logout;
