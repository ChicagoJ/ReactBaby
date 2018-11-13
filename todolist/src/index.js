import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/TodoList.js'
import store from './store'
import { Provider } from 'react-redux'
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render(App, document.querySelector('#root'))
