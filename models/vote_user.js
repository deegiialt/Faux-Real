module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    userName: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    faux: { //users vote (fake)
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    real: { //users vote (real)
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    source: { // source of the article (i.e. New York Times)
      type: DataTypes.STRING,
      allowNull: false
    },
    articleURL: { // article url (stored to save and display to users)
      type: DataTypes.STRING,
      //allowNull: false,
      validate: {
        isURL: true
      }
    },
    articleTitle: { // article title
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Votes.associate = function(models) {
  //   Votes.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  //
  // Votes.associate = function(models) {
  //   Votes.belongsTo(models.Count, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Vote;
};
