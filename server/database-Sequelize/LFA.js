const LFA =(connection,DataTypes)=>{
    return connection.define("lfa", {
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        pet_weight: {
           type: DataTypes.FLOAT,
           allowNull: false,
         },
        pet_gender: {
            type: DataTypes.STRING,
            allowNull: false
          },
        pet_race: {
            type: DataTypes.STRING,
            allowNull: false,
          },
       
        pet_images: {
           type: DataTypes.JSON,
           allowNull: false,
         },
        birth_date: {
           type: DataTypes.DATE,
           allowNull: true,
         },
        pet_description:{
            type: DataTypes.TEXT("long"),
           allowNull: false,
         },
         post_langitude : {
          type: DataTypes.STRING,
          allowNull: false,
        },
        post_lattitude: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
           type: DataTypes.ENUM,
           values: ['Lost', 'Found', 'Adopted','Not Adopted'],
           allowNull: false,
         },
         

 })

};

module.exports=LFA;