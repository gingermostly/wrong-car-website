const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected, yay!')
});

const gigSchema = {
    date: Date,
    city: String,
    state: String,
    country: String,
    venue: String,
    details: String
}

const Gig = mongoose.model('Gig', gigSchema);

let testGig = new Gig({
    date: '06/12/2016',
    city: 'Toronto',
    state: 'ON',
    country: 'Canada',
    venue: 'Woodbine Park',
    details: 'Bestival Music Festival - with the Cure'
});

testGig.save((err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})