import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter2'
import { createStore } from './redux'
import counter from './reducers/counter'
import Provider from './components/Provider'
let store = createStore(counter)

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
)
