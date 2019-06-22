import * as React from 'react';
import styled from 'styled-components';
import lyricData from '../data/lyrics.data.js';

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
    &:hover {
      transform: scale(1.1) rotate(8deg);
      z-index: 2;
      box-shadow: 0 2px 15px 5px rgba(0, 0, 0, 0.3);
    }
  }
`;

class Lyrics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAlbum: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      currentAlbum: e.target.dataset.album,
    });
  }

  render() {
    return (
      <div>
        <AlbumNav onClick={this.handleClick}>
          {lyricData.map(album => {
            return (
              <img
                key={album.title}
                data-album={album.title}
                src={album.image}
              />
            );
          })}
        </AlbumNav>
        <ul>
          {lyricData.map(album => {
            if (album.title === this.state.currentAlbum) {
              return album.songs.map(song => {
                console.log(song.name);
                return <li>{song.name}</li>;
              });
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Lyrics;
