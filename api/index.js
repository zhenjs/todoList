

import {v4} from 'node-uuid'

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}


const mockData = [{
    text: 'mango',
    id: v4(),
    active: true,
},
{
    text: 'mango',
    id: v4(),
    active: true,
},
{
    text: 'mango',
    id: v4(),
    active: false,
},
{
    text: 'mango',
    id: v4(),
    active: true,
},
{
    text: 'mango',
    id: v4(),
    active: true,
}];

export const fetchTodos = (visibleFilter) => {
    
    return delay(1000).then((todos) => {
        // if (Math.random() < 0.5) {
        //     throw new Error('blood boom')
        // }
        switch(visibleFilter) {
		case 'all':
			return mockData;
		case 'completed':
			return mockData.filter((todo) => {
				return !todo.active
			});
		case 'active':
		return mockData.filter((todo) => {
			return todo.active
		})
		default: 
			return new Error('unknow filter')
	    }
    })
}
export const addTodo = (text) => {
    return delay(1000).then(() => {
        const todo = {
            text: text,
            id: v4(),
            active: true
        }
        mockData.push(todo)
        return todo;
    })
}
export const toggleTodo = (id) => {
    return delay(1000).then(() => {
        const todo = mockData.find(todo => todo.id == id)
        todo.active = !todo.active;
        return todo;
    })
}
