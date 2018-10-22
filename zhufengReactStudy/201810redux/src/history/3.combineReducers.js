import React from 'react'
import Counter from './components/Counter'
import Todo from './components/Todo'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <div>
    <Counter />
    <Todo />
  </div>,
  document.querySelector('#root')
)
