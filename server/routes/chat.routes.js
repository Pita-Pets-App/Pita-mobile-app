const ChatRoute=require('express').Router()
const {GetConv,getAllRomsOfUser,Addmsg}=require('../controllers/chat.controller')


ChatRoute.put('/Chat/:user',GetConv)
ChatRoute.put('/Rooms/:id',getAllRomsOfUser)
ChatRoute.post('/Chat',Addmsg)


module.exports=ChatRoute