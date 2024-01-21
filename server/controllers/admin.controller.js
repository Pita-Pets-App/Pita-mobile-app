const {Admin}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (id, name) => {
    const expiresIn = 60 * 60 * 48;//2days
    return jwt.sign({ id, name }, 'secretKey', { expiresIn: expiresIn });
  };
  const UpdateAdmin= async(req,res) => {
    try {
    const result=await Admin.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};
  const AddAdmin = async (req, res) => {
    const { name,  email, admin_password  } = req.body;
    console.log(name,email,admin_password);
    try {
      const hashedPassword = await bcrypt.hash(admin_password, 10);
  
      const newUser = {
        name,
        email,
        image:'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        admin_password: hashedPassword}
       const result=await Admin.create(newUser)
       res.send(result)
    } catch (error) {
     
      res.status(500).json({ error: 'Error' });
    }
  };
  const LoginAdmin = async(req, res) => {
    const{email,admin_password}=req.body;
    try {
         const result= await Admin.findOne({ where :{email:email}})
         if(result ===null) res.send("email not found")
         else {
          const verif=result.dataValues.admin_password
          const passwordMatch = await bcrypt.compare(admin_password,verif)
          if(passwordMatch){

             const token=generateToken(result.dataValues.id,result.dataValues.user_name)  
             result.dataValues.token=token
            res.send(result.dataValues)
          }
          else{
            res.send("password wrong")
          }
          
      }
    
    }
    catch (error) {res.status(500).json(error)}
}
module.exports = {AddAdmin , LoginAdmin ,UpdateAdmin}