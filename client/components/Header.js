import * as React from 'react';
import siteHeader from '../../public/img/site-header.png';
import styled from 'styled-components';

const HeaderImg = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 100%;
  font-family: Rokkitt, serif;
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderImg>
        <img src={siteHeader} />
      </HeaderImg>
    );
  }
}

export default Header;
