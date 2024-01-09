const {Event,Users, Provider}=require('../database-Sequelize/index')


const AllEvents = async (req, res) => {
    try {
        const result = await Event.findAll({ //get Events sorted by the most closest ones 
            order: [['event_date', 'ASC']], 
        });

        const emailPromises = result.map(async (el, i) => {
            const searchUserEmail = await Users.findOne({ where: { user_Email: el.dataValues.email } });

            if (searchUserEmail) {
                el.dataValues.owner = searchUserEmail;
            } else {
                const searchProviderEmail = await Provider.findOne({ where: { provider_email: el.dataValues.email } });

                if (searchProviderEmail) {
                    el.dataValues.owner = searchProviderEmail;
                } else {
                    el.dataValues.owner = "Error Finding Email of Event Creator";
                }
            }

            return el; 
        });

        const eventsWithEmail = await Promise.all(emailPromises);

        console.log("email", eventsWithEmail);
        res.json(eventsWithEmail);
    } catch (error) {
        res.send(error);
    }
}



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