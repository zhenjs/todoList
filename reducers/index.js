import {combineReducers} from 'redux';
import {byId} from 'byId.js'
const allIds = (state=[], action) => {
    if ('all' !== action.filter) {
        return state
    };
    switch(action.type) {
        case 'add_todo':
            return [...state, action.id];
        case 'receive_todo' :
            return action.response.map((todo) => todo.id)
        default:
            return state; 
    }
}
const completeIds = (state=[], action) => {
    if ('complete' !== action.filter) {
        return state
    };
    switch(action.type) {
        case 'add_todo':
            return [...state, action.id];
        case 'receive_todo' :
            return action.response.map((todo) => todo.id)
        default:
            return state; 
    }
}
const activeIds = (state=[], action) => {
    if ('active' !== action.filter) {
        return state
    };
    switch(action.type) {
        case 'add_todo':
            return [...state, action.id];
        case 'receive_todo' :
            return action.response.map((todo) => todo.id)
        default:
            return state; 
    }
}
const idsByFilter = combineReducers({
    all: allIds,
    complete: completeIds,
    active: activeIds
})
export default combineReducers({
                    byId,
                    idsByFilter
                });
                
export const getVisibleTodos() => {
    
}