import passport from 'passport';
import { Strategy as LocalStrategy, } from 'passport-local';

export const configStrategies = (passport) => {
  passport.use('local-register',
    new LocalStrategy({ passReqToCallback: true, }, UserController.addUser));
  passport.use('local-login',
    new LocalStrategy({ passReqToCallback: true, }, UserController.loginUser));
};

export const configSerial = (passport) => {
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id, (err, user) => {
    done(err, user);
  }));
};

export const applyRoutes = (app, passport) => {
  configStrategies(passport);
  configSerial(passport);
  app.post('/register', passport.authenticate('local-register', {
    successRedirect: '/login',
    failureRedirect: '/register',
  }));
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
  }));
};

export const applyLogin = (app) => {
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
  }), (req, res, next) => {
    console.log('========CALLBACK INVOKED======');
    console.log(Object.keys(req));
    console.log(Object.keys(res));
    console.log(Object.keys(next));
    next();
  });
};

// app/routes.js
module.exports = function (app, passport) {
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
  app.get('/', (req, res) => {
    res.render('index.ejs'); // load the index.ejs file
  });
    
    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
  app.get('/login', (req, res) => {
                                        // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage'), });
  });
    
    // process the login form
    // app.post('/login', do all our passport stuff here);
    
    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
  app.get('/signup', (req, res) => {
                                        // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage'), });
  });
    
    // process the signup form
    // app.post('/signup', do all our passport stuff here);
    
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile.ejs', { user: req.user, });
  });
    
    // =====================================
    // LOGOUT ==============================
    // =====================================
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  
    // if they aren't redirect them to the home page
  res.redirect('/');
}
