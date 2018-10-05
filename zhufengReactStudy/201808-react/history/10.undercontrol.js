import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class Sum extends Component {
  constructor() {
    super()
    this.state = {
      a: 0,
      b: 0,
      result: 0
    }
    this.handleChangeA = this.handleChangeA.bind(this)
    this.handleChangeB = this.handleChangeB.bind(this)
  }
  handleChangeA(event) {
    this.setState({
      a: parseInt(event.target.value),
      result: parseInt(event.target.value) + this.state.b
    })
  }
  handleChangeB(event) {
    this.setState({
      b: parseInt(event.target.value),
      result: parseInt(event.target.value) + this.state.a
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChangeA} type="text" value={this.state.a} />{' '}
        +
        <input onChange={this.handleChangeB} type="text" value={this.state.b} />{' '}
        = {this.state.result}
      </div>
    )
  }
}

render(<Sum />, window.app)
