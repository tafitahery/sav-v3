import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../assets/profile.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid lightgray;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #555;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  color: inherit;
  text-decoration: none;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.span``;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">Leboadmin</Logo>
        <User>
          <Avatar src={Profile} alt="" />
          <Name>John Doe</Name>
        </User>
      </Wrapper>
    </Container>
  );
}
