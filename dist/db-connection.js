"use strict";
var mongoose = require("mongoose");
mongoose.connect("mongodb://mongo:27017/tripAbrood").then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log("No Connection to Database");
});
