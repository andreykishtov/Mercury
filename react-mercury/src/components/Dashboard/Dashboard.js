import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Header from './Header';
// import Content from '../Main/Main';

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div``;

const Dashboard = ({ toggleMenu, menu }) => {
  return (
    <Wrapper>
      <Menu menu={menu} toggleMenu={toggleMenu} />
      <div>
        <Header toggleMenu={toggleMenu} />
        <Content />
      </div>
    </Wrapper>
  );
};

export default Dashboard;
