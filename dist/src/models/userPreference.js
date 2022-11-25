"use strict";
var mongoose = require("mongoose");
const userPreference = new mongoose.Schema({
    preference: {
        type: String,
    },
});
const Preference = new mongoose.model('userPreference', userPreference);
module.exports = Preference;
