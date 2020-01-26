import * as React from 'react';
import siteHeader from '../../public/img/site-header.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// why do you need a font family style for the header?
const HeaderImg = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 100%;
  font-family: Rokkitt, serif;
`;

// could this be a styled.nav ?
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
    // could be good to have a comment here about how this is the line underneath
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
  // unnecessary
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavMenu>
        <HeaderImg>
          <img src={siteHeader} />
        </HeaderImg>
        {/* 
          if I were making this component, I would create an array of objects
          representing the links and generate it by mapping over the array
          I would also probably make the list a component
          e.g. const linkList = [{title: 'home', path: '/'}, {title: 'tour dates', path: '/tour'}, {etc}]
          const LinkList = () => {
            return (
              <ul>
                {linkList.map((item) => {
                  return (
                    <li key={item.title}>
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
            then call <LinkList />
        */}
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/tour">tour dates</Link>
          </li>
          <li>
            <Link to="/gigography">gigography</Link>
          </li>
          <li>
            <Link to="/photos">photos</Link>
          </li>
          <li>
            <Link to="/lyrics">lyrics</Link>
          </li>
          <li>
            <Link to="/decoder">decoder ring</Link>
          </li>
        </ul>
      </NavMenu>
    );
  }
}

export default Header;
