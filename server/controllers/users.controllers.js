const {Users, Pets}=require('../database-Sequelize/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

  
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
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


// const UpdateUser = async (req, res) => {
//     const userId = req.params.id;
//     const { password, fname, lname} = req.body;

//     try {
//         if (!password) {
           
//             await Users.update(req.body,{ where: { id: userId } });

//         } else {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             const newUser = {
//               fname,
//             }
//             await Users.update(otherUpdateFields, { where: { id: userId } });
//         }

//         const result = await Users.findOne({ where: { id: userId } });

//         if (result) {
//             res.json(result);
//         } else {
//             res.json({ message: 'No user was updated.' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };



const DeleteUser= async(req,res) => {
    try {
    const result=await Users.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const UpdateUser = async (req, res) => {
    const userId = req.params.id;
    const { user_password, fname, lname, image } = req.body;

    try {
        let updateFields = {};

        if (fname) {
            updateFields.fname = fname;
        }

        if (lname) {
            updateFields.lname = lname;
        }
        
        if (image) {
            updateFields.image = image
        }

        if (user_password) {
            const hashedPassword = await bcrypt.hash(user_password, 10);
            console.log("hash",hashedPassword);
            updateFields.user_password = hashedPassword;
        }

       await Users.update(req.body, { where: { id: userId } });
    //    console.log();
        const result = await Users.findOne({ where: { id: userId },include: Pets  });
        console.log('pets',result);
         
        if (result) {
            res.json(result);
        } else {
            res.json({ message: 'No user was updated.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};





module.exports={AllUsers,OneUser,AllUsersWithPets,createUser,UpdateUser,DeleteUser}