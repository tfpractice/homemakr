// global.navigator = global.navigator || {};
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const markup = require('./markup');
// import mongoose from 'mongoose'; import { TaskRoutes } from './routes';
// import { handleRequest } from './requestHandler'; import cookieParser from
// 'cookie-parser'; import session from 'express-session'; import flash from
// 'express-flash'; import passport from 'passport'; import { Strategy as
// LocalStrategy } from 'passport-local'; import expressValidator from
// 'express-validator'; import { server as srvConf } from '../config'; const {
// mongoURL } = srvConf; express initialize
const app = express();
console.log("path.resolve('src')", path.resolve('src'));

// BodyParser Middleware
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(cookieParser());

console.log('DIIRRRR NAMEEEEE ======', __dirname);
console.log('DIIRRRR NAMEEEEE ======', path.resolve(__dirname, '../../../dist'));
// Set Static Folder
app.use(express.static(path.resolve(__dirname, '../../../dist')));

app.get('/', function (req, res){
    res.send(markup);
  });

// app.listen(3000, function (){     console.log('Example app listening on port
// 3000!');   });

export default app;
