"use strict";
var mongoose = require("mongoose");
const destination = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    near_place: {
        type: Array,
    },
    attractions: {
        type: Array,
    },
    tripId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Trip'
    },
    hotels: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }],
    },
});
const Destination = new mongoose.model('Destination', destination);
module.exports = Destination;
