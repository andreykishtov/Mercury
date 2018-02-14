import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: white;
  height: 12vh;
  background: #0f2038;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-left: 2vw;
  width: 3vw;
  height: 6vh;
  border-radius: 50%;
  background: radial-gradient(circle, red, #2793f2, lightblue);
`;

const InsideLogo = styled.div`
  position: relative;
  top: 1.5vh;
  left: 0.75vw;
  width: 1.5vw;
  height: 3vh;
  border-radius: 50%;
  background: #0f2038;
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 2rem;
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
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>
          <InsideLogo />
        </Logo>
        <Title>Mercury</Title>
      </Container>
      <Container>
        <Button>Register</Button>
        <Button>Login</Button>
      </Container>
    </Wrapper>
  );
};

export default Header;
