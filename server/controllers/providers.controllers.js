const { where } = require('sequelize');
const {Provider}=require('../database-Sequelize/index')

const AllProvider= async(req,res) => {
    try {
    const result=await Provider.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllType= async(req,res) => {
    try {
    const result=await Provider.findAll({where:{provider_type:req.params.type}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneProvider= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Provider.findOne({where:{id:req.params.id}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddProvider= async(req,res) => {
    try {
    const result=await Provider.create(req.body)
    res.send(result.dataValues)
    } catch (error) {
    res.send(error)    
    }
};

const UpdateProvider= async(req,res) => {
    try {
    const result=await Provider.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteProvider= async(req,res) => {
    try {
    const result=await Provider.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllProvider,AllType,OneProvider,AddProvider,DeleteProvider,UpdateProvider}