import { createStore } from './redux'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case INCREASE:
      return { number: state.number + action.amount }
    case DECREASE:
      return { number: state.number - action.amount }
    default:
      return state
  }
}
let store = createStore(reducer)

class Counter extends Component {
  state = {}
  render() {
    return (
      <div>
        <p>{store.getState().number}</p>
        <button
          onClick={() => {
            store.dispatch({ type: INCREASE, amount: 1 })
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: DECREASE, amount: 1 })
          }}
        >
          -
        </button>
      </div>
    )
  }
}

let render = () => {
  ReactDOM.render(<Counter />, document.querySelector('#root'))
}
render()
store.subscribe(render)