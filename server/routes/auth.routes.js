const {Login , Register}=require("../controllers/authController")
const authRoute = require('express').Router();


authRoute.post('/register',Register)
authRoute.post("/login",Login)


module.exports=authRoute;
