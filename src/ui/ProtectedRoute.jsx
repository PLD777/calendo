import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import { useUser } from '../features/authentication/useUser';

const FullPage = styled.div`
  height: 100vh;
  background-color: var() (--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isAuthenticated, isPending } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) return navigate('/jologin');
    },
    [isAuthenticated, isPending, navigate]
  );

  if (isPending)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
