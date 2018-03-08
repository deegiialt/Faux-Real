  var db = require("../models");

  // Routes
  // =============================================================
  module.exports = function(app) {

    app.get("/enter/:user", function(req, res) {
    	db.User.findOne({
        where: {
          userName: req.params.userName
        }
    	}).then(function(db) {
    	res.json(db);
      });
    });

    app.post("/api/login", function(req, res) { // after post is complete, have the logic setup the URL with the users username or email for the get request
      db.User.create({
        where: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password
        }
      }).then(function(db) {
        res.json(db)
      })
    })

  };
