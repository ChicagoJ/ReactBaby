import React, { Component } from 'react'
import { createStore } from 'redux'
let reducer = (state = { numer: 0 }, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 }
    case 'SUB':
      return { number: state.number - 1 }
    default:
      return state
  }
}
let store = createStore(reducer)
console.log(store.getState())

class Counter1 extends Component {
  render() {
    return <div />
  }
}

export default Counter1
