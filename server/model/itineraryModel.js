const mongoose = require('mongoose')
const itinerarySchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        // unique: true
    },
    city: {
        type: String,
        // required: true
    },
    city_id: {
        type: String,
        // required: true,
        // unique: true
    },
    country: {
        type: String,
        // required: true
    },
    username: {
        type: String,
        // required: true
    },
    photo: {
        type: String,
        // required: true
    },
    rating: {
        type: Number,
        // required: true
    },
    duration: {
        type: Number,
        // required: true
    },
    price: {
        type: String,
        // // required: true
    },
    hashtags: {
        type: String
    },
})

//name of module is the singular version (itinerary) of the database name (itineraries)
module.exports = mongoose.model('itinerary', itinerarySchema)