const rateRoute = require("express").Router()
const {AddRate,AllRatesProv,AllRates,DeleteRate,MoyRatesProv}=require('../controllers/rate.controllers')



rateRoute.get("/rates",AllRates)
rateRoute.get("/rates/:id",AllRatesProv)
rateRoute.get("/rates/moy/:id",MoyRatesProv)
rateRoute.post("/rates",AddRate)
rateRoute.delete("/rates/:id",DeleteRate)





 module.exports=rateRoute;