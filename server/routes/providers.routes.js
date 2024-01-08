const providerRoute =require('express').Router()
const {AllProvider,AllType,OneProvider,AddProvider,DeleteProvider,UpdateProvider}=require('../controllers/providers.controllers')


providerRoute.get("/provider",AllProvider)
providerRoute.get("/provider/type/:type",AllType)
providerRoute.get("/provider/:id",OneProvider)
providerRoute.post("/provider",AddProvider)
providerRoute.put("/provider/:id",UpdateProvider)
providerRoute.delete("/provider/:id",DeleteProvider)


module.exports=providerRoute