import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 51px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  color: #555;
  font-size: 36px;
`;

const Content = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  color: #888;
  line-height: 35px;
`;

export default function Home() {
  return (
    <Container>
      <Wrapper>
        <Title>Leboadmin</Title>
        <Content>
          Bienvenue sur Leoboadmin, <br />
          Une application qui vous permet de faire des entrées, modifications et
          suppression des données dans une base. <br />
          Cette application est dédié pour la service après vente pour les
          imprimantes multifonctions professionneles
        </Content>
      </Wrapper>
    </Container>
  );
}
