import {combineReducers} from 'redux';
const byId = (state={}, action) => {
    switch(action.type) {
        case 'add_todo':
            let newState = Object.assign({}, state);
            newState[action.id] = {
                text: action.text,
                id: action.id,
                active: true,
            }
            return newState;
        case 'toggle_todo': 
            state[action.id] = Object.assign({}, state[action.id], {active: !state[action.id].active})
            return state;
        default:
            return state; 
    }
}
const allIds = (state=[], action) => {
    switch(action.type) {
        case 'add_todo':
            return [...state, action.id];
        default:
            return state; 
    }
}
export default combineReducers({
                    byId,
                    allIds
                });