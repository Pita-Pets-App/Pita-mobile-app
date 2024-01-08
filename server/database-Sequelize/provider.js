const Provider = (connection, DataTypes) => {
  return connection.define("provider", {
    provider_fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider_lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    provider_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider_image: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    provider_type: {
      type: DataTypes.ENUM,
      values: ["Veterinarian", "Emergency", "Pets sitter","Pets shop","Pets trainer","Pets events"],
      allowNull: false,
    },
    provider_experience: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provider_location: {
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
