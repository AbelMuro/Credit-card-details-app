import { combineReducers } from 'redux';
import ccNameReducer from './ccNameReducer.js';
import ccNumberReducer from './ccNumberReducer.js';
import ccMonthReducer from './ccMonthReducer.js';
import ccYearReducer from './ccYearReducer.js';
import ccCVCReducer from './ccCVCReducer.js';

const RootReducer = combineReducers({
    ccName: ccNameReducer,
    ccNumber: ccNumberReducer,
    ccMonth: ccMonthReducer,
    ccYear: ccYearReducer,
    ccCVC: ccCVCReducer
})

export default RootReducer