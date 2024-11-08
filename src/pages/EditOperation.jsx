import Row from '../ui/Row';
import Heading from '../ui/Heading';
import OperationForm from '../features/operations/OperationForm';

function CreateOperation() {
  return (
    <>
      <Row typeof="horizontal">
        <Heading as="h1">Edit operation</Heading>
      </Row>

      <Row>
        <OperationForm />
      </Row>
    </>
  );
}

export default CreateOperation;
