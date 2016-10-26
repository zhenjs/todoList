
import {v4} from 'node-uuid';
import * as api from '../api/'
export const toggleTodo = (id) => {
    return {
        type: 'toggle_todo',
        id: id
    }
}
export const addTodo = (val) => {
    return {
        type: 'add_todo',
        text: val,
        id: v4()
	}
}
const receiveTodo = (response, filter) => {
    return {
        type: 'receive_todo',
        response,
        filter,
    }
}
export const fetchTodos = (filter) => {
    return (dispatch) => {
        api.fetchTodos(filter).then((response) => {
            dispatch(receiveTodo(response));
        })
    }
}