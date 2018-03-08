  var db = require("../models");

  // Routes
  // =============================================================
  module.exports = function(app) {

    app.get("", function(req, res) {
      //to get the vote count for a specific article
      db.Count.findAll({
        where: {
          faux: req.body.faux,
          real: req.body.real,
          source: req.body.source,
          article: req.body.article,
          articleTitle: req.body.articleTitle
        }
      }).then(function(count) {
        console.log(count);
        res.json(count);
      })
    });

    app.post("/api/vote", function(req, res) {
      //to post the vote to vote_count
      db.Count.create({
        where: {
          faux: req.body.faux, // need to check if array works
          real: req.body.real, // need to check if array works
          source: req.body.source,
          article: req.body.article,
          articleTitle: req.body.articleTitle
        }
      }).then(function(count) {
        console.log(count);
        res.json(count);
      });
    })

    app.put("/api/vote", function(req, res) {
      //to update the count as people vote
      db.Count.update({
          where: {
            id: req.body.id
          }
      }).then(function(count) {
        console.log(count);
        res.json(count)
      })
    })
  };
