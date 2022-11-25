"use strict";
var mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
    },
    trips: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Trip' }],
    },
    bookings: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
    },
    preferences: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userPreference' }],
    },
    reviews: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    }
});
const User = new mongoose.model('User', userSchema);
module.exports = User;
