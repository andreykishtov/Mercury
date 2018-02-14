import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const Wrapper = styled.div`
  width: 15vw;
  height: 100vh;
  color: white;
  background: #0f2038;
  padding: 2.5vh 0;
`;

const Li = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 2em;
  border-left: 0.5vw solid #0f2038;
  :hover {
    background: #102745;
    border-left: 0.5vw solid #3689f6;
  }
`;

const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
`;

const menuItems = [
  { id: 0, icon: 'fas fa-home', name: 'Home' },
  { id: 1, icon: 'fas fa-bars', name: 'Workflow' },
  { id: 2, icon: 'fas fa-chart-line', name: 'Statistic' },
  { id: 3, icon: 'far fa-calendar-alt', name: 'Calendar' },
  { id: 4, icon: 'fas fa-user', name: 'Users' },
  { id: 5, icon: 'fas fa-cog', name: 'Settings' }
];

const Menu = () => (
  <Wrapper>
    <Logo />
    <Ul>
      {menuItems.map(item => (
        <Li key={item.id}>
          <i class={item.icon} /> {item.name}
        </Li>
      ))}
    </Ul>
  </Wrapper>
);

export default Menu;
