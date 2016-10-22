import {createStore, combineReducers} from 'redux'
import React,{Component} from 'react'
import ReactDom from 'react-dom'
import AddTodo from '../containers/AddTodo.js'
import ListTodo from '../containers/ListTodo.js'
import Footer from '../containers/Footer.js'
import {Provider} from 'react-redux'
import {saveState, getState} from '../localStorage.js'
const todos = (state=[], action) => {
	switch(action.type) {
		case 'add_todo':
			return [...state, ...[{
				text: action.text,
				id: Math.random(),
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

const visibleTodos = combineReducers({todos, visibleFilter});
var mockState = getState();
var store = createStore(visibleTodos, mockState)
console.log(store.getState())
store.subscribe(() => {
	saveState(store.getState())
})
class TodoApp extends Component {
	render() {
		const {dispatch, getState} = store;
		const state = getState();
		let {todos, visibleFilter} = state;
		
		return (
			<div>
				<AddTodo/>
				<ListTodo/>
				<Footer/>
			</div>
		)
	}

}
// class Provider extends Component {
// 	 getChildContext() {
// 	 	return {store: this.props.store}
// 	 }
// 	 render () {
// 	 	return (
// 	 		this.props.children
// 	 	)
// 	 }
// }
// Provider.childContextTypes = {
// 	store: React.PropTypes.object
// }

const render = () => {
	ReactDom.render(
		<Provider store={store}>
			<TodoApp/>
		</Provider>,
		document.getElementById('root')
	)
}

render()
// store.subscribe(() => {
// 	render()
// })
// const reducer = (state='asdf',action) => {

// }
// const reducer2 = (state='asdfsdf',action) => {

// }
// const mix = combineReducers({reducer, reducer2})
// const store = createStore(mix).getState();
// const {reducer, reducer2} = store
// console.log(reducer)
