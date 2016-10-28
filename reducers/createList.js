import {combineReducers} from 'redux';
const createList = (filter) => {
    const ids =  (state=[], action) => {
        
        switch(action.type) {
            case 'add_todo_success':
                if(filter == 'completed') {
                    return state;
                }
                return [...state, action.response.id];
            case 'fetch_todos_success':
                if (filter !== action.filter) {
                    return state
                };
                return action.response.map((todo) => todo.id)
            case 'toggle_todo_success': 
                let shoudRemove = (filter == 'completed' && action.response.active) ||
                    (filter == 'active' && !action.response.active);
                    console.log(shoudRemove)
                // if(shoudRemove){
                //     return state.filter(id => id !== action.response.id)
                // }
                return shoudRemove ? state.filter(id => id !== action.response.id) : state;
            default:
                return state; 
        }
    }

    const isFetching = (state=false, action) => {
        switch(action.type) {
            case 'fetch_todos_success':
                return false;
            case 'fetch_todos_request':
                return true;
            default:
                return state; 
        }
    }
    const errorMessage = (state="", action) => {
        switch(action.type) {
            case 'fetch_todos_success':
            case 'fetch_todos_request':
                return '';
            case 'fetch_todos_failure':
                return action.message;
            default:
                return state; 
        }
    }
    return combineReducers({
        ids,
        isFetching,
        errorMessage,
    })
}



export default createList;

export const getIsFetching = (state) => state.isFetching;
export const getIds = (state) => state.ids;
export const getErrorMessage = (state) => state.errorMessage;