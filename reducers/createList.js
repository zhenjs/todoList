import {combineReducers} from 'redux';
const createList = (filter) => {
    const ids =  (state=[], action) => {
        if (filter !== action.filter) {
            return state
        };
        switch(action.type) {
            case 'add_todo':
                return [...state, action.id];
            case 'receive_todos_success':
                return action.response.map((todo) => todo.id)
            default:
                return state; 
        }
    }

    const isFetching = (state=false, action) => {
        switch(action.type) {
            case 'receive_todos_success':
                return false;
            case 'request_todos_request':
                return true;
            default:
                return state; 
        }
    }
    const errorMessage = (state="", action) => {
        switch(action.type) {
            case 'receive_todos_success':
            case 'request_todos_request':
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