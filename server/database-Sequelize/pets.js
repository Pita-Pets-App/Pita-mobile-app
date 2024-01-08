const Pets = (connection, DataTypes) => {
  return connection.define("pets",{
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
        allowNull: false,
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
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = Pets;
