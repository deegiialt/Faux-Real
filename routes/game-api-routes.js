var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/pieces", function(req, res) {
  	db.Piece.findAll({

  	}).then(function(db) {
  	res.json(db);
  	}
  })
};