const {Provider, Blogs}=require('../database-Sequelize/index')


const AllBlogs= async(req,res) => {
    try {
    const result=await Blogs.findAll({include:Provider})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllBlogsUser= async(req,res) => {
    try {
    const result=await Blogs.findAll({where:{providerId:req.params.userId},include:Provider})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneBlog= async(req,res) => {
    try {
    const result=await Blogs.findOne({where:{id:req.params.id},include:Provider})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddBlog= async(req,res) => {
    try {
    const result=await Blogs.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};



const DeleteBlog= async(req,res) => {
    try {
    const result=await Blogs.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllBlogs,AllBlogsUser,OneBlog,AddBlog,DeleteBlog}