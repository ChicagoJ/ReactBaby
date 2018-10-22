import { createStore } from './redux'
import combineReducers from './combineReducers'
/**
 * old state:{number:0}, {list:[]}
 * new state: {counter:{number:0}, todo:{list:[]}}
 */
import counter from './reducers/counter'
import todo from './reducers/todo'

let reducer = combineReducers({ counter: counter, todo: todo })
let store = createStore(reducer)
export { store }
