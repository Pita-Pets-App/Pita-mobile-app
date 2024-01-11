const Event = (connection, DataTypes) => {
  return connection.define("event", {
    event_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    event_images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    event_langitude : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_lattitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["On Hold", "Approved", "Refused"],
      allowNull: false,
    },
  });
};

module.exports = Event;
