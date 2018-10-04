import React, { Component } from 'react'
import { render } from 'react-dom'
//计时器 Clock
//函数方式声明的组件是静态的stateless，是不能动的
//通过类来声明组件 类需要继承自Component
class Clock extends Component {
  constructor() {
    super()
    //自定义组件状态
    this.state = { time: new Date().toLocaleString() }
  }
  //生命周期函数
  componentDidMount() {
    //每隔一秒钟会重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法进行重新渲染
    window.setInterval(() => {
      this.setState({
        time: new Date().toLocaleString()
      })
    }, 1000)
  }
  // render 方法指的是该组件将要如何渲染，一定要返回一个React元素，而且只能返回一个React元素
  render() {
    return <h1>{this.state.time}</h1>
  }
}

render(<Clock />, window.app)
