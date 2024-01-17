const Chat = (connection, DataTypes) => {
  return connection.define("chat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    msg: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  });
};

module.exports = Chat;
