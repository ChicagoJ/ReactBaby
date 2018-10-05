import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
/**
 * 受控组件 受状态控制
 * 非受控组件
 */
class Input extends Component {
  constructor() {
    super()
    this.state = {
      val: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    let val = event.target.value
    this.setState({
      val
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.val}</p>
        <input
          onChange={this.handleChange}
          type="text"
          value={this.state.val}
        />
      </div>
    )
  }
  static propTypes = {
    val: PropTypes.string
  }
}

render(<Input />, window.app)
