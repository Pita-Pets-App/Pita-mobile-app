const {Users, Provider, Rate}=require('../database-Sequelize/index')

const AllRates= async(req,res) => {
    try {
    const result=await Rate.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const AllRatesProv= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Provider.findAll({where:{id:req.params.id},include:Users})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddRate= async(req,res) => {
    
    try {
    const result=await Rate.create(req.body)
    console.log(result);
    res.send(result.dataValues)
    } catch (error) {
    res.send(error)    
    }
};

const DeleteRate= async(req,res) => {
    try {
    const result=await Rate.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


module.exports={AddRate,AllRatesProv,AllRates,DeleteRate}