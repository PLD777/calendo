import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import DeleteButton from '../../ui/DeleteButton';
import { useDeleteStore } from './useDeleteStore';

const Store = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-grey-600);
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--color-grey-500);
`;

function CabinRow({ store }) {
  const { deleteStore } = useDeleteStore();
  const { id, type, city, companyName, siret } = store;

  return (
    <Table.Row role="row">
      <Store>{type}</Store>
      <Store>{city}</Store>
      <Store>{companyName}</Store>
      <Store>{siret}</Store>

      <Edit>
        <NavLink to={`/jolo/editStore/${id}`}>
          <HiPencil />
        </NavLink>
        <Modal>
          <Modal.Open opens="delete">
            <DeleteButton>
              <HiTrash />
            </DeleteButton>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="store"
              onConfirm={() => deleteStore(id)}
            />
          </Modal.Window>
        </Modal>
      </Edit>
    </Table.Row>
  );
}

export default CabinRow;
