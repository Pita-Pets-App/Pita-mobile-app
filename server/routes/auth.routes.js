const {Login , Register, LoginProvider}=require("../controllers/authController")
const authRoute = require('express').Router();


authRoute.post('/register',Register)
authRoute.post("/login",Login)
authRoute.post("/loginProvider",LoginProvider)


module.exports=authRoute;
