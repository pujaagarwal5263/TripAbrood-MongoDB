"use strict";
var mongoose = require("mongoose");
const TripSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
    },
    paxes: {
        type: Number,
        required: true
    },
    destination: {
        type: Array,
    },
    preference: {
        type: String,
        enum: ["Mountain", "Beach", "Countryside"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
});
const Trip = new mongoose.model('Trip', TripSchema);
module.exports = Trip;
