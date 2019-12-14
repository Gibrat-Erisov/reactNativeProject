import {applyMiddleware,createStore,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

import allmovies from './store-movies'

let reducers = combineReducers({
	allmovies
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;