  var path = require("path");

  // Routes
  // =============================================================
  module.exports = function(app) {
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/main", isLoggedIn, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/main.html"));
    });

    
    
    app.get('/logout', function (req, res){
      req.session.destroy(function (err) {
        req.user = null;
        res.redirect('/'); //Inside a callback… bulletproof!
      });
    });

    function isLoggedIn(req, res, next) {
      if (req.isAuthenticated()) return next();

      res.redirect('/');
    }
  };

