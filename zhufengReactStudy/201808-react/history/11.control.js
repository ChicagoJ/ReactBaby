import React, { Component } from 'react'
import { render } from 'react-dom'

// class Sum extends Component {
//   constructor() {
//     super()
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange() {
//     let a = parseInt(this.refs.a.value || 0)
//     let b = parseInt(this.refs.b.value || 0)
//     this.refs.result.value = a + b
//   }
//   render() {
//     return (
//       <div onChange={this.handleChange}>
//         <input ref="a" type="text" /> +<input ref="b" type="text" /> =
//         <input ref="result" type="text" />
//       </div>
//     )
//   }
// }
class Sum extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    let a = parseInt(this.a.value || 0)
    let b = parseInt(this.b.value || 0)
    this.result.value = a + b
  }
  render() {
    //ref等于一个函数，表示当元素被挂载到页面中之后会立即调用此函数，并传入渲染后的DOM元素
    return (
      <div onChange={this.handleChange}>
        <input ref={ref => (this.a = ref)} type="text" /> +
        <input ref={ref => (this.b = ref)} type="text" /> =
        <input ref={ref => (this.result = ref)} type="text" />
      </div>
    )
  }
}
render(<Sum />, window.app)
