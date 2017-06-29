var express = require('express');
var router = express.Router();
var passport = require("passport");
var mongoose = require("mongoose");
var User = mongoose.model('User');

var memRouter = require("./members");

router.get('/',isLoggedIn, function(req, res, next) {
  res.render("index", {user : req.user});
});

router.use('/mems', isLoggedIn, memRouter);

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
            return res.render('register', { user : user });
        }
        passport.authenticate('local')(req, res, function () {
          res.redirect('/');
        });
    });
});
router.get("/login", (req, res)=>{
    res.render("login");
});

router.get("/logout", (req, res)=>{
    req.logout();
    res.redirect('/login');
});

router.post("/login",passport.authenticate('local', {
            successRedirect :'/',
            failureRedirect : '/login'
        }),function(req, res){

});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
