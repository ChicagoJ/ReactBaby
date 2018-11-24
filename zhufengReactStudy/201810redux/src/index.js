import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter2'
import store from './store2'
import Provider from './components/Provider'
// import Todo from './components/Todo'
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,

  document.querySelector('#root')
)
