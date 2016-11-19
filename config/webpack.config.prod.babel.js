import validate from 'webpack-validator';
import sharedConf from './shared';
import * as actions from './actions';
import {CONFIG_EVENTS} from './constants';

console.log('============process.env.npm_lifecycle_event=============');
console.log(process.env.npm_lifecycle_event);

const config = (common = sharedConf, event) => CONFIG_EVENTS.has(event)
    ? actions[event](common)
    : state;

export default validate(config(sharedConf, process.env.npm_lifecycle_event));
