import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Footer extends Component {
	
		componentDidMount () {
			const store = this.context.store;
			this.unsubscribe = store.subscribe(() => {
				this.forceUpdate()
			})

		}
	componentWillUnmount () {
		this.unsubscribe
	}
	render () {
		const store = this.context.store;
		const state = store.getState()
		let {todos, visibleFilter} = state
		return (
			<div>
				{visibleFilter === 'show_all'? 
				<span>showAll{' '}</span> :
				<a href="#" onClick={() => {
					store.dispatch({
						type: 'set_filter',
						filter: 'show_all'
					})
				}}>showAll{' '}</a>}
				{visibleFilter === 'active'? 
				<span>Active{' '}</span> :
				<a href="#" onClick={() => {
					store.dispatch({
						type: 'set_filter',
						filter: 'active'
					})
				}}>Active{' '}</a>}
				{visibleFilter === 'completed'? 
				<span>Completed</span> :
				<a href="#" onClick={() => {
					store.dispatch({
						type: 'set_filter',
						filter: 'completed'
					})
				}}>Completed</a>}
					
					
				</div>

		)
	}
}
Footer.contextTypes = {
	store: React.PropTypes.object
}
export default Footer;