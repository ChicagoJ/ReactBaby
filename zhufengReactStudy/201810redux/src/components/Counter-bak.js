import React, { Component } from 'react'
import { createStore } from '../redux'
import counter from '../reducers/counter'
let store = createStore(counter)
class Counter2 extends Component {
  constructor() {
    super()
    this.state = {
      number: store.getState().number
    }
  }
  componentWillMount() {
    this.unSubscribe = store.subscribe(() =>
      this.setState({ number: store.getState().number })
    )
  }

  componentWillUnmount() {
    this.unSubscribe()
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default Counter2
