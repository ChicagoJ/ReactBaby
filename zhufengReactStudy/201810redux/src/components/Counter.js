import React, { Component } from 'react'
import { store } from '../store'
import { INCREASE, DECREASE } from '../actions'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      number: store.getState().counter.number
    }
  }
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter.number })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  increase = amount => ({ type: INCREASE, amount })
  decrease = amount => ({ type: DECREASE, amount })

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button
          onClick={() => {
            store.dispatch(this.increase(2))
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            store.dispatch(this.decrease(1))
          }}
        >
          -
        </button>
      </div>
    )
  }
}

export default Counter
