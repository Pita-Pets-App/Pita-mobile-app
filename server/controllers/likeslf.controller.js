const {LikesLF, Users,LFA}=require('../database-Sequelize/index')
const { Op } = require("sequelize");
const AllLikes= async(req,res) => {
    try {
    const result=await LikesLF.findAll({include: [
        {model: Users},
        {model: LFA}
    ]})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllPostLikes= async(req,res) => {
    try {
    const result=await LikesLF.findAll({include: [
        {model: Users},
        {model: LFA,where:{id:req.params.id}}
    ]})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddLike= async(req,res) => {
    try {
    const result=await LikesLF.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};


const DeleteLike= async(req,res) => {
    try {
    const result=await LikesLF.destroy({
        where: {
            [Op.and]: [{ userId: req.params.idU }, { lfaId: req.params.idP}],
          },
    })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllLikes,AllPostLikes,AddLike,DeleteLike}