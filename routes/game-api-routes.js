var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/pieces", function(req, res) {
  	db.Piece.findAll({

  	}).then(function(db) {
  	res.json(db);
  	}
  })
};