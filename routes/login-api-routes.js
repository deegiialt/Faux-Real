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
                    successRedirect : 'http://localhost:8080/main',
                    failureRedirect : 'http://localhost:8080/'
            }));


    // app.get('/auth/google/callback',
    //     passport.authenticate('google', { failureRedirect: '/' }),
    //     function(req, res) {
    //  // absolute path
    //         res.redirect('/main');
    // });

    // app.get('/auth/google/callback',
    //   passport.authenticate('google'), // complete the authenticate using the google strategy
    //   (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
    //     if (err.name === 'TokenError') {
    //      res.redirect('/'); // redirect them back to the login page
    //     } else {
    //      // Handle other errors here
    //     }
    //   },
    //   (req, res) => { // On success, redirect back to '/main'
    //     res.redirect('/main');
    //   }
    // );

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
