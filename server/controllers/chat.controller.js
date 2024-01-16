const { Chat, Users } = require("../database-Sequelize/index");
const { Op } = require("sequelize");

const GetConv = async (req, res) => {
  try {
    const result = await Chat.findAll({
      where: {
        [Op.or]: [
          {
            [Op.and]: [{ user1: req.params.user }, { user2: req.body.reciver }],
          },
          {
            [Op.and]: [{ user1: req.body.reciver }, { user2: req.params.user }],
          },
        ],
      },
    });
    const other = await Users.findOne({where:{id:req.body.reciver}})
    result.unshift(other)

    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

const getAllRomsOfUser=async (req,res)=>{
    let arr=[]
    try {
        const result = await Chat.findAll({
            where: {
              [Op.or]: [{ user1: req.params.id }, { user2: req.params.id }],
            },
            order: [['createdAt', 'DESC']],
          });
        const ids=await result.map((el)=>{
            if(!arr.includes(el.user1)&&(el.user1!=req.params.id)){
                arr.push(el)
            }
            if(!arr.includes(el.user2)&&(el.user2!=req.params.id)){
                arr.push(el)
            }
            console.log(arr);
        })
        const final=await Users.findAll({where:{id:arr}})
        res.send(arr) 
    } catch (error) {
        res.send(error)
    }
    
}

const Addmsg = async (req, res) => {
  try {
    const result = await Chat.create(req.body);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
};

// const OneEvent = async (req, res) => {
//     console.log("hh",req.params);
//     try {
//         const result = await Event.findOne({where:{id:req.params.id}});
//         console.log("hhhh",result);

//             const searchUserEmail = await Users.findOne({ where: { email: result.dataValues.email } });

//             if (searchUserEmail) {
//                 result.dataValues.owner = searchUserEmail;
//             } else {
//                 const searchProviderEmail = await Provider.findOne({ where: { email: result.dataValues.email } });

//                 if (searchProviderEmail) {
//                     result.dataValues.owner = searchProviderEmail;
//                 } else {
//                     result.dataValues.owner = "Error Finding Email of Event Creator";
//                 }
//             }

//         res.json(result);
//     } catch (error) {
//         res.send(error);
//     }
// }

// const UpdateEvent= async(req,res) => {
//     try {
//     const result=await Event.update(req.body,{where:req.params})
//     res.json(result)
//     } catch (error) {
//     res.send(error)
//     }
// };

// const DeleteLEvent= async(req,res) => {
//     try {
//     const result=await Event.destroy({where:req.params})
//     res.json(result)
//     } catch (error) {
//     res.send(error)
//     }
// };

module.exports = { GetConv, Addmsg ,getAllRomsOfUser};
