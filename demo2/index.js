import {createStore, combineReducers} from 'redux'
import React,{Component} from 'react'
import ReactDom from 'react-dom'
import AddTodo from '../component/AddTodo.js'
import ListTodo from '../component/ListTodo.js'
import Footer from '../component/Footer.js'
let gid = 0;
const todos = (state=[], action) => {
	switch(action.type) {
		case 'add_todo':
			return [...state, ...[{
				text: action.text,
				id: gid++,
				active: true,

			}]]
		case 'toggle_todo':
			return state.map((todo) => {
			 	if(todo.id == action.id) {
					return Object.assign({}, todo, {
						active: !todo.active
					})
				}
				return todo;
			})
		default:
			return state
	}
}
const visibleFilter = (state='show_all', action) => {
	switch(action.type) {
		case 'set_filter':
			return action.filter;
		default:
			return state;
	}
}

const visibleTodos = combineReducers({todos, visibleFilter})
var store = createStore(visibleTodos)
class TodoApp extends Component {
	render() {
		const {dispatch, getState} = store;
		const state = getState();
		let {todos, visibleFilter} = state;
		todos = todos.filter((todo) => {
			if (visibleFilter == 'completed') {
				return !todo.active
			}
			if (visibleFilter == 'active') {
				return todo.active
			}
			return true
		})
		
		return (
			<div>
				<AddTodo 
					onClick={(val) => {
						store.dispatch({
							type: 'add_todo',
							text: val
						})
					}}/>
				<ListTodo
					todos={todos}
					onClickTodo={(id) => {
							store.dispatch({
								type: 'toggle_todo',
								id: id
							})
						}
					}/>
				<Footer
				 visibleFilter={visibleFilter}
				 onClickFooter={(v1) => {
					store.dispatch({
						type: 'set_filter',
						filter: v1
					})
				}}/>
			</div>
		)
	}

}
const render = () => {
	ReactDom.render(
		<TodoApp/>,
		document.getElementById('root')
	)
}
render()
store.subscribe(() => {
	render()
})
// const reducer = (state='asdf',action) => {

// }
// const reducer2 = (state='asdfsdf',action) => {

// }
// const mix = combineReducers({reducer, reducer2})
// const store = createStore(mix).getState();
// const {reducer, reducer2} = store
// console.log(reducer)
