module.exports = function(sequelize, DataTypes) {
  var Count = sequelize.define("Count", {
    article: { // article url (stored to save and display to users)
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    articleTitle: { // article title
      type: DataTypes.STRING,
      allowNull: false
    },
    source: { // source of the article (i.e. New York Times)
      type: DataTypes.STRING,
      allowNull: false
    },
    datePublished: {
      type: DataTypes.DATE,
      allowNull: false
    },
    faux: { //array of fake votes Note: only works with postgreSQL
      type: DataTypes.STRING,
      allowNull: false
    },
    real: { //array of real votes Note: only works with postgreSQL
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  // Count.associate = function(models) {
  //   Count.hasMany(models.Votes, {
  //     onDelete: "cascade"
  //   });
  // }; //set up an associate for articles and the vote count

  return Count;
};
