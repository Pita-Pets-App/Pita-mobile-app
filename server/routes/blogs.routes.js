const blogsRoute= require('express').Router()
const {AllBlogs,AllBlogsUser,OneBlog,AddBlog,DeleteBlog}=require('../controllers/blogs.controller.js')


blogsRoute.get('/interested',AllBlogs)
blogsRoute.get('/interested/:userId',AllBlogsUser)
blogsRoute.get('/interested/:id',OneBlog)
blogsRoute.post('/interested',AddBlog)
blogsRoute.delete('/events/:id',DeleteBlog)


module.exports=blogsRoute