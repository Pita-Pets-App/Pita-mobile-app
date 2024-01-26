const LikesLFRoute=require('express').Router()
const {AllLikes,AllPostLikes,AddLike,DeleteLike}=require('../controllers/likeslf.controller')

LikesLFRoute.get('/likes',AllLikes)
LikesLFRoute.get('/likes/:id',AllPostLikes)
LikesLFRoute.post('/likes',AddLike)
LikesLFRoute.delete('/likes/:idP/:idU',DeleteLike)

module.exports=LikesLFRoute