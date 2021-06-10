import { combineReducers } from 'redux';
import users from './Reducer/userReducer';
import posts from './Reducer/getPostReducer';
export default combineReducers({
    users,
    posts
});