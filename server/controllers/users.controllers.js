const {Users, Pets}=require('../database-Sequelize/index')

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

const AddUser= async(req,res) => {
    try {
    const result=await Users.create(req.body)
    res.send(result.dataValues)
    } catch (error) {
    res.send(error)    
    }
};

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

module.exports={AllUsers,OneUser,AllUsersWithPets,AddUser,UpdateUser,DeleteUser}