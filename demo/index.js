import {createStore} from 'redux';
import React from 'react';
import ReactDom from 'react-dom';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'Increase':
			return state + 1;
		case 'Decrease':
			return state - 1;
		default:
			return state
	}
}
// const createStore = (reducer) => {
// 	let state;
// 	let arr = [];
// 	const getState = () => {
// 		return state
// 	}
// 	const dispatch = (action) => {
// 		state = reducer(getState(), action);
// 		arr.map(function (cb) {
// 			cb(getState())
// 		})
// 	}
// 	const subscribe = (cb) => {
// 		arr.push(cb)
// 	}


// 	return {
// 		getState,
// 		dispatch,
// 		subscribe,
// 	}
// }

const store = createStore(reducer);

const Counter = () => {
	const {getState, dispatch} = store
	const Increase = () => {
		dispatch({
			type: 'Increase'
		})
	}
	const Decrease = () => {
		dispatch({
			type: 'Decrease'
		})
	}
	return (
		<div>
			<h1>{getState()}</h1>
			<button onClick={Increase}>+</button>
			<button onClick={Decrease}>-</button>
		</div>

	)
}
const render = () => {
	ReactDom.render(
		<Counter/>,
		document.getElementById('root')
	)
}

store.subscribe(() => {
	render()
})
render()


