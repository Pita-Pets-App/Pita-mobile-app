const providerBRoute =require('express').Router()
const {AllProviderBf,AllTypeBf,OneProviderBf,RegisterProv,DeleteProviderBf,UpdateProviderBf}=require('../controllers/providerbefore.controllers')

providerBRoute.get("/providerBf",AllProviderBf)
providerBRoute.get("/providerBf/type/:type",AllTypeBf)
providerBRoute.get("/providerBf/:id",OneProviderBf)
providerBRoute.post("/providerBf",RegisterProv)
providerBRoute.put("/providerBf/:id",UpdateProviderBf)
providerBRoute.delete("/providerBf/:id",DeleteProviderBf)


module.exports=providerBRoute