import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Row from '../../ui/Row';
import { useViews } from './useViews';
import { useParticipations } from './useParticipations';
import ParticipationRow from './ParticipationRow';

const NumberDisplay = styled.span`
  font-size: 3rem;
  color: white;
  background-color: var(--color-brand-600);
  padding: 0.4rem 0.6rem;
  border-radius: 4pt;
  min-width: 7rem;
  text-align: center;
`;

const DisplayLayout = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 4rem;
`;

function StatisticsNumbers({ operation }) {
  const { views, isPending: isFetching } = useViews();
  const { participations, isPending: isFetching2 } = useParticipations();
  if (isFetching || isFetching2) return <Spinner />;

  const isZOperation = operation?.type === 'z';

  return (
    <>
      <DisplayLayout>
        <NumberDisplay>{views.length || '0'}</NumberDisplay>
        <h2>Views</h2>
      </DisplayLayout>

      {isZOperation && (
        <>
          <DisplayLayout>
            <NumberDisplay>{participations.length || '0'}</NumberDisplay>
            <h2>Participations</h2>
          </DisplayLayout>

          <Row>
            <Table columns="0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.2fr">
              <Table.Header role="row">
                <div>Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Postal code</div>
                <div>User agent - IP</div>
              </Table.Header>

              <Table.Body
                data={participations}
                render={(participation) => (
                  <ParticipationRow
                    participation={participation}
                    key={participation.id}
                  />
                )}
              />
            </Table>
          </Row>
        </>
      )}
    </>
  );
}

export default StatisticsNumbers;
