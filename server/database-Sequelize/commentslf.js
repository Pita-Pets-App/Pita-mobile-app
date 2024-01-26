const CommentLF = (connection, DataTypes) => {
    return connection.define("commentlf",{
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
    );
  };
  
  module.exports = CommentLF;
  