var mongoose=require("mongoose");

const booking=new mongoose.Schema({
    payment_ref:{
        type:String,
        required:true
    },
    startDate:{
        type: Date,
        default:Date.now()
    },
    endDate:{
        type: Date,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,ref:'User'
      } ,
    hotelId:{
        type: mongoose.Schema.Types.ObjectId,ref:'Hotel'
    }   
});

const Booking= new mongoose.model('Booking',booking);

module.exports=Booking;
