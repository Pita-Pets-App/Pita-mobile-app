const Provider = (connection, DataTypes) => {
  return connection.define("provider", {
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
    image: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    provider_experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider_langitude : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider_lattitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider_description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  });
};

module.exports = Provider;
