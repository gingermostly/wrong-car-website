const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection.useDb('wrongcar');
db.on('error', (error) => console.error(error));
db.once('open', () => {
  console.log('connected, yay!')
});

const GigSchema = new mongoose.Schema({
  date: Date,
  city: String,
  country: String,
  venue: String,
  details: String
});

const SongSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lyrics: {
    type: String,
    required: true
  }
});

const AlbumSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  songs: [
    SongSchema
  ]
});

const Song = new mongoose.model('Song', SongSchema);

const Album = new mongoose.model('Album', AlbumSchema);

const Gig = new mongoose.model('Gig', GigSchema);

module.exports = { Gig, GigSchema, Song, SongSchema, Album, AlbumSchema }




