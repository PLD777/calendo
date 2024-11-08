import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import StoreRow from './StoreRow';
import { useStores } from './useStores';

function StoreTable() {
  const { stores, isPending } = useStores();

  if (isPending) return <Spinner />;

  return (
    <Table columns="0.6fr 1.8fr 1.8fr 1.4fr 1fr 1fr">
      <Table.Header role="row">
        <div>Type</div>
        <div>City</div>
        <div>Company</div>
        <div>Siret</div>
        <div>Actions</div>
      </Table.Header>

      <Table.Body
        data={stores}
        render={(store) => <StoreRow store={store} key={store.id} />}
      />
    </Table>
  );
}

export default StoreTable;
