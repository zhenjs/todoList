
import {combineReducers} from 'redux'
import todos, * as fromTodos from './todo.js';
// const combineReducers = (reducers) => {
//     return (state={}, action) => {
//         var newState = {};
//         Object.keys(reducers).filter((key) => {
//             newState[key] = reducers[key](state[key], action)
//         })
//         return newState
//     }
// }
// const combineReducers = (reducers) => {
// 	return (state={}, action) => {
// 		var newState = {};
// 		Object.keys(reducers).map((key) => {
// 			newState[key] = reducers[key](state[key], action)
			
// 		})
// 		return newState
// 	}
// }


export const getVisibleTodos = (state, visibleFilter) => {
    let todos = fromTodos.getAllTodos(state.todos);
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


export default combineReducers({todos});

