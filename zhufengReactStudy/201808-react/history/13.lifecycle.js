import React, { Component } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

/**
 * 1.组件的完整生命周期
 * 2.一些代码的编写顺序
 */

class Counter extends Component {
  constructor() {
    console.log('0 - constructor 初始化数据')
    super()
    this.state = {
      num: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    console.log('1 - componentWillMount 组件将要挂载')
  }
  componentDidMount() {
    console.log('3 - componentDidMount 组件完成挂载')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('4 - shouldComponentUpdate 组件更新是否需要重新render')
    if (newState.num % 5 === 0) return true
    return false
  }
  componentWillUpdate(newProps, newState) {
    console.log('5 - componentWillUpdate', newProps, newState)
  }

  componentDidUpdate(preProps, preState) {
    console.log('6 - componentDidUpdate', preProps, preState)
  }

  handleClick() {
    //setState方法是异步的，所以不能在赋值之后立即获取最新的state值，可以在callback里获取新的状态值
    this.setState(
      {
        num: this.state.num + 1
      },
      () => {
        console.log(this.state.num)
      }
    )
    // console.log(this.state.num)
  }
  render() {
    console.log('2 - render 页面渲染')

    return (
      <div style={{ border: '1px solid red', padding: 5 }}>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>+</button>
        <SubCounter num={this.state.num} />
      </div>
    )
  }
}
//子计数器
class SubCounter extends Component {
  //组件将要接收到新的属性对象
  componentWillReceiveProps(newProps, newState) {
    console.log('SubCounter componentWillReceiveProps')
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('SubCounter shouldCOmponentUpdate')
    if (newProps.num % 3 === 0) return true
    return false
  }
  render() {
    return (
      <div style={{ border: '1px solid blue' }}>
        <p>{this.props.num}</p>
      </div>
    )
  }
}

render(<Counter />, window.app)
