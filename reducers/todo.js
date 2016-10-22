

const todos = (state=[], action) => {
	switch(action.type) {
		case 'add_todo':
			return [...state, ...[{
				text: action.text,
				id: Math.random(),
				active: true,

			}]]
		case 'toggle_todo':
			return state.map((todo) => {
			 	if(todo.id == action.id) {
					return Object.assign({}, todo, {
						active: !todo.active
					})
				}
				return todo;
			})
		default:
			return state
	}
}
export default todos;