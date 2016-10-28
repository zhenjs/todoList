import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../reducers/';
import {toggleTodo, receiveTodo, fetchTodos} from '../actions/';
import ErrorTip from '../components/ErrorTip'
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
	componentDidMount () {
		this.fetchData()
		
	}
	componentDidUpdate(prevProps) {
		if(prevProps.filter !== this.props.filter) {
			this.fetchData()
		}
		console.log(prevProps.filter + '----' + this.props.filter)
	}
	fetchData () {
		// fetchTodos(this.props.filter).then((response) => {
		// 	this.props.onReceiveTodos(response, this.props.filter )
		// })
		this.props.onfetchTodos(this.props.filter)
	}
	render () {
		 console.log(this.props)
		 const {todos, isFetching, errorMessage} = this.props;
		 if (isFetching && todos.length <= 0) {
			 return <div>
			 	Loading.....
			 </div>
		 }
		 if(errorMessage && todo.length <=0) {
			 alert(1)
			 return <ErrorTip 
			 message={errorMessage}
			 onRetry={() => {
				 this.fetchData();
			 }}/>
		 }
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
						this.props.onClickTodo(todo.id)
					}}>{todo.text} </li>
				})}
			</ul>

		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const filter =  ownProps.params.filter || 'all';
	return {
		todos: getVisibleTodos(state, filter),
		isFetching: getIsFetching(state, filter),
		errorMessage: getErrorMessage(state, filter).
		filter,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onClickTodo: (id) => {
			dispatch(toggleTodo(id))
		},
		onReceiveTodos: (response, filter) => {
			dispatch(receiveTodo(response))
		},
		onfetchTodos: (filter) => {
			dispatch(fetchTodos(filter))
		}
	}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ListTodo));