import * as React from 'react';
import styled from 'styled-components';

const NavMenu = styled.div`
  width: 100%;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    margin-top: 20px;
    padding: 0;
  }
  ul li {
    padding: 8px 16px;
    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavMenu>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">tour dates</a>
          </li>
          <li>
            <a href="">gigography</a>
          </li>
          <li>
            <a href="">photos</a>
          </li>
          <li>
            <a href="">lyrics</a>
          </li>
          <li>
            <a href="">decoder ring</a>
          </li>
        </ul>
      </NavMenu>
    );
  }
}

export default Menu;
