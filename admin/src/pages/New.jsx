import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  color: lightgray;
`;

const Label = styled.label`
  color: #888;
  width: 100px;
`;

const Input = styled.input`
  padding: 10px;
  width: 250px;
`;

const Select = styled.select`
  padding: 10px;
`;

const Option = styled.option`
  padding: 10px;
`;

const Button = styled.button`
  width: max-content;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: #888;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;

const Span = styled.span`
  font-size: 14px;
  color: teal;
  ${(props) =>
    props.err &&
    `
    color: crimson;
  `}
`;

export default function New() {
  const [inputs, setInputs] = useState({
    name: '',
    brand: '',
    model: '',
    color: 'null',
  });
  const [error, setError] = useState(null);
  const { state } = useLocation();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...inputs, color: inputs.color === 'yes' ? true : false };
    try {
      await axios.post(state.url, data);
      setInputs({ name: 'null', brand: '', model: '', color: 'null' });
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Nouvelle machine</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Type</Label>
            <Select name="name" onChange={handleChange} value={inputs.name}>
              <Option value={null}> --- </Option>
              <Option value="Multifonction">Multifonction</Option>
              <Option value="Caisse">Caisse</Option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Marque</Label>
            <Input
              type="text"
              name="brand"
              placeholder="Marque"
              required
              onChange={handleChange}
              value={inputs.brand}
            />
          </InputContainer>
          <InputContainer>
            <Label>Modèle</Label>
            <Input
              type="text"
              name="model"
              placeholder="Modèle"
              required
              onChange={handleChange}
              value={inputs.model}
            />
          </InputContainer>
          <InputContainer>
            <Label>Couleur</Label>
            <Select name="color" onChange={handleChange} value={inputs.color}>
              <Option value=""> --- </Option>
              <Option value="yes">Oui</Option>
              <Option value="no">Non</Option>
            </Select>
          </InputContainer>
          <Button>Valider</Button>
          {error !== null &&
            (error ? (
              <Span err>Echec</Span>
            ) : (
              <Span>Enregistrement effectué</Span>
            ))}
        </Form>
      </Wrapper>
    </Container>
  );
}
