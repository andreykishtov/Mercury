import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Header from './Header';
import Content from './Content';

const Wrapper = styled.div`
  display: flex;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Menu />
      <div>
        <Header />
        <Content />
      </div>
    </Wrapper>
  );
};

export default Dashboard;
