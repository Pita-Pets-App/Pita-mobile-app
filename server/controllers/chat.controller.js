const { default: axios } = require("axios");
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

const getAllData= (arr)=>{
  return arr.map((el)=>{
    return el.data
  })
}

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
                arr.push(el.user1)
            }
            if(!arr.includes(el.user2)&&(el.user2!=req.params.id)){
                arr.push(el.user2)
            }
            console.log(arr);
        })
        const finalarr= arr.map((el)=>{
        return  axios.put(`http://localhost:3000/api/Chat/${req.params.id}`,{reciver:el})
          
        }) 
        const final=Promise.all(finalarr).then((ress)=>{
          
          res.json(getAllData(ress))})

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


module.exports = { GetConv, Addmsg ,getAllRomsOfUser};
