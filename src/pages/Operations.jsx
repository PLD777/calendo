import Row from '../ui/Row';
import Heading from '../ui/Heading';
import OperationsGrid from '../features/operations/OperationsGrid';

function Operations() {
  return (
    <>
      <Row typeof="horizontal">
        <Heading as="h1">All operations</Heading>
      </Row>

      <Row>
        <OperationsGrid />
      </Row>
    </>
  );
}

export default Operations;
