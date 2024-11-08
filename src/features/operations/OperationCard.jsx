import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteOperation } from './useDeleteOperation';
import { CgDetailsMore } from 'react-icons/cg';

const StyledCard = styled.div`
  border: 1px solid var(--color-grey-300);
  border-radius: 8px;
  padding: 1.6rem 2.2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const CustomButton = styled(NavLink)`
  position: absolute;
  top: ${({ variant }) =>
    variant === 'delete' ? '4%' : variant === 'edit' ? '13%' : '10%'};
  right: 6%;
  border: none;
  transform: scale(1.1);
  transition: color 0.2s;
  color: var(--color-grey-500);
  &:hover {
    color: var(--color-grey-300);
  }
`;

const OPLink = styled.span`
  font-weight: 800;
  color: ${(props) =>
    props.type === 'stat' ? 'var(--color-red-700)' : 'var(--color-brand-600)'};
  transition: color 0.2s;
  &:hover {
    color: ${(props) =>
      props.type === 'stat'
        ? 'var(--color-red-800)'
        : 'var(--color-brand-700)'};
  }
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12pt;
`;

const BoxLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Img = styled('img')`
  min-height: 14rem;
  min-width: 14rem;
  grid-column: 2/2;
  object-fit: cover;
  border-radius: 6px;
`;

function OperationCard({ operation }) {
  const { deleteOperation } = useDeleteOperation();
  const { type, loot, stores, mediaBlock, opening, id } = operation;
  const { city, type: brand, operationLink } = stores;

  return (
    <StyledCard>
      <h3>
        {brand} - {city}
      </h3>
      <StyledContainer>
        <StyledText>
          <p>
            Type : <strong>{type.toUpperCase()}</strong>
          </p>
          {type === 'z' && (
            <p>
              Loot : <strong>{loot.toUpperCase()}</strong>
            </p>
          )}
          <p>
            Opening : <strong>{opening.toUpperCase()}</strong>
          </p>
          <BoxLinksContainer>
            <p>
              <OPLink>
                <NavLink to={`/${operationLink}`}>OP LINK</NavLink>
              </OPLink>
            </p>
            <p>
              <OPLink type="stat">
                <NavLink to={`/jolo/statistics/${id}`}>STATS</NavLink>
              </OPLink>
            </p>
          </BoxLinksContainer>
        </StyledText>
        <Img src={mediaBlock} />
      </StyledContainer>
      <CustomButton variant="edit" to={`/jolo/editOperation/${id}`}>
        <CgDetailsMore />
      </CustomButton>
      <Modal>
        <Modal.Open opens="delete">
          <CustomButton variant="delete">
            <HiTrash />
          </CustomButton>
        </Modal.Open>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="operation"
            onConfirm={() => deleteOperation(id)}
          />
        </Modal.Window>
      </Modal>
    </StyledCard>
  );
}

export default OperationCard;
