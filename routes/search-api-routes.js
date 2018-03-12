
var db = require("../models");
var request = require('request');
var bodyParser = require("body-parser");



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


	
	app.post("/checkiframe", function(req, res){
		console.log("inside backend post")
		console.log(req.body.url)
		var queryUrl = req.body.url;
		

		request(queryUrl, function(error, response, body){
		 	if (!error && response.statusCode === 200) {
				console.log("inside backend request")
				if (response.headers["x-frame-options"] && (response.headers["x-frame-options"]==="SameOrigin" || response.headers["x-frame-options"]==="SAMEORIGIN")) {
					res.send("false");
				} else {
					res.send("true");
				}
				console.log(response.headers["x-frame-options"]);

			}else{
			res.send("false")
		}
		})
	})



};


// ejs