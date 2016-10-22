import React,{Component} from 'react'
import AddTodo from '../containers/AddTodo.js'
import ListTodo from '../containers/ListTodo.js'
import Footer from '../containers/Footer.js'

class App extends Component {
	render() {
		return (
			<div>
				<AddTodo/>
				<ListTodo/>
				<Footer/>
			</div>
		)
	}

}
export default App;