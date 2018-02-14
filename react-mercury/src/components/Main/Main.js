import React from 'react';
import styled from 'styled-components';
import image from '../../images/nature.jpeg';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
`;

const LoginWindow = styled.div`
  height: 50vh;
  width: 50vw;
  background: white;
`;

const LoginContent = styled.div``;

const Main = () => {
  return (
    <Wrapper>
      <LoginWindow>
        <Header />
        <LoginContent>1</LoginContent>
      </LoginWindow>
    </Wrapper>
  );
};

export default Main;
