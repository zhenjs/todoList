import {combineReducers} from 'redux';
const createList = (filter) => {
    const ids =  (state=[], action) => {
        if (filter !== action.filter) {
            return state
        };
        switch(action.type) {
            case 'add_todo':
                return [...state, action.id];
            case 'receive_todo':
                return action.response.map((todo) => todo.id)
            default:
                return state; 
        }
    }

    const isFetching = (state=false, action) => {
        switch(action.type) {
            case 'receive_todo':
                return false;
            case 'request_todo':
                return true;
            default:
                return state; 
        }
    }
    return combineReducers({
        ids,
        isFetching,
    })
}



export default createList;

export const getIsFetching = (state) => state.isFetching;
export const getIds = (state) => state.ids;