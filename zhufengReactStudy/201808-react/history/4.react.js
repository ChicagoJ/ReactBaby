import React from 'react'
import ReactDOM from 'react-dom'
//React 是由 React元素 React组件 构成
/**
 * 1.首字母小写， 凡是首字母小写的都会被认为是React元素
 */
ReactDOM.render(
  <div>
    <span className="red" style={{ backgroundColor: 'green' }}>
      hello
    </span>
  </div>,
  document.querySelector('#root')
)
