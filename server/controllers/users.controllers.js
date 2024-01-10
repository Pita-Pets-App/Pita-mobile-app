const {Users, Pets}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateToken = (id, user_fname) => {
    const expiresIn = 60 * 60 * 48;//2days
    return jwt.sign({ id, user_fname }, 'secretKey', { expiresIn: expiresIn });
  };

  
const AllUsers= async(req,res) => {
    try {
    const result=await Users.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const OneUser= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Users.findOne({where:{id:req.params.id}, include: Pets })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllUsersWithPets= async(req,res) => {
    try {
    const result=await Users.findAll({ include: Pets })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const createUser =async (req, res) =>{
  
    try {
      const newUser = await Users.create({user_fname:req.body.user_fname,user_lname:req.body.user_lname,user_Email:req.body.user_Email,user_image:req.body.user_image,user_password:req.body.user_password});
     
      const token = generateToken(newUser.id,newUser.user_fname);
      newUser.dataValues.token=token
      res.status(201).send(newUser);
    } catch (error) {
    
      res.status(400).json({ error: error.message });
   
    }
  }

const UpdateUser= async(req,res) => {
    try {
    const result=await Users.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteUser= async(req,res) => {
    try {
    const result=await Users.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllUsers,OneUser,AllUsersWithPets,createUser,UpdateUser,DeleteUser}