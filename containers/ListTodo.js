import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux'

class ListTodo extends Component {
	// componentDidMount () {
	// 	const store = this.context.store;
	// 	this.unsubscribe = store.subscribe(() => {
	// 		this.forceUpdate()
	// 	})

	// }
	// componentWillUnmount () {
	// 	this.unsubscribe
	// }
	render () {
		
		
		
		return (
			<ul>
				{this.props.todos.map((todo,key) => {
					let styles = {}
					if(!todo.active) {
						styles = {
							textDecoration: 'line-through'
						}
					}
					return <li key={key} style={styles}onClick={() => {
						this.props.onClickTodo(todo.id)
					}}>{todo.text} </li>
				})}
			</ul>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos.filter((todo) => {
			if (state.visibleFilter == 'completed') {
				return !todo.active
			}
			if (state.visibleFilter == 'active') {
				return todo.active
			}
			return true
		})
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onClickTodo: (id) => {
							dispatch({
								type: 'toggle_todo',
								id: id
							})
						}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ListTodo);