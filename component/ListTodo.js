import React,{Component} from 'react';
import ReactDom from 'react-dom';

class ListTodo extends Component {
	componentDidMount () {
		const store = this.context.store;
		this.unsubscribe = store.subscribe(() => {
			this.forceUpdate()
		})

	}
	componentWillUnmount () {
		this.unsubscribe
	}
	render () {
		const store = this.context.store;
		const state = store.getState()
		let {todos, visibleFilter} = state
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
			<ul>
					{todos.map((todo,key) => {
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
						}
					}>{todo.text} </li>
					})}
				</ul>

		)
	}
}
					
ListTodo.contextTypes = {
	store: React.PropTypes.object
}
export default ListTodo;