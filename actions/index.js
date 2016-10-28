
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
        type: 'fetch_todos_success',
        response,
        filter,
    }
}
const requestTodo = () => ({
     type: 'fetch_todos_request'
})
const fetchTodosFailure = (message) => ({
     type: 'fetch_todos_failure',
     message
})
export const fetchTodos = (filter) => {
    return (dispatch) => {
        dispatch(requestTodo());
        api.fetchTodos(filter).then((response) => {
            dispatch(receiveTodo(response, filter));
        },(error) => {
            dispatch(fetchTodosFailure(error.message || 'some error happen'));
        })
    }
}