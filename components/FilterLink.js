import React,{Component} from 'react';
import {Link} from 'react-router';
const FilterLink = ({children, filter}) => (
	<Link
		to= {filter=='all' ? '' : filter}
		activeStyle={{
			color: '#000',
			textDecoration: 'none',
		}}
	>{children}</Link>
)
export default FilterLink