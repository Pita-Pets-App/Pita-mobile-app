const {Users,Interested}=require('../database-Sequelize/index')


const AllInterssetEvent= async(req,res) => {
    try {
    const result=await Interested.findAll({where:{userId:req.params.id},include:Users})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AddInters= async(req,res) => {
    try {
    const result=await Interested.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};



const DeleteInterrest= async(req,res) => {
    try {
    const result=await Interested.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AddInters,DeleteInterrest,AllInterssetEvent}