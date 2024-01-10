const Services = (connection, DataTypes) => {
    return connection.define("services", {
      service_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      service_image:{
        type: DataTypes.TEXT("long"),
        allowNull: false,
      }
    });
  };
  
  module.exports = Services;
  