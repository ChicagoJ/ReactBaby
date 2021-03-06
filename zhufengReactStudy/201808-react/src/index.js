import React, { Component } from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Slider from './components/Slider'
import Suggest from './components-1/1.Suggest'

let IMAGE_DATA = [
  { src: require('./images/1.jpg') },
  { src: require('./images/2.jpg') },
  { src: require('./images/3.jpg') }
]
/**
 * speed 图片的轮播速度
 * delay 延迟时间，多长时间轮播一次
 * pause 暂停，如果它为true，当鼠标划过的时候自动停止轮播
 * auto 当页面加载完成后，自动开始轮播
 * dots 是显示点状导航
 * arrows 是否显示左右的箭头导航
 */

render(
  <Slider
    items={IMAGE_DATA}
    speed={1.2}
    delay={2.1}
    pause={true}
    auto={true}
    dot={true}
    arrows={true}
  />,
  document.querySelector('#root')
)
// render(<Suggest />, window.app)
