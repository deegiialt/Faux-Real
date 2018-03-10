  var db = require("../models");
  const passport = require('passport');

  // Routes
  // =============================================================
  module.exports = function(app) {


    app.post("/signup", function(req, res) {
       
        passport.authenticate('local-signup')(req, res, function() {
          res.redirect('/main')
        })
      
    })

    //This isnt working:
    app.post('/login', 
      passport.authenticate('local-login', {  
        successRedirect: '/main',
        failureRedirect: '/', 
        failureFlash : true })// allow flash messages

    );

  };






