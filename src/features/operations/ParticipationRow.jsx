import styled from 'styled-components';
import Table from '../../ui/Table';

const RowDiv = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-grey-600);
`;

function ParticipationRow({ participation }) {
  const {
    lastName,
    firstName,
    email,
    phone,
    postalCode,
    userAgent,
    ipAddress,
  } = participation;

  return (
    <Table.Row role="row">
      <RowDiv>
        {lastName} {firstName}
      </RowDiv>
      <RowDiv>{email}</RowDiv>
      <RowDiv>{phone}</RowDiv>
      <RowDiv>{postalCode}</RowDiv>
      <RowDiv>
        {userAgent} - {ipAddress}
      </RowDiv>
    </Table.Row>
  );
}

export default ParticipationRow;
