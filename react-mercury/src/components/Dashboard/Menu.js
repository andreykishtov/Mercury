import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../../Store/actions/menu';

const Wrapper = styled.div`
  transition: all 1s ease-out;
  margin-left: ${({ menu }) => (menu ? '0' : '-15vw')};
  width: 15vw;
  height: 100vh;
  color: white;
  background: #0f2038;
`;

const Li = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
  list-style-type: none;
  padding: 2em;
  border-left: 0.5vw solid #0f2038;
  :hover {
    background: #102745;
    border-left: 0.5vw solid #3689f6;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
`;

const LinkTitle = styled.span`
  color: white;
`;

const LinkIcon = styled.i`
  color: #3669a7;
  padding-right: 1em;
`;

const menuItems = [
  { id: 0, path: '/', icon: 'fas fa-home', name: 'Home' },
  { id: 1, path: 'Workflow', icon: 'fas fa-bars', name: 'Workflow' },
  { id: 2, path: 'Statistics', icon: 'fas fa-chart-line', name: 'Statistics' },
  { id: 3, path: 'Calendar', icon: 'far fa-calendar-alt', name: 'Calendar' },
  { id: 4, path: 'Users', icon: 'fas fa-user', name: 'Users' },
  { id: 5, path: 'Settings', icon: 'fas fa-cog', name: 'Settings' }
];

const Menu = ({ menu, toggleMenu }) => (
  <Wrapper menu={menu.menu}>
    <span onClick={toggleMenu}>
      <Logo />
    </span>
    <Ul>
      {menuItems.map(item => (
        <StyledLink key={item.id} to={item.path}>
          <Li>
            <LinkIcon className={item.icon} />
            <LinkTitle>{item.name}</LinkTitle>
          </Li>
        </StyledLink>
      ))}
    </Ul>
  </Wrapper>
);

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => {
    dispatch(toggleMenu());
  }
});

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
