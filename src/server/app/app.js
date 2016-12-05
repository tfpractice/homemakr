import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';
import session from 'express-session';
import flash from 'express-flash';
import passport from 'passport';
import { Strategy as LocalStrategy, } from 'passport-local';
import mongoose from 'mongoose';
import { enableHotReload, } from '../../../config';
import { requestHandler, } from './request_handler';
import { dbConfig, } from '../models';
import { TaskRoutes, UserRoutes, applyRoutes, } from '../routes';

mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(dbConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  console.log('mongoose connected');
});

// initialize express
const app = enableHotReload(express());

// BodyParser Middleware
app.use(bodyParser.json({ limit: '20mb', }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false, }));
app.use(cookieParser());

// Set Static Folder
// app.use(express.static(path.resolve(__dirname, '../../../dist')));
app.use(express.static(path.resolve(__dirname, 'dist')));

// Express Session
app.use(session({ secret: 'secret', saveUninitialized: true, resave: true, }));

// Connect Flash
app.use(flash());

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//  backend api routes
app.use('/api', TaskRoutes);
applyRoutes(app, passport);

// app.use('/api', UserRoutes);

// establish server render
app.use(requestHandler);

export default app;
