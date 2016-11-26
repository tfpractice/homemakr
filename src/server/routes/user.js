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
  console.log(__filename, '=======serializeUser CALLBACK=======');
  
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => User.findById(id, (err, user) => {
    done(err, user);
  }));
};

export const applyRoutes = (app, passport) => {
  configStrategies(passport);
  configSerial(passport);
  app.post('/register', UserController.addUser);
  
  // app.post('/login', passport.authenticate('local-login'));
  
  app.post('/login', passport.authenticate('local-login'), (req, res, next) => {
    console.log(__filename, '=======AUTHENTICATION CALLBACK=======', Object.keys(req));
    
    res.json({ user: req.user, });
    
    // next();
  });
};

export default router;
