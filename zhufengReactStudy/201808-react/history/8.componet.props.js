import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
class Person extends Component {
  constructor() {
    super()
    //为组件增加一个初始的状态 默认为true
    this.state = { happy: true }
    this.handleChange = this.handleChange.bind(this)
  }
  //默认属性对象
  static defaultProps = {
    name: 'No Name'
  }
  //如果定义组件的时候希望传入组件的属性有类型和是否必填的限制
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
  }
  handleChange() {
    this.setState({
      happy: !this.state.happy
    })
  }
  render() {
    let heart = this.state.happy ? 'happy' : 'unhappy'
    return (
      <div>
        <p>
          Name:
          {this.props.name}
        </p>
        <p>
          心情:
          {heart}
        </p>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}

render(<Person name={'Junyi'} age={18} />, window.app)
