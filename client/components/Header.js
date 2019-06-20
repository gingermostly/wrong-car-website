import * as React from 'react';
import siteHeader from '../../public/img/site-header.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderImg = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 100%;
  font-family: Rokkitt, serif;
`;

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
  a {
    font-family: Rokkitt, serif;
    font-size: 36px;
    line-height: 1;
    padding: 5px 0;
    white-space: nowrap;
    color: #c71742;
    text-decoration: none;
    position: relative;
    &:hover {
      background: transparent;
      &:after {
        transform: scaleX(1);
      }
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: #c71742;
      transform: scaleX(0);
      transition: transform 400ms ease;
    }
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavMenu>
        <HeaderImg>
          <img src={siteHeader} />
        </HeaderImg>
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
            <Link to="/lyrics">lyrics</Link>
          </li>
          <li>
            <a href="">decoder ring</a>
          </li>
        </ul>
      </NavMenu>
    );
  }
}

export default Header;
