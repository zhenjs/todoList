
import {combineReducers} from 'redux'
import todos from './todo.js';
// const combineReducers = (reducers) => {
//     return (state={}, action) => {
//         var newState = {};
//         Object.keys(reducers).filter((key) => {
//             newState[key] = reducers[key](state[key], action)
//         })
//         return newState
//     }
// }


export default combineReducers({todos});

export const getVisibleTodos = (state, visibleFilter) => {
    let todos = state.todos.allIds.map((id) => state.todos.byId[id])
	switch(visibleFilter) {
		case 'all':
			return todos;
		case 'completed':
			return todos.filter((todo) => {
				return !todo.active
			});
		case 'active':
		return todos.filter((todo) => {
			return todo.active
		})
		default: 
			return new Error('unknow filter')
	}
}

