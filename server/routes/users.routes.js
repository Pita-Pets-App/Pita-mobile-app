const usersRoute = require('express').Router();
const {AllUsers,OneUser,AllUsersWithPets,UpdateUser,DeleteUser, updatePassword} = require('../controllers/users.controllers')
const checkPassword = require('../middlewares/checkPassword')

usersRoute.get("/users",AllUsers)
usersRoute.get("/users/pets",AllUsersWithPets)
usersRoute.get("/users/:id",OneUser)
// usersRoute.post("/users/updatePassword/:id",updatePassword)
usersRoute.put("/users/:id", UpdateUser) //to add the middelware
usersRoute.delete("/users/:id",DeleteUser)




 module.exports=usersRoute;