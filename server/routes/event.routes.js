const eventRoute= require('express').Router()
const {AllEvents,OneEvent,AddEvent,UpdateEvent,DeleteLEvent}=require('../controllers/event.controllers')


eventRoute.get('/events',AllEvents)
eventRoute.get('/events/:id',OneEvent)
eventRoute.post('/events',AddEvent)
eventRoute.put('/events',UpdateEvent)
eventRoute.delete('/events',DeleteLEvent)


module.exports=eventRoute