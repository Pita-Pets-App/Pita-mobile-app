const usersRoute = require('express').Router();
const {AllUsers,OneUser,AllUsersWithPets,UpdateUser,DeleteUser, updatePassword} = require('../controllers/users.controllers')
const {Login , Register}=require("../controllers/authController")


usersRoute.get("/users",AllUsers)
usersRoute.get("/users/pets",AllUsersWithPets)
usersRoute.get("/users/:id",OneUser)
// usersRoute.post('/users/register',Register)
// usersRoute.post("/users/login",Login)
usersRoute.post("/users/updatePassword/:id",updatePassword)
usersRoute.put("/users/:id",UpdateUser)
usersRoute.delete("/users/:id",DeleteUser)




 module.exports=usersRoute;