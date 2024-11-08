import Row from '../ui/Row';
import Heading from '../ui/Heading';
import StoreForm from '../features/stores/StoreForm';

function CreateStore() {
  return (
    <>
      <Row typeof="horizontal">
        <Heading as="h1">Create store</Heading>
      </Row>

      <Row>
        <StoreForm />
      </Row>
    </>
  );
}

export default CreateStore;
