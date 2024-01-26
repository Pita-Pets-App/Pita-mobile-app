const CommentlfRoute=require('express').Router()
const{AllComments,AllPostComments,AddComment,DeleteComment} =require('../controllers/commentlf.controller')

CommentlfRoute.get('/comments',AllComments)
CommentlfRoute.get('/comments/:id',AllPostComments)
CommentlfRoute.post('/comments',AddComment)
CommentlfRoute.delete('/comments/:idP/:idU',DeleteComment)

module.exports=CommentlfRoute