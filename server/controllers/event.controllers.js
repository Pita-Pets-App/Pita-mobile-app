const {Event,Users, Provider}=require('../database-Sequelize/index')


const AllEvents= async(req,res) => {
    try {
    const result=await Event.findAll({})
        
        const email =  result.map (async (el,i)=>{
            const searchUserEmail =await Users.findOne({where:{user_Email:el.dataValues.email}})
            if(searchUserEmail){
                el.dataValues.user = searchUserEmail
                console.log("el",el.dataValues.user);
            // } else {
            //     const searchProviderEmail=await Provider.findOne({where:{provider_email:el.dataValues.email}})
            //     if(searchProviderEmail){
            //         el.dataValues.user = searchProviderEmail
            // //     } else {
            //         el.dataValues.user = "Error Finding Email of Event Creator"
            //     }
            }
            
        })
        console.log("email",email);
    
    res.json(email)   
    } catch (error) {
    res.send(error)    
    }
    ///// DESC (get event by the newest one)
};



const AddEvent= async(req,res) => {
    try {
    const result=await Event.create(req.body)
    res.send(result)
    } catch (error) {
    res.send(error)    
    }
};

const UpdateEvent= async(req,res) => {
    try {
    const result=await Event.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteLEvent= async(req,res) => {
    try {
    const result=await Event.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={AllEvents,AddEvent,UpdateEvent,DeleteLEvent}