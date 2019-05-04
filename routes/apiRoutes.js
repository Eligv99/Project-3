
const db = require('../models');
const bcrypt = require('bcrypt')
module.exports = (app, passport, passwordSalt) => {

    app.get("/cheese", (req, res) => {
        res.json({ message: "cheese inside"})
    })
      
    // TESTING
    app.get("/_api/non-cached", (req, res) => {
        res.json({ random: Math.random() });
    });
    app.get("/api/cached", (req, res) => {
        res.json({ random: Math.random() });
    });
    // LOCAL-LOGIN
    app.post('/_signup', (req, res) => {
        //try to find user
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(user){
            if(!user){
                let secure_user = req.body;
                bcrypt.hash(secure_user.password, passwordSalt.value, function(err, hash) {
                    //store secure password
                    secure_user.password = hash;
                    // if we don't have user, create
                    console.log("Will create user soon");
                    console.log(secure_user)
                    db.User.create(secure_user)
                    .then( dbUser => {
                        // console.log(dbUser);3
                        res.json(dbUser);
                    })
                    .catch( error => {
                        console.log(error);
                        res.json({"message": "Try again!"});
                    });
                });
                
            }
            else{
                // otherwise, we have the user
                res.json({"message": "We already have this user"});
            }
            
        })
        .catch( error => {
            console.log(error);
        });
        
    });

    app.post('/_user/login', 
    passport.authenticate('local' /*, { failureRedirect: '/login' }*/),
    function(req, res) {

        if(req.user){
            let temp = {};
            // a secure way to filter your object properties
            // only expose what you need to expose
            temp.email = req.user.email;
            temp.name = req.user.name;
            res.json(temp);
        }
        else{
            res.json(false);
        }
    });

    app.get('/user', (req, res) => {

        if(req.user){
            let temp = {};
            // a secure way to filter your object properties
            // only expose what you need to expose
            temp.email = req.user.email;
            temp.name = req.user.name;
            res.json(temp);
        }
        else{
            res.json(false);
        }
    });

    app.get('/user/logout', function(req, res){
        req.logout();
        res.json(true);
    });

    // ==========================================
    // NODEMAILER
    // app.post('/contact', (req, res) => {
    //     const { email = '', name = '', message = '' } = req.body
        
    //       mailer({ email, name, text: message }).then(() => {
    //         console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    //         res.redirect('/#success');
    //       }).catch((error) => {
    //         console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    //         res.redirect('/#error');
    //       })
    //     })
    // ==========================================

}