
import React,{Component} from 'react'
import ReactDom from 'react-dom'
import AddTodo from '../containers/AddTodo.js'
import ListTodo from '../containers/ListTodo.js'
import Footer from '../containers/Footer.js'
import {Provider} from 'react-redux'

import store from '../configureStore.js'








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
