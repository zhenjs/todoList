import {createStore, combineReducers} from 'redux'
import React,{Component} from 'react'
import ReactDom from 'react-dom'
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
		const arr = todos.map((todo,key) => {
			let styles = {}
			if(!todo.active) {
				styles = {
					textDecoration: 'line-through'
				}
			}
			return <li key={key} style={styles}onClick={() => {
				store.dispatch({
					type: 'toggle_todo',
					id: todo.id
				})
			}}>{todo.text} </li>
		})
		return (
			<div>
				<input type='text' ref='input'/>
				<button onClick={() => {
					store.dispatch({
						type: 'add_todo',
						text: this.refs.input.value
					})
				}}>click</button>
				<ul>
					{arr}
				</ul>
				<div>
				{visibleFilter === 'show_all'? 
				<span>showAll{' '}</span> :
				<a href="#" onClick={() => {
					store.dispatch({
						type: 'set_filter',
						filter: 'show_all'
					})
				}}>showAll{' '}</a>}
				{visibleFilter === 'active'? 
				<span>Active{' '}</span> :
				<a href="#" onClick={() => {
					store.dispatch({
						type: 'set_filter',
						filter: 'active'
					})
				}}>Active{' '}</a>}
				{visibleFilter === 'completed'? 
				<span>Completed</span> :
				<a href="#" onClick={() => {
					store.dispatch({
						type: 'set_filter',
						filter: 'completed'
					})
				}}>Completed</a>}
					
					
				</div>
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
