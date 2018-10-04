import React from 'react'
// import ReactDOM from 'react-dom'
//申明一个React元素
let ele = <h1>hello</h1>
console.log(ele)
//1. 标签类型 属性对象 子元素
//1. 此处写得属性名都要转成驼峰命名法 backgroundColor
//2. 有些属性是JS关键字，要换种写法class => className, for => htmlFor
let _ele2 = React.createElement('div', { id: 1, className: 'red' }, ['hello'])
// let _ele2 = (
//   <div>
//     <span>hello</span>
//   </div>
// )
console.log(_ele2)
let eleObj = {
  type: 'div',
  props: {
    className: 'red',
    id: 1,
    children: [
      'hello',
      {
        type: 'span',
        props: {
          className: 'blue',
          children: ['world']
        }
      }
    ]
  }
}
function render(eleObj, container) {
  //解构出标签的属性对象
  let { type, props } = eleObj
  //创建一个DOm元素
  let ele = document.createElement(type)
  //循环属性对象
  for (let attr in props) {
    if (attr === 'children') {
      props[attr].forEach(function(item) {
        if (typeof item === 'string') {
          let textNode = document.createTextNode(item)
          ele.appendChild(textNode)
        } else {
          render(item, ele)
        }
      })
    } else if (attr === 'className') {
      ele.setAttribute('class', props[attr])
    } else {
      ele.setAttribute(attr, props[attr])
    }
  }
  container.appendChild(ele)
}

// ReactDOM.render(_ele2, document.querySelector('#root'))
render(eleObj, document.querySelector('#root'))
