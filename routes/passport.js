
//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var User = require('../models').User;

module.exports = function(passport){

    var LocalStrategy = require('passport-local').Strategy;
    // var FacebookStrategy = require('passport-facebook').Strategy;
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

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

};

