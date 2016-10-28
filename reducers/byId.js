

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
            nextState = Object.assign({}, state);
            action.response.forEach((todo) => {
                nextState[todo.id] = todo;
            })
            return nextState;
        default:
            return state; 
    }
}
export default byId
export const getTodo = (state, id) => state[id];