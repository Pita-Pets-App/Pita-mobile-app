const {Provider,Services}=require('../database-Sequelize/index')

const AllServices= async(req,res) => {
    try {
    const result=await Services.findAll({include:Provider})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneService= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Services.findOne({where:{id:req.params.id},include:Provider})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};


const AddService= async(req,res) => {
    try {
    const result=await Services.create(req.body)
    res.send(result.dataValues)
    } catch (error) {
    res.send(error)    
    }
};

const UpdateService= async(req,res) => {
    try {
    const result=await Services.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteService= async(req,res) => {
    try {
    const result=await Services.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllServices,OneService,AddService,UpdateService,DeleteService}