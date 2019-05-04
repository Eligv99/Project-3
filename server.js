// OUR .ENV && .ENV/LOCAL
require("dotenv").config();
require("dotenv").config({ path: '.env.local' })

// MODULES & PACKAGES NEEDED
const express = require('express');
const path = require('path');
const morgan = require('morgan'); // JUST FOR LOGS
const passport = require('passport');
const PORT = process.env.PORT || 3001;
const app = express();
const bcrypt = require('bcrypt');
let passwordSalt = {
  value: null
};

// CONNECTION TO OUR DATABASE
const db = require('./models')


// USED FOR LOGGING
app.use(morgan('combined'));
app.use(express.json()); // body-parser MW
app.use(express.urlencoded({ extended: false })) 
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// PASSPORT INITIALIZATION
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    // Although this references the build folder... Use the public folder in client/public to publish images/css/any static file
  app.use(express.static("client/build"));
  // client/public is the actual folder to use for static files
}
 

//PASSPORT CONFIG
require("./config/passport")(passport, passwordSalt)

// API ROUTES // DONT NEED HTML ROUTES IF USING REACT AS FRONT END 
require('./routes/apiRoutes')(app, passport, passwordSalt)

// Send every request to the React app
// Define any API routes before this runs
// will be broken in development...
app.get("*", function(req, res) {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }
  else{
      // reminder
      res.json({"message": "Go to http://localhost:3000"});
  }
});

// CREATES ALL TABLES IN PRODUCTIONS
let syncOptions = {
  force: process.env.NODE_ENV === 'development' ? true : false
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    db.Config.findOne({
      where: {
        config_path: "salt"
      }
    }).then(saved_salt => {
      if(!saved_salt){
        return db.Config.create({
          config_path: "salt",
          config_path_value: salt
        }).then( created_salt => {
          passwordSalt.value = created_salt.dataValues.config_path_value;
        })
      }
      else{
        passwordSalt.value = saved_salt.dataValues.config_path_value;
      }
    })
    .catch(err => {
      console.log("Could not save salt");
    })
    
  });

});
