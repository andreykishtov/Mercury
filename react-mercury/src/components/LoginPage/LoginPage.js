import React from 'react';
import styled from 'styled-components';
import image from '../../images/nature.jpeg';
import Header from './Header';
import LoginContent from './LoginContent';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${image});
`;

const LoginWindow = styled.div`
  height: 80%;
  background: white;
  width: 95%;

  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }

  @media (min-width: 1300px) {
    width: 60%;
  }
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginWindow>
        <Header />
        <LoginContent />
      </LoginWindow>
    </Wrapper>
  );
};

export default LoginPage;
