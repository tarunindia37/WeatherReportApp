import { combineReducers } from 'redux';
import demoReducer from './components/demo/demoReducers';

const AppReducer = combineReducers({
    demoReducer
});

export default AppReducer;
