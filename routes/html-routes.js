  var path = require("path");

  // Routes
  // =============================================================
  module.exports = function(app) {
    app.get("/", function(req, res) {
      // console.log(req.flash('error')); //this console logs the flash error message
      // res.sendFile(path.join(__dirname, "../public/login.html"));

        res.render('login.ejs', {
            error : req.flash('error') // get the error out of session and pass to template
        });
    });

    app.get("/main", isLoggedIn, function(req, res) {
      // res.sendFile(path.join(__dirname, "../public/main.html"));
      
        res.render('main.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    
    
    app.get('/logout', function (req, res){
      req.session.destroy(function (err) {
        req.user = null;
        res.redirect('/');
      });
    });

    function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()) return next();

      res.redirect('/');
    }
  };

