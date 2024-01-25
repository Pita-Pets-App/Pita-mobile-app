const { where } = require('sequelize');
const { default: axios } = require("axios");
const {Provider}=require('../database-Sequelize/index')
const bcrypt = require('bcrypt')

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
    const result=await Provider.findAll({where:{serviceId:req.params.type}})
    const add=result.map(async(el)=>{
        const wait=await axios.get(`http://localhost:3000/api/rates/moy/${el.id}`)
        el.dataValues.review=wait.data
        console.log(el);
        return el
    })
    Promise.all(add).then((resss)=>{res.json(resss);})
     
    } catch (error) {
    res.send(error)    
    }
};

const OneProvider= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Provider.findOne({where:{id:req.params.id}})
    const wait=await axios.get(`http://localhost:3000/api/rates/moy/${req.params.id}`)
    result.dataValues.review=wait.data
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};



const getAllVeto= async(req,res) => {
    try {
    const result=await Provider.findAll({where:{serviceId:1}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddProvider= async(req,res) => {
    const { fname, lname,  email, image, provider_langitude, provider_lattitude,provider_description, provider_password  } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(provider_password, 10);
        const provider = {
            fname,
            lname,
            email,
            provider_langitude,
            provider_lattitude,
            provider_description,
            image,
            provider_password: hashedPassword
        }
    const result = await Provider.create(provider)
    res.send(result)
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

module.exports={AllProvider,AllType,OneProvider,AddProvider,DeleteProvider,UpdateProvider,getAllVeto}