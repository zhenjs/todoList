
import {v4} from 'node-uuid';
import * as api from '../api/'

// export const addTodo = (val) => {
//     return {
//         type: 'add_todo',
//         text: val,
//         id: v4()
// 	}
// }
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
const addTodoSuccess = (response) => ({
    type: 'add_todo_success',
    response
})
export const addTodo = (text) => {
    return (dispatch, getState) => {
        api.addTodo(text).then((response) => {
            dispatch(addTodoSuccess(response));
        })    
    }
}
const toggleTodoSuccess = (response) => ({
    type: 'toggle_todo_success',
    response
})
export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        api.toggleTodo(id).then((response) => {
            dispatch(toggleTodoSuccess(response))
        })
    }
}