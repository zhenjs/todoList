import React,{Component} from 'react';
class FilterLink extends Component {
	render () {
		if(this.props.currentFilter == this.props.filter){
			return (
				<span>{this.props.children}</span>
			)
		}
		return(
			<a href="#" onClick={() => {
				this.props.onClick(this.props.filter)
			}}>{this.props.children}</a>
		)
	}
}
export default FilterLink