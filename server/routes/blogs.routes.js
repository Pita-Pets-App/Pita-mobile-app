const blogsRoute= require('express').Router()
const {AllBlogs,AllBlogsUser,OneBlog,AddBlog,DeleteBlog}=require('../controllers/blogs.controller.js')


blogsRoute.get('/blogs',AllBlogs)
blogsRoute.get('/blogs/user/:userId',AllBlogsUser)
blogsRoute.get('/blogs/:id',OneBlog)
blogsRoute.post('/blogs',AddBlog)
blogsRoute.delete('/blogs/:id',DeleteBlog)


module.exports=blogsRoute