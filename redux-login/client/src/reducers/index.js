import { combineReducers } from 'redux';
import auth from './auth';
import flaseMessages from './flashMessages';


export default combineReducers({
    auth,
    flaseMessages
})