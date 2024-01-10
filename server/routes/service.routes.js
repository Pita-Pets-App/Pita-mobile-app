const serviceRoute = require("express").Router()
const {AllServices,OneService,AddService,UpdateService,DeleteService}=require('../controllers/services.controller')



serviceRoute.get("/service",AllServices)
serviceRoute.get("/service/:id",OneService)
serviceRoute.post("/service",AddService)
serviceRoute.put("/service/:id",UpdateService)
serviceRoute.delete("/service/:id",DeleteService)





 module.exports=serviceRoute;