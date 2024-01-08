const {Pets, Users}=require('../database-Sequelize/index')

const AllPets= async(req,res) => {
    try {
    const result=await Pets.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllPetsUser= async(req,res) => {
    try {
    const result=await Pets.findAll({where:{userId:req.params.id},include:Users})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const OnePet= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Pets.findOne({where:{id:req.params.id},include:Users})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddPet= async(req,res) => {
    try {
    const result=await Pets.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};

const UpdatePet= async(req,res) => {
    try {
    const result=await Pets.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeletePet= async(req,res) => {
    try {
    const result=await Pets.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={OnePet,AllPetsUser,AllPets,AddPet,UpdatePet,DeletePet}