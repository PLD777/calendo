import Row from '../ui/Row';
import Heading from '../ui/Heading';
import Spinner from '../ui/Spinner';
import StatisticsNumbers from '../features/operations/StatisticsNumbers';
import { useOperation } from '../features/operations/useOperation';

function Statistics() {
  const { operation, isPending: isFetching } = useOperation();
  console.log(operation);

  if (isFetching) return <Spinner />;

  return (
    <>
      <Row typeof="horizontal">
        <Heading as="h1">
          Operation statistics - {operation?.stores.type}{' '}
          {operation?.stores.city}
        </Heading>
      </Row>

      <Row>
        <StatisticsNumbers operation={operation} />
      </Row>
    </>
  );
}

export default Statistics;
