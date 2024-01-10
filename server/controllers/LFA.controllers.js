const {LFA,Users}=require('../database-Sequelize/index')
const { Op } = require("sequelize");

const AllAdp= async(req,res) => {
    try {
    const result=await LFA.findAll({ where: {
        status: {
          [Op.or]: ["Not Adopted","Adopted"]
        }
      },include:Users})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllLF= async(req,res) => {
    try {
        const result=await LFA.findAll({ where: {
            status: {
              [Op.or]: ["Lost","Found"]
            }
          },include:Users})
        res.json(result)   
        } catch (error) {
        res.send(error)    
        }
    };


const OneLFA= async(req,res) => {
    try {
    const result=await LFA.findOne({where:{id:req.params.id},include:Users})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddLFA= async(req,res) => {
    try {
    const result=await LFA.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};

const UpdateLFA= async(req,res) => {
    try {
    const result=await LFA.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteLFA= async(req,res) => {
    try {
    const result=await LFA.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AddLFA,AllAdp,AllLF,UpdateLFA,DeleteLFA,OneLFA}