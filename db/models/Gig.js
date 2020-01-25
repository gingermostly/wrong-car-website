const mongoose = require('mongoose');

const GigSchema = new mongoose.Schema({
    date: Date,
    city: String,
    state: String,
    country: String,
    venue: String,
    details: String
});

const GigModel = new mongoose.model('Gig', GigSchema);

module.exports = { GigModel, GigSchema }