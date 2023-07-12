import { createStore, combineReducers } from 'redux';
import postReducer from './Reducers/Post';
import userReducer from './Reducers/Users';

const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer,
})

const store = createStore(rootReducer);

export default store;