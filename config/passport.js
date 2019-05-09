
var localStrategy = require("passport-local").Strategy;
var bcrypt = require('bcrypt');
var db = require("../models");


module.exports = function(passport) {

    // WHEN WE SAVE A USER TO THE SESSION
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // WHEN THE DATA IS RETRIVED FROM USER SESSION
    passport.deserializeUser(function (id, done) {

        db.User.findOne({ where: { id: id } })
            .then(function (user) {
                done(null, user);
            })
            .catch(error => {
                console.log(error);
                done(error, false);
            });
    });

    // LOCAL STRATEGY
    passport.use(new localStrategy({ usernameField: "email", passwordField: "password" },
    function (email, password, done) {

        db.User.findOne({
            where: {
                email: email
            }
        }).then(user => {
            
            console.log(user.dataValues)

            // IF THERES NOT A USER SEND A MESSAGE
            if (!user) {
                return done(null, false,  { message: "No User Found!" });
            }
            //VERIFY PASSWORD WITH BYCRYPT
            bcrypt.compare(password, user.dataValues.password, (err, isMatch) => {
                if (err) {
                    throw err;
                }
                // IF IT MATCHES SUCCEED
                if (isMatch) {
                    return done(null, user, { message: "Password Incorrect" });
                }
                // IF NOT SEND THEN MESSAGE 
                else {
                    done(null, false, alert("Password incorrect"))
                }
            })

        }).catch( err => {
            console.log(err);
            return done(err, null);
        });
    })
)}