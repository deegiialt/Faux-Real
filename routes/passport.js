//load bcrypt
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user){

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

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


    passport.use('local-signup', new LocalStrategy(
        {    
            usernameField: 'userName',
            passwordField: 'password',
            emailField: 'email',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },

        function(req, done){
            console.log(req.body);


            var generateHash = function() {
                return bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({where: {email: req.body.email}}).then(function(user){

                if(user) {
                    return done(null, false, {message : 'That email is already taken'} );
                } else {
                    var userPassword = generateHash(req.body.password);
                    var data = {
                        userName: req.body.userName,
                        password: userPassword,
                        email: req.body.email
                    };


                    User.create(data).then(function(newUser,created){
                        if(!newUser){
                            return done(null,false);
                        }

                        if(newUser){
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
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },

        function(req, userName, password, done) {
            console.log(req.body);
            var User = user;

            var isValidPassword = function(userpass){
                return bCrypt.compareSync(req.body.password, userpass);
            }

            User.findOne({ where: { userName: req.body.userName}}).then(function (user) {

                if (!user) {
                    return done(null, false, { message: 'User Name does not exist' });
                }    

                if (!isValidPassword(user.password, req.body.password)) {

                    return done(null, false, { message: 'Incorrect password' });

                }

                var userinfo = user.get();

                return done(null,userinfo);

            }).catch(function(err){

                console.log("Error:",err);

                return done(null, false, { message: 'Something went wrong with your Signin' 

                });


            });

        }
    ));

}