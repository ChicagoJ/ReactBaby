import React, { Component } from 'react'
import './Slider.css'
import SliderItems from './SliderItems'
import SliderArrows from './SliderArrows'
import SliderDots from './SliderDots'
class Slider extends Component {
  constructor() {
    super()
    //通过修改此index值就可以改变ul的left值
    this.state = { index: 0 }
  }
  //传入步长得到新的index值
  turn = step => {
    let index = this.state.index + step
    if (index < 0) index = this.props.items.length - 1
    if (index > this.props.items.length) {
      this.$slider.style.left = 0
      this.$slider.style.transitionDuration = '0s'
      setTimeout(() => {
        index = 1
        this.$slider.style.transitionDuration = this.props.speed + 's'
        this.setState({ index })
      }, 0)
      return
    }
    this.setState({ index })
  }
  componentDidMount() {
    this.$slider = document.querySelector('.sliders')
    //如果自动轮播为true，开启自动轮播
    if (this.props.auto) {
      this.go()
    }
  }
  //启动自动轮播
  go = () => {
    this.$timer = setInterval(() => {
      this.turn(1)
    }, this.props.delay * 1000)
  }

  render() {
    let style = {
      width: (this.props.items.length + 1) * 500,
      left: this.state.index * -500,
      transitionDuration: this.props.speed + 's'
    }
    return (
      <div
        onMouseOver={() => clearInterval(this.$timer)}
        onMouseOut={() => this.go()}
        className="slider-wrapper"
      >
        <SliderItems items={this.props.items} style={style} />
        <SliderArrows turn={this.turn} />
        <SliderDots
          items={this.props.items}
          turn={this.turn}
          index={this.state.index}
        />
      </div>
    )
  }
}

export default Slider
