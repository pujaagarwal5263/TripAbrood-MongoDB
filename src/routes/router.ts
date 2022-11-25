import Express from "express";

var router = Express.Router();

var {addUser,addDestination,addBooking,addTrip,addHotel,addReview,addPreference,
    getHotels,getDestination,getTrip,getBooking,getReview,getUsers}=require("../controllers/dataController")

router.get("/getHotels",getHotels)
router.get("/getDestination",getDestination)
router.get("/getTrips",getTrip)
router.get("/getBooking",getBooking)
router.get("/getReview",getReview)
router.get("/getUsers",getUsers)

router.post("/addUser",addUser)
router.post("/addDestination",addDestination)
router.post("/addBooking",addBooking)
router.post("/addTrip",addTrip)
router.post("/addHotel",addHotel)
router.post("/addReview",addReview)
router.post("/addPreference",addPreference)

module.exports = router;