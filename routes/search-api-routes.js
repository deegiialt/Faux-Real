var db = require("../models");



//ApI key newsapi: b8438b744ce24b42a60f3a56367a00c4

//search
//top news articles
//sports
//business/
//politics
//international
//entertainment


// Routes
// =============================================================
module.exports = function(app) {

	
	
	app.get("api/search/:userinput", function(req, res){

		res.json(res);

	})

	app.post("/api/settings", function(req, res) {
  		db.Settings.create(req.body).then(function(settings) {
  			console.log(settings);
  			res.json(settings);
  		})
  	})
};