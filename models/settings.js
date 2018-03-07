module.exports = function(sequelize, DataTypes) {
  var Settings = sequelize.define("Setting", {
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
    computers: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Settings;
};
