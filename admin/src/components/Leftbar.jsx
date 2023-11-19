import styled from 'styled-components';

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 51px);
  border-right: 1px solid lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 10px 20px;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #888;
    color: #fff;
  }
`;

export default function Leftbar() {
  return (
    <Container>
      <Wrapper>
        <Item>Machines</Item>
        <Item>Clients</Item>
        <Item>Pièces</Item>
        <Item>Tech</Item>
      </Wrapper>
    </Container>
  );
}
