const Rate = (connection, DataTypes) => {
  return connection.define("rate", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    rate_value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rate_content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  });
};

module.exports = Rate;
