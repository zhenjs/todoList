
import {Provider} from 'react-redux'
import React from 'react';
const Root = ({store}) => (
    <Provider store={store}>
			<TodoApp/>
	</Provider>
) 

export default Root;