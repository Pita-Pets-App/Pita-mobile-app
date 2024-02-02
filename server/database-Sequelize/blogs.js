const Blogs = (connection, DataTypes) => {
    return connection.define("blogs",{
        body: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
          },
      },
    );
  };
  
  module.exports = Blogs;
  