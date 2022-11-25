var mongoose=require("mongoose");

const review=new mongoose.Schema({
    starRating:{
        type:Number,
    },
    review:{
        type: String,
    },
    postedOn:{
        type: Date,
        default:Date.now()
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,ref:'User'
      } ,
    hotelId:{
        type: mongoose.Schema.Types.ObjectId,ref:'Hotel'
    } 
});

const Review= new mongoose.model('Review',review);

module.exports=Review;
