  var express = require("express");
  var bodyParser = require("body-parser");

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

  // Routes
  // =============================================================
  require("./routes/html-routes.js")(app);
  require("./routes/login-api-routes.js")(app);
  require("./routes/count-api-routes.js")(app);
  require("./routes/user-votes-routes.js")(app);


//Authentication routes

const session = require('express-session');
const CookieParser = require('cookie-parser');
const {userResponse, validateUser, secret} = require('./config/config.json');
const passport = require('passport');
const passportConfig = require('./routes/passport.js');

//app.use(CookieParser());

//passportConfig(passport);

// app.use(session({
// secret,
// name:'cookie',
// resave: false,
// saveUninitialized:false,
// // cookie:{
// // httponly, //put here some values
// // maxAge,
// // secure
// // }
// }));
//app.use(passport.initialize());
//app.use(passport.session());

// app.post('/signup', passport.authenticate('local-signup'), userResponse);

// app.post('/login', passport.authenticate('local-login'), userResponse);

app.get('/logout', (req, res)=>{
req.logout();
return res.json({status:'success'});
});


// Syncing sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
