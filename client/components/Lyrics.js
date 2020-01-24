/** @format */

import * as React from 'react'
import styled from 'styled-components'
import lyricData from '../data/lyrics.data.js'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const AlbumNav = styled.nav`
  margin-top: 40px;
  display: grid;
  grid-column-gap: 8px; 
  grid-auto-flow: column;
  max-width: 100%;
  grid-template-columns: repeat(min-content); // this is not valid css, and not necessary anyway
  img {
    // might be good to have a comment here about how you're scaling the images for responsive
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
      z-index: 2; // I'd comment here something like "ensure the hovered element is above the others in z order"
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
    font-family: Rokkitt; // Rokkitt, serif ?
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
  white-space: pre-line; // comment here about maintaining poetry's whitespace or something
  padding: 12px 0 30px 0;
`

class Lyrics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAlbum: '',
      currentSong: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSongClick = this.handleSongClick.bind(this)
  }
  handleClick(e) {
    this.setState({
      currentAlbum: e.target.dataset.album,
    })
  }
  handleSongClick(e) {
    // I might comment something like "set current song or toggle if clicking the same one"
    const checkSong = this.state.currentSong === e.target.dataset.song ? '' : e.target.dataset.song
    this.setState({
      currentSong: checkSong,
    })
  }
  render() {
    return (
      <div>
        <AlbumNav onClick={this.handleClick}>
          {lyricData.map(album => {
            return <img key={album.title} data-album={album.title} src={album.image} />
          })}
        </AlbumNav>
        <SongList>
          {/* btw you could destructure the objects you pass to the map iterators 🤷‍♀️ */}
          {lyricData.map(album => {
            if (album.title === this.state.currentAlbum) {
              return (
                <div>
                  <h3>{album.title}</h3>
                  <ul>
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
