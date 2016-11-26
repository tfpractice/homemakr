import { Router, } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy, } from 'passport-local';
import { UserController, } from '../controllers';
import { User, } from '../models';

const router = new Router();

export const configStrategies = (passport) => {
  passport.use('local-register',
    new LocalStrategy({ passReqToCallback: true, }, UserController.registerUser));
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
  
  // app.post('/register', passport.authenticate('local-register'), UserController.addUser);
  app.post('/register', passport.authenticate('local-register'), (req, res) => {
    console.log(__filename, '\n============ registraiton from passport====', req.user);
    res.json({ user: true, });
  });
  
  // app.post('/login', passport.authenticate('local-login'));
  
  app.post('/login', passport.authenticate('local-login'), (req, res) => {
    console.log(__filename, '=======AUTHENTICATION CALLBACK=======', req.user,);
    
    res.json({ user: req.user, });
    
    // next();
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

export default router;
