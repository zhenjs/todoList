import React,{Component} from 'react';
import ReactDom from 'react-dom';

class AddTodo extends Component {
	render () {
		return (
			<div>
				<input type='text' ref='input'/>
				<button 
					onClick = {() => {
						this.props.onClick(this.refs.input.value)
					}}
				>click</button>
			</div>

		)
	}
}

export default AddTodo;

