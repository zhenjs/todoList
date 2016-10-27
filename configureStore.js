import {createStore, applyMiddleware} from 'redux';
import {saveState, getState} from './localStorage.js';
import {throttle} from 'lodash';
import visibleTodos from './reducers/index.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
// var mockState = getState();
// var store = createStore(visibleTodos);
// const addLoggerToDispatch = (store) => {
// 	const next = store.dispatch;
// 	return (action) => {
// 		const ref = next(action);
// 		return ref;
// 	}
// }
// const addThunkToDispatch = (store, middlewares) => {
// 	const next = store.dispatch;
// 	return (action) => {
// 		typeof action == 'function' ? action(store.dispatch) : next(action);
// 	}
// }
// const wrapDispatch = (store, middlewares) => {
// 	middlewares.forEach((middleware) => {
// 		store.dispatch = middleware(store)
// 	})
// }
const configureStore = () => {
	// const middlewares = [addLoggerToDispatch, addThunkToDispatch];
	let store = createStore(visibleTodos, applyMiddleware(thunk, createLogger()));
	
	return store;
}

export default configureStore();