import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Footer extends Component {
	render () {
		const {onClickFooter} = this.props
		return (
			<div>
				{this.props.visibleFilter === 'show_all'? 
				<span>showAll{' '}</span> :
				<a href="#" onClick={() => {
					onClickFooter('show_all')
				}}>showAll{' '}</a>}
				{this.props.visibleFilter === 'active'? 
				<span>Active{' '}</span> :
				<a href="#" onClick={() => {
					onClickFooter('active')
				}}>Active{' '}</a>}
				{this.props.visibleFilter === 'completed'? 
				<span>Completed</span> :
				<a href="#" onClick={() => {
					onClickFooter('completed')
				}}>Completed</a>}
					
					
				</div>

		)
	}
}

export default Footer;