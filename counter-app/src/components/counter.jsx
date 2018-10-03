import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 1,
    formatCount: this.formatCount.bind(this)
  }
  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    )
  }
}

export default Counter
