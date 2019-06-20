import * as React from 'react';
import styled from 'styled-components';
import fourteenAutumns from '../../public/img/album-faafw.jpg';
import neverSnowed from '../../public/img/album-neversnowed.jpg';
import forget from '../../public/img/album-ftna.jpg';
import wrongCar from '../../public/img/album-wrongcar.jpg';
import noOne from '../../public/img/album-nocek.jpg';
import nobody from '../../public/img/album-nwtbhanwtl.jpg';
import itWont from '../../public/img/album-iwbltatt.jpg';

const AlbumNav = styled.nav`
  margin-top: 40px;
  display: grid;
  grid-column-gap: 8px;
  grid-auto-flow: column;
  max-width: 100%;
  grid-template-columns: repeat(min-content);
  img {
    max-width: 100%;
    height: auto;
    display: block;
    cursor: pointer;
    transition: transform 150ms ease-in-out;
    transform: scale(1) rotate(0);
    position: relative;
    z-index: 1;
  }
`;

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AlbumNav>
        <img src={fourteenAutumns} />
        <img src={neverSnowed} />
        <img src={forget} />
        <img src={wrongCar} />
        <img src={noOne} />
        <img src={nobody} />
        <img src={itWont} />
      </AlbumNav>
    );
  }
}

export default Lyrics;
