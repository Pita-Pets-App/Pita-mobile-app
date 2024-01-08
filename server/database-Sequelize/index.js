const { Sequelize, DataTypes } = require("sequelize");
const config = require('../config/config.js')

const connection = new Sequelize(config.database,config.user,config.password,{
    host: "127.0.0.1",
    dialect: "mysql",
    logging:false
  }
);



const PetsApp={}
PetsApp.connection=connection
PetsApp.Sequelize=Sequelize
PetsApp.Users = require ('./users.js')(connection,DataTypes)
PetsApp.Pets = require ('./pets.js')(connection,DataTypes)
PetsApp.Provider = require ('./provider.js')(connection,DataTypes)
PetsApp.LFA = require ('./LFA.js')(connection,DataTypes)
PetsApp.Rate = require ('./rate.js')(connection,DataTypes)
PetsApp.Event = require ('./event.js')(connection,DataTypes)
PetsApp.Chat = require ('./chat.js')(connection,DataTypes)

// relation between User 1:n Pets
PetsApp.Users.hasMany(PetsApp.Pets)
PetsApp.Pets.belongsTo(PetsApp.Users)

// Rate: relation between User n:m  Provider
PetsApp.Users.belongsToMany(PetsApp.Provider ,{ through: PetsApp.Rate  })
PetsApp.Provider.belongsToMany(PetsApp.Users ,{ through: PetsApp.Rate })

// relation between User 1:n LFA(lost and found and adoption)
PetsApp.Users.hasMany(PetsApp.LFA)
PetsApp.LFA.belongsTo(PetsApp.Users)

// Chat: relation between User n:n User
PetsApp.Users.belongsToMany(PetsApp.Users ,{ as: 'user2',through: PetsApp.Chat,foreignKey: 'user1'  })
PetsApp.Users.belongsToMany(PetsApp.Users ,{ as: "user1",through: PetsApp.Chat,foreignKey: 'user2' })



PetsApp.connection.authenticate()

PetsApp.connection.sync({ force: false })
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports=PetsApp
