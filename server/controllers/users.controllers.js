const {Users, Pets}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateToken = (id, fname) => {
    const expiresIn = 60 * 60 * 48;
    return jwt.sign({ id, fname }, 'secretKey', { expiresIn: expiresIn });
  };

  
const AllUsers= async(req,res) => {
    try {
    const result=await Users.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
const OneUser= async(req,res) => {
    console.log(req.params);
    try {
    const result=await Users.findOne({where:{id:req.params.id}, include: Pets })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const AllUsersWithPets= async(req,res) => {
    try {
    const result=await Users.findAll({ include: Pets })
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const createUser =async (req, res) =>{
  console.log(req.body,"req")
    try {
      const newUser = await Users.create({fname:req.body.fname,lname:req.body.lname,email:req.body.email,image:req.body.image,user_password:req.body.user_password});
     
      const token = generateToken(newUser.id,newUser.fname);
      newUser.dataValues.token=token
      res.status(201).send(newUser);
    } catch (error) {
    throw error
      res.status(400).json({ error: error.message });
   
    }
  }

const UpdateUser= async(req,res) => {
    try {
    const result=await Users.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const DeleteUser= async(req,res) => {
    try {
    const result=await Users.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await Users.findOne({
      where: { id : id },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("userr",user);
    console.log("userpassword in controller",user.user_password);
    const passwordMatch = await bcrypt.compare(currentPassword, user.user_password);

    if (!passwordMatch) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await user.update({ password: hashedNewPassword });

    return res.status(200).json({ message: 'Password updated successfully' });

  } catch (error) {

    console.error('Error updating password:', error);
    
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports={AllUsers,OneUser,AllUsersWithPets,createUser,UpdateUser,DeleteUser, updatePassword}