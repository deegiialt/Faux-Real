<<<<<<< HEAD
<<<<<<< HEAD
// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

var mysql = require('mysql');

var connection = mysql.createConnection({
				  host     : 'localhost',
				  user     : 'root',
				  password : 'root',
          port : 8889
				});

connection.query('USE users');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
		connection.query("select * from users where id = "+id,function(err,rows){
			done(err, rows[0]);
		});
    });


 	// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        emailField : 'email',
        passwordField : 'password',
=======
//load bcrypt
const session = require('express-session');
const CookieParser = require('cookie-parser');
const {userResponse, validateUser, secret} = require('./config/config.json');
const passport = require('passport');
=======
>>>>>>> b22610f33cfe00080e03f33fef70b3c799443849

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
       if(user){
         done(null, user.get());
       }
       else{
         done(user.errors,null);
       }
    });

});


passport.use('local-signup', new LocalStrategy(

    {
        userName : email,
        password : password,
<<<<<<< HEAD
>>>>>>> 35b593eff71dfcbf04fa5fc7ddeb199451bce3d6
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },

<<<<<<< HEAD
		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
        connection.query("select * from users where email = '" + email + "'",function(err,rows){
			console.log(rows);
			console.log("above row object");
			if (err)
                return done(err);
			 if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

				// if there is no user with that email
                // create the user
                var newUserMysql = new Object();

				newUserMysql.email    = email;
                newUserMysql.password = password; // use the generateHash function in our user model

				var insertQuery = "INSERT INTO users ( email, username, password ) values ('" + email +"','" + username +"','"+ password +"')";
					console.log(insertQuery);
				connection.query(insertQuery,function(err,rows){
				newUserMysql.id = rows.insertId;

				return done(null, newUserMysql);
				});
            }
		});
    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
=======
>>>>>>> b22610f33cfe00080e03f33fef70b3c799443849
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

         connection.query("SELECT * FROM `users` WHERE `username` = '" + username + "'",function(err,rows){
			if (err)
                return done(err);
			 if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }

			// if the user is found but the password is wrong
            if (!( rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

<<<<<<< HEAD
            // all is well, return successful user
            return done(null, rows[0]);

		});



    }));

};
=======
=======
>>>>>>> b22610f33cfe00080e03f33fef70b3c799443849
    function(req, email, password, done){


        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({where: {email:email}}).then(function(user){

        if(user) {
            return done(null, false, {message : 'That email is already taken'} );
        } else {
            var userPassword = generateHash(password);
            var data = {
                email: email,
                userName: userName
                password:userPassword
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
         // by default, local strategy uses userName and password, we will override with email
         userName : userName,
         password : password,
         passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done) {

        var User = user;

        var isValidPassword = function(userpass,password){
            return bCrypt.compareSync(password, userpass);
        }

        User.findOne({ where : { userName: userName}}).then(function (user) {

            if (!user) {
                return done(null, false, { message: 'userName does not exist' });
            }

            if (!isValidPassword(user.password,password)) {

                return done(null, false, { message: 'Incorrect password.' });

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
<<<<<<< HEAD
>>>>>>> 35b593eff71dfcbf04fa5fc7ddeb199451bce3d6
=======
>>>>>>> b22610f33cfe00080e03f33fef70b3c799443849
