import {AUTH_ACTIONS} from './constants';

const user = (state = null, {type, curry}) => AUTH_ACTIONS.has(type)
    ? curry(state)
    : state;

export default user;
