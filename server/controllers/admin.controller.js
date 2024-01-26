const {Admin, ProviderBf, Provider}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = require('../email/sendEmail')
const fs = require('fs');
const path = require('path');

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
const UpdatePassword = async (req, res) => {
  const { newPassword } = req.body;
  const { id } = req.params; 

  try {
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await Admin.update({ admin_password: hashedNewPassword }, { where: { id } });

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const acceptProviderRegistration = async (req, res) => {
  const providerId  = req.params.id;
  // console.log("idd",providerId);
  try {
    const provBF = await ProviderBf.findOne({ where: { id: providerId } });
    // console.log("provider bef",provBF);
    if(!provBF) {
      return res.status(404).json({message: 'Provider not found'});
    } 
    const {fname, lname, email, provider_password} = provBF.dataValues
    const providedData = {
      fname: fname ,
      lname:lname,
      email: email,
      provider_password: provider_password,
      image:['https://cdn-icons-png.flaticon.com/512/149/149071.png'],
      provider_experience:'',
      provider_langitude:'',
      provider_lattitude:'',
      provider_description:''
    }
    console.log("provider data",providedData);

    const newProvider = await Provider.create(providedData) 
    if(!newProvider) {
      return res.status(404).json({message:'Operation failed, Try again!'})
    }
    const recipientEmail = newProvider.email
    console.log("emailProv",recipientEmail);
    const subject = 'Registration Accepted';
    const htmlContent = fs.readFileSync(path.join(__dirname, '../utils/acceptanceEmail.html'), { encoding: 'utf8', flag: 'r' });

    await sendEmail(recipientEmail, subject, htmlContent )

    await provBF.destroy();
    
    return res.status(200).json({ message: 'Email sent, provider accepted, and providerbf record removed' });

  } catch (error) {
    console.error('Error accepting provider:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { AddAdmin, LoginAdmin, UpdateAdmin, UpdatePassword, acceptProviderRegistration };