  var db = require("../models");
  var Count = require("../models").Count;

  // Routes
  // =============================================================
  module.exports = function(app) {

    app.get("", function(req, res) {
      //to get the vote count for a specific article
      // console.log("---------------------");
      // console.log(req.body.articleURL);
      // console.log("---------------------");
      // console.log(db);
      Count.create({
        userName: "Bob",
        faux: req.body.faux,
        real: req.body.real,
        source: req.body.source,
        articleURL: req.body.articleURL,
        articleTitle: req.body.articleTitle
      }).then(function(votes) {
    		console.log("user vote is set");
    		res.json(votes); //for individual vote
    	});
    });

    app.post("/api/totalvote", function(req, res) {
      //to post the vote to vote_count
      Count.create({
          faux: req.body.faux, // need to check if array works
          real: req.body.real, // need to check if array works
          source: req.body.source,
          articleURL: req.body.articleURL,
          articleTitle: req.body.articleTitle,
          datePublished: req.body.datePublished
      }).then(function(count) {
        //console.log("this is the data coming in....\n" + count);
        res.json(count);
      });
    })

    // app.put("/api/vote", function(req, res) {
    //   //to update the count as people vote
    //   Count.update({
    //       where: {
    //         id: req.body.id
    //       }
    //   }).then(function(count) {
    //     console.log(count);
    //     res.json(count)
    //   })
    // })

    app.put("/api/count/:showtotal", function(req, res) {
      //console.log(req.params.showtotal);
        Count.findAndCountAll({
          where: {
            articleTitle: req.params.showtotal
          }
        }).then(result => {
          res.json(result);
          console.log("---------------");
          console.log(result.count + "..." + result.rows);
          console.log("---------------");
        });

    });
  };
