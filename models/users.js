module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    email: { //users email
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: { //users password
      type: DataTypes.STRING,
      validate: {
        len: [7, 25],
        isAlphanumeric: true
      }
    },
    image: { // users image (when we get to it)
      type: DataTypes.STRING,
      allowNull: false
    }
  });


  // User.associate = function(models) {
  //   User.hasMany(models.Votes, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
};
