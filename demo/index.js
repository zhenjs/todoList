

import ReactDom from 'react-dom'


import store from '../configureStore.js'
import Root from '../components/Root.js'
import React from 'react';







// class Provider extends Component {
// 	 getChildContext() {
// 	 	return {store: this.props.store}
// 	 }
// 	 render () {
// 	 	return (
// 	 		this.props.children
// 	 	)
// 	 }
// }
// Provider.childContextTypes = {
// 	store: React.PropTypes.object
// }

const render = () => {
	ReactDom.render(
		<Root store={store}/>,
		document.getElementById('root')
	)
}

render()
// store.subscribe(() => {
// 	render()
// })
// const reducer = (state='asdf',action) => {

// }
// const reducer2 = (state='asdfsdf',action) => {

// }
// const mix = combineReducers({reducer, reducer2})
// const store = createStore(mix).getState();
// const {reducer, reducer2} = store
// console.log(reducer)
