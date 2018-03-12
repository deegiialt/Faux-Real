  var db = require("../models");
  var User = require("../models").User;
  const passport = require('passport');

  // Routes
  // =============================================================
  module.exports = function(app) {


    app.post("/signup", function(req, res) {
      passport.authenticate('local-signup')(req, res, function() {
        res.redirect('/main')
      });
    });

    //This isnt working:
    app.post('/login',
      passport.authenticate('local-login', {
        successRedirect: '/main',
        failureRedirect: '/',
        failureFlash : true })// allow flash messages
    );

  };


//Keep code for testing purposes
// app.get('/login', function(req, res) {
//   User.findOne({
//     where: {
//       userName: req.body
//     }
//   }).then(function(user) {
//     console.log(user);
//   });
// })
