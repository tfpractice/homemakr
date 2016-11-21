import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import {enableHotReload} from '../../../config'
import {requestHandler} from './request_handler';

// initialize express
const app = enableHotReload(express());

// BodyParser Middleware
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.resolve(__dirname, '../../../dist')));
// establish server render
app.use(requestHandler);

export default app;
