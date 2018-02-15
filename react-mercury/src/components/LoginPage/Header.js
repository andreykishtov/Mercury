import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.div`
  color: white;
  height: 12vh;
  background: #0f2038;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.a`
  width: 7vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1vh solid none;
  :hover {
    padding-top: 1vh;
    height: 10vh;
    border-bottom: 1vh solid #3289fd;
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
