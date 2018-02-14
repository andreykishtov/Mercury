import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const Wrapper = styled.div`
  display: flex;
  color: #8994ac;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100% - 12vh);
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const Status = styled.span`
  color: #6389d5;
`;

const Submit = styled.button`
  color: white;
  width: 15vw;
  height: 5vh;
  border: none;
  border-radius: 2.5vh;
  cursor: pointer;
  background: #2b88fe;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: #2b88c1;
  }
`;

const Image = styled.span`
  position: relative;
  left: 30%;
`;

const LoginContent = () => {
  return (
    <Wrapper>
      <Title>
        Welcome <Status>Back!</Status>
      </Title>
      <Input iconName="far fa-user" type="text" placeholder="Username" />
      <Input iconName="fas fa-unlock-alt" placeholder="Password" />
      <Submit>
        Enter
        <Image>
          <i className="fas fa-chevron-right" />
        </Image>
      </Submit>
    </Wrapper>
  );
};

export default LoginContent;
