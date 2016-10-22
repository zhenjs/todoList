import {createStore} from 'redux'
import {saveState, getState} from './localStorage.js'
import {throttle} from 'lodash'
import visibleTodos from './reducers'

var mockState = getState();
var store = createStore(visibleTodos, mockState)
console.log(store.getState())
store.subscribe(throttle(() => {
	saveState(store.getState())
}), 10000)

export default store;