"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserData = require("../models/userSchema");
const Destination = require("../models/destination");
const Booking = require("../models/booking");
const Trip = require("../models/trip");
const Hotel = require("../models/hotel");
const Review = require("../models/review");
const Preference = require("../models/userPreference");
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newUser = new UserData(data);
        const userRegister = yield newUser.save();
        return res.status(200).json(newUser);
    }
    catch (err) {
        console.log(err);
    }
});
const addDestination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newDest = new Destination(data);
        const destination = yield newDest.save();
        return res.status(200).json(destination);
    }
    catch (err) {
        console.log(err);
    }
});
const addBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newBooking = new Booking(data);
        const booking = yield newBooking.save();
        return res.status(200).json(booking);
    }
    catch (err) {
        console.log(err);
    }
});
const addTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newTrip = new Trip(data);
        const trip = yield newTrip.save();
        return res.status(200).json(trip);
    }
    catch (err) {
        console.log(err);
    }
});
const addHotel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newHotel = new Hotel(data);
        const hotel = yield newHotel.save();
        return res.status(200).json(hotel);
    }
    catch (err) {
        console.log(err);
    }
});
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newReview = new Review(data);
        const review = yield newReview.save();
        return res.status(200).json(review);
    }
    catch (err) {
        console.log(err);
    }
});
const addPreference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let newpref = new Preference(data);
        const preference = yield newpref.save();
        return res.status(200).json(preference);
    }
    catch (err) {
        console.log(err);
    }
});
const getHotels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield Hotel.find().populate([{ path: 'destinationId', select: ['name', 'address', 'contact'] }, { path: 'bookings' }, { path: 'hotel_reviews' }]);
        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});
const getDestination = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield Destination.find().populate([{ path: 'tripId', select: ['place', 'paxes', 'destination'] }, { path: 'hotels' }]);
        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});
const getTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield Trip.find().populate({ path: 'userId' });
        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield Booking.find().populate([{ path: 'userId', select: ['name', 'email', 'contact'] }, { path: 'hotelId' }]);
        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});
const getReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield Review.find().populate([{ path: 'userId' }, { path: 'hotelId' }]);
        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield UserData.find().populate([{ path: 'trips' }, { path: 'bookings' }, { path: 'preferences' }, { path: 'reviews' }]);
        return res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
    }
});
module.exports = { addUser, addDestination, addBooking, addTrip, addHotel, addReview, addPreference,
    getHotels, getDestination, getTrip, getBooking, getReview, getUsers };
