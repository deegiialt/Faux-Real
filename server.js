  var express = require("express");
  var bodyParser = require("body-parser");
  var session = require("express-session");
  var passport = require('passport');
  var flash = require('connect-flash');
  var ejs = require('ejs')

  // Sets up the Express App
  // =============================================================
  var app = express();
  var PORT = process.env.PORT || 8080;

  // Requiring our models for syncing
  var db = require("./models");

  // Sets up the Express app to handle data parsing

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  // parse application/json
  app.use(bodyParser.json());

  // Static directory
  app.use(express.static("public"));

  app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));

  app.use(passport.initialize());

  app.use(passport.session());

  app.use(flash());

  // Routes
  // =============================================================
  require("./routes/html-routes.js")(app);
  require("./routes/login-api-routes.js")(app);
  require("./routes/count-api-routes.js")(app);
  require("./routes/user-votes-routes.js")(app);
  require('./routes/passport.js')(passport);

// Syncing sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force:false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
