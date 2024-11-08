import Row from '../ui/Row';
import Heading from '../ui/Heading';
import StoreTable from '../features/stores/StoreTable';
import Footer from '../ui/Footer';
import Button from '../ui/Button';
import { NavLink } from 'react-router-dom';

function Stores() {
  return (
    <>
      <Row typeof="horizontal">
        <Heading as="h1">All stores</Heading>
      </Row>

      <Row>
        <StoreTable />
      </Row>

      <Footer>
        <NavLink to="/jolo/createStore">
          <Button>Create store</Button>
        </NavLink>
      </Footer>
    </>
  );
}

export default Stores;
