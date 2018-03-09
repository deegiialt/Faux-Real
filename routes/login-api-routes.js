  var db = require("../models");
  const passport = require('passport');

  // Routes
  // =============================================================
  module.exports = function(app) {


    app.post("/signup", function(req, res) {
      // db.User.create({
      //     userName: req.body.userName,
      //     email: req.body.email,
      //     password: req.body.password
      // }).then(function(db, err) {
      //   if (err) {
      //     return res.render('register', { account : account });
      //   }
       
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


    app.get('/logout', (req, res)=>{
      req.logout();
      res.redirect('/')
      return res.json({status:'success'});
    });

  };






