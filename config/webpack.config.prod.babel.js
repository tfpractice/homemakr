import sharedConf from './shared';
import * as actions from './actions';
import {CONFIG_EVENTS} from './constants';

console.log('============process.env.npm_lifecycle_event=============');
console.log(process.env.npm_lifecycle_event);

const common = sharedConf;

const config = (state = common, event) => CONFIG_EVENTS.has(event)
    ? actions[event](state)
    : state;

export {common};
export default config(common, process.env.npm_lifecycle_event);
// module.exports.config = config(common, process.env.npm_lifecycle_event);
