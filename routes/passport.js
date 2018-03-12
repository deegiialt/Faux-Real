
//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var User = require('../models').User;

module.exports = function(passport){

    var LocalStrategy = require('passport-local').Strategy;

    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    var TwitterStrategy  = require('passport-twitter').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;

    var configAuth = require('../config/auth.js');

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

     // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
           if(user) {
                done(null, user.get());
            } else {
                done(user.errors,null);
           }
        });

    });


    // =========================================================================
    // LOCAL ==================================================================
    // =========================================================================

    //LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback : true, // allows us to pass back the entire request to the callback
            failureFlash : true //allows flash messages
        },

        function(req, userName, password, done){

            var generateHash = function(password) {
                console.log("BCYRPT Running HERE!!!!!!!!")

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({where: {userName: userName}}).then(function(user){

                if (user) {
                    return done(null, false, {message : 'That name is already taken'} );
                } else {

                    var userPassword = generateHash(password);
                    console.log(userPassword);
                    var data = {
                        userName: userName,
                        password: password,
                        email: req.body.email
                    };

                    data.password = generateHash(data.password);

                    User.create(data).then(function(newUser,created){
                        if(!newUser){
                            return done(null,false);
                        }

                        if(newUser){
                            console.log(newUser)
                            return done(null,newUser);

                        }

                    });
                }


            });



        }



    ));


    //LOCAL SIGNIN
    passport.use('local-login', new LocalStrategy(
        {
             // by default, local strategy uses userName and password
            usernameField : 'userName',
            passwordField : 'password',
            passReqToCallback : true, // allows us to pass back the entire request to the callback
            failureFlash : true
        },

        function(req, userName, password, done) {

            var isValidPassword = function(password, userpass){
                return bCrypt.compareSync(password, userpass);
            }

            console.log(User);

            User.findOne({where: {userName: userName}}).then(function (user) {

                if (!user) {
                    return done(null, false, { message: 'User Name does not exist.  Please create a new account if needed' });
                }

                if (!isValidPassword(password, user.password)) {

                    return done(null, false, { message: 'Incorrect password on previous try.  Please create a new account if needed' });

                }

                var userinfo = user.get();

                return done(null,userinfo);

            }).catch(function(err){

                console.log("Error:",err);

                return done(null, false, { message: 'Something went wrong with your Signin' });


            });

        }
    ));



    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser          = new User();

                    // set all of the relevant information
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.userName  = profile.displayName;
                    newUser.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));


    // =========================================================================
    // TWITTER =================================================================
    // =========================================================================
    passport.use(new TwitterStrategy({

        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        callbackURL     : configAuth.twitterAuth.callbackURL

    },
    function(token, tokenSecret, profile, done) {

        // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Twitter
        process.nextTick(function() {

            User.findOne({ 'twitter.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user, create them
                    var newUser                 = new User();

                    // set all of the user data that we need
                    newUser.twitter.id          = profile.id;
                    newUser.twitter.token       = token;
                    newUser.twitter.username    = profile.username;
                    newUser.twitter.displayName = profile.displayName;

                    // save our user into the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });

        });

    }));



    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL

    },

    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {

        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new User();

                    // set all of the facebook information in our user model
                    newUser.facebook.id    = profile.id; // set the users facebook id                   
                    newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
                    newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });

    }));


};

