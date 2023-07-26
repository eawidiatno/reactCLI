import { combineReducers } from 'redux';

import authReducer from './auth';
import homeReducer from './home';


const reducer = combineReducers({
    authReducer,
    homeReducer
});

export default reducer;