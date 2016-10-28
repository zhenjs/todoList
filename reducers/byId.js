

const byId = (state={}, action) => {
    switch(action.type) {
        case 'add_todo_success':
        case 'toggle_todo_success': 
            let nextState = Object.assign({}, state);
            nextState[action.response.id] = action.response;
            return nextState;
        case 'fetch_todos_success': 
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