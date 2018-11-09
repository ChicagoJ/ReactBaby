import React, { Component } from 'react'
import { createStore } from 'redux'
import { ADD, SUB } from '../actions'
import counter from '../reducers/counter'
let store = createStore(counter)

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      number: store.getState().number
    }
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() =>
      this.setState({ number: store.getState().number })
    )
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  increase = amount => ({
    type: ADD,
    amount
  })
  decrease = amount => ({
    type: SUB,
    amount
  })
  render() {
    return (
      <div>
        <h1>{this.state.number} </h1>
        <button onClick={() => store.dispatch(this.increase(3))}>+</button>
        <button onClick={() => store.dispatch(this.decrease(2))}>-</button>
      </div>
    )
  }
}

export default Counter
