import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(5vh + 50px);
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 15vw);
`;

const MenuActivator = styled.div`
  margin: 0 1vw;
`;

const Left = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
  align-items: center;
`;

const AddProject = styled.button`
  background: #3487fe;
  width: 8vw;
  height: 4vh;
  border-radius: 4vh;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const I = styled.i`
  padding-right: 10px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <MenuActivator>
          <i className="fas fa-chevron-left" />
          <i className="fas fa-bars" />
        </MenuActivator>
        <i className="fas fa-search" />
      </Left>

      <Right>
        <AddProject>
          <I className="fas fa-plus" />Add project
        </AddProject>
        <i className="fas fa-envelope" />
        <i className="fas fa-bell" />
        <img src="" alt="image" />
        <i className="fas fa-sort-down" />
      </Right>
    </Wrapper>
  );
};

export default Header;
