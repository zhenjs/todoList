import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import FilterLink from '../components/FilterLink.js'

class Footer extends Component {

	render () {
		return (
			<div>
				<FilterLink 
					filter='show_all'
					currentFilter={this.props.visibleFilter}
					onClick={() => {
						this.props.onClickFooter('show_all')
					}}>
					Show all
				</FilterLink>
				{' '}
				<FilterLink 
					filter='completed'
					currentFilter={this.props.visibleFilter}
					onClick={() => {
						this.props.onClickFooter('completed')
					}}>
					Show completed
				</FilterLink>
				{' '}
				<FilterLink 
					filter='avtive'
					currentFilter={this.props.visibleFilter}
					onClick={() => {
						this.props.onClickFooter('active')
					}}>
					Show active
				</FilterLink>
				{' '}
					
					
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