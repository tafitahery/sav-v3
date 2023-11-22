import styled from '@emotion/styled';
import DataTable from '../components/Datatable';
import {
  customersColumns,
  machinesColumns,
  partsColumns,
  techniciansColumns,
} from '../utils/columns';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  width: max-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Title = styled.h1`
  color: #555;
`;

const Button = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #888;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;

// eslint-disable-next-line react/prop-types
export default function List({ title }) {
  let columns = [];
  let url = '';

  switch (title) {
    case 'Machines':
      columns = machinesColumns;
      url = 'http://localhost:8800/api/machines';
      break;
    case 'Clients':
      columns = customersColumns;
      url = 'http://localhost:8800/api/locations';
      break;
    case 'Pièces':
      columns = partsColumns;
      url = 'http://localhost:8800/api/parts';
      break;
    case 'Techniciens':
      columns = techniciansColumns;
      url = 'http://localhost:8800/api/technicians';
      break;
    default:
      break;
  }

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Button>Nouveau</Button>
        <DataTable columns={columns} url={url} />
      </Wrapper>
    </Container>
  );
}
