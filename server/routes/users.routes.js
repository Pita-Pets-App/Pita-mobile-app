const usersRoute = require('express').Router();
const {AllUsers,OneUser,AllUsersWithPets,AddUser,UpdateUser,DeleteUser} = require('../controllers/users.controllers')

usersRoute.get("/users",AllUsers)
usersRoute.get("/users/pets",AllUsersWithPets)
usersRoute.get("/users/:id",OneUser)
usersRoute.post("/users",AddUser)
usersRoute.put("/users/:id",UpdateUser)
usersRoute.delete("/users/:id",DeleteUser)




 module.exports=usersRoute;