

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
        throw new Error('blood boom')
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