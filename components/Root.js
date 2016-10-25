
import {Provider} from 'react-redux';
import React from 'react';
import App from './App.js';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
const Root = ({store}) => (
    <Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/(:filter)" component={App}/>
			</Router>
	</Provider>
) 

export default Root;