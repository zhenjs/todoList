import React,{Component} from 'react';
import ReactDom from 'react-dom';

class ListTodo extends Component {
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

export default ListTodo;