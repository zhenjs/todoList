import {createStore, combineReducers} from 'redux'
import React,{Component} from 'react'
import ReactDom from 'react-dom'
import AddTodo from '../component/AddTodo.js'
import ListTodo from '../component/ListTodo.js'
import Footer from '../component/Footer.js'
import {Provider} from 'react-redux'

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
		
		return (
			<div>
				<AddTodo 
					onClick={(val) => {
						store.dispatch({
							type: 'add_todo',
							text: val
						})
					}}/>
				<ListTodo/>
				<Footer
				 visibleFilter={visibleFilter}/>
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
