// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

//
module.exports = function(app) {
//

// set view engine
app.set('view engine', 'ejs');

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("../public/views/login");
    }
    res.render('../public/views/login');
  });

  app.get("/signup", function (req, res){
    res.render("../public/views/signup");
  });

//
  app.get("/login", function(req, res) {
      // If the user already has an account send them to the members page
    // if (req.user) {
    //     res.redirect("../public/views/members");
    //   }
      res.render('../public/views/login');
    });
  //
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 
    //redirected to the signup page
    app.get("/members", isAuthenticated, function(req, res) {
      res.render('../public/views/members');
    });
    
    app.get("/createEvents", isAuthenticated, function(req, res) {
      res.render('../public/views/createEvents');
    });

    app.get("/contacts", isAuthenticated, function(req, res) {
      res.render('../public/views/contacts');
    });
  };