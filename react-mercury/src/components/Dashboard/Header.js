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

const Icon = styled.i`
  margin-right: 10px;
`;

const Image = styled.img`
  margin-right: 5px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <MenuActivator>
          <Icon className="fas fa-chevron-left" />
          <Icon className="fas fa-bars" />
        </MenuActivator>
        <Icon className="fas fa-search" />
      </Left>

      <Right>
        <AddProject>
          <I className="fas fa-plus" />Add project
        </AddProject>
        <div>
          <Icon className="fas fa-envelope" />
          <Icon className="fas fa-bell" />
        </div>
        <div>
          <Image src="" alt="image" />
          <Icon className="fas fa-sort-down" />
        </div>
      </Right>
    </Wrapper>
  );
};

export default Header;
