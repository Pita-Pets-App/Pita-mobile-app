const {CommentLF, Users,LFA}=require('../database-Sequelize/index')
const { Op } = require("sequelize");
const AllComments= async(req,res) => {
    try {
    const result=await  CommentLF.findAll({include: [
        {model: Users},
        {model: LFA}
    ]})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllPostComments= async(req,res) => {
    try {
    const result=await CommentLF.findAll({include: [
        {model: Users},
        {model: LFA,where:{id:req.params.id}}
    ]})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddComment= async(req,res) => {
    try {
    const result=await CommentLF.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};


const DeleteComment= async(req,res) => {
    try {
    const result=await CommentLF.destroy({
        where: {
            [Op.and]: [{ userId: req.params.idU }, { lfaId: req.params.idP}],
          },
    })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllComments,AllPostComments,AddComment,DeleteComment}