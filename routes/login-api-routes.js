var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/users", function(req, res) {
  	db.User.findAll({

  	}).then(function(db) {
  	res.json(db);
  	}
  })
};