import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {addTodo} from '../actions/'
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
const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (val) => {
					dispatch(addTodo(val))
				}
	}
}
export default connect(null, mapDispatchToProps)(AddTodo);

