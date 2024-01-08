const Users = (connection, DataTypes) => {
  return connection.define("users", {
    user_fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Users;
