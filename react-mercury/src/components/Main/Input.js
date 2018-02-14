import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Inp = styled.input`
  border: none;
  border-bottom: 1px solid #e5e6ea;
  padding-left: 2vw;
  font-size: 1.5rem;
  :focus {
    border-bottom: 1px solid red;
    outline: none;
  }
`;

const Icon = styled.i`
  position: relative;
  left: 1.5vw;
`;

const Input = ({ iconName = '', placeholder = '' }) => (
  <Wrapper>
    <Icon>
      <i className={iconName} />
    </Icon>
    <Inp placeholder={placeholder} />
  </Wrapper>
);

export default Input;
