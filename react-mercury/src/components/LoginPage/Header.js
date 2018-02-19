import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.div`
  color: white;
  background: #0f2038;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.a`
  min-width: 110px;
  padding: 10px;
  margin: 0 10px;
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    padding: 10px 10px 0 10px;
    border-bottom: 10px solid #3289fd;
  }

  @media (min-width: 600px) {
    margin: 1vw;
    padding: 3vh 6vw;
    :hover {
      padding: 3vh 6vw 2vh 6vw;
    }
  }
`;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Container>
        <Button>Register</Button>
        <Button>Login</Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
