const { Op } = require('sequelize');
const {Users,Interested}=require('../database-Sequelize/index')


const AllInterssetEvent= async(req,res) => {
    try {
    const result=await Interested.findAll({where:{eventId:req.params.id},include:Users})
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
    const result=await Interested.destroy({
        where: {
            [Op.and]: [{ userId: req.params.userId }, { eventId: req.params.eventId}],
          },
    })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AddInters,DeleteInterrest,AllInterssetEvent}