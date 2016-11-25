import { Router, } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy, } from 'passport-local';
import { UserController, } from '../controllers';
import { User, } from '../models';

const router = new Router();

//
// passport.use(new LocalStrategy((username, password, done) => {
//   User.findByUserName({ username, })
//     .then(user => user.comparePassword(password)
//       .then(isValid => done(null, user))
//       .catch(err => done(null, false, { message: 'Incorrect password.', })))
//     .catch(done);
// }));
//
// passport.serializeUser((user, done) => done(null, user.id));
//
// passport.deserializeUser((id, done) => User.findById(id, (err, user) => {
//   done(err, user);
// }));

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
  app.post('/register', UserController.addUser);
  
  // app.post('/register', passport.authenticate('local-register', {
  //   successRedirect: '/login',
  //   failureRedirect: '/register',
  // }),UserController.addUser );
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
  }));
};

// // login && set current user
// router.post('/login', passport.authenticate('local', {
//   successRedirect: '/api/tasks',
//   failureRedirect: '/login',
// }), (req, res, next) => {
//   console.log('========CALLBACK INVOKED======');
//   console.log(Object.keys(req));
//   console.log(Object.keys(res));
//   console.log(Object.keys(next));
//   next();
// });

//
// }

// Get all Users router.route('/users').get(UserController.getUsers); register
// new user router.get('/register', UserController.addUser); register new user
// router.post('/register', UserController.addUser);

// Get one user by id router.route('/users/:id').get(UserController.getUser);
// Add a new User router.route('/users').post(UserController.addUser); Update a
// User router.route('/users/:id').patch(UserController.updateUser); Delete a
// user by id
// router.route('/users/:id').delete(UserController.deleteUser);

export default router;
