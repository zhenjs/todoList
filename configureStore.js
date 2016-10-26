import {createStore} from 'redux'
import {saveState, getState} from './localStorage.js'
import {throttle} from 'lodash'
import visibleTodos from './reducers/index.js'
// var mockState = getState();
// var store = createStore(visibleTodos);
const addLoggerToDispatch = (store) => {
	const rowDispatch = store.dispatch;
	return (action) => {
		const ref = rowDispatch(action);
		return ref;
	}
}
const addThunkToDispatch = (store) => {
	const rowDispatch = store.dispatch;
	return (action) => {
		typeof action == 'function' ? action(store.dispatch) : rowDispatch(action);
	}
}
const configureStore = () => {
	var store = createStore(visibleTodos);
	store.dispatch = addLoggerToDispatch(store);
	store.dispatch = addThunkToDispatch(store);
	return store;
}

export default configureStore();