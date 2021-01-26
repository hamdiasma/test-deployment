import {combineReducers} from 'redux' ; 
import userReducer from './userReducers';
import articleReducer from './articleReducer';
import tshirtReducer from './tshirtReducer';
import jeansReducer from './jeansReducer';
import shoesReducer from './shoesReducer'
const combineReducer = combineReducers({userReducer,articleReducer ,tshirtReducer ,shoesReducer, jeansReducer})
export default combineReducer ;