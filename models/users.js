module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    userColor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    piece1: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    piece2: {
      type: DataTypes.INTEGER,
      defaultValue: 0    
    },
    piece3: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    piece4: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  });

  return User;
};
