import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
const getVisibleTodos = (todos, visibleFilter) => {
	switch(visibleFilter) {
		case 'all':
			return todos;
		case 'completed':
			return todos.filter((todo) => {
				return !todo.active
			});
		case 'active':
		return todos.filter((todo) => {
			return todo.active
		})
		default: 
			return new Error('unknow filter')
	}
}
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

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps.params.filter)
	return {
		todos: getVisibleTodos(state.todos, ownProps.params.filter || 'all')
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
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ListTodo));