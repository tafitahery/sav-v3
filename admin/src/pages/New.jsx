import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  customerForm,
  locationForm,
  machineForm,
  partForm,
  technicianForm,
} from '../utils/newForm';

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
  width: 125px;
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
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:8800/api/customers');
      setCustomers(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:8800/api/machines');
      setMachines(data);
    };
    fetchData();
  }, []);

  let forms = [];
  let title = '';
  let link = '';

  switch (state.title) {
    case 'Machines':
      forms = machineForm;
      title = 'Nouvelle machine';
      link = '/machines';
      break;
    case 'Clients':
      forms = customerForm;
      title = 'Nouveau client';
      link = '/customers';
      break;
    case 'Emplacements':
      forms = locationForm;
      title = 'Nouvel emplacement';
      link = '/locations';
      break;
    case 'Pièces':
      forms = partForm;
      title = 'Nouvelle pièces';
      link = '/parts';
      break;
    case 'Techniciens':
      forms = technicianForm;
      title = 'Nouveau technicien';
      link = '/technicians';
      break;
    default:
      break;
  }

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { ...inputs, color: inputs.color === 'yes' ? true : false };
    try {
      await axios.post(state.url, data);
      navigate(link);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Form onSubmit={handleSubmit}>
          {forms.map((form) => (
            <InputContainer key={form.id}>
              <Label>{form.label}</Label>
              {form.inputType === 'select' ? (
                <Select
                  name={form.name}
                  onChange={handleChange}
                  value={inputs[form.name]}
                  required={form.required}
                >
                  <Option value=""> --- </Option>
                  {form.data
                    ? form.data === 'customer'
                      ? customers.map((customer) => (
                          <Option value={customer.id} key={customer.id}>
                            {customer.name}
                          </Option>
                        ))
                      : machines.map((machine) => (
                          <Option value={machine.id} key={machine.id}>
                            {machine.model}
                          </Option>
                        ))
                    : form.options.map((option, index) => (
                        <Option value={option.value} key={index}>
                          {option.option}
                        </Option>
                      ))}
                </Select>
              ) : (
                <Input
                  type={form.type}
                  name={form.name}
                  placeholder={form.placeholder}
                  required={form.required}
                  onChange={handleChange}
                  value={inputs[form.name]}
                />
              )}
            </InputContainer>
          ))}
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
