
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
