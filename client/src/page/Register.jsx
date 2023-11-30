import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  color: #555;
  font-size: 28px;
  font-weight: 555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  width: 250px;
  border: none;
  border-bottom: 1px solid #888;
`;

const Button = styled.button`
  width: max-content;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #888;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Span = styled.span`
  font-size: 14px;
  color: #888;
`;

const StyledLink = styled(Link)`
  color: #555;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Enregistrement</Title>
        <Form>
          <Input type="text" placeholder="Nom" />
          <Input type="password" placeholder="Mot de passe" />
          <Button>Enrgister</Button>
        </Form>
        <Span>
          Déjà un compte? <StyledLink to="/login">Connexion</StyledLink>
        </Span>
      </Wrapper>
    </Container>
  );
}
