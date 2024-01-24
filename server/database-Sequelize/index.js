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
PetsApp.ProviderBf = require ('./providerbefore.js')(connection,DataTypes)
PetsApp.LFA = require ('./LFA.js')(connection,DataTypes)
PetsApp.Rate = require ('./rate.js')(connection,DataTypes)
PetsApp.Event = require ('./event.js')(connection,DataTypes)
PetsApp.Services = require ('./services.js')(connection,DataTypes)
PetsApp.Chat = require ('./chat.js')(connection,DataTypes)
PetsApp.Admin = require ('./admin.js')(connection,DataTypes)

// relation between User 1:n Pets
PetsApp.Users.hasMany(PetsApp.Pets)
PetsApp.Pets.belongsTo(PetsApp.Users)


// relation between Services 1:n Provider
PetsApp.Services.hasMany(PetsApp.Provider)
PetsApp.Provider.belongsTo(PetsApp.Services)

//
PetsApp.Services.hasMany(PetsApp.ProviderBf)
PetsApp.ProviderBf.belongsTo(PetsApp.Services)

// Rate: relation between User n:m  Provider
PetsApp.Users.belongsToMany(PetsApp.Provider ,{ through: PetsApp.Rate  })
PetsApp.Provider.belongsToMany(PetsApp.Users ,{ through: PetsApp.Rate })

// relation between User 1:n LFA(lost and found and adoption)
PetsApp.Users.hasMany(PetsApp.LFA)
PetsApp.LFA.belongsTo(PetsApp.Users)

// Chat: relation between User n:n User
PetsApp.Users.hasMany(PetsApp.Chat)
PetsApp.Users.hasMany(PetsApp.Chat)
PetsApp.Chat.belongsTo(PetsApp.Users,{as:'sender',foreignKey:'user1'})
PetsApp.Chat.belongsTo(PetsApp.Users,{as:'asreciver',foreignKey:'user2'})


// PetsApp.Users.belongsToMany(PetsApp.Users ,{ as: "user1",through: PetsApp.Chat,foreignKey: 'user1',unique:false })



PetsApp.connection.authenticate()

PetsApp.connection.sync({ force: false })
  .then(() => {
    console.log("tables created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports=PetsApp
