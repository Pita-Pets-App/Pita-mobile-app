const {Event,Users, Provider}=require('../database-Sequelize/index')


const AllEvents = async (req, res) => {
    try {
        const result = await Event.findAll({
            order: [['event_date', 'ASC']], 
        });

        const eventsWithOwners = result.map(async (el, i) => {
            const searchUserEmail = await Users.findOne({ where: { email: el.dataValues.email } });

            if (searchUserEmail) {
                el.dataValues.owner = searchUserEmail;
            } else {
                const searchProviderEmail = await Provider.findOne({ where: { email: el.dataValues.email } });

                if (searchProviderEmail) {
                    el.dataValues.owner = searchProviderEmail;
                } else {
                    el.dataValues.owner = "Error Finding Email of Event Creator";
                }
            }

            return el; 
        });

        const eventsWithEmail = await Promise.all(eventsWithOwners);

        res.json(eventsWithEmail);
    } catch (error) {
        res.send(error);
    }
}

const OneEvent = async (req, res) => {
    console.log("hh",req.params);
    try {
        const result = await Event.findOne({where:{id:req.params.id}});
        console.log("hhhh",result);
        


            const searchUserEmail = await Users.findOne({ where: { email: result.dataValues.email } });

            if (searchUserEmail) {
                result.dataValues.owner = searchUserEmail;
            } else {
                const searchProviderEmail = await Provider.findOne({ where: { email: result.dataValues.email } });

                if (searchProviderEmail) {
                    result.dataValues.owner = searchProviderEmail;
                } else {
                    result.dataValues.owner = "Error Finding Email of Event Creator";
                }
            }


        res.json(result);
    } catch (error) {
        res.send(error);
    }
}




const AddEvent= async(req,res) => {
    console.log('hi')
    try {
    const result=await Event.create(req.body)
    res.send(result)
    } catch (error) {
 throw error 
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

module.exports={AllEvents,OneEvent,AddEvent,UpdateEvent,DeleteLEvent}