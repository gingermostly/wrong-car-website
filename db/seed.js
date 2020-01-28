const mongoose = require('mongoose');
const db = require('../db/index.js');
const data = require('../db/data/lyrics.data.js');
const dotenv = require('dotenv');
dotenv.config();

const seedLyricsDatabase = () => {
    data.lyricData.map(item => {
        let album = new db.Album({
            id: item.id,
            image: item.image,
            title: item.title,
            songs: []
        })
        album.songs = item.songs.map(item => {
            return new db.Song({
                name: item.name,
                lyrics: item.lyrics
            })
        })
        album.save((err, item) => {
            if(err){
                console.error(err)
            }
            return item;
        })
    })
}

seedLyricsDatabase();
