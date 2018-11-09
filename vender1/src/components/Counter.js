import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
  }
  handleClick = event => {
    if (event.target.value === 'ADD') {
      this.setState({
        number: this.state.number + 1
      })
    } else if (event.target.value === 'SUB')
      this.setState({
        number: this.state.number - 1
      })
  }
  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={this.handleClick} value="ADD">
          +
        </button>
        <button onClick={this.handleClick} value="SUB">
          -
        </button>
      </div>
    )
  }
}

export default Counter
