import { USER_ACTIONS } from './constants';

const user = (state = null, { type, curry }) =>
  USER_ACTIONS.has(type) ? curry(state) : state;

export default user;
