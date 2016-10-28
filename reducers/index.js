import {combineReducers} from 'redux';
import byId, * as fromById from './byId.js'
import createList, * as fromList from './createList.js'
console.log(createList)
const idsByFilter = combineReducers({
    all: createList('all'),
    completed: createList('completed'),
    active: createList('active')
})
export default combineReducers({
                    byId,
                    idsByFilter
                });
                
export const getVisibleTodos = (state, filter) => {
    console.log(state)
    return fromList.getIds(state.idsByFilter[filter]).map(id => fromById.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) => {
    return fromList.getIsFetching(state.idsByFilter[filter])
}
