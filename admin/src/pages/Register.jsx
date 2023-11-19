import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border: 1px solid lightgray;
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  width: 250px;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  width: max-content;
  color: white;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 14px;
  color: #555;
`;

const StyledLink = styled(Link)`
  color: teal;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>S'enregistrer</Title>
        <Form>
          <Input type="text" placeholder="Nom..." required />
          <Input type="password" placeholder="Mot de passe..." required />
          <Button>Enregistrer</Button>
        </Form>
        <Span>
          Tu as un compte ? <StyledLink to="/login">Se connecter</StyledLink>
        </Span>
      </Wrapper>
    </Container>
  );
}
