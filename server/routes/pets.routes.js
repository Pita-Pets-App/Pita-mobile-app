const petRoute = require("express").Router()
const {OnePet,AllPetsUser,AllPets,AddPet,UpdatePet,DeletePet}=require('../controllers/pets.controllers.js')



petRoute.get("/pets",AllPets)
petRoute.get("/pets/user/:id",AllPetsUser)
petRoute.get("/pets/:id",OnePet)
petRoute.post("/pets",AddPet)
petRoute.put("/pets/:id",UpdatePet)
petRoute.delete("/pets/:id",DeletePet)




 module.exports=petRoute;