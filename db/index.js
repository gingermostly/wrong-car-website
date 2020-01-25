const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => {
  console.log('connected, yay!')
});

const GigSchema = new mongoose.Schema({
  date: Date,
  city: String,
  state: String,
  country: String,
  venue: String,
  details: String
});

const Gig = new mongoose.model('Gig', GigSchema);

module.exports = { Gig, GigSchema }




