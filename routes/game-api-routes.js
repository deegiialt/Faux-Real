var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.post("/api/settings", function(req, res) {
  	db.Settings.create(req.body).then(function(settings) {
  		console.log(settings);
  		res.json(settings);
  	})
  })
};