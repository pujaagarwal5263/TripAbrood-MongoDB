import { RequestHandler } from "express"

const UserData=require("../models/userSchema")
const Destination=require("../models/destination")
const Booking=require("../models/booking")
const Trip=require("../models/trip")
const Hotel=require("../models/hotel")
const Review=require("../models/review")
const Preference=require("../models/userPreference")

const addUser:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newUser= new UserData(data);
      const userRegister=await newUser.save();
      return res.status(200).json(newUser);
    }catch(err){
        console.log(err);
    }
}

const addDestination:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newDest= new Destination(data);
      const destination=await newDest.save();
      return res.status(200).json(destination);
    }catch(err){
        console.log(err);
    }
}

const addBooking:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newBooking= new Booking(data);
      const booking=await newBooking.save();
      return res.status(200).json(booking);
    }catch(err){
        console.log(err);
    }
}

const addTrip:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newTrip= new Trip(data);
      const trip=await newTrip.save();
      return res.status(200).json(trip);
    }catch(err){
        console.log(err);
    }
}

const addHotel:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newHotel= new Hotel(data);
      const hotel=await newHotel.save();
      return res.status(200).json(hotel);
    }catch(err){
        console.log(err);
    }
}

const addReview:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newReview= new Review(data);
      const review=await newReview.save();
      return res.status(200).json(review);
    }catch(err){
        console.log(err);
    }
}

const addPreference:RequestHandler=async(req,res)=>{
    try{
      let data=req.body;
      let newpref= new Preference(data);
      const preference=await newpref.save();
      return res.status(200).json(preference);
    }catch(err){
        console.log(err);
    }
}

const getHotels:RequestHandler=async(req,res)=>{
    try{
       let data=await Hotel.find().populate([{path:'destinationId',select:['name','address','contact']},{path:'bookings'},{path:'hotel_reviews'}]);
       return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const getDestination:RequestHandler=async(req,res)=>{
    try{
       let data=await Destination.find().populate([{path:'tripId',select:['place','paxes','destination']},{path:'hotels'}]);
       return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const getTrip:RequestHandler=async(req,res)=>{
    try{
       let data=await Trip.find().populate({path:'userId'});
       return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const getBooking:RequestHandler=async(req,res)=>{
    try{
       let data=await Booking.find().populate([{path:'userId',select:['name','email','contact']},{path:'hotelId'}]);
       return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

const getReview:RequestHandler=async(req,res)=>{
    try{
       let data=await Review.find().populate([{path:'userId'},{path:'hotelId'}]);
       return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}


const getUsers:RequestHandler=async(req,res)=>{
    try{
       let data=await UserData.find().populate([{path:'trips'},{path:'bookings'},{path:'preferences'},{path:'reviews'}]);
       return res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

module.exports={addUser,addDestination,addBooking,addTrip,addHotel,addReview,addPreference,
    getHotels,getDestination,getTrip,getBooking,getReview,getUsers}