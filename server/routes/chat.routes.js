const ChatRoute=require('express').Router()
const {GetConv,getAllRomsOfUser,Addmsg}=require('../controllers/chat.controller')


ChatRoute.put('/Chat/:user',GetConv)
ChatRoute.put('/Rooms/:id',getAllRomsOfUser)
// ChatRoute.get('/LFA/:id',OneLFA)
ChatRoute.post('/Chat',Addmsg)
// ChatRoute.put('/LFA/:id',UpdateLFA)
// ChatRoute.delete('/LFA/:id',DeleteLFA)

module.exports=ChatRoute