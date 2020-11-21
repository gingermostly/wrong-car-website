const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/gigs', (req, res) => {
  let gig = new db.Gig({
    date: req.body.date,
    city: req.body.city,
    country: req.body.country,
    venue: req.body.venue,
    details: req.body.details
  });
  gig.save((err, data) => {
    if(err) {
      console.error(err)
    }
    res.json(data)
  })
})

app.get('/albums', (req, res) => {
  db.Album.find({}, (err, data) => {
    if (err) {
      console.error(err)
    }
    res.json(data)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});



app.listen(port, () => console.log(`listening on port ${port}!`));
