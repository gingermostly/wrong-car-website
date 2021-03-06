import * as React from 'react';
import styled from 'styled-components';
import {SlideDown} from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const AlbumNav = styled.nav`
  display: grid;
  grid-column-gap: 8px; 
  grid-auto-flow: column;
  max-width: 100%;
  img {
    // scale images for responsive layout
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
      z-index: 2; // ensure image remains on top of other elements when hovering
      box-shadow: 0 2px 15px 5px rgba(0, 0, 0, 0.3);
    }
  }
`

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
    font-family: Rokkitt, serif;
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
`
const SongLyrics = styled.div`
  white-space: pre-line; // maintain white space to preserve poetry formatting of lyrics
  padding: 12px 0 30px 0;
`

class Lyrics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAlbum: '',
      currentSong: '',
      data: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSongClick = this.handleSongClick.bind(this)
  }
  handleClick(e) {
    this.setState({
      currentAlbum: e.target.dataset.album,
    })
  }
  componentDidMount(){
    fetch('http://localhost:1337/albums')
      .then(res =>{
        return res.json()
      })
      .then(data => {
        this.setState({
          data: data
        })
      })
  }
  handleSongClick(e) {
    // Set current song to clicked song. If clicked song is same as current song, toggle by setting current song to ''
    const checkSong = this.state.currentSong === e.target.dataset.song ? '' : e.target.dataset.song
    this.setState({
      currentSong: checkSong,
    })
  }
  render() {
    return (
      <div>
        <AlbumNav onClick={this.handleClick}>
          {this.state.data.map(album => {
            return <img key={album.id} data-album={album.title} src={album.image} />
          })}
        </AlbumNav>
        <SongList>
          {/* tech debt: could possibly be restructured now that relational database entries exist*/}
          {this.state.data.map(album => {
            if (album.title === this.state.currentAlbum) {
              return (
                <div>
                  <h3>{album.title}</h3>
                  <ul key={album._id}>
                    {album.songs.map(song => {
                      return (
                        <li key={song.name}>
                          <button data-song={song.name} onClick={this.handleSongClick}>
                            {song.name}
                          </button>
                          <SlideDown>
                            {song.name === this.state.currentSong && <SongLyrics>{song.lyrics}</SongLyrics>}
                          </SlideDown>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            }
          })}
        </SongList>
      </div>
    )
  }
}

export default Lyrics
