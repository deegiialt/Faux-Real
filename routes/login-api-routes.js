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

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // send to google to do the authentication
    // profile gets us their basic information including their name
    // email gets their emails
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
            passport.authenticate('google', {
                    successRedirect : '/profile',
                    failureRedirect : '/'
            }));


  };






