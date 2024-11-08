import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import OperationCard from './OperationCard';
import Button from '../../ui/Button';
import Footer from '../../ui/Footer';
import Spinner from '../../ui/Spinner';
import { useOperations } from './useOperations';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1.6rem;
`;

function OperationsGrid() {
  const { operations, isPending } = useOperations();

  if (isPending) return <Spinner />;

  return (
    <>
      <StyledGrid>
        {operations.map((operation) => (
          <OperationCard key={operation.id} operation={operation} />
        ))}
      </StyledGrid>

      <Footer>
        <NavLink to="/jolo/createOperation">
          <Button>Create operation</Button>
        </NavLink>
      </Footer>
    </>
  );
}

export default OperationsGrid;
