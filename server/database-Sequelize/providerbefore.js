const ProviderBf = (connection, DataTypes) => {
    return connection.define("providerBf", {
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      provider_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provider_cv:{
        type: DataTypes.JSON,
        allowNull: true,
      }
    });
  };
  
  module.exports = ProviderBf;
  