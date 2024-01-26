const LikesLF = (connection, DataTypes) => {
    return connection.define("likeslf",{},
      { timestamps: false }
    );
  };
  
module.exports = LikesLF;
  