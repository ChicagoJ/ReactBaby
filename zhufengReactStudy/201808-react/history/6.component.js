import React from 'react'
import ReactDOM, { render } from 'react-dom'

/**
 * 组件的两种定义方式， 以及他们之间的区别
 * 1.组件定义的第一种方式是函数, 参数是属性对象
 * {msg:'hello', id:'5'}
 * 2.
 */

let Message = props => {
  return <h1>{props.msg}</h1>
}
//结构重组
// let Message = ({msg,id}) => {
//     return <h1>{msg}</h1>
// }
render(<Message msg={'hello'} id={'5'} />, window.app)
