import { legacy_createStore as createStore, applyMiddleware } from 'redux';
// import reducer from './reducer';
import thunk from 'redux-thunk';
import reducer from './reducer';


const store = createStore(reducer, applyMiddleware(thunk));

export default store