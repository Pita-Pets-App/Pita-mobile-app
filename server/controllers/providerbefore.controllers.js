const { where } = require('sequelize');
const { default: axios } = require("axios");
const {ProviderBf, Services}=require('../database-Sequelize/index')

const AllProviderBf= async(req,res) => {
    try {
    const result=await ProviderBf.findAll({include:Services})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllTypeBf= async(req,res) => {
    try {
    const result=await ProviderBf.findAll({where:{serviceId:req.params.type}})
   
    res.json(result)
     
    } catch (error) {
    res.send(error)    
    }
};

const OneProviderBf= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Provider.findOne({where:{id:req.params.id}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const RegisterProv= async(req,res) => {
    try {
    const result=await ProviderBf.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};

const UpdateProviderBf= async(req,res) => {
    try {
    const result=await ProviderBf.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteProviderBf= async(req,res) => {
    try {
    const result=await ProviderBf.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllProviderBf,AllTypeBf,OneProviderBf,RegisterProv,DeleteProviderBf,UpdateProviderBf}