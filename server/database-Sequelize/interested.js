const Interested = (connection, DataTypes) => {
    return connection.define("interested",{},
      { timestamps: false }
    );
  };
  
module.exports = Interested;