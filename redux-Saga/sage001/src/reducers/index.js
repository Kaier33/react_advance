import { combineReducers } from 'redux';
import users from './user';
import counter from './counter';
export default combineReducers({
    users,
    counter
})