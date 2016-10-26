import {combineReducers} from 'redux';
const byId = (state={}, action) => {
    switch(action.type) {
        case 'add_todo':
            let nextState = Object.assign({}, state);
            nextState[action.id] = {
                text: action.text,
                id: action.id,
                active: true,
            }
            return nextState;
        case 'toggle_todo': 
            state[action.id] = Object.assign({}, state[action.id], {active: !state[action.id]})
            return state;
        case 'receive_todo': 
            nextState = {};
            action.response.forEach((todo) => {
                nextState[todo.id] = todo;
            })
            return nextState;
        default:
            return state; 
    }
}
const allIds = (state=[], action) => {
    switch(action.type) {
        case 'add_todo':
            return [...state, action.id];
        case 'receive_todo' :
            return action.response.map((todo) => todo.id)
        default:
            return state; 
    }
}
export default combineReducers({
                    byId,
                    allIds
                });
                
export const getAllTodos = (state) => {
    return state.allIds.map(id => state.byId[id]);
}