const intersRoute= require('express').Router()
const {AllInterssetEvent,DeleteInterrest,AddInters}=require('../controllers/interessed.controller.js')


intersRoute.get('/interested/:id',AllInterssetEvent)
intersRoute.post('/interested',AddInters)
intersRoute.delete('/interested/:userId/:eventId',DeleteInterrest)


module.exports=intersRoute