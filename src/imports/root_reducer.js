import {numbers} from './numbers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
const rootReducer = combineReducers({numbers});
export default rootReducer
