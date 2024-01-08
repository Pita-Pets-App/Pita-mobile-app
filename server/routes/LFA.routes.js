const LFARoute=require('express').Router()
const {AddLFA,AllAdp,AllLF,OneLFA,UpdateLFA,DeleteLFA}=require('../controllers/LFA.controllers')


LFARoute.get('/LF',AllLF)
LFARoute.get('/Adp',AllAdp)
LFARoute.get('/LFA/:id',OneLFA)
LFARoute.post('/LFA',AddLFA)
LFARoute.put('/LFA/:id',UpdateLFA)
LFARoute.delete('/LFA/:id',DeleteLFA)

module.exports=LFARoute