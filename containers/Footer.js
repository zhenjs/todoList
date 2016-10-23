import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import FilterLink from '../components/FilterLink.js'

class Footer extends Component {

	render () {
		return (
			<div>
				<FilterLink 
					filter='all'>
					Show all
				</FilterLink>
				{' '}
				<FilterLink 
					filter='completed'>
					Show completed
				</FilterLink>
				{' '}
				<FilterLink 
					filter='active'>
					Show active
				</FilterLink>
				{' '}
					
					
			</div>

		)
	}
}
export default Footer;