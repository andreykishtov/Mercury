import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2.5vh 0;
`;

const OutsideLogo = styled.div`
  margin-left: 2vw;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(circle, red, #2793f2, lightblue);
`;

const InsideLogo = styled.div`
  position: relative;
  top: 12.5px;
  left: 12.5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #0f2038;
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 2rem;
`;

const Logo = () => {
  return (
    <Container>
      <OutsideLogo>
        <InsideLogo />
      </OutsideLogo>
      <Title>Mercury</Title>
    </Container>
  );
};

export default Logo;
