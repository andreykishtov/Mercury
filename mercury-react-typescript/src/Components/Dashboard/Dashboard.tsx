import * as React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Header from './Header';
// import Content from './Content';

const Wrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1 0 auto;
`;

const Dashboard = () => {
  return (
    <Wrapper>
      <Menu />
      <MainContent>
        <Header />
        {/* <Content /> */}
      </MainContent>
    </Wrapper>
  );
};

export default Dashboard;
