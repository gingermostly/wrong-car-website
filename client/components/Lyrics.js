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

const SongList = styled.div`
  text-align: center;
  h3 {
    margin: 40px 0 20px 0;
    padding: 0;
    font-size: 40px;
    font-weight: normal;
    font-family: Oswald, sans-serif;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
    font-family: Rokkitt;
    font-size: 25px;
    background: transparent;
    border: 0;
    color: #c71742;
    outline: 0;
    &:hover {
      background: #c71742;
      color: #fff;
      cursor: pointer;
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
        <SongList>
          {lyricData.map(album => {
            if (album.title === this.state.currentAlbum) {
              return (
                <div>
                  <h3>{album.title}</h3>
                  <ul>
                    {album.songs.map(song => {
                      return (
                        <li>
                          <button>{song.name}</button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </SongList>
      </div>
    );
  }
}

export default Lyrics;
