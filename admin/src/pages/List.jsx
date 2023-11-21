import styled from '@emotion/styled';
import DataTable from '../components/Datatable';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

export default function List() {
  return (
    <Container>
      <Wrapper>
        <Title>Machines</Title>
        <Button>Nouveau</Button>
        <DataTable />
      </Wrapper>
    </Container>
  );
}
