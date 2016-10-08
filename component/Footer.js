import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';

class Footer extends Component {

	render () {
		return (
			<div>
				{this.props.visibleFilter === 'show_all'? 
				<span>showAll{' '}</span> :
				<a href="#" onClick={() => {
					this.props.onClickFooter('show_all')
				}}>showAll{' '}</a>}
				{this.props.visibleFilter === 'active'? 
				<span>Active{' '}</span> :
				<a href="#"  onClick={() => {
					this.props.onClickFooter('active')
				}}>Active{' '}</a>}
				{this.props.visibleFilter === 'completed'? 
				<span>Completed</span> :
				<a href="#"  onClick={() => {
					this.props.onClickFooter('completed')
				}}>Completed</a>}
					
					
				</div>

		)
	}
}
const mapStateToProps = (state) => {
	return {
		visibleFilter: state.visibleFilter
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onClickFooter: (filter) => {
			dispatch({
				type: 'set_filter',
				filter: filter
			})
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Footer);