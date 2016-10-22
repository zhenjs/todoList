

const visibleFilter = (state='show_all', action) => {
	switch(action.type) {
		case 'set_filter':
			return action.filter;
		default:
			return state;
	}
}
export default visibleFilter;