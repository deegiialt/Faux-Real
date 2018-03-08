  var db = require("../models");
  const passport = require('passport');

  // Routes
  // =============================================================
  module.exports = function(app) {

    app.post("/signup", function(req, res) { // after post is complete, have the logic setup the URL with the users username or email for the get request
      db.User.create({
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password
      }).then(function(db, err) {
        if (err) {
          return res.render('register', { account : account });
        }
       
        passport.authenticate('local-signup')(req, res, function() {
          res.redirect('/main')
        })
        res.json(db)
      })
    })

    app.post('/login', passport.authenticate('local-login', { successRedirect: '/main', failureRedirect: '/' }));

    app.get('/logout', (req, res)=>{
      req.logout();
      return res.json({status:'success'});
    });

  };






