"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    numOfReviews: {
        type: Number,
    },
    floors: {
        type: Number,
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    amenities: {
        type: Array
    },
    instructions: {
        type: String
    },
    how_to_reach: {
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    // photo:{
    //     type:Blob
    // },
    hotel_reviews: {
        type: [{ type: mongoose_1.Types.ObjectId, ref: 'Review' }],
    },
    bookings: {
        type: [{ type: mongoose_1.Types.ObjectId, ref: 'Booking' }],
    },
    destinationId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'
    }
});
const Hotel = new mongoose.model('Hotel', HotelSchema);
module.exports = Hotel;
