import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleMenu } from '../../Store/actions/menu';

const Wrapper = styled.div`
  height: calc(5vh + 50px);
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  font-size: 1.5rem;
  margin-right: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  margin-right: 5px;
`;

// export interface RouteProps {
//     children?: (props: { x: number }) => any;
// }
// export class MyComponent<T extends RouteProps = RouteProps> extends React.Component<T> { }
// <MyComponent children={({ x }) => {}}/>

const Header = (props: { toggleMenu: any }) => (
  <Wrapper>
    <Left>
      <MenuActivator onClick={toggleMenu}>
        <Icon className="fas fa-chevron-left" />
        <Icon onClick={toggleMenu} className="fas fa-bars" />
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});

export default connect(null, mapDispatchToProps)(Header);
